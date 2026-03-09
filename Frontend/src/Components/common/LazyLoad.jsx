import { useState, useRef, useEffect } from 'react'

const LazyLoad = ({ children, fallback = <div className="h-64 bg-gray-100 animate-pulse"></div> }) => {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef()

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.1 }
    )

    if (ref.current) observer.observe(ref.current)

    return () => observer.disconnect()
  }, [])

  return <div ref={ref}>{isVisible ? children : fallback}</div>
}

export default LazyLoad
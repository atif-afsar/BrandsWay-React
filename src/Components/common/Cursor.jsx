import { useEffect, useRef } from 'react';

const Cursor = () => {
  const redCursorRef = useRef(null);
  const shadowCursorRef = useRef(null);
  const cursorPos = useRef({ x: 0, y: 0 });
  const redPos = useRef({ x: 0, y: 0 });
  const shadowPos = useRef({ x: 0, y: 0 });

  useEffect(() => {
    // Hide default cursor
    document.body.style.cursor = 'none';

    const handleMouseMove = (e) => {
      cursorPos.current = { x: e.clientX, y: e.clientY };
    };

    const animateCursor = () => {
      // Red cursor follows faster
      redPos.current.x += (cursorPos.current.x - redPos.current.x) * 0.2;
      redPos.current.y += (cursorPos.current.y - redPos.current.y) * 0.2;

      // Shadow cursor follows slower for trailing effect
      shadowPos.current.x += (cursorPos.current.x - shadowPos.current.x) * 0.1;
      shadowPos.current.y += (cursorPos.current.y - shadowPos.current.y) * 0.1;

      if (redCursorRef.current) {
        redCursorRef.current.style.transform = `translate(${redPos.current.x}px, ${redPos.current.y}px)`;
      }

      if (shadowCursorRef.current) {
        shadowCursorRef.current.style.transform = `translate(${shadowPos.current.x}px, ${shadowPos.current.y}px)`;
      }

      requestAnimationFrame(animateCursor);
    };

    window.addEventListener('mousemove', handleMouseMove);
    const animation = requestAnimationFrame(animateCursor);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animation);
      document.body.style.cursor = 'auto';
    };
  }, []);

  return (
    <>
      {/* Black shadow cursor (behind) */}
      <div
        ref={shadowCursorRef}
        style={{
          position: 'fixed',
          top: '-15px',
          left: '-15px',
          width: '30px',
          height: '30px',
          borderRadius: '50%',
          backgroundColor: '#000000',
          pointerEvents: 'none',
          zIndex: 9998,
          willChange: 'transform',
        }}
      />
      
      {/* Red cursor (on top) */}
      <div
        ref={redCursorRef}
        style={{
          position: 'fixed',
          top: '-12px',
          left: '-12px',
          width: '24px',
          height: '24px',
          borderRadius: '50%',
          backgroundColor: '#ef4444',
          pointerEvents: 'none',
          zIndex: 9999,
          willChange: 'transform',
        }}
      />
    </>
  );
};

export default Cursor;

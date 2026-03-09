import React, { useRef, lazy, Suspense } from "react";
import { Helmet } from "react-helmet-async";
import Hero from "../Components/Home/Hero";
import ServicesSection from "../Components/Home/Services";
const BestWorkSection = lazy(
  () => import("../Components/BestWork/BestWorkSection"),
);
import ResultsSection from "../Components/Home/Results";
import WhyChooseUs from "../Components/Home/WhyChooseUs";
import FAQSection from "../Components/Home/FAQs";
import CTASection from "../Components/Home/CTA";
import ProcessSection from "../Components/Home/Process";
import ScrollFillSection from "./ScrollFillSection";
import useInView from "../hooks/useInView";

const Home = () => {
  const bestWorkRef = useRef(null);
  const [bestWorkTriggerRef, bestWorkInView] = useInView();

  const scrollToBestWork = () => {
    bestWorkRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "BrandsWay",
    image: "https://thebrandsway.com/hero/bg2.jpg",
    "@id": "https://thebrandsway.com",
    url: "https://thebrandsway.com",
    telephone: "",
    address: {
      "@type": "PostalAddress",
      streetAddress: "",
      addressLocality: "Aligarh",
      addressRegion: "Uttar Pradesh",
      postalCode: "",
      addressCountry: "IN",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 27.8974,
      longitude: 78.088,
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ],
      opens: "10:00",
      closes: "07:00",
    },
    sameAs: [
      "https://www.facebook.com/Thebrandsway",
      "https://www.instagram.com/thebrandsway/",
      "https://www.linkedin.com/company/the-brandsway/",
      "https://x.com/BrandsWay00/",
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Digital Marketing & Creative Services",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "PR (Public Relations)",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Social Media Marketing",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Digital Marketing",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Influencer Marketing",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Web Development",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Content Creation",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Graphic Designing",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "SEO Services",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Email Marketing",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "App Development",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Payment Solutions",
          },
        },
      ],
    },
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What services does BrandsWay offer?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "BrandsWay offers a comprehensive range of digital marketing and creative services, including PR (Public Relations), Social Media Marketing, Digital Marketing, Influencer Marketing, Web Development, Content Creation, Graphic Designing, SEO Services, Email Marketing, App Development, and Payment Solutions.",
        },
      },
      {
        "@type": "Question",
        name: "What makes BrandsWay the best marketing agency in Aligarh?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "BrandsWay is the leading marketing agency in Aligarh due to our revenue-first approach, custom-tailored strategies, and deep expertise in Google Ads, Meta Ads, and SEO. We focus on measurable success metrics like ROI and ROAS to scale brands aggressively.",
        },
      },
      {
        "@type": "Question",
        name: "Do you offer social media marketing services?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, we offer strategic social media marketing and management services to grow your community across all platforms, including Meta Ads (Facebook & Instagram) and influencer collaborations.",
        },
      },
      {
        "@type": "Question",
        name: "How long does it take to see results?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Most campaigns show measurable data within 30 days, with performance compounding over the first 90 days.",
        },
      },
      {
        "@type": "Question",
        name: "Do you work with startups?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. We partner with both high-potential early-stage startups and established companies looking to scale aggressively.",
        },
      },
    ],
  };

  return (
    <div>
      <Helmet>
        <title>
          Best PR & Digital Marketing Company in Aligarh | BrandsWay
        </title>
        <meta
          name="description"
          content="BrandsWay is a top-rated digital marketing and PR agency in Aligarh. We specialize in social media marketing, SEO, and brand growth."
        />
        <meta
          name="keywords"
          content="Digital Marketing Agency in Aligarh, PR Agency in Aligarh, Social Media Marketing Company in Aligarh"
        />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://thebrandsway.com/" />
        <meta
          property="og:title"
          content="Digital Marketing Agency in Aligarh | BrandsWay"
        />
        <meta
          property="og:description"
          content="BrandsWay is a top-rated digital marketing and PR agency in Aligarh. We specialize in social media marketing, SEO, and brand growth."
        />
        <meta
          property="og:image"
          content="https://thebrandsway.com/hero/bg2.jpg"
        />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://thebrandsway.com/" />
        <meta
          property="twitter:title"
          content="Digital Marketing Agency in Aligarh | BrandsWay"
        />
        <meta
          property="twitter:description"
          content="BrandsWay is a top-rated digital marketing and PR agency in Aligarh. We specialize in social media marketing, SEO, and brand growth."
        />
        <meta
          property="twitter:image"
          content="https://thebrandsway.com/hero/bg2.jpg"
        />

        {/* Local Business Schema */}
        <script type="application/ld+json">
          {JSON.stringify(localBusinessSchema)}
        </script>

        {/* FAQ Schema */}
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      </Helmet>
      <Hero onSeeImpactClick={scrollToBestWork} />
      <ServicesSection />
      <ScrollFillSection />
      <ProcessSection />
      <div id="bestwork" ref={bestWorkRef}>
        <div ref={bestWorkTriggerRef}>
          {bestWorkInView && (
            <Suspense
              fallback={
                <div className="h-64 bg-gray-100 animate-pulse flex items-center justify-center">
                  Loading...
                </div>
              }
            >
              <BestWorkSection />
            </Suspense>
          )}
        </div>
      </div>
      <ResultsSection />
      <WhyChooseUs />
      <FAQSection />
      <CTASection />
    </div>
  );
};

export default Home;

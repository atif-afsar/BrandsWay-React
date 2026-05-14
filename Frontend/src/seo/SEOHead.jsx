import React, { memo } from "react";
import { Helmet } from "react-helmet-async";
import { SITE_ORIGIN, DEFAULT_OG_IMAGE, BUSINESS } from "./business.js";

/**
 * Centralized meta + canonical + OG/Twitter for crawl consistency.
 * Every route should set `canonicalPath` to the pathname (e.g. /contact-us).
 */
function SEOHeadComponent({
  title,
  description,
  canonicalPath,
  ogType = "website",
  ogImage = DEFAULT_OG_IMAGE,
  keywords,
  noindex = false,
  jsonLd = [],
  /** Optional override for ICBM (defaults to Aligarh office coordinates). */
  geoIcbm = null,
}) {
  const canonical = `${SITE_ORIGIN}${canonicalPath === "/" ? "/" : canonicalPath.replace(/\/$/, "") || "/"}`;
  const absoluteOg = ogImage?.startsWith("http") ? ogImage : `${SITE_ORIGIN}${ogImage}`;
  const icbm = geoIcbm ?? `${BUSINESS.geo.latitude}, ${BUSINESS.geo.longitude}`;

  return (
    <Helmet prioritizeSeoTags htmlAttributes={{ lang: "en-IN" }}>
      <title>{title}</title>
      <meta name="description" content={description} />
      {keywords ? <meta name="keywords" content={keywords} /> : null}
      <meta name="geo.region" content="IN-UP" />
      <meta name="geo.placename" content="Aligarh" />
      <meta name="ICBM" content={icbm} />      <link rel="canonical" href={canonical} />
      {noindex ? <meta name="robots" content="noindex, nofollow" /> : <meta name="robots" content="index, follow" />}

      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={canonical} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={absoluteOg} />
      <meta property="og:locale" content="en_IN" />
      <meta property="og:site_name" content="The BrandsWay" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={canonical} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={absoluteOg} />

      {jsonLd.map((obj, i) => (
        <script key={i} type="application/ld+json">
          {typeof obj === "string" ? obj : JSON.stringify(obj)}
        </script>
      ))}
    </Helmet>
  );
}

export const SEOHead = memo(SEOHeadComponent);

/**
 * Post-build sitemap generator — keeps public/sitemap.xml aligned with routes + blog slugs.
 * Run via: npm run build (see package.json postbuild hook).
 */
import { writeFileSync } from "fs";
import { dirname, join } from "path";
import { fileURLToPath } from "url";
import { STATIC_SITEMAP_PATHS, BLOG_SLUGS } from "../src/seo/sitemap-paths.js";

const SITE = "https://thebrandsway.com";
const __dirname = dirname(fileURLToPath(import.meta.url));
const outFile = join(__dirname, "..", "public", "sitemap.xml");
const lastmod = new Date().toISOString().slice(0, 10);

const entries = [
  ...STATIC_SITEMAP_PATHS.map((path) => ({
    loc: path === "/" ? `${SITE}/` : `${SITE}${path}`,
    priority: path === "/" ? "1.0" : path.includes("agency") || path.includes("company") || path.includes("marketing") ? "0.9" : "0.75",
    changefreq: path === "/" ? "weekly" : "weekly",
  })),
  ...BLOG_SLUGS.map((slug) => ({
    loc: `${SITE}/blog/${slug}`,
    priority: "0.65",
    changefreq: "monthly",
  })),
];

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${entries
  .map(
    (u) => `  <url>
    <loc>${u.loc}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>${u.changefreq}</changefreq>
    <priority>${u.priority}</priority>
  </url>`,
  )
  .join("\n")}
</urlset>
`;

writeFileSync(outFile, xml, "utf8");
console.log(`[sitemap] wrote ${entries.length} URLs to public/sitemap.xml`);

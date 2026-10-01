Uplift Digital Studio - Netlify deploy package

Drag this entire folder onto https://app.netlify.com/drop, or connect it as a repo
(publish directory = folder root). No build step required.

Contents
  index.html      the site
  assets/         logos, favicon, OG share image, hero photo (JPEG, 355 KB)
  fonts/          local Satoshi fallbacks (Fontshare CDN supplies 700-900)
  netlify.toml    cache + security headers
  robots.txt / sitemap.xml

After deploy
  1. Point upliftdigital.studio at the site in Netlify > Domain settings.
  2. If the domain differs, update canonical / og:url / og:image in index.html,
     plus sitemap.xml and robots.txt.
  3. Verify the share card at https://www.opengraph.xyz/

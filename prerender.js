import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const toAbsolute = (p) => path.resolve(__dirname, p);

async function prerender() {
  const templatePath = toAbsolute('dist/index.html');
  if (!fs.existsSync(templatePath)) {
    throw new Error('dist/index.html not found. Run "vite build" first.');
  }

  const template = fs.readFileSync(templatePath, 'utf-8');
  let serverEntryPath = toAbsolute('dist/server/entry-server.js');
  if (!fs.existsSync(serverEntryPath)) {
    serverEntryPath = toAbsolute('dist/server/entry-server.mjs');
  }
  
  if (!fs.existsSync(serverEntryPath)) {
    throw new Error('dist/server/entry-server bundle not found. Run SSR build first.');
  }

  // Import server bundle using file URL for Windows compatibility
  const serverEntryUrl = pathToFileURL(serverEntryPath).href;
  const { render } = await import(serverEntryUrl);

  // 1. Prerender Homepage (/)
  const { html: homeHtml } = render('/');
  let renderedHome = template.includes('<!--app-html-->')
    ? template.replace('<!--app-html-->', homeHtml)
    : template.replace('<div id="root"></div>', `<div id="root">${homeHtml}</div>`);

  fs.writeFileSync(templatePath, renderedHome, 'utf-8');
  console.log(`[prerender] Successfully prerendered dist/index.html (${(Buffer.byteLength(renderedHome, 'utf8') / 1024).toFixed(2)} KB)`);

  // 2. Prerender Dedicated Showcase Page (/vsb-engineering-college-github-profiles/)
  const showcaseDir = toAbsolute('dist/vsb-engineering-college-github-profiles');
  if (!fs.existsSync(showcaseDir)) {
    fs.mkdirSync(showcaseDir, { recursive: true });
  }

  const { html: showcaseHtml } = render('/vsb-engineering-college-github-profiles/');
  let renderedShowcase = template.includes('<!--app-html-->')
    ? template.replace('<!--app-html-->', showcaseHtml)
    : template.replace('<div id="root"></div>', `<div id="root">${showcaseHtml}</div>`);

  // Update title, description, and canonical tag for dedicated showcase
  renderedShowcase = renderedShowcase.replace(
    /<title>.*?<\/title>/,
    '<title>Best GitHub Profiles — VSB Engineering College | Student Developer Showcase</title>'
  );
  renderedShowcase = renderedShowcase.replace(
    /<link rel="canonical" href="https:\/\/tharunkumark4743\.netlify\.app\/" \/>/,
    '<link rel="canonical" href="https://tharunkumark4743.netlify.app/vsb-engineering-college-github-profiles/" />'
  );
  renderedShowcase = renderedShowcase.replace(
    /<meta name="description" content=".*?" \/>/,
    '<meta name="description" content="Explore GitHub profiles and software projects from students associated with V.S.B. Engineering College, Karur. Curated showcase featuring Tharunkumar K (@Tharun4743), 2× Hackathon Winner (Code Thugs 2K26 🥇, Neural Minds 🥉), and verified student innovations." />'
  );

  const showcaseFilePath = path.join(showcaseDir, 'index.html');
  fs.writeFileSync(showcaseFilePath, renderedShowcase, 'utf-8');
  console.log(`[prerender] Successfully prerendered dist/vsb-engineering-college-github-profiles/index.html (${(Buffer.byteLength(renderedShowcase, 'utf8') / 1024).toFixed(2)} KB)`);

  // Clean up server build folder
  const serverDir = toAbsolute('dist/server');
  if (fs.existsSync(serverDir)) {
    fs.rmSync(serverDir, { recursive: true, force: true });
    console.log('[prerender] Cleaned up temporary dist/server directory');
  }
}

prerender().catch((err) => {
  console.error('[prerender] Error during prerendering:', err);
  process.exit(1);
});

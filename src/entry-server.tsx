import React from 'react';
import ReactDOMServer from 'react-dom/server';
import App from './App';
import VsbShowcase from './VsbShowcase';

export function render(url = '/') {
  const isShowcase = url.includes('vsb-engineering-college-github-profiles');

  const html = ReactDOMServer.renderToString(
    <React.StrictMode>
      {isShowcase ? (
        <div className="min-h-screen bg-slate-50 selection:bg-theme-soft selection:text-theme relative">
          <main>
            <VsbShowcase isDedicatedPage={true} />
          </main>
        </div>
      ) : (
        <App />
      )}
    </React.StrictMode>
  );
  return { html };
}

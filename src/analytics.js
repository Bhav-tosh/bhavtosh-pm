// Google Analytics 4 — loads only in production builds when VITE_GA_ID is set.
// The Measurement ID (G-XXXXXXXXXX) is not secret, but keeping it in an env
// var means no tracking during local dev and nothing hard-coded in the repo.

// Measurement ID: use VITE_GA_ID if set, otherwise fall back to the site's ID.
// (A GA4 ID is not secret — it's always exposed in client-side code.)
const GA_ID = import.meta.env.VITE_GA_ID || 'G-CPED63RWSH';
const ENABLED = import.meta.env.PROD && Boolean(GA_ID);

export function initAnalytics() {
  if (!ENABLED) return;

  const s = document.createElement('script');
  s.async = true;
  s.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`;
  document.head.appendChild(s);

  window.dataLayer = window.dataLayer || [];
  function gtag() {
    window.dataLayer.push(arguments);
  }
  window.gtag = gtag;
  gtag('js', new Date());
  gtag('config', GA_ID); // sends the initial page_view
}

// Fire a custom GA4 event. No-op when analytics is disabled.
export function trackEvent(name, params = {}) {
  if (!ENABLED || typeof window.gtag !== 'function') return;
  window.gtag('event', name, params);
}

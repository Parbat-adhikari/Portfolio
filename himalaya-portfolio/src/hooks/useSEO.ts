import { useEffect } from "react";

type SEOOptions = {
  title: string;
  description: string;
  path?: string;
};

const SITE = "https://parbatadhikari.com.np"; // ← set your deployed URL for correct canonical/OG

/**
 * Updates the document title and the key SEO meta tags for the current route.
 * A tiny, dependency-free alternative to react-helmet for a static SPA.
 */
function setMeta(attr: "name" | "property", key: string, content: string) {
  let el = document.head.querySelector<HTMLMetaElement>(`meta[${attr}="${key}"]`);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
}

export function useSEO({ title, description, path = "/" }: SEOOptions) {
  useEffect(() => {
    const url = `${SITE}${path}`;
    document.title = title;

    setMeta("name", "description", description);
    setMeta("property", "og:title", title);
    setMeta("property", "og:description", description);
    setMeta("property", "og:url", url);
    setMeta("name", "twitter:title", title);
    setMeta("name", "twitter:description", description);

    let canonical = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      document.head.appendChild(canonical);
    }
    canonical.setAttribute("href", url);
  }, [title, description, path]);
}

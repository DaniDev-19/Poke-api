import { useEffect } from 'react';

export interface SeoOptions {
  title?: string;
  description?: string;
  keywords?: string;
  canonicalUrl?: string;
  ogTitle?: string;
  ogImage?: string;
  twitterCard?: string;
  twitterTitle?: string;
  twitterDescription?: string;
}

const setOrCreateMeta = (attribute: 'name' | 'property', key: string, value: string) => {
  const selector = `meta[${attribute}="${key}"]`;
  let element = document.head.querySelector<HTMLMetaElement>(selector);
  if (!element) {
    element = document.createElement('meta');
    element.setAttribute(attribute, key);
    document.head.appendChild(element);
  }
  element.setAttribute('content', value);
};

const setOrCreateLink = (rel: string, href: string) => {
  let element = document.head.querySelector<HTMLLinkElement>(`link[rel="${rel}"]`);
  if (!element) {
    element = document.createElement('link');
    element.setAttribute('rel', rel);
    document.head.appendChild(element);
  }
  element.setAttribute('href', href);
};

export function useSeo(options: SeoOptions) {
  useEffect(() => {
    if (typeof window === 'undefined') return;

    const {
      title,
      description,
      keywords,
      canonicalUrl,
      ogTitle,
      ogImage,
      twitterCard,
      twitterTitle,
      twitterDescription,
    } = options;

    if (title) {
      document.title = title;
    }

    if (description) {
      setOrCreateMeta('name', 'description', description);
      setOrCreateMeta('property', 'og:description', description);
      setOrCreateMeta('property', 'twitter:description', description);
    }

    if (keywords) {
      setOrCreateMeta('name', 'keywords', keywords);
    }

    if (canonicalUrl) {
      setOrCreateLink('canonical', canonicalUrl);
      setOrCreateMeta('property', 'og:url', canonicalUrl);
      setOrCreateMeta('property', 'twitter:url', canonicalUrl);
    }

    if (ogTitle) {
      setOrCreateMeta('property', 'og:title', ogTitle);
    }

    if (ogImage) {
      setOrCreateMeta('property', 'og:image', ogImage);
      setOrCreateMeta('property', 'twitter:image', ogImage);
    }

    if (twitterCard) {
      setOrCreateMeta('property', 'twitter:card', twitterCard);
    }

    if (twitterTitle) {
      setOrCreateMeta('property', 'twitter:title', twitterTitle);
    }

    if (twitterDescription) {
      setOrCreateMeta('property', 'twitter:description', twitterDescription);
    }
  }, [options]);
}

import { useEffect } from 'react';
import { SITE_CONFIG } from '../config/site';

export default function SEOHead({ title, description, path = '/', image }) {
  const fullTitle = title ? `${title} | ${SITE_CONFIG.name}` : `${SITE_CONFIG.name} - ${SITE_CONFIG.nameKo}`;
  const desc = description || SITE_CONFIG.description;
  const url = `${SITE_CONFIG.url}${path}`;
  const ogImage = image
    ? (image.startsWith('http') ? image : `${SITE_CONFIG.url}/og/${image}.png`)
    : `${SITE_CONFIG.url}/og/default.png`;

  useEffect(() => {
    document.title = fullTitle;

    const setMeta = (property, content) => {
      let el = document.querySelector(`meta[property="${property}"]`) || document.querySelector(`meta[name="${property}"]`);
      if (!el) {
        el = document.createElement('meta');
        el.setAttribute(property.startsWith('og:') || property.startsWith('twitter:') ? 'property' : 'name', property);
        document.head.appendChild(el);
      }
      el.setAttribute('content', content);
    };

    setMeta('description', desc);
    setMeta('og:site_name', SITE_CONFIG.name);
    setMeta('og:title', fullTitle);
    setMeta('og:description', desc);
    setMeta('og:url', url);
    setMeta('og:image', ogImage);
    setMeta('twitter:title', fullTitle);
    setMeta('twitter:description', desc);
    setMeta('twitter:image', ogImage);
  }, [fullTitle, desc, url, ogImage]);

  return null;
}

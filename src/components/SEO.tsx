import React, { useEffect } from 'react';

export interface BreadcrumbItem {
  name: string;
  item: string;
}

export interface SEOProps {
  title: string;
  description: string;
  canonicalUrl?: string;
  keywords?: string;
  ogType?: 'website' | 'article';
  ogImage?: string;
  breadcrumbs?: BreadcrumbItem[];
  schema?: Record<string, any> | Array<Record<string, any>>;
}

const DEFAULT_CANONICAL_DOMAIN = 'https://www.marcaconstruction.com';
const DEFAULT_IMAGE = 'https://www.marcaconstruction.com/marca-logo.jpeg';
const DEFAULT_KEYWORDS =
  'Marca Construction, Marca Construction Kerala, construction company in Kerala, construction company in Calicut, construction company in Kozhikode, residential construction, commercial construction, building construction, civil construction works, interior works in Calicut, interior works in Kerala, home construction, house renovation, building renovation, commercial building works, construction contractors in Kerala, turnkey construction';

export const SEO: React.FC<SEOProps> = ({
  title,
  description,
  canonicalUrl,
  keywords = DEFAULT_KEYWORDS,
  ogType = 'website',
  ogImage = DEFAULT_IMAGE,
  breadcrumbs,
  schema,
}) => {
  useEffect(() => {
    // 1. Title
    document.title = title;

    // Helper: update or create meta tag
    const setMetaTag = (attribute: 'name' | 'property', key: string, content: string) => {
      let element = document.querySelector(`meta[${attribute}="${key}"]`);
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(attribute, key);
        document.head.appendChild(element);
      }
      element.setAttribute('content', content);
    };

    // Helper: update or create link tag
    const setLinkTag = (rel: string, href: string) => {
      let element = document.querySelector(`link[rel="${rel}"]`);
      if (!element) {
        element = document.createElement('link');
        element.setAttribute('rel', rel);
        document.head.appendChild(element);
      }
      element.setAttribute('href', href);
    };

    // Helper: update or inject JSON-LD script
    const setJsonLdScript = (id: string, data: any) => {
      let script = document.getElementById(id) as HTMLScriptElement | null;
      if (!script) {
        script = document.createElement('script');
        script.id = id;
        script.type = 'application/ld+json';
        document.head.appendChild(script);
      }
      script.textContent = JSON.stringify(data, null, 2);
    };

    // 2. Resolve Canonical URL
    const resolvedCanonical =
      canonicalUrl ||
      `${DEFAULT_CANONICAL_DOMAIN}${
        window.location.pathname === '/' ? '' : window.location.pathname
      }`;

    // 3. Primary Meta Tags
    setMetaTag('name', 'description', description);
    setMetaTag('name', 'keywords', keywords);
    setMetaTag(
      'name',
      'robots',
      'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1'
    );
    setLinkTag('canonical', resolvedCanonical);

    // 4. OpenGraph Tags
    setMetaTag('property', 'og:site_name', 'MARCA CONSTRUCTION');
    setMetaTag('property', 'og:locale', 'en_IN');
    setMetaTag('property', 'og:type', ogType);
    setMetaTag('property', 'og:title', title);
    setMetaTag('property', 'og:description', description);
    setMetaTag('property', 'og:url', resolvedCanonical);
    setMetaTag('property', 'og:image', ogImage);

    // 5. Twitter Card Tags
    setMetaTag('name', 'twitter:card', 'summary_large_image');
    setMetaTag('name', 'twitter:title', title);
    setMetaTag('name', 'twitter:description', description);
    setMetaTag('name', 'twitter:image', ogImage);

    // 6. Breadcrumbs Schema
    if (breadcrumbs && breadcrumbs.length > 0) {
      const breadcrumbSchema = {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: breadcrumbs.map((crumb, index) => ({
          '@type': 'ListItem',
          position: index + 1,
          name: crumb.name,
          item: crumb.item.startsWith('http')
            ? crumb.item
            : `${DEFAULT_CANONICAL_DOMAIN}${crumb.item}`,
        })),
      };
      setJsonLdScript('schema-breadcrumbs', breadcrumbSchema);
    } else {
      const existingBreadcrumbs = document.getElementById('schema-breadcrumbs');
      if (existingBreadcrumbs) {
        existingBreadcrumbs.remove();
      }
    }

    // 7. Page-Specific Schema
    if (schema) {
      setJsonLdScript('schema-page', schema);
    } else {
      const existingPageSchema = document.getElementById('schema-page');
      if (existingPageSchema) {
        existingPageSchema.remove();
      }
    }

    return () => {
      // Cleanup dynamically injected schemas if unmounting
      const pageSchema = document.getElementById('schema-page');
      if (pageSchema) pageSchema.remove();
      const breadcrumbsSchema = document.getElementById('schema-breadcrumbs');
      if (breadcrumbsSchema) breadcrumbsSchema.remove();
    };
  }, [title, description, canonicalUrl, keywords, ogType, ogImage, breadcrumbs, schema]);

  return null;
};

import React from 'react';
import { SITE, SITE_SAME_AS } from '@/common/site-config';

function JsonLd({ data }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export function OrganizationSchema() {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': `${SITE.url}/#organization`,
    name: SITE.legalName,
    alternateName: SITE.name,
    url: SITE.url,
    logo: `${SITE.url}${SITE.logo}`,
    image: `${SITE.url}${SITE.ogImage}`,
    description: SITE.description,
    foundingDate: SITE.foundingDate,
    email: SITE.email,
    telephone: SITE.phoneE164,
    sameAs: SITE_SAME_AS,
    address: {
      '@type': 'PostalAddress',
      streetAddress: SITE.addressParts.street,
      addressLocality: SITE.addressParts.city,
      addressRegion: SITE.addressParts.region,
      addressCountry: SITE.addressParts.country,
    },
  };
  return <JsonLd data={data} />;
}

export function WebSiteSchema() {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${SITE.url}/#website`,
    url: SITE.url,
    name: SITE.name,
    description: SITE.description,
    publisher: { '@id': `${SITE.url}/#organization` },
    inLanguage: 'en',
  };
  return <JsonLd data={data} />;
}

export function ProfessionalServiceSchema() {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    '@id': `${SITE.url}/#service`,
    name: SITE.legalName,
    image: `${SITE.url}${SITE.ogImage}`,
    url: SITE.url,
    telephone: SITE.phoneE164,
    email: SITE.email,
    priceRange: '$$',
    areaServed: 'Worldwide',
    address: {
      '@type': 'PostalAddress',
      streetAddress: SITE.addressParts.street,
      addressLocality: SITE.addressParts.city,
      addressRegion: SITE.addressParts.region,
      addressCountry: SITE.addressParts.country,
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: SITE.geo.lat,
      longitude: SITE.geo.lng,
    },
    sameAs: SITE_SAME_AS,
    makesOffer: [
      'Web Design',
      'Web Development',
      'Branding',
      'Product Management',
      'Mobile App Development',
    ].map((s) => ({
      '@type': 'Offer',
      itemOffered: { '@type': 'Service', name: s },
    })),
  };
  return <JsonLd data={data} />;
}

export function BreadcrumbSchema({ items = [] }) {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.name,
      item: `${SITE.url}${item.path}`,
    })),
  };
  return <JsonLd data={data} />;
}

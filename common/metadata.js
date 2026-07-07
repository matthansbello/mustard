import { SITE } from './site-config';

export function createPageMetadata({
  title,
  description,
  path = '',
  keywords,
  ogImage,
} = {}) {
  const pageTitle = title ? `${title} | ${SITE.name}` : `${SITE.name} — ${SITE.tagline}`;
  const pageDescription = description || SITE.description;
  const canonicalPath = path || '/';
  const image = ogImage || SITE.ogImage;
  const pageKeywords =
    keywords && keywords.length ? [...SITE.keywords, ...keywords] : SITE.keywords;

  return {
    metadataBase: new URL(SITE.url),
    title: pageTitle,
    description: pageDescription,
    keywords: pageKeywords,
    applicationName: SITE.name,
    authors: [{ name: SITE.legalName, url: SITE.url }],
    creator: SITE.legalName,
    publisher: SITE.legalName,
    category: 'technology',
    icons: {
      icon: SITE.favicon,
      shortcut: SITE.favicon,
      apple: SITE.favicon,
    },
    alternates: {
      canonical: canonicalPath,
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-image-preview': 'large',
        'max-snippet': -1,
        'max-video-preview': -1,
      },
    },
    openGraph: {
      title: pageTitle,
      description: pageDescription,
      url: canonicalPath,
      siteName: SITE.name,
      locale: SITE.locale,
      type: 'website',
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: `${SITE.name} — ${SITE.tagline}`,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      site: SITE.twitterHandle,
      creator: SITE.twitterHandle,
      title: pageTitle,
      description: pageDescription,
      images: [image],
    },
  };
}

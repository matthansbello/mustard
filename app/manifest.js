import { SITE } from '@/common/site-config';

export const dynamic = 'force-static';

export default function manifest() {
  return {
    name: `${SITE.name} — ${SITE.tagline}`,
    short_name: SITE.name,
    description: SITE.description,
    start_url: '/',
    display: 'standalone',
    background_color: '#0f0f0f',
    theme_color: '#3459fc',
    icons: [
      {
        src: SITE.favicon,
        sizes: 'any',
        type: 'image/webp',
      },
    ],
  };
}

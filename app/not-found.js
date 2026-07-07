import { createPageMetadata } from '@/common/metadata';
import NotFound from '@/components/common/NotFound';

export const metadata = {
  ...createPageMetadata({
    title: 'Page Not Found',
    path: '/404',
  }),
  robots: { index: false, follow: true },
};

export default function NotFoundPage() {
  return <NotFound />;
}

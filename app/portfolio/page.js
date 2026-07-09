import { createPageMetadata } from '@/common/metadata';
import PageLayout from '@/components/common/PageLayout';
import Marq2 from '@/components/common/Marq2';
import Header from '@/components/p-gallery/Header';
import Portfolio from '@/components/p-gallery/Portfolio';
import { BreadcrumbSchema } from '@/components/common/StructuredData';

export const metadata = createPageMetadata({
  title: 'Portfolio',
  path: '/portfolio',
  description:
    'Explore MustardHQ\u2019s portfolio of shipped work — web design, web development, product, branding, IT, and cybersecurity projects delivered for clients across Nigeria and beyond.',
  keywords: ['MustardHQ portfolio', 'web design portfolio', 'case studies Nigeria', 'IT services portfolio', 'cybersecurity projects'],
});

export default function PortfolioPage() {
  return (
    <PageLayout>
      <BreadcrumbSchema
        items={[
          { name: 'Home', path: '/' },
          { name: 'Portfolio', path: '/portfolio' },
        ]}
      />
      <Header />
      <Portfolio />
      <Marq2 />
    </PageLayout>
  );
}

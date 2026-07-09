import { createPageMetadata } from '@/common/metadata';
import PageLayout from '@/components/common/PageLayout';
import Header from '@/components/about/Header';
import Intro from '@/components/about/Intro';
import Values from '@/components/about/Values';
import Numbers from '@/components/about/Numbers';
import Approach from '@/components/about/Approach';
import Marq2 from '@/components/common/Marq2';
import Services from '@/components/home/Services';
import Testimonials from '@/components/home/Testimonials';

import { BreadcrumbSchema } from '@/components/common/StructuredData';

export const metadata = createPageMetadata({
  title: 'About',
  path: '/about',
  description:
    'Meet MustardHQ — a full-service tech and media studio in Jos, Nigeria building web, product, brand, IT, and cybersecurity solutions with excellence, ownership, and long-term partnership.',
  keywords: ['about MustardHQ', 'digital studio Jos', 'tech agency team', 'IT services Nigeria', 'cybersecurity services'],
});

export default function About() {
  return (
    <PageLayout>
      <BreadcrumbSchema
        items={[
          { name: 'Home', path: '/' },
          { name: 'About', path: '/about' },
        ]}
      />
      <Header />
      <Intro />
      <Numbers />
      <Values />
      <Services />
      <Approach />
      <Testimonials />
      <Marq2 />
    </PageLayout>
  );
}

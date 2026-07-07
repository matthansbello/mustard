import { createPageMetadata } from '@/common/metadata';
import PageLayout from '@/components/common/PageLayout';
import Header from '@/components/contact/Header';
import Contact from '@/components/contact/Contact';
import Map from '@/components/contact/Map';
import { BreadcrumbSchema } from '@/components/common/StructuredData';

export const metadata = createPageMetadata({
  title: 'Contact',
  path: '/contact',
  description:
    'Get in touch with MustardHQ. Book a meeting, message us on WhatsApp, or email our team in Jos, Nigeria. We respond within 24 hours.',
  keywords: ['contact MustardHQ', 'hire web designer Nigeria', 'book a meeting'],
});

export default function ContactPage() {
  return (
    <PageLayout>
      <BreadcrumbSchema
        items={[
          { name: 'Home', path: '/' },
          { name: 'Contact', path: '/contact' },
        ]}
      />
      <Header />
      <Contact />
      <Map />
    </PageLayout>
  );
}

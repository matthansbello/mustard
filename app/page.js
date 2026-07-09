import { createPageMetadata } from '@/common/metadata';
import PageLayout from '@/components/common/PageLayout';
import Feat from '@/components/home/Feat';
import Header from '@/components/home/Header';
import Intro from '@/components/home/Intro';
import Marq from '@/components/home/Marq';
import Marq2 from '@/components/common/Marq2';
import Portfolio from '@/components/home/Portfolio';
import Services from '@/components/home/Services';
import Testimonials from '@/components/home/Testimonials';

export const metadata = createPageMetadata({
  path: '/',
  description:
    'MustardHQ is a digital product studio in Jos, Nigeria delivering web design, web development, branding, product management, IT, and cybersecurity services for brands ready to evolve.',
});

export default function Home() {
  return (
    <PageLayout>
      <Header />
      <Intro />
      <Marq />
      <Services />
      <Portfolio />
      <Feat />
      <Testimonials />
      <Marq2 />
    </PageLayout>
  );
}

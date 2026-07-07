import Footer from '@/components/common/Footer';
import BrandOutro from '@/components/common/BrandOutro';

function PageLayout({ children }) {
  return (
    <div id="smooth-wrapper">
      <div id="smooth-content">
        <main className="main-bg o-hidden">{children}</main>
        <Footer />
        <BrandOutro />
      </div>
    </div>
  );
}

export default PageLayout;

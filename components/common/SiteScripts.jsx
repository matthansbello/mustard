import Script from 'next/script';

function SiteScripts() {
  return (
    <>
      <Script
        src="/assets/js/ScrollTrigger.min.js"
        strategy="beforeInteractive"
      />
      <Script strategy="beforeInteractive" src="/assets/js/plugins.js" />
      <Script strategy="beforeInteractive" src="/assets/js/gsap.min.js" />
      <Script strategy="beforeInteractive" src="/assets/js/splitting.min.js" />
      <Script
        strategy="beforeInteractive"
        src="/assets/js/isotope.pkgd.min.js"
      />
      <Script src="/assets/js/scripts.js" />
    </>
  );
}

export default SiteScripts;

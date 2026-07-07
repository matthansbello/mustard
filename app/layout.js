import './globals.css';
import { STYLESHEETS } from '@/common/site-config';
import { createPageMetadata } from '@/common/metadata';
import Cursor from '@/components/common/cusor';
import Lines from '@/components/common/Lines';
import LoadingScreen from '@/components/common/loader';
import Navbar from '@/components/common/Navbar';
import ProgressScroll from '@/components/common/ProgressScroll';
import SiteScripts from '@/components/common/SiteScripts';
import Animations from '@/components/common/Animations';
import {
  OrganizationSchema,
  WebSiteSchema,
  ProfessionalServiceSchema,
} from '@/components/common/StructuredData';

export const metadata = createPageMetadata();

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#0f0f0f',
  colorScheme: 'dark',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {STYLESHEETS.map((href) => (
          <link key={href} rel="stylesheet" href={href} />
        ))}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <OrganizationSchema />
        <WebSiteSchema />
        <ProfessionalServiceSchema />
      </head>
      <body>
        <LoadingScreen />
        <Cursor />
        <ProgressScroll />
        <Lines />
        <Navbar />
        {children}
        <Animations />
        <SiteScripts />
      </body>
    </html>
  );
}

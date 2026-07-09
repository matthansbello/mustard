import { createPageMetadata } from '@/common/metadata';
import DownloadBar from '@/components/profile/DownloadBar';
import Profile from '@/components/profile/Profile';

export const metadata = createPageMetadata({
  path: '/company-profile',
  title: 'Company Profile',
  description:
    'Download the MustardHQ company profile — web, product, brand, IT, and cybersecurity services, capabilities, approach, selected work, and contact details in a printable PDF portfolio.',
});

export default function CompanyProfilePage() {
  return (
    <main className="profile-wrap">
      <DownloadBar />
      <Profile />
    </main>
  );
}

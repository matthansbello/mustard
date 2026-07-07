import services from '@/data/services';
import testimonials from '@/data/testimonials';

export const COMPANY = {
  intro:
    'A full-service tech and media studio building digital products as a means of worship. We integrate innovative thinking with meticulous execution, so every solution embodies excellence and produces tangible outcomes.',
  mission:
    'We build web, product, and brand experiences that last, and that our clients fully own and control, from first sketch to final ship and beyond.',
};

export const STATS = [
  { v: '97%', k: 'Client Satisfaction' },
  { v: '137', k: 'Projects Completed' },
  { v: '15+', k: 'Achievements' },
  { v: '24h', k: 'Response Time' },
];

export const VALUES = [
  {
    title: 'Excellence by Default',
    desc: 'We treat every detail as the deliverable. Quality is not a phase, it is the standard we hold from concept to launch.',
  },
  {
    title: 'Ownership You Keep',
    desc: 'We build robust, transparent systems that you fully control, no lock-in, no black boxes, just digital stewardship.',
  },
  {
    title: 'Built to Evolve',
    desc: 'Ecosystems, not one-offs. We architect for scale so your product grows with your ambition, not against it.',
  },
  {
    title: 'Partners, Not Vendors',
    desc: 'We embed with your team, share your goals, and stay accountable to outcomes long after the handover.',
  },
];

export const APPROACH = [
  {
    title: 'Discover',
    desc: 'We dig into your goals, users, and market to define the real problem worth solving before a single pixel is drawn.',
  },
  {
    title: 'Design',
    desc: 'We shape strategy into intentional experiences, systems, and brand language that feel inevitable and unmistakably yours.',
  },
  {
    title: 'Build',
    desc: 'We engineer scalable, secure, high-performing products with continuity in mind, so what we ship keeps working.',
  },
  {
    title: 'Evolve',
    desc: 'We measure, refine, and grow the ecosystem alongside you, turning launch into long-term momentum.',
  },
];

export const CAPABILITIES = [
  {
    title: 'Ecosystem Development',
    desc: 'Interconnected digital environments that grow with your business and provide a unified, seamless experience.',
  },
  {
    title: 'Operational Mastery',
    desc: 'Digital infrastructure optimized for performance, security, and scalability, giving you complete confidence and control.',
  },
  {
    title: 'Strategic Branding',
    desc: 'Architectures that define your digital presence, ensuring consistency and lasting impact across every touchpoint.',
  },
];

export const PROJECTS = [
  {
    name: 'Kiiwii Utility',
    cat: 'Web App',
    tags: ['App', 'Product'],
    url: 'http://kiiwii.co',
    img: '/assets/imgs/works/mustardworks/kiiwii-by-mustardhq.webp',
  },
  {
    name: 'Canine Connect',
    cat: 'Product',
    tags: ['Product'],
    url: 'https://canineconnect.com',
    img: '/assets/imgs/works/mustardworks/canine-by-mustardhq.webp',
  },
  {
    name: 'Youth Making Impact',
    cat: 'Web Design',
    tags: ['Web Design'],
    url: 'https://youthmakingimpact.org',
    img: '/assets/imgs/works/mustardworks/ymi|mustardhq.webp',
  },
  {
    name: 'Matthew Hans-Bello',
    cat: 'Web Design & Branding',
    tags: ['Web Design', 'Brand'],
    url: 'https://www.hansbello.com',
    img: '/assets/imgs/works/mustardworks/hansbello|mustardhq.webp',
  },
  {
    name: 'TASCK',
    cat: 'Product & Development',
    tags: ['Product', 'Web Development'],
    url: 'https://tasck.org',
    img: '/assets/imgs/works/mustardworks/tasckwebsite|mustardhq.webp',
  },
  {
    name: 'Fola PR Limited',
    cat: 'Web Design',
    tags: ['Web Design'],
    url: 'https://wewantfola.com',
    img: '/assets/imgs/works/mustardworks/fola|mustardhq.webp',
  },
  { name: 'SUNS Academy', cat: 'Web Design & Development', tags: ['Web Design', 'Web Development'], url: 'https://sunsacademy.com' },
  { name: 'SUNS Initiative', cat: 'Web Design', tags: ['Web Design'], url: 'https://sunsinitiative.org' },
  { name: 'EmpowerHope Foundation', cat: 'Web Design', tags: ['Web Design'], url: 'https://empowerhope.foundation' },
  { name: 'BitesBanq', cat: 'Web App', tags: ['App', 'Web Development'], url: 'https://bitesbanq.com' },
  { name: 'BFlexi', cat: 'Web Development', tags: ['Web Development'], url: 'https://bflexi.ng' },
  { name: 'Zen Designs', cat: 'Web Design', tags: ['Web Design'], url: 'https://zendesigns.ng' },
  { name: 'Hands On Community Networks', cat: 'Web Design', tags: ['Web Design'], url: 'https://handsoncommunitynetworks.org' },
  { name: 'NITF', cat: 'Web Development', tags: ['Web Development'], url: 'https://nitf.ng' },
  { name: 'LabarinTech', cat: 'Product & Web', tags: ['Product', 'Web Development'], url: 'https://labarintech.com' },
  { name: 'Lowpond', cat: 'Web Design', tags: ['Web Design'], url: 'https://lowpond.com' },
  { name: 'DoughFi', cat: 'Brand Identity', tags: ['Brand'], url: 'https://doughfi.io' },
];

export const PROJECT_FILTERS = ['All', 'Web Design', 'Web Development', 'Product', 'Brand', 'App'];

export const SERVICES = services;
export const TESTIMONIALS = testimonials;

export function initials(name) {
  return name
    .replace(/[^a-zA-Z0-9 ]/g, '')
    .split(' ')
    .filter(Boolean)
    .slice(0, 2)
    .map((w) => w[0])
    .join('')
    .toUpperCase();
}

export function displayUrl(url) {
  return url.replace(/^https?:\/\//, '').replace(/\/$/, '');
}

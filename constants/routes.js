export const ROUTES = {
  HOME: '/',
  // Services → Anaplan
  TRAINING: '/training',
  CONSULTING: '/consulting',
  MANAGED_SERVICE: '/managed-service',
  // Services → tools
  PIGMENT: '/pigment',
  PLANFUL: '/planful',
  PROPHIX: '/prophix',
  VENA_SOLUTION: '/vena-solution',
  // Solution
  SALES_MARKETING: '/sales-marketing',
  SUPPLY_CHAIN_PLANNING: '/supply-chain-planning',
  DEMAND_INVENTORY_PLANNING: '/ceiver-demand-inventory-planning',
  INVENTORY_PLANNING: '/ceiver-inventory-planning',
  SUPPLY_PLANNING: '/supply-planning',
  PRODUCTION_PLANNING: '/ceiver-production-planning',
  EXECUTIVE_SOP_IBP: '/executive-sop-ibp',
  FINANCE: '/finance',
  HR_WORKFORCE: '/hr-workforce',
  // About
  COMPANY: '/company',
  NEWS_PRESS: '/news-press',
  CAREERS: '/careers',
  MEET_TEAM: '/meet-the-team',
  // Beyond Consulting
  RHINESTOA: '/rhinestoa',
  REDPHONE: '/redphone',
  FAZO: '/fazo',
  DOSSPOD: '/dosspod',
  NAGAGOLD: '/nagagold-gold-exchange',
  // Resource
  ON_DEMAND_DEMO: '/on-demand-demo',
  EVENTS: '/events',
  BLOGS: '/blogs',
  WEBINARS: '/webinars',
  WHITE_PAPERS: '/white-papers',
  // Contact
  CONTACT: '/contact',
};

export const NAV_CONFIG = [
  { label: 'Home', href: ROUTES.HOME },
  {
    label: 'Services',
    children: [
      {
        label: 'Anaplan',
        children: [
          { label: 'Training', href: ROUTES.TRAINING },
          { label: 'Consulting', href: ROUTES.CONSULTING },
          { label: 'Managed Service', href: ROUTES.MANAGED_SERVICE },
        ],
      },
      { label: 'Pigment', href: ROUTES.PIGMENT },
      { label: 'Planful', href: ROUTES.PLANFUL },
      { label: 'Prophix', href: ROUTES.PROPHIX },
      { label: 'Vena Solution', href: ROUTES.VENA_SOLUTION },
    ],
  },
  {
    label: 'Solution',
    children: [
      { label: 'Sales & Marketing', href: ROUTES.SALES_MARKETING },
      {
        label: 'Supply Chain Planning',
        children: [
          { label: 'Ceiver Demand Inventory Planning', href: ROUTES.DEMAND_INVENTORY_PLANNING },
          { label: 'Ceiver Inventory Planning', href: ROUTES.INVENTORY_PLANNING },
          { label: 'Supply Planning', href: ROUTES.SUPPLY_PLANNING },
          { label: 'Ceiver Production Planning', href: ROUTES.PRODUCTION_PLANNING },
          { label: 'Executive SOP IBP', href: ROUTES.EXECUTIVE_SOP_IBP },
        ],
      },
      { label: 'Finance', href: ROUTES.FINANCE },
      { label: 'HR & Workforce', href: ROUTES.HR_WORKFORCE },
    ],
  },
  {
    label: 'About',
    children: [
      { label: 'Company', href: ROUTES.COMPANY },
      { label: 'News & Press', href: ROUTES.NEWS_PRESS },
      { label: 'Careers', href: ROUTES.CAREERS },
      { label: 'Meet the Team', href: ROUTES.MEET_TEAM },
    ],
  },
  {
    label: 'Beyond Consulting',
    children: [
      { label: 'Rhinestoa', href: ROUTES.RHINESTOA },
      { label: 'Redphone', href: ROUTES.REDPHONE },
      { label: 'Fazo', href: ROUTES.FAZO },
      { label: 'Dosspod', href: ROUTES.DOSSPOD },
      { label: 'Nagagold', href: ROUTES.NAGAGOLD },
    ],
  },
  {
    label: 'Resource',
    children: [
      { label: 'On Demand Demo', href: ROUTES.ON_DEMAND_DEMO },
      { label: 'Events', href: ROUTES.EVENTS },
      { label: 'Blogs', href: ROUTES.BLOGS },
      { label: 'Webinars', href: ROUTES.WEBINARS },
      { label: 'White Papers', href: ROUTES.WHITE_PAPERS },
    ],
  },
  { label: 'Contact', href: ROUTES.CONTACT },
];

// Footer nav links
export const NAV_LINKS = [
  { label: 'Home', href: ROUTES.HOME },
  { label: 'Company', href: ROUTES.COMPANY },
  { label: 'Services', href: ROUTES.TRAINING },
  { label: 'Contact', href: ROUTES.CONTACT },
];

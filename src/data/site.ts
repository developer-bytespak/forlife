export const links = {
  shopAll: "https://ivlmovement.com/collections/all",
  dareToDream: "https://ivlmovement.com/products/daretodream",
  thrivingSeason: "https://ivlmovement.com/products/thrivingseason",
  bundle: "https://ivlmovement.com/products/daretodream-thrivingseason",
  about: "https://ivlmovement.com/pages/about-us",
  referral: "https://ivlmovement.com/pages/referral-program",
  ambassador: "https://ivlmovement.com/pages/ambassador-program",
} as const;

export const nav = [
  { label: "Products", href: "#products" },
  { label: "Archetypes", href: "#archetypes" },
  { label: "Resources", href: "#resources" },
  { label: "What we stand for", href: "#what-we-stand-for" },
];

export const principles = [
  {
    tone: "mint",
    lead: "Sell",
    accent: "transformation",
    body: "Not another product to own. A shift in how you see your next chapter — and what you believe is available to you.",
  },
  {
    tone: "sand",
    lead: "Remove the",
    accent: "pressure",
    body: "Growth doesn't need to look dramatic to be real. Start small, stay honest, and let it compound in your own time.",
  },
  {
    tone: "powder",
    lead: "Move with",
    accent: "intention",
    body: "Clarity first, then action. Every tool we make is built to help you choose your next step deliberately.",
  },
];

export const values = [
  { k: "01", v: "Clarity without pressure" },
  { k: "02", v: "Growth with intention" },
  { k: "03", v: "Tools for becoming" },
];

export const products = [
  {
    id: "dare-to-dream",
    label: "The Beginning",
    idx: "Product 01",
    name: "Dare to Dream",
    themes: ["Confidence", "Clarity", "Self-trust"],
    body: "Designed to help people work through hesitation, self-doubt and imposter syndrome while reconnecting with what they genuinely want.",
    cta: "Explore Dare to Dream",
    href: links.dareToDream,
    image: "/assets/wallpaper-grid.jpg",
    alt: "ForLife Dare to Dream affirmation wallpapers displayed across a grid of phones",
    variant: "a" as const,
  },
  {
    id: "thriving-season",
    label: "The Expansion",
    idx: "Product 02",
    name: "Thriving Season",
    themes: ["Possibility", "Intentional living", "Aligned action"],
    body: "Designed to help people move beyond survival mode, widen what feels possible and actively create a more fulfilling future.",
    cta: "Explore Thriving Season",
    href: links.thrivingSeason,
    image: "/assets/journal-hero.jpg",
    alt: "A woman holding the ForLife Thriving Season 30-Day Daily Reflection Journal",
    variant: "b" as const,
  },
];

export const features = [
  "Guided growth experiences",
  "Reflective digital journals",
  "Affirmation phone wallpapers",
  "Printable affirmation bookmarks",
  "Mindset & clarity exercises",
  "Lifetime member portal access",
];

export const insideTrust = [
  "Instant digital delivery",
  "One-time purchase",
  "Lifetime access",
  "Mobile + desktop",
];

export const archetypes = [
  {
    num: "01",
    name: "The Dreamer",
    sub: "The Visionary",
    traits: "Vision / Imagination / Possibility",
    body: "Sees what could be before it exists.",
    tint: "#f6ece4",
    tintHover: "#f3e2d5",
  },
  {
    num: "02",
    name: "The Doer",
    sub: "The Builder",
    traits: "Action / Discipline / Momentum",
    body: "Turns intention into movement.",
    tint: "#e7eff4",
    tintHover: "#dbe9f2",
  },
  {
    num: "03",
    name: "The Believer",
    sub: "The Resilient Optimist",
    traits: "Faith / Conviction / Resilience",
    body: "Keeps moving when the path gets difficult.",
    tint: "#eaf0e9",
    tintHover: "#dfe9de",
  },
  {
    num: "04",
    name: "The Achiever",
    sub: "The Legacy Builder",
    traits: "Excellence / Impact / Fulfillment",
    body: "Builds something meaningful that lasts.",
    tint: "#faeae3",
    tintHover: "#f8ded3",
  },
];

export const steps = [
  {
    num: "Step 01",
    title: "Choose your starting point",
    body: "Find the growth experience that best matches where you are right now.",
  },
  {
    num: "Step 02",
    title: "Move at your own pace",
    body: "Access your digital experience from mobile, tablet or desktop and return whenever you need it.",
  },
  {
    num: "Step 03",
    title: "Keep becoming",
    body: "Build reflection, clarity and intentional action into your everyday life.",
  },
];

export const trustItems = [
  "40-Day Satisfaction Guarantee",
  "Instant Digital Delivery",
  "Lifetime Members Portal Access",
  "4% Revenue Giving Pledge",
  "Secure Checkout",
];

export const pillars = [
  { k: "Trust", v: "Authenticity, consistency and integrity." },
  { k: "Experience", v: "Every interaction should feel intentional and elevated." },
  { k: "Community", v: "Built with people, not simply for them." },
  { k: "Impact", v: "Growth that creates meaningful change." },
];

export const articles = [
  {
    category: "Mindset",
    read: "6 min read",
    title: "How to Know if You Have Imposter Syndrome",
    image: "/assets/wallpaper-iphone.jpg",
    pos: "50% 45%",
    alt: "A phone showing a ForLife affirmation wallpaper resting on dark stone",
  },
  {
    category: "Wellbeing",
    read: "5 min read",
    title: "Why Rest Is a Necessary Part of Success",
    image: "/assets/reflection-journal.jpg",
    pos: "50% 100%",
    alt: "The ForLife 30-Day Daily Reflection Journal open on a wooden table",
  },
  {
    category: "Ambition",
    read: "8 min read",
    title: "The Confidence Gap Holding Women Back from Starting Businesses",
    image: "/assets/wallpaper-android.jpg",
    pos: "50% 40%",
    alt: "A phone displaying the affirmation: I allow myself to dream without judgment",
  },
];

export const footerCols = [
  {
    title: "Explore",
    items: [
      { label: "Products", href: links.shopAll },
      { label: "About", href: links.about },
      { label: "Reviews", href: "#community" },
      { label: "Referral", href: links.referral },
      { label: "Ambassador", href: links.ambassador },
    ],
  },
  {
    title: "Support",
    items: [
      { label: "Resources", href: "#resources" },
      { label: "Contact", href: links.about },
      { label: "Refund Policy", href: links.about },
      { label: "Accessibility", href: links.about },
    ],
  },
  {
    title: "Connect",
    items: [
      { label: "Instagram", href: "https://www.instagram.com/" },
      { label: "TikTok", href: "https://www.tiktok.com/" },
      { label: "YouTube", href: "https://www.youtube.com/" },
      { label: "Pinterest", href: "https://www.pinterest.com/" },
    ],
  },
];

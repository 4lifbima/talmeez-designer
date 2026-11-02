export interface Project {
  slug: string;
  displayTitle: string; // In mockup: "Demo Project"
  fullTitle: string;
  category: 'GRAPHIC DESIGN' | 'BRAND IDENTITY' | 'UI/UX DESIGN' | 'WEB DESIGN';
  image: string;
  shortDescription: string;
  client: string;
  year: string;
  duration: string;
  role: string;
  deliverables: string[];
  challenge: string;
  solution: string;
  impact: string;
  featured: boolean;
}

export interface Service {
  id: string;
  title: string;
  tagline: string;
  description: string;
  icon: 'pen' | 'globe' | 'layout' | 'anchor';
  deliverables: string[];
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  company: string;
  avatar: string;
  rating: number;
}

export interface StatItem {
  icon: 'smile' | 'thumbs-up' | 'star' | 'globe';
  value: string;
  label: string;
}

export const PORTFOLIO_DATA = {
  designer: {
    name: "talmeez",
    badge: "OPEN FOR SELECTED PROJECTS",
    heroTitle: "Design That Builds Brands.",
    heroHighlight: "Builds",
    heroDescription: "I help ambitious brands stand out with bold, strategic and unforgettable design.",
    experienceBadge: "5+ Years Experience",
    avatar: "/assets/extracted/hero-designer.png",
  },
  services: [
    {
      id: "ui-ux",
      title: "UI/UX Design",
      tagline: "Digital Experiences",
      description: "Intuitive interfaces that deliver seamless digital experiences.",
      icon: "pen",
      deliverables: ["User Research", "Wireframing & Prototyping", "Design Systems", "Mobile & Web Apps"],
    },
    {
      id: "web-design",
      title: "Web Design",
      tagline: "High Performance",
      description: "High-performing modern websites built for conversion and impact.",
      icon: "globe",
      deliverables: ["Responsive Websites", "Next.js / React Frontend", "Interaction & Animation", "SEO Optimization"],
    },
    {
      id: "brand-identity",
      title: "Brand Identity",
      tagline: "Visual Systems",
      description: "Memorable brand systems that set your business apart.",
      icon: "layout",
      deliverables: ["Logo Design", "Typography Systems", "Color Palettes", "Brand Guidelines"],
    },
    {
      id: "graphic-design",
      title: "Graphic Design",
      tagline: "Visual Craft",
      description: "Stunning visuals and marketing materials that resonate.",
      icon: "anchor",
      deliverables: ["Packaging & Unboxing", "Print & Editorial", "Social Media Kits", "Vector Illustration"],
    },
  ] as Service[],
  projects: [
    {
      slug: "shine-on-packaging",
      displayTitle: "Demo Project",
      fullTitle: "Shine On Custom Packaging & DTC Experience",
      category: "GRAPHIC DESIGN",
      image: "/assets/extracted/project-1.jpg",
      shortDescription: "Custom sustainable packaging suite and tactile unboxing experience for modern lifestyle goods.",
      client: "Shine On Goods Co.",
      year: "2025",
      duration: "6 Weeks",
      role: "Lead Packaging & Brand Designer",
      deliverables: ["Custom Mailer Boxes", "Embossed Security Tape", "Barcode & Typography Layout", "Unboxing Insert Cards"],
      challenge: "Create a memorable unboxing experience that eliminates plastic wrap while maintaining high structural integrity in transit and driving organic social shares.",
      solution: "Engineered a bespoke interlocking corrugated carton with custom two-tone navy and eggshell colorway, featuring tactile branded packing tape and geometric typography.",
      impact: "+68% increase in organic unboxing posts on Instagram and TikTok, with zero customer shipping damage reports.",
      featured: true,
    },
    {
      slug: "play-grow-smile",
      displayTitle: "Demo Project",
      fullTitle: "Play. Grow. Smile. - Global Children Brand Identity",
      category: "BRAND IDENTITY",
      image: "/assets/extracted/project-2.jpg",
      shortDescription: "Playful, organic brand identity and subscription packaging for child development toys.",
      client: "Play Grow Smile Inc.",
      year: "2025",
      duration: "8 Weeks",
      role: "Brand Identity Lead",
      deliverables: ["Complete Brand System", "Custom Wordmark", "Subscription Box Architecture", "Merchandise & Art Direction"],
      challenge: "Stand out in a crowded preschool market without resorting to loud, clashing primary colors, establishing warmth and credibility with modern parents.",
      solution: "Crafted a friendly geometric logotype paired with an electric sky-blue signature hue, tactile cardboard kits, and cheerful expressive mascot accents.",
      impact: "Initial production run of 10,000 subscription units sold out in under 3 weeks; featured in Dieline and Brand New.",
      featured: true,
    },
    {
      slug: "orin-luxury-bag",
      displayTitle: "Demo Project",
      fullTitle: "Orin Luxury Retail & Packaging Identity",
      category: "GRAPHIC DESIGN",
      image: "/assets/extracted/project-3.jpg",
      shortDescription: "Minimalist boutique luxury retail identity and embossed bespoke shopping bag system.",
      client: "Orin Atelier Paris",
      year: "2024",
      duration: "4 Weeks",
      role: "Creative Director & Packaging Specialist",
      deliverables: ["Luxury Shopping Bag", "Hot Foil Stamping Dies", "Embossed Hangtags", "Tissue Paper & Ribbon System"],
      challenge: "Express ultra-high-end craftsmanship through supreme restraint and tactile material choice rather than loud logos or busy patterns.",
      solution: "Selected 350gsm carbon-neutral matte charcoal stock with micro-texture, accented with blind debossed crest and copper foil lettering.",
      impact: "Honored with the 2024 European Luxury Packaging Merit Award; adopted across 14 European boutique locations.",
      featured: true,
    },
  ] as Project[],
  stats: [
    { icon: "smile", value: "5+", label: "Years Experience" },
    { icon: "thumbs-up", value: "100+", label: "Projects Completed" },
    { icon: "star", value: "50+", label: "Happy Clients" },
    { icon: "globe", value: "10+", label: "Countries Worked" },
  ] as StatItem[],
  testimonials: [
    {
      id: "t1",
      quote: "Talmeez has a unique ability to understand the brand and translate it into visuals that truly connect.",
      author: "John Snow",
      role: "Founder",
      company: "Orin",
      avatar: "/assets/extracted/avatar-john.jpg",
      rating: 5,
    },
    {
      id: "t2",
      quote: "Talmeez has a unique ability to understand the brand and translate it into visuals that truly connect.",
      author: "John Snow",
      role: "Founder",
      company: "Orin",
      avatar: "/assets/extracted/avatar-john.jpg",
      rating: 5,
    },
    {
      id: "t3",
      quote: "Talmeez has a unique ability to understand the brand and translate it into visuals that truly connect.",
      author: "John Snow",
      role: "Founder",
      company: "Orin",
      avatar: "/assets/extracted/avatar-john.jpg",
      rating: 5,
    },
  ] as Testimonial[],
  quickLinks: [
    { label: "About", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Work", href: "#work" },
    { label: "Contact", href: "#contact" },
  ],
  socials: [
    { name: "Twitter/X", icon: "twitter", url: "https://twitter.com" },
    { name: "Instagram", icon: "instagram", url: "https://instagram.com" },
    { name: "LinkedIn", icon: "linkedin", url: "https://linkedin.com" },
    { name: "Facebook", icon: "facebook", url: "https://facebook.com" },
    { name: "GitHub", icon: "github", url: "https://github.com" },
    { name: "Dribbble", icon: "dribbble", url: "https://dribbble.com" },
  ],
};

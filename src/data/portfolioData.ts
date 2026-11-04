export interface Project {
  slug: string;
  displayTitle: string; // In mockup: "Demo Project"
  fullTitle: string;
  category: string;
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
    name: "alifbima",
    badge: "OPEN FOR SELECTED PROJECTS",
    heroTitle: "Design That Builds Brands.",
    heroHighlight: "Enginner",
    heroDescription: "I do not merely write code I build solutions that deliver a real impact for the Department of Informatics Engineering.",
    experienceBadge: "5+ Years Experience",
    avatar: "/assets/extracted/alifbims.png",
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
      slug: "website-porfile-jurusan",
      displayTitle: "Website Porfile Jurusan",
      fullTitle: "Website Porfile Jurusan Teknik Informatika",
      category: "build from scratch",
      image: "/assets/extracted/web-jurusan.jpg",
      shortDescription: "Pengembangan website profil resmi Jurusan Teknik Informatika dari nol dengan antarmuka modern, navigasi intuitif, dan performa tinggi.",
      client: "Jurusan Teknik Informatika",
      year: "2025",
      duration: "6 Minggu",
      role: "Full-Stack Developer & UI/UX Designer",
      deliverables: ["Arsitektur Web & Database dari Nol", "Desain UI/UX Responsif & Modern", "Sistem Manajemen Konten (CMS) Berita", "Portal Informasi Dosen, Kurikulum & Riset", "Optimasi Performa & SEO Kampus"],
      challenge: "Membangun sistem informasi dan portal profil jurusan dari tahap awal yang mampu mengintegrasikan kurikulum, profil dosen, publikasi riset, serta pengumuman akademik ke dalam satu platform terpadu yang cepat dan mudah diakses dari berbagai perangkat.",
      solution: "Merancang antarmuka modern bernuansa akademis-teknologi, membangun struktur basis data yang terukur dari nol, serta mengimplementasikan frontend responsif yang ringan dengan alur navigasi yang memudahkan mahasiswa dan calon mahasiswa mencari informasi penting.",
      impact: "Meningkatkan efisiensi penyebaran informasi jurusan hingga 80%, waktu muat halaman berkurang drastis di bawah 1,5 detik, dan mempermudah akreditasi jurusan berkat dokumentasi digital yang rapi.",
      featured: true,
    },
    {
      slug: "website-profile-si",
      displayTitle: "Website Profile SI",
      fullTitle: "Website Profile Prodi Sistem informasi",
      category: "Develop",
      image: "/assets/extracted/web-si.jpg",
      shortDescription: "Pengembangan dan modernisasi website profil Program Studi Sistem Informasi untuk menghadirkan pengalaman pengguna yang interaktif dan informatif.",
      client: "Prodi Sistem Informasi",
      year: "2025",
      duration: "8 Minggu",
      role: "Lead Web Developer",
      deliverables: ["Pengembangan Frontend Interaktif", "Modul Profil Lulusan & Capaian Pembelajaran", "Integrasi Galeri Kegiatan & Prestasi Mahasiswa", "Fitur FAQ & Formulir Layanan Akademik", "Pembaruan Keamanan & Pemeliharaan Kode"],
      challenge: "Situs web sebelumnya memiliki struktur informasi yang kaku dan lambat diakses di perangkat seluler, sehingga calon mahasiswa dan mahasiswa aktif kesulitan menemukan alur konsentrasi keilmuan dan layanan prodi.",
      solution: "Mengembangkan ulang sistem dengan arsitektur modular, menyempurnakan alur navigasi pengguna (UX flow), serta menyematkan visualisasi profil lulusan dan alur pendaftaran secara terstruktur dan menarik.",
      impact: "Tingkat keterlibatan (engagement rate) mahasiswa meningkat 65%, waktu retensi kunjungan website naik 2x lipat, dan proses administrasi informasi prodi menjadi jauh lebih praktis.",
      featured: true,
    },
    {
      slug: "website-profile-pti",
      displayTitle: "Website Profile PTI",
      fullTitle: "Website Profile Prodi Pendidikan Teknologi Informasi",
      category: "GRAPHIC DESIGN",
      image: "/assets/extracted/web-pti.jpg",
      shortDescription: "Perancangan identitas visual dan aset grafis website profil Program Studi Pendidikan Teknologi Informasi yang edukatif, profesional, dan inspiratif.",
      client: "Prodi Pendidikan Teknologi Informasi",
      year: "2024",
      duration: "4 Minggu",
      role: "Graphic & UI Designer",
      deliverables: ["Aset Grafis & Banner Promosi Web", "Desain Ilustrasi & Ikonografi Akademik", "Panduan Identitas Visual Prodi (Brand Guidelines)", "Tata Letak Infografis Kurikulum & Laboratorium", "Aset Media Sosial & Publikasi Digital"],
      challenge: "Menyampaikan identitas program studi yang menggabungkan dunia pendidikan (pedagogi) dan kecanggihan teknologi informasi ke dalam elemen visual website yang harmonis, rapi, dan tidak membosankan.",
      solution: "Membuat sistem desain grafis yang konsisten dengan palet warna segar, tipografi akademis yang bersih, serta ilustrasi infografis interaktif untuk mempermudah pemahaman kurikulum dan fasilitas laboratorium kejuruan.",
      impact: "Menciptakan citra visual prodi yang profesional dan berwibawa, membantu peningkatan minat pendaftar mahasiswa baru, dan mendapat apresiasi tinggi dari fakultas.",
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
      quote: "alifbima has a unique ability to understand the brand and translate it into visuals that truly connect.",
      author: "John Snow",
      role: "Founder",
      company: "Orin",
      avatar: "/assets/extracted/avatar-john.jpg",
      rating: 5,
    },
    {
      id: "t2",
      quote: "alifbima has a unique ability to understand the brand and translate it into visuals that truly connect.",
      author: "John Snow",
      role: "Founder",
      company: "Orin",
      avatar: "/assets/extracted/avatar-john.jpg",
      rating: 5,
    },
    {
      id: "t3",
      quote: "alifbima has a unique ability to understand the brand and translate it into visuals that truly connect.",
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

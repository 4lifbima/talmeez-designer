import type { Language } from '../context/LanguageContext';

export interface KeyHighlight {
  label: string;
  value: string;
}

export interface AboutData {
  name: string;
  role: string;
  avatar: string;
  badge: string;
  location: string;
  eyebrow: string;
  title: string;
  highlight: string;
  description: string[];
}

export const ABOUT_CONTENT: Record<Language, AboutData> = {
  en: {
    name: 'Alif Bima',
    role: 'Software Engineer at the Department of Informatics Engineering',
    avatar: '/assets/extracted/alifbims.png',
    badge: 'Available for selected projects',
    location: 'Gorontalo, Indonesia',
    eyebrow: 'About Me',
    title: 'A quick introduction to',
    highlight: 'who I am.',
    description: [
      'I am a software engineer focused on creating intuitive interfaces and reliable web systems, from early planning through to implementation.',
      "For me, code is more than lines of program; it is a bridge for delivering solutions that make human interaction with technology easier. I have experience taking projects from architecture planning and system design (UI/UX) through to responsive, high-performance frontend and backend development, work I've applied to the academic profile platforms of the Informatics Engineering Department, Information Systems Study Program, and PTI.",
    ],
  },
  id: {
    name: 'Alif Bima',
    role: 'Software Engineer di Departemen Teknik Informatika',
    avatar: '/assets/extracted/alifbims.png',
    badge: 'Tersedia untuk proyek terpilih',
    location: 'Gorontalo, Indonesia',
    eyebrow: 'Tentang Saya',
    title: 'Deskripsi Singkat Tentang',
    highlight: 'Diri Saya.',
    description: [
      'Saya adalah seorang software engineer yang sekarang berfokus menciptakan antarmuka yang intuitif dan sistem web yang handal dari tahap perancangan hingga implementasi kode.',
      'Bagi saya, kode bukan sekadar baris program, melainkan jembatan untuk menghadirkan solusi yang mempermudah interaksi manusia dengan teknologi. Saya terbiasa menangani proyek mulai dari perancangan arsitektur, desain sistem (UI/UX), hingga pengembangan frontend dan backend yang responsif serta berkinerja tinggi—seperti yang telah saya terapkan pada platform profil akademik Jurusan Teknik Informatika, Prodi Sistem Informasi, dan PTI.',
    ],
  },
};

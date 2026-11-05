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

export const ABOUT_DATA: AboutData = {
  name: "Alif Bima",
  role: "Software Engineer Di Dapartemen Teknik Informatika",
  avatar: "/assets/extracted/alifbims.png",
  badge: "Tersedia untuk proyek terpilih",
  location: "Gorontalo, Indonesia",
  eyebrow: "Tentang Saya",
  title: "Deskripsi Singkat Tentang",
  highlight: "Diri Saya.",
  description: [
    "Saya adalah seorang software engineer yang sekarang berfokus menciptakan antarmuka yang intuitif dan sistem web yang handal dari tahap perancangan hingga implementasi kode.",
    "Bagi saya, kode bukan sekadar baris program, melainkan jembatan untuk menghadirkan solusi yang mempermudah interaksi manusia dengan teknologi. Saya terbiasa menangani proyek mulai dari perancangan arsitektur, desain sistem (UI/UX), hingga pengembangan frontend dan backend yang responsif serta berkinerja tinggi—seperti yang telah saya terapkan pada platform profil akademik Jurusan Teknik Informatika, Prodi Sistem Informasi, dan PTI.",
  ],

};

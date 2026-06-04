export interface Skill {
  name: string;
  category: "Frontend" | "Backend" | "Database & Tools" | "Specialties";
  icon: string;
}

export interface Experience {
  period: string;
  role: string;
  company: string;
  description: string;
  highlights: string[];
  tech: string[];
}

export interface Project {
  title: string;
  description: string;
  tech: string[];
  category: "Full-Stack" | "Backend" | "System / Devops" | "Desktop / Enterprise";
  link?: string;
  featured?: boolean;
}

export const skillsData: Skill[] = [
  // Frontend
  { name: "HTML5 / CSS3", category: "Frontend", icon: "Code" },
  { name: "JavaScript (ES6+)", category: "Frontend", icon: "Code" },
  { name: "React JS", category: "Frontend", icon: "Atom" },
  { name: "Next.js", category: "Frontend", icon: "Layers" },
  { name: "React Native", category: "Frontend", icon: "Smartphone" },
  { name: "jQuery & AJAX", category: "Frontend", icon: "Cpu" },
  { name: "Bootstrap & Tailwind", category: "Frontend", icon: "Palette" },
  
  // Backend
  { name: "Laravel", category: "Backend", icon: "Server" },
  { name: "Golang (Go)", category: "Backend", icon: "Zap" },
  { name: "Express.js / Node.js", category: "Backend", icon: "Terminal" },
  { name: ".NET Core / C#", category: "Backend", icon: "Cpu" },
  { name: "Python", category: "Backend", icon: "Binary" },
  { name: "Golang GRPC", category: "Backend", icon: "Radio" },
  { name: "REST API Development", category: "Backend", icon: "Network" },
  { name: "Lumen", category: "Backend", icon: "Server" },

  // Database & Tools
  { name: "MySQL", category: "Database & Tools", icon: "Database" },
  { name: "PostgreSQL", category: "Database & Tools", icon: "Database" },
  { name: "SQL Server", category: "Database & Tools", icon: "Database" },
  { name: "MongoDB", category: "Database & Tools", icon: "Database" },
  { name: "Elasticsearch", category: "Database & Tools", icon: "Search" },
  { name: "RabbitMQ", category: "Database & Tools", icon: "GitBranch" },
  { name: "Docker", category: "Database & Tools", icon: "Container" },
  { name: "Kong & Konga Gateway", category: "Database & Tools", icon: "ShieldAlert" },
];

export const experiencesData: Experience[] = [
  {
    period: "Juli 2024 - Sekarang",
    role: "Backend Developer",
    company: "PT Global Edge Teknologi",
    description: "Merancang, mengoptimalkan, dan memelihara infrastruktur backend berskala besar menggunakan microservices, menjamin efisiensi runtime dan keamanan data tingkat tinggi.",
    highlights: [
      "Mengembangkan microservices performa tinggi dengan arsitektur bersih di Golang.",
      "Mendesain integrasi workflow dan sinkronisasi data antar modul internal perusahaan.",
      "Mengoptimalkan query database relasional guna mempercepat respons API hingga 40%."
    ],
    tech: ["Golang", "Laravel", "MySQL", "Docker", "REST API"]
  },
  {
    period: "Mei 2023 - Juni 2024",
    role: "Backend Developer",
    company: "PT Alpha Solusi Nusantara",
    description: "Membangun aplikasi manajemen finansial (pengembalian uang / refund), platform audit internal KPK, serta dashboard manajemen penjualan (sales sales management).",
    highlights: [
      "Mengembangkan modul log-audit terpusat untuk keamanan data dashboard KPK.",
      "Mengimplementasikan engine kalkulasi refund otomatis yang presisi menghemat waktu pemrosesan klaim keuangan.",
      "Membangun dashboard sales interaktif dengan visualisasi laporan real-time."
    ],
    tech: ["Laravel", "PostgreSQL", "REST API", "Bootstrap", "AJAX"]
  },
  {
    period: "April 2022 - Mei 2023",
    role: "Backend Developer",
    company: "PT EDOT",
    description: "Melakukan pengembangan end-to-end pada modul eShop (E-commerce) dan aplikasi eMitra (Kemitraan Retail B2B) berskala nasional.",
    highlights: [
      "Mengembangkan fitur search engine eShop dengan integrasi Elasticsearch yang super cepat.",
      "Membangun service sinkronisasi stok dan order berkemampuan transaksi simultan aman menggunakan MongoDB.",
      "Berkolaborasi lintas tim dalam migrasi arsitektur monolith ke microservices menggunakan Golang."
    ],
    tech: ["Golang", "React JS", "React Native", "Node.js", "MySQL", "MongoDB", "Elasticsearch"]
  },
  {
    period: "Juli 2021 - April 2022",
    role: "Backend Developer",
    company: "PT Majapahit",
    description: "Mengembangkan platform pelatihan kepemimpinan digital berskala besar, DTS V2 (Digital Talent Scholarship), serta mengaturnya melalui gateway pengamanan internal.",
    highlights: [
      "Mendesain flow routing dan pembatasan akses API menggunakan Kong Gateway / Konga.",
      "Mengembangkan engine penjaluran (gRPC) internal di Golang untuk efisiensi transfer data biner.",
      "Mengonfigurasi load balancer untuk load puncak pendaftaran s.d. ratusan ribu kontestan."
    ],
    tech: ["Golang", "Golang GRPC", "Kong Gateway", "Konga", "PostgreSQL"]
  },
  {
    period: "Juni 2020 - Maret 2021",
    role: "Backend Developer",
    company: "PT Musafir Cakra Persada",
    description: "Mengembangkan aplikasi mobile dan web unggulan perusahaan, yaitu Lariz Maniz dan AmanahKu.",
    highlights: [
      "Menyusun struktur model database relasional yang dinamis dengan Laravel dan Java Spring.",
      "Menghubungkan API backend ke mobile client React Native secara mulus.",
      "Membuat sistem autentikasi JWT aman dan validasi input berlapis."
    ],
    tech: ["Laravel", "Java Spring", "React Native", "Vue.js", "MySQL"]
  },
  {
    period: "Agustus 2017 - Januari 2019",
    role: "System Engineer",
    company: "PT Klik Digital Sinergi",
    description: "Memantau performa dan melakukan perawatan hardware server NBP (Network Business Partner) Telkomsel.",
    highlights: [
      "Memelihara server Linux Red Hat Enterprise dengan uptime target 99.9%.",
      "Mengotomatiskan script monitoring kesehatan server reguler dengan shell script.",
      "Melaksanakan backup snapshot berkala dan restorasi andal saat failover."
    ],
    tech: ["Linux Red Hat", "Shell Scripting", "System Monitoring", "Hardware Support"]
  }
];

export const projectsData: Project[] = [
  {
    title: "Olympiad Millennial Generation",
    description: "Sistem aplikasi ujian/olimpiade terintegrasi untuk bimbingan belajar. Menangani dashboard Admin utama, dashboard institusi Sekolah, interface pengerjaan soal Siswa, serta REST API untuk mobile app client.",
    tech: ["Laravel", "PostgreSQL", "REST API", "Tailwind CSS"],
    category: "Full-Stack",
    featured: true
  },
  {
    title: "Bisma Order Management System",
    description: "Wadah sentralisasi multi-channel marketplace. Mengintegrasikan order, pemrosesan pesanan, inventorisasi stok secara real-time dari Tokopedia, Lazada, Shopee, dan TikTok Shop.",
    tech: ["Laravel", "Full-Stack PHP", "MySQL", "AJAX"],
    category: "Full-Stack",
    featured: true
  },
  {
    title: "PPID Pertamina Portal",
    description: "Situs pengelolaan data dan keterbukaan informasi publik PPID Pertamina. Menghadirkan portal admin, portal user publik, dan backend microservice dengan standard keamanan enterprise.",
    tech: ["Express.js", "Next.js", "Golang GRPC", "PostgreSQL"],
    category: "Backend",
    featured: true
  },
  {
    title: "Portal BNI Singapore",
    description: "Situs resmi portofolio profil perusahaan dan layanan finansial eksklusif BNI Cabang Singapore yang informatif, secure, dan responsif.",
    tech: [".NET Core", "HTML5/CSS3", "JavaScript", "SQL Server"],
    category: "Full-Stack",
    link: "https://www.ptbni.com.sg/",
    featured: false
  },
  {
    title: "Peradi Prof Microservices",
    description: "Infrastruktur microservices modern penyalur portal berita, registrasi anggota advokat, dan administrasi database keanggotaan terintegrasi.",
    tech: ["Golang GRPC", "Next.js", "PostgreSQL", "Tailwind CSS"],
    category: "Full-Stack",
    link: "https://peradiprof.or.id/",
    featured: false
  },
  {
    title: "Mesjid Pedia & ZIPPAY",
    description: "Modernisasi sistem donasi masjid dengan penyediaan integrasi module pembayaran digital / PPOB (ZIPPAY) dan pembersihan restrukturisasi bug pembayaran.",
    tech: ["Golang", "Lumen Framework", "MySQL", "ZIPPAY Gateway"],
    category: "Backend",
    featured: false
  }
];

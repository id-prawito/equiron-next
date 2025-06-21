import {
  FiInstagram,
  FiLinkedin,
  FiMail,
  FiMapPin,
  FiPhone,
  FiTwitter,
} from "react-icons/fi";
import {
  FaEllipsisV,
  FaCheckCircle,
  FaInstagram,
  FaChalkboardTeacher,
  FaBalanceScale,
  FaUserShield,
  FaStarHalfAlt,
  FaTrophy,
  FaRegHandshake,
  FaRegNewspaper,
  FaCommentAlt,
  FaCalendarAlt,
  FaUserAlt,
  FaWhatsapp,
  FaRegEnvelope,
} from "react-icons/fa";

import {
  about_jump_left,
  about_jump_right,
  aimtopindo_logo,
  chakra_giri_logo,
  citra_harapan_jaya_permai_logo,
  clients_shape_left,
  clients_shape_right,
  clm_logo,
  dana_paint_logo,
  gaharu_pelayaran_logo,
  hero_about,
  hero_background,
  hero_overlay,
  images_about_1,
  images_about_2,
  images_about_3,
  indo_berkat_logo,
  lliadi_logo,
  logo_equiron_white,
  mitra_galperti_logo,
  pbe_logo,
  process_jump_right,
  process_one,
  pssi_logo,
  publication_image,
  publications_shape_left,
  publications_shape_right,
  semesta_energi_service_logo,
  service_card_1_1,
  service_card_1_2,
  service_card_1_3,
  service_card_1_4,
  service_card_1_5,
  team_member_1,
  team_member_2,
  team_member_3,
  team_member_4,
  teams_bg,
  teams_jump_left,
  tridaya_esa_pakarti_logo,
  warna_warni_logo,
} from "./_equironImages";

export const NAVLINKS = [
  {
    to: "about",
    icon: FaEllipsisV,
    name: "ABOUT",
  },
  {
    to: "services",
    icon: FaEllipsisV,
    name: "SERVICES",
  },
  {
    to: "process",
    icon: FaEllipsisV,
    name: "PROCESS",
  },
  {
    to: "teams",
    icon: FaEllipsisV,
    name: "TEAMS",
  },
  {
    to: "article",
    icon: FaEllipsisV,
    name: "PUBLICATIONS",
  },
  {
    to: "clients",
    icon: FaEllipsisV,
    name: "CLIENTS",
  },
];

export const HERO_DATA_EQUIRON = {
  en: {
    hero_image_background: hero_background,
    hero_image_overlay: hero_overlay,
    hero_image_about: hero_about,
    text_small: "Your Guardian in Law",
    big_heading: "Experienced.",
    big_heading2: "Lawyers, Proven, Result",
    description:
      "Our team of experienced attorneys has a diverse range of expertise, covering a wide spectrum of legal areas. We specialize in corporate law, family law.",
    button: [
      {
        to: "https://wa.me/+6287772300770",
        nama_button: "CONTACT US",
        icon: FaChalkboardTeacher,
      },
    ],
  },

  id: {
    hero_image_background: hero_background,
    hero_image_overlay: hero_overlay,
    hero_image_about: hero_about,
    text_small: "Penjaga Anda dalam Hukum",
    big_heading: "Berpengalaman.",
    big_heading2: "Pengacara, Terbukti, Hasil",
    description:
      "Tim pengacara kami yang berpengalaman memiliki keahlian yang beragam, mencakup berbagai bidang hukum. Kami mengkhususkan diri pada hukum korporasi dan hukum keluarga.",
    button: [
      {
        to: "https://wa.me/+6287772300770",
        nama_button: "HUBUNGI KAMI",
        icon: FaChalkboardTeacher,
      },
    ],
  },
};

export const ABOUT_DATA_EQUIRON = {
  about_shape_mockup_data: [
    {
      tech_img: about_jump_right,
      tech_name: "about_jump_right",
      alt: "shape-mockup-about-right",
      class: "right",
    },
    {
      tech_img: about_jump_left,
      tech_name: "about_jump_left",
      alt: "shape-mockup-about-left",
      class: "left",
    },
  ],
  en: {
    about_title:
      "Our core values—Trust, Commitment, and Accessibility—are at the heart of everything we do.",
    about_heading: "A Legacy <span>Of</span> Legal Excellence",
    about_desc:
      "is a forward-thinking, full-service law firm dedicated to providing comprehensive legal solutions across various sectors. Founded with a vision to become a trusted legal partner, we serve individuals, businesses, and organizations with professionalism and integrity. Our core values—Trust, Commitment, and Accessibility—are at the heart of everything we do.",
    about_skill_data: [
      {
        icon: FaCheckCircle,
        text: "Trust is the foundation of our client relationships.",
      },
      {
        icon: FaCheckCircle,
        text: "Client-Centered Approach, Excellence and Proactivity",
      },
      {
        icon: FaCheckCircle,
        text: "Accessibility is central to our philosophy.",
      },
      { icon: FaCheckCircle, text: "Partners in Your Success" },
    ],
    about_stats_data: [
      { icon: <FaBalanceScale />, value: "10k+", label: "Case Done" },
      { icon: <FaUserShield />, value: "12k+", label: "Expert Attorneys" },
      { icon: <FaStarHalfAlt />, value: "15k+", label: "Happy Clients" },
      { icon: <FaTrophy />, value: "20k+", label: "Award Winning" },
    ],
  },
  id: {
    about_title:
      "Nilai-nilai utama kami—Kepercayaan, Komitmen, dan Aksesibilitas—adalah inti dari semua yang kami lakukan.",
    about_heading: "Warisan <span>Keunggulan</span> Hukum",
    about_desc:
      "adalah firma hukum layanan lengkap yang berpikiran maju, didedikasikan untuk menyediakan solusi hukum yang komprehensif di berbagai sektor. Didirikan dengan visi menjadi mitra hukum terpercaya, kami melayani individu, bisnis, dan organisasi dengan profesionalisme dan integritas. Nilai-nilai inti kami—Kepercayaan, Komitmen, dan Aksesibilitas—adalah inti dari semua yang kami lakukan.",
    about_skill_data: [
      {
        icon: FaCheckCircle,
        text: "Kepercayaan adalah fondasi hubungan kami dengan klien.",
      },
      {
        icon: FaCheckCircle,
        text: "Pendekatan Berorientasi Klien, Keunggulan, dan Proaktif",
      },
      {
        icon: FaCheckCircle,
        text: "Aksesibilitas adalah pusat dari filosofi kami.",
      },
      { icon: FaCheckCircle, text: "Mitra dalam Kesuksesan Anda" },
    ],
    about_stats_data: [
      { icon: <FaBalanceScale />, value: "10rb+", label: "Kasus Selesai" },
      { icon: <FaUserShield />, value: "12rb+", label: "Pengacara Ahli" },
      { icon: <FaStarHalfAlt />, value: "15rb+", label: "Klien Puas" },
      { icon: <FaTrophy />, value: "20rb+", label: "Penghargaan" },
    ],
  },
  about_images_one: {
    title: images_about_1,
    alt: "images_about_1",
  },
  about_images_two: {
    title: images_about_2,
    alt: "images_about_1",
  },
  about_images_three: { title: images_about_3, alt: "images_about_1" },
};

export const SERVICES_DATA_EQUIRON = {
  en: {
    service_big_heading: "Legal Services We Offer",
    service_desc:
      "At Equiron & Co., we provide forward-thinking and comprehensive legal services tailored to meet the demands of today’s dynamic legal landscape. Guided by our core values—Trust, Commitment, and Accessibility—we deliver clear, strategic legal counsel across a broad spectrum of practice areas. Whether serving individuals, corporations, or institutions, our experienced team takes a client-first approach, ensuring each solution is crafted with precision, integrity, and a deep understanding of your unique needs. With Equiron & Co. by your side, you can face legal complexities with clarity and confidence.",
    service_data_services: [
      {
        icon: service_card_1_1,
        cornerIcon: service_card_1_1,
        cardTitle: "Merger and Acquisitions",
        cardDesc:
          "Strategic legal guidance for seamless mergers, acquisitions, and business transitions.",
      },
      {
        icon: service_card_1_2,
        cornerIcon: service_card_1_2,
        cardTitle: "Banking and Finance",
        cardDesc:
          "Reliable counsel on financial regulations, lending structures, and transactional compliance.",
      },
      {
        icon: service_card_1_3,
        cornerIcon: service_card_1_3,
        cardTitle: "Land and Property",
        cardDesc:
          "Comprehensive support on real estate transactions, land use, and asset protection.",
      },
      {
        icon: service_card_1_4,
        cornerIcon: service_card_1_4,
        cardTitle: "Project Development",
        cardDesc:
          "Legal support from planning to execution, ensuring regulatory and commercial alignment.",
      },
      {
        icon: service_card_1_5,
        cornerIcon: service_card_1_5,
        cardTitle: "Technology, Media & Telecom",
        cardDesc:
          "Insightful legal solutions for innovation-driven sectors in a fast-evolving digital world.",
      },
      {
        icon: service_card_1_1,
        cornerIcon: service_card_1_1,
        cardTitle: "Corporate Compliance Services",
        cardDesc:
          "Helping businesses meet governance standards with clarity and confidence.",
      },
      {
        icon: service_card_1_2,
        cornerIcon: service_card_1_2,
        cardTitle: "Food & Beverage, Anti-Trust & Competition Law",
        cardDesc:
          "Navigating industry regulations while protecting your competitive edge.",
      },
      {
        icon: service_card_1_3,
        cornerIcon: service_card_1_3,
        cardTitle: "Start-Up Company",
        cardDesc:
          "Tailored legal frameworks to support sustainable growth from early stages.",
      },
      {
        icon: service_card_1_4,
        cornerIcon: service_card_1_4,
        cardTitle: "Criminal Law",
        cardDesc:
          "Trusted representation and defense with integrity, discretion, and expertise.",
      },
      {
        icon: service_card_1_5,
        cornerIcon: service_card_1_5,
        cardTitle: "Civil Law",
        cardDesc:
          "Resolving personal and commercial disputes with fairness and efficiency.",
      },
      {
        icon: service_card_1_1,
        cornerIcon: service_card_1_1,
        cardTitle: "Coal & Nickel Mining",
        cardDesc:
          "Legal insight into mining operations, licensing, and environmental compliance.",
      },
    ],
  },
  id: {
    service_big_heading: "Layanan Hukum yang Kami Tawarkan",
    service_desc:
      "Di Equiron & Co., kami menyediakan layanan hukum yang berpikiran maju dan komprehensif yang disesuaikan untuk memenuhi tuntutan lanskap hukum yang dinamis saat ini. Dipandu oleh nilai-nilai inti kami—Kepercayaan, Komitmen, dan Aksesibilitas—kami memberikan nasihat hukum yang jelas dan strategis di berbagai bidang praktik. Baik melayani individu, perusahaan, atau lembaga, tim kami yang berpengalaman mengutamakan pendekatan yang berfokus pada klien, memastikan setiap solusi dibuat dengan presisi, integritas, dan pemahaman yang mendalam terhadap kebutuhan unik Anda. Bersama Equiron & Co., Anda dapat menghadapi kompleksitas hukum dengan kejelasan dan keyakinan.",
    service_data_services: [
      {
        icon: service_card_1_1,
        cornerIcon: service_card_1_1,
        cardTitle: "Merger dan Akuisisi",
        cardDesc:
          "Panduan hukum strategis untuk merger, akuisisi, dan transisi bisnis yang lancar.",
      },
      {
        icon: service_card_1_2,
        cornerIcon: service_card_1_2,
        cardTitle: "Perbankan dan Keuangan",
        cardDesc:
          "Konsultasi tepercaya tentang regulasi keuangan, struktur pinjaman, dan kepatuhan transaksi.",
      },
      {
        icon: service_card_1_3,
        cornerIcon: service_card_1_3,
        cardTitle: "Tanah dan Properti",
        cardDesc:
          "Dukungan menyeluruh untuk transaksi properti, penggunaan lahan, dan perlindungan aset.",
      },
      {
        icon: service_card_1_4,
        cornerIcon: service_card_1_4,
        cardTitle: "Pengembangan Proyek",
        cardDesc:
          "Dukungan hukum dari perencanaan hingga pelaksanaan, memastikan kepatuhan dan keselarasan komersial.",
      },
      {
        icon: service_card_1_5,
        cornerIcon: service_card_1_5,
        cardTitle: "Teknologi, Media & Telekomunikasi",
        cardDesc:
          "Solusi hukum cerdas untuk sektor berbasis inovasi di dunia digital yang terus berkembang.",
      },
      {
        icon: service_card_1_1,
        cornerIcon: service_card_1_1,
        cardTitle: "Layanan Kepatuhan Korporasi",
        cardDesc:
          "Membantu bisnis memenuhi standar tata kelola dengan kejelasan dan keyakinan.",
      },
      {
        icon: service_card_1_2,
        cornerIcon: service_card_1_2,
        cardTitle: "Makanan & Minuman, Anti-Monopoli & Hukum Persaingan",
        cardDesc:
          "Menavigasi regulasi industri sambil melindungi keunggulan kompetitif Anda.",
      },
      {
        icon: service_card_1_3,
        cornerIcon: service_card_1_3,
        cardTitle: "Perusahaan Rintisan (Start-Up)",
        cardDesc:
          "Kerangka hukum khusus untuk mendukung pertumbuhan berkelanjutan sejak tahap awal.",
      },
      {
        icon: service_card_1_4,
        cornerIcon: service_card_1_4,
        cardTitle: "Hukum Pidana",
        cardDesc:
          "Perwakilan dan pembelaan terpercaya dengan integritas, kerahasiaan, dan keahlian.",
      },
      {
        icon: service_card_1_5,
        cornerIcon: service_card_1_5,
        cardTitle: "Hukum Perdata",
        cardDesc:
          "Menyelesaikan sengketa pribadi dan komersial dengan adil dan efisien.",
      },
      {
        icon: service_card_1_1,
        cornerIcon: service_card_1_1,
        cardTitle: "Pertambangan Batubara & Nikel",
        cardDesc:
          "Wawasan hukum dalam operasi pertambangan, perizinan, dan kepatuhan lingkungan.",
      },
    ],
  },
};

export const PROCESS_DATA_EQUIRON = {
  en: {
    process_text: "Work Process",
    process_title: "Navigating the Law: Your Assurance of Peace",
    process_data_works: [
      {
        title: "Consultations",
        desc: `The consultation begins with a client inquiry. We schedule a meeting, either online or in-person. During the session, we identify legal issues and gather relevant documents. After analysis, we provide legal advice and possible solutions. If needed, follow-up consultations are arranged. Confidentiality is guaranteed throughout. We ensure clarity, professionalism, and support every step of the way to resolve legal matters effectively.`,
        icon: FaRegHandshake,
      },
      {
        title: "Executions",
        desc: `After consultation, we draft necessary legal documents and agreements. Upon client approval, we proceed with filing, negotiation, or representation. We coordinate with relevant authorities or parties to ensure proper execution. Throughout the process, we provide updates and clarify each step. Final outcomes are reviewed with the client. Our goal is to deliver effective, timely, and compliant results that reflect the agreed legal strategy and protect the client’s interests.`,
        icon: FaRegNewspaper,
      },
    ],
  },
  id: {
    process_text: "Proses Kerja",
    process_title: "Menavigasi Hukum: Jaminan Ketenteraman Anda",
    process_data_works: [
      {
        title: "Konsultasi",
        desc: `Konsultasi dimulai dengan pertanyaan dari klien. Kami menjadwalkan pertemuan, baik secara online maupun tatap muka. Selama sesi, kami mengidentifikasi masalah hukum dan mengumpulkan dokumen yang relevan. Setelah analisis, kami memberikan saran hukum dan solusi yang memungkinkan. Jika diperlukan, konsultasi lanjutan dijadwalkan. Kerahasiaan dijamin sepanjang proses. Kami memastikan kejelasan, profesionalisme, dan dukungan di setiap langkah untuk menyelesaikan masalah hukum secara efektif.`,
        icon: FaRegHandshake,
      },
      {
        title: "Eksekusi",
        desc: `Setelah konsultasi, kami menyusun dokumen dan perjanjian hukum yang diperlukan. Setelah disetujui klien, kami melanjutkan dengan pengajuan, negosiasi, atau perwakilan hukum. Kami berkoordinasi dengan pihak berwenang atau pihak terkait untuk memastikan eksekusi yang tepat. Sepanjang proses, kami memberikan pembaruan dan penjelasan. Hasil akhir ditinjau bersama klien. Tujuan kami adalah memberikan hasil yang efektif, tepat waktu, dan sesuai hukum yang mencerminkan strategi hukum yang disepakati dan melindungi kepentingan klien.`,
        icon: FaRegNewspaper,
      },
    ],
  },
  process_shape_mockup_data: [
    {
      tech_img: process_jump_right,
      tech_name: "process_jump_right",
      alt: "process_jump_right",
      class: "right",
    },
  ],
  process_one_images: {
    title: process_one,
    alt: "process_one",
  },
};

export const TEAMS_DATA_EQUIRON = {
  en: {
    teams_bg_images: {
      title: teams_bg,
      alt: "teams_bg",
    },
    teams_shape_mockup_data: [
      {
        tech_img: teams_jump_left,
        tech_name: "shape-mockup-teams",
        alt: "teams_jump_left",
        class: "right",
      },
    ],
    teams_text: "Our Teams",
    teams_title: "Dedicated Lawyers, Proven Results",
    teams_members: [
      {
        name: "Smith Miller",
        title: "Attorney",
        image: team_member_1,
        socials: [
          { icon: FaInstagram, url: "https://instagram.com/smithmiller" },
          { icon: FiTwitter, url: "https://twitter.com/smithmiller" },
          { icon: FiLinkedin, url: "https://linkedin.com/in/smithmiller" },
          { icon: FiPhone, url: "tel:+628111111111" },
        ],
      },
      {
        name: "Samira Dsuza",
        title: "Senior Partner",
        image: team_member_2,
        socials: [
          { icon: FaInstagram, url: "https://instagram.com/samira" },
          { icon: FiTwitter, url: "https://twitter.com/samira" },
          { icon: FiLinkedin, url: "https://linkedin.com/in/samira" },
          { icon: FiPhone, url: "tel:+628122222222" },
        ],
      },
      {
        name: "Michel Phelps",
        title: "Chief Justice",
        image: team_member_3,
        socials: [
          { icon: FaInstagram, url: "https://instagram.com/phelps" },
          { icon: FiTwitter, url: "https://twitter.com/phelps" },
          { icon: FiLinkedin, url: "https://linkedin.com/in/phelps" },
          { icon: FiPhone, url: "tel:+628133333333" },
        ],
      },
      {
        name: "Sarah Rahma",
        title: "Legal Advisor",
        image: team_member_4,
        socials: [
          { icon: FaInstagram, url: "https://instagram.com/sarahrahma" },
          { icon: FiTwitter, url: "https://twitter.com/sarahrahma" },
          { icon: FiLinkedin, url: "https://linkedin.com/in/sarahrahma" },
          { icon: FiPhone, url: "tel:+628144444444" },
        ],
      },
    ],
  },

  id: {
    teams_bg_images: {
      title: teams_bg,
      alt: "latar_tim",
    },
    teams_shape_mockup_data: [
      {
        tech_img: teams_jump_left,
        tech_name: "shape-mockup-tim",
        alt: "tim_lompat_kiri",
        class: "right",
      },
    ],
    teams_text: "Tim Kami",
    teams_title: "Pengacara Berdedikasi, Hasil Terbukti",
    teams_members: [
      {
        name: "Smith Miller",
        title: "Pengacara",
        image: team_member_1,
        socials: [
          { icon: FaInstagram, url: "https://instagram.com/smithmiller" },
          { icon: FiTwitter, url: "https://twitter.com/smithmiller" },
          { icon: FiLinkedin, url: "https://linkedin.com/in/smithmiller" },
          { icon: FiPhone, url: "tel:+628111111111" },
        ],
      },
      {
        name: "Samira Dsuza",
        title: "Mitra Senior",
        image: team_member_2,
        socials: [
          { icon: FaInstagram, url: "https://instagram.com/samira" },
          { icon: FiTwitter, url: "https://twitter.com/samira" },
          { icon: FiLinkedin, url: "https://linkedin.com/in/samira" },
          { icon: FiPhone, url: "tel:+628122222222" },
        ],
      },
      {
        name: "Michel Phelps",
        title: "Kepala Hakim",
        image: team_member_3,
        socials: [
          { icon: FaInstagram, url: "https://instagram.com/phelps" },
          { icon: FiTwitter, url: "https://twitter.com/phelps" },
          { icon: FiLinkedin, url: "https://linkedin.com/in/phelps" },
          { icon: FiPhone, url: "tel:+628133333333" },
        ],
      },
      {
        name: "Sarah Rahma",
        title: "Penasihat Hukum",
        image: team_member_4,
        socials: [
          { icon: FaInstagram, url: "https://instagram.com/sarahrahma" },
          { icon: FiTwitter, url: "https://twitter.com/sarahrahma" },
          { icon: FiLinkedin, url: "https://linkedin.com/in/sarahrahma" },
          { icon: FiPhone, url: "tel:+628144444444" },
        ],
      },
    ],
  },
};

export const PUBLICATIONS_DATA_EQUIRON = {
  en: {
    publications_text: "Publications",
    publications_title: "Our Publications & Update",
    publications_articles: [
      {
        author: "Smith Miller",
        title: "Steps to Pursue a Career as a Legal Project Manager.",
        image: publication_image,
        date: "22 Sep, 2025",
        comments: "2 Comments",
        icons: {
          user: FaUserAlt,
          calendar: FaCalendarAlt,
          comment: FaCommentAlt,
        },
      },
      {
        author: "Samira",
        title: "Top 10 Legal Tech Trends in 2025.",
        image: publication_image,
        date: "18 Sep, 2025",
        comments: "4 Comments",
        icons: {
          user: FaUserAlt,
          calendar: FaCalendarAlt,
          comment: FaCommentAlt,
        },
      },
      {
        author: "Michel",
        title: "How Legal Frameworks Shape Business Success.",
        image: publication_image,
        date: "14 Sep, 2025",
        comments: "5 Comments",
        icons: {
          user: FaUserAlt,
          calendar: FaCalendarAlt,
          comment: FaCommentAlt,
        },
      },
      {
        author: "Sarah",
        title: "Understanding Contract Law in Modern Business.",
        image: publication_image,
        date: "10 Sep, 2025",
        comments: "8 Comments",
        icons: {
          user: FaUserAlt,
          calendar: FaCalendarAlt,
          comment: FaCommentAlt,
        },
      },
      {
        author: "David",
        title: "The Importance of Due Diligence in Legal Practice.",
        image: publication_image,
        date: "05 Sep, 2025",
        comments: "3 Comments",
        icons: {
          user: FaUserAlt,
          calendar: FaCalendarAlt,
          comment: FaCommentAlt,
        },
      },
    ],
    publications_shape_mockup_data: [
      {
        tech_img: publications_shape_right,
        tech_name: "publications_shape_right",
        alt: "publications-shape-right",
        class: "right",
      },
      {
        tech_img: publications_shape_left,
        tech_name: "publications_shape_left",
        alt: "publications-shape-left",
        class: "left",
      },
    ],
  },

  id: {
    publications_text: "Publikasi",
    publications_title: "Publikasi & Pembaruan Kami",
    publications_articles: [
      {
        author: "Smith Miller",
        title: "Langkah Menjadi Manajer Proyek Hukum yang Sukses.",
        image: publication_image,
        date: "22 Sep, 2025",
        comments: "2 Komentar",
        icons: {
          user: FaUserAlt,
          calendar: FaCalendarAlt,
          comment: FaCommentAlt,
        },
      },
      {
        author: "Samira",
        title: "10 Tren Teknologi Hukum Teratas di Tahun 2025.",
        image: publication_image,
        date: "18 Sep, 2025",
        comments: "4 Komentar",
        icons: {
          user: FaUserAlt,
          calendar: FaCalendarAlt,
          comment: FaCommentAlt,
        },
      },
      {
        author: "Michel",
        title: "Bagaimana Kerangka Hukum Mempengaruhi Keberhasilan Bisnis.",
        image: publication_image,
        date: "14 Sep, 2025",
        comments: "5 Komentar",
        icons: {
          user: FaUserAlt,
          calendar: FaCalendarAlt,
          comment: FaCommentAlt,
        },
      },
      {
        author: "Sarah",
        title: "Memahami Hukum Kontrak dalam Bisnis Modern.",
        image: publication_image,
        date: "10 Sep, 2025",
        comments: "8 Komentar",
        icons: {
          user: FaUserAlt,
          calendar: FaCalendarAlt,
          comment: FaCommentAlt,
        },
      },
      {
        author: "David",
        title: "Pentingnya Uji Tuntas dalam Praktik Hukum.",
        image: publication_image,
        date: "05 Sep, 2025",
        comments: "3 Komentar",
        icons: {
          user: FaUserAlt,
          calendar: FaCalendarAlt,
          comment: FaCommentAlt,
        },
      },
    ],
    publications_shape_mockup_data: [
      {
        tech_img: publications_shape_right,
        tech_name: "publications_shape_right",
        alt: "publikasi-bentuk-kanan",
        class: "right",
      },
      {
        tech_img: publications_shape_left,
        tech_name: "publications_shape_left",
        alt: "publikasi-bentuk-kiri",
        class: "left",
      },
    ],
  },
};

export const CLIENTS_DATA_EQUIRON = {
  en: {
    clients_text: "Clients",
    clients_title: "Our Featured Clients",
  },
  id: {
    clients_text: "Klien",
    clients_title: "Klien Unggulan Kami",
  },

  clients_data_client: [
    {
      name: "PSSI",
      title: "pssi_logo",
      image: pssi_logo,
    },
    {
      name: "Chakra Giri",
      title: "chakra_giri_logo",
      image: chakra_giri_logo,
    },
    {
      name: "Dana Paint",
      title: "dana_paint_logo",
      image: dana_paint_logo,
    },
    {
      name: "CLM",
      title: "clm_logo",
      image: clm_logo,
    },
    {
      name: "Gaharu Pelayaran",
      title: "gaharu_pelayaran_logo",
      image: gaharu_pelayaran_logo,
    },
    {
      name: "Citra Harapan Jaya Permai",
      title: "citra_harapan_jaya_permai_logo",
      image: citra_harapan_jaya_permai_logo,
    },
    {
      name: "Lliadi",
      title: "lliadi_logo",
      image: lliadi_logo,
    },
    {
      name: "AIMTOPINDO",
      title: "aimtopindo_logo",
      image: aimtopindo_logo,
    },
    {
      name: "Indo Berkat",
      title: "indo_berkat_logo",
      image: indo_berkat_logo,
    },
    {
      name: "Mitra Galperti",
      title: "mitra_galperti_logo",
      image: mitra_galperti_logo,
    },
    {
      name: "PBE",
      title: "pbe_logo",
      image: pbe_logo,
    },
    {
      name: "Semesta Energi Service",
      title: "semesta_energi_service_logo",
      image: semesta_energi_service_logo,
    },
    {
      name: "Tridaya Esa Pakarti",
      title: "tridaya_esa_pakarti_logo",
      image: tridaya_esa_pakarti_logo,
    },
    {
      name: "Warna Warni",
      title: "warna_warni_logo",
      image: warna_warni_logo,
    },
  ],
  clients_shape_mockup_data: [
    {
      tech_img: clients_shape_right,
      tech_name: "clients_shape_right",
      alt: "clients-shape-right",
      class: "right",
    },
    {
      tech_img: clients_shape_left,
      tech_name: "clients_shape_left",
      alt: "clients-shape-left",
      class: "left",
    },
  ],
};

export const CONTACT_DATA_EQUIRON = {
  en: {
    contact_text: "Have Any Questions?",
    contact_title: "Get in Touch with Us",
    contact_form_title: "Submit Your Inquiry",
    contact_form_desc:
      "<b>Note: </b>Send us a message or request a consultation—we're happy to assist you as our valued client. Thank you.",
    contact_form_inputs: [
      {
        type: "radio",
        title_fields: "Request Type",
        value: "request_type",
        value_radio: [
          { label: "Individual", value: "Individual" },
          { label: "Non Individual", value: "Non Individual" },
        ],
      },
      {
        label: "Name",
        placeholder: "Your Name",
        value: "name",
        type: "text",
      },
      {
        label: "Phone Number",
        placeholder: "Phone Number",
        value: "phone",
        type: "number",
      },
      {
        label: "Email",
        placeholder: "Email",
        value: "email",
        type: "text",
      },
      {
        label: "Practice Area",
        placeholder: "Practice Area",
        value: "area_praktek",
        value_select: [
          { name: "Merger and Acquisitions", value: "Merger and Acquisitions" },
          { name: "Banking and Finance", value: "Banking and Finance" },
          { name: "Land and Property", value: "Land and Property" },
          { name: "Project Development", value: "Project Development" },
          {
            name: "Technology, Media & Telecom",
            value: "Technology, Media & Telecom",
          },
          {
            name: "Corporate Compliance Services",
            value: "Corporate Compliance Services",
          },
          {
            name: "Food & Beverage, Anti-Trust & Competition Law",
            value: "Food & Beverage, Anti-Trust & Competition Law",
          },
          { name: "Start-Up Company", value: "Start-Up Company" },
          { name: "Criminal Law", value: "Criminal Law" },
          { name: "Civil Law", value: "Civil Law" },
          { name: "Coal & Nickel Mining", value: "Coal & Nickel Mining" },
        ],
        type: "select",
      },
      {
        label: "Your Message",
        placeholder: "Your Message",
        value: "message",
        type: "textarea",
      },
    ],
    contact_note: {
      label: "Other Notes:",
      text: "Reply to your inquiry will be sent via the phone number you provide. Please ensure it's active and correct.",
    },
    contact_success_info:
      "Info: Please check your WhatsApp for follow-up messages.",
    contact_button: "Send Consultation",
    contact_title_address: "Address Information",
    contact_title_contact: "Contact Information",
    contact_title_address_data: [
      {
        title: "Head Office",
        address:
          "Jalan Pengasinan No. 3 Jatimulya, Bekasi, West Java 17115, Indonesia",
        information: [
          {
            label: "Email:",
            value: "equironandco@gmail.com",
            href: "mailto:equironandco@gmail.com",
          },
          {
            label: "Phone Number:",
            value: "6287772300770",
            href: "https://wa.me/6287772300770",
          },
        ],
        maps: {
          href: "https://maps.app.goo.gl/QnPgB2Svhveq7kpJ8",
          text: "Open in Maps",
        },
      },
    ],
  },

  id: {
    contact_text: "Ada Pertanyaan?",
    contact_title: "Hubungi Kami",
    contact_form_title: "Kirimkan Pertanyaan Anda",
    contact_form_desc:
      "<b>Keterangan : </b>Kirimkan pesan atau konsultasi kepada kami, senang melayani anda sebagai klien kami. Terima kasih.",
    contact_form_inputs: [
      {
        type: "radio",
        title_fields: "Tipe Request",
        value: "request_type",
        value_radio: [
          { label: "Individu", value: "Individual" },
          { label: "Non Individu", value: "Non Individual" },
        ],
      },
      {
        label: "Nama",
        placeholder: "Nama",
        value: "name",
        type: "text",
      },
      {
        label: "No. Handphone",
        placeholder: "No. Handphone",
        value: "phone",
        type: "number",
      },
      {
        label: "Email",
        placeholder: "Email",
        value: "email",
        type: "text",
      },
      {
        label: "Area Praktek",
        placeholder: "Area Praktek",
        value: "area_praktek",
        value_select: [
          { name: "Merger and Acquisitions", value: "Merger and Acquisitions" },
          { name: "Banking and Finance", value: "Banking and Finance" },
          { name: "Land and Property", value: "Land and Property" },
          { name: "Project Development", value: "Project Development" },
          {
            name: "Technology, Media & Telecom",
            value: "Technology, Media & Telecom",
          },
          {
            name: "Corporate Compliance Services",
            value: "Corporate Compliance Services",
          },
          {
            name: "Food & Beverage, Anti-Trust & Competition Law",
            value: "Food & Beverage, Anti-Trust & Competition Law",
          },
          { name: "Start-Up Company", value: "Start-Up Company" },
          { name: "Criminal Law", value: "Criminal Law" },
          { name: "Civil Law", value: "Civil Law" },
          { name: "Coal & Nickel Mining", value: "Coal & Nickel Mining" },
        ],
        type: "select",
      },
      {
        label: "Pesan Anda",
        placeholder: "Pesan Anda",
        value: "message",
        type: "textarea",
      },
    ],
    contact_note: {
      label: "Catatan Lain :",
      text: "Pesan balasan dari konsultasi akan dikirim melalui No. HP yang Anda masukkan, jadi pastikan aktif dan benar.",
    },
    contact_success_info:
      "Informasi: Silakan cek pesan WhatsApp secara berkala.",
    contact_button: "Kirim Pesan Konsultasi",
    contact_title_address: "Informasi Alamat",
    contact_title_contact: "Informasi Kontak",
    contact_title_address_data: [
      {
        title: "Kantor Pusat",
        address:
          "Jalan Pengasinan No. 3 Jatimulya, Bekasi, Jawa Barat 17115, Indonesia",
        information: [
          {
            label: "Email :",
            value: "equironandco@gmail.com",
            href: "mailto:equironandco@gmail.com",
          },
          {
            label: "No. Handphone :",
            value: "6287772300770",
            href: "https://wa.me/6287772300770",
          },
        ],
        maps: {
          href: "https://maps.app.goo.gl/QnPgB2Svhveq7kpJ8",
          text: "Buka Maps",
        },
      },
    ],
  },

  contact_media_sosial: [
    {
      icon: FaWhatsapp,
      label: "Whatsapp",
      title: "6287772300770",
      to: "https://wa.me/6287772300770",
    },
    {
      icon: FiPhone,
      label: "Telepon",
      title: "+6287772300770",
      to: "https://wa.me/+6287772300770",
    },
    {
      icon: FiMail,
      label: "Email",
      title: "equironandco@gmail.com",
      to: "mailto:equironandco@gmail.com",
    },
    {
      icon: FiInstagram,
      label: "Instagram",
      title: "@equironandco",
      to: "https://www.instagram.com/equironandco/",
    },
  ],
};

export const FOOTER_DATA_EQUIRON = {
  en: {
    footer_text: "Our Services",
    footer_data_services: [
      [
        { name: "Merger and Acquisitions", value: "Merger and Acquisitions" },
        { name: "Banking and Finance", value: "Banking and Finance" },
      ],
      [
        { name: "Land and Property", value: "Land and Property" },
        { name: "Project Development", value: "Project Development" },
      ],
      [
        {
          name: "Technology, Media & Telecom",
          value: "Technology, Media & Telecom",
        },
        {
          name: "Corporate Compliance Services",
          value: "Corporate Compliance Services",
        },
      ],
      [
        {
          name: "Food & Beverage, Anti-Trust & Competition Law",
          value: "Food & Beverage, Anti-Trust & Competition Law",
        },
        { name: "Start-Up Company", value: "Start-Up Company" },
      ],
      [
        { name: "Criminal Law", value: "Criminal Law" },
        { name: "Civil Law", value: "Civil Law" },
      ],
      [{ name: "Coal & Nickel Mining", value: "Coal & Nickel Mining" }],
    ],
    footer_logo_equiron: {
      img: logo_equiron_white,
      alt: "logo_equiron_white",
    },
    footer_company_desc:
      "Equiron & Co. is a forward-thinking, full-service law firm dedicated to providing comprehensive legal solutions across various sectors.",
    footer_social_media: [
      {
        to: "https://www.instagram.com/equironandco/",
        label: "Instagram",
        icon: FaInstagram,
      },
      { to: "mailto:equironandco@gmail.com", label: "Email", icon: FiMail },
      { to: "tel:+6287772300770", label: "Phone", icon: FiPhone },
    ],
    footer_contact_info: [
      {
        icon: FiMapPin,
        label: "Location",
        desc: "Jalan Pengasinan No. 3 Jatimulya, Bekasi, Jawa Barat 17115, Indonesia",
      },
      {
        icon: FiPhone,
        label: "Phone",
        desc: "+62 8777-230-0770",
      },
      {
        icon: FaRegEnvelope,
        label: "Email",
        desc: "equironandco@gmail.com",
      },
    ],
    footer_whatsapp: {
      value: "6287772300770",
      href: "https://wa.me/6287772300770",
      text: "Contact Us via Whatsapp",
    },
  },

  id: {
    footer_text: "Layanan Kami",
    footer_data_services: [
      [
        { name: "Merger dan Akuisisi", value: "Merger and Acquisitions" },
        { name: "Perbankan dan Keuangan", value: "Banking and Finance" },
      ],
      [
        { name: "Pertanahan dan Properti", value: "Land and Property" },
        { name: "Pengembangan Proyek", value: "Project Development" },
      ],
      [
        {
          name: "Teknologi, Media & Telekomunikasi",
          value: "Technology, Media & Telecom",
        },
        {
          name: "Layanan Kepatuhan Korporat",
          value: "Corporate Compliance Services",
        },
      ],
      [
        {
          name: "Makanan & Minuman, Anti-Monopoli & Hukum Persaingan",
          value: "Food & Beverage, Anti-Trust & Competition Law",
        },
        { name: "Perusahaan Rintisan", value: "Start-Up Company" },
      ],
      [
        { name: "Hukum Pidana", value: "Criminal Law" },
        { name: "Hukum Perdata", value: "Civil Law" },
      ],
      [
        {
          name: "Pertambangan Batubara & Nikel",
          value: "Coal & Nickel Mining",
        },
      ],
    ],
    footer_logo_equiron: {
      img: logo_equiron_white,
      alt: "logo_equiron_white",
    },
    footer_company_desc:
      "Equiron & Co. adalah firma hukum penuh visi ke depan yang menyediakan solusi hukum menyeluruh di berbagai sektor.",
    footer_social_media: [
      {
        to: "https://www.instagram.com/equironandco/",
        label: "Instagram",
        icon: FaInstagram,
      },
      { to: "mailto:equironandco@gmail.com", label: "Email", icon: FiMail },
      { to: "tel:+6287772300770", label: "Phone", icon: FiPhone },
    ],
    footer_contact_info: [
      {
        icon: FiMapPin,
        label: "Lokasi",
        desc: "Jalan Pengasinan No. 3 Jatimulya, Bekasi, Jawa Barat 17115, Indonesia",
      },
      {
        icon: FiPhone,
        label: "Telepon",
        desc: "+62 8777-230-0770",
      },
      {
        icon: FaRegEnvelope,
        label: "Email",
        desc: "equironandco@gmail.com",
      },
    ],
    footer_whatsapp: {
      value: "6287772300770",
      href: "https://wa.me/6287772300770",
      text: "Hubungi Kami via Whatsapp",
    },
  },
};

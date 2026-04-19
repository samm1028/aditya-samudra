
export const portfolioData = {
  name: "Aditya Samudra",
  title: "Web Developer",
  overview: "Saya adalah seorang Web Developer yang memiliki keahlian dalam merancang dan membangun website modern, responsif, dan user-friendly. Berpengalaman dalam menggunakan teknologi web seperti HTML, CSS, JavaScript, dan framework pendukung, saya selalu berusaha menciptakan solusi digital yang efektif serta memberikan pengalaman terbaik bagi pengguna. Saya memiliki ketertarikan tinggi terhadap dunia teknologi dan pengembangan web. Selain itu, saya terus belajar dan mengikuti perkembangan tren terbaru untuk meningkatkan kualitas pekerjaan saya. Dengan kemampuan komunikasi yang baik, saya mampu bekerja secara kolaboratif dalam tim maupun secara mandiri untuk menyelesaikan proyek dengan hasil yang memuaskan. Selain itu, saya juga memiliki kemampuan dalam bidang editing video menggunakan aplikasi seperti CapCut dan Kinemaster untuk menghasilkan konten visual yang menarik dan profesional. Saya juga menguasai penggunaan Microsoft Word untuk membuat, mengelola, dan menyusun dokumen secara rapi, sistematis, dan sesuai standar kebutuhan profesional.",

  
  skills: [
    { name: "HTML", icon: "html", color: "#E34F26" },
    { name: "CSS", icon: "css", color: "#1572B6" },
    { name: "JavaScript", icon: "js", color: "#F7DF1E" },
   { name: "React", icon: "react", color: "black" },

  ],

  techStack: [  
    { name: "HTML", level: "98%" },
    { name: "CSS", level: "95%" },
    { name: "JavaScript", level: "85%" },
    { name: "React", level: "75%" },
    { name: "Tailwind", level: "70%" },
    { name: "Php", level: "50%" },
    { name: "Figma", level: "80%" },
    { name: "Canva", level: "95%" },
    { name: "McWord", level: "95%" },
    { name: "Capcut", level: "95%" },
    { name: "KineMaster", level: "95%" },
  ],

  

  experience: [
    {
      position: "Peraktik Kerja Lapangan (Web Development)",
      company: "PT. Treemas Solusi Utama",
      period: "19 Aug 2025 - 21 Nov 2025",
      description: "Selama saya pkl, saya telah membuat sebuah website company profile untuk perusahaan tempat saya pkl yaitu PT. Treemas Solusi Utama. Website ini berfungsi sebagai media informasi mengenai perusahaan tersebut kepada klien maupun calon klien."
    }
  ],

 projects: [
    {
      title: "Company Profil Website - PT. Treemas Solusi Utama",
      description: "Saya telah membuat website company profile untuk PT. Treemas Solusi Utama menggunakan framework React.js dan Tailwind CSS. Website ini menampilkan informasi mengenai perusahaan, layanan yang ditawarkan, portofolio proyek, dan kontak.",
      tech: ["React.js", "HTML", "Bootstrap 5.3.0", "Tailwind"],
      image: "./images/treemas.png",
      link: "https://samm1028.github.io/treemas-solusi-utama/",  // ← Tambahkan link
      github: "https://github.com/samm1028/treemas-solusi-utama.git"  // ← Opsional: link GitHub
    },
    {
      title: "Website penyedia jasa joki & website pribadi",
      description: "Saya membuat website pribadi yang bertujuan untuk menampilkan informasi media sosial serta memudahkan orang dalam menggunakan layanan pembuatan (joki) website yang saya sediakan.",
      tech: ["HTML", "CSS", "JavaScript"],
      image: "./images/pribadi.png",
      link: "https://portfoilio-aditya-samudra.netlify.app/",  // ← Tambahkan link
      github: "https://github.com/samm1028/joki-website.git"
    },
    {
      title: "Web perusahaan (Sky Tech)",
      description: "Ini adalah website company profile yang dibuat berdasarkan permintaan klien. Dalam proses pengembangannya, saya menggunakan HTML, CSS, dan JavaScript untuk membangun struktur, tampilan, serta interaksi pada website tersebut. Website ini dirancang agar informatif, responsif, dan mudah diakses, sehingga dapat merepresentasikan identitas perusahaan klien secara profesional.",
      tech: ["HTML", "CSS", "JavaScript"],
      image: "./images/skytech.png",
      link: "https://samm1028.github.io/project-customer/",  // ← Tambahkan link
      github: "https://github.com/samm1028/project-customer.git"
    },
    {
      title: "Certificate dicoding (Web Development)",
      description: "Saya telah mengikuti program bootcamp yang diselenggarakan oleh Dicoding. Pada program tersebut, saya memperoleh sertifikat \"Belajar Dasar Web\" setelah berhasil menyelesaikan seluruh quest yang diberikan.",
      tech: ["Certificate", "Artificial Intelligence", "Dicoding"],
      image: "./images/sertiweb.png",
      link: "https://drive.google.com/file/d/1wonfGYqwZo0zJ1ddVATct6M_BI904tZT/view?usp=drive_link",  // ← Link sertifikat
      github: null  // ← Tidak ada GitHub untuk sertifikat
    },
    {
      title: "Certificate dicoding (AI)",
      description: "Saya telah mengikuti program bootcamp yang diselenggarakan oleh Dicoding. Pada program tersebut, saya memperoleh sertifikat \"Belajar Dasar AI\" setelah berhasil menyelesaikan seluruh quest yang diberikan.",
      tech: ["Certificate", "Web Development", "Dicoding"],
      image: "./images/ai.png",
      link: "https://drive.google.com/file/d/1FKbyXXJIgNoKB-OhtsFeQwaVoM9EvjqA/view?usp=drive_link",  // ← Link sertifikat
      github: null
    },
    {
      title: "Certificate lomba (Fotografi)",
      description: "Convert an input image to a pencil sketch using OpenCV and Matplotlib libraries.",
      tech: ["Certificate", "Fotografi"],
      image: "./images/foto.png",
      link: "https://drive.google.com/file/d/19QEyuTmr-kzj2R7iLrq2d9hTMbQDKmYb/view?usp=drive_link",  // ← Link sertifikat
      github: null
    }
  ]
};
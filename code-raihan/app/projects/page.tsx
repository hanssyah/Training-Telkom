import React from 'react';

export default function Projects() {
  // Data project kamu. Kamu bisa tambah, edit, atau hapus item di sini dengan mudah!
  const projectList = [
    {
      title: "IoT Soil Moisture Monitor",
      desc: "Sistem monitoring kelembapan tanah berbasis IoT menggunakan ESP32, Firebase, dan MIT App Inventor lengkap dengan dokumentasi GitHub.",
      tech: ["ESP32", "Firebase", "TypeScript"],
      link: "https://github.com"
    },
    {
      title: "Access Point Config Tutorial",
      desc: "Video panduan teknis interaktif mengenai konfigurasi Access Point untuk jaringan sekolah menengah kejuruan.",
      tech: ["Networking", "Video Guide"],
      link: "#"
    },
    {
      title: "Personal Profile Site",
      desc: "Portofolio pribadi berbasis Next.js dan React untuk memajang profil, hobi, dan showcase project development.",
      tech: ["Next.js", "React.js", "TypeScript"],
      link: "#"
    },
    {
      title: "My First Website",
      desc: "Website statis sederhana yang pertama kali saya buat menggunakan HTML murni, CSS, dan dideploy via Live Server.",
      tech: ["HTML", "CSS", "Vanilla JS"],
      link: "#"
    }
  ];

  return (
    <>
      {/* 1. Efek Hover khusus untuk Card Project */}
      <style>{`
        .project-card {
          background-color: #09090b;
          border: 1px solid #27272a;
          border-radius: 12px;
          padding: 24px;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          text-decoration: none;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          height: 100%;
          box-sizing: border-box;
        }

        /* Efek interaktif saat kursor masuk */
        .project-card:hover {
          transform: translateY(-6px); /* Mengangkat kartu ke atas */
          border-color: #38bdf8; /* Mengubah border menjadi biru menyala */
          box-shadow: 0 10px 30px -10px rgba(56, 189, 248, 0.15); /* Efek glow biru tipis */
        }

        .project-card:hover .project-title {
          color: #38bdf8; /* Judul ikut berubah warna saat di-hover */
        }
      `}</style>

      {/* 2. Layout Grid Halaman */}
      <div style={styles.container}>
        <div style={styles.contentWrapper}>
          
          {/* Judul Halaman */}
          <h1 style={styles.title}>My Projects</h1>
          <p style={styles.subtitle}>Beberapa sistem, jaringan, dan web development yang pernah saya kerjakan.</p>
          
          <hr style={styles.divider} />

          {/* Container Grid */}
          <div style={styles.gridContainer}>
            {projectList.map((project, index) => (
              <a 
                href={project.link} 
                key={index} 
                className="project-card"
                target="_blank" 
                rel="noopener noreferrer"
              >
                <div>
                  {/* Judul Project */}
                  <h3 className="project-title" style={styles.cardTitle}>
                    {project.title} <span style={styles.arrow}>→</span>
                  </h3>
                  
                  {/* Deskripsi */}
                  <p style={styles.cardText}>{project.desc}</p>
                </div>

                {/* Badge Teknologi di bagian bawah card */}
                <div style={styles.techContainer}>
                  {project.tech.map((techName, tIndex) => (
                    <span key={tIndex} style={styles.techBadge}>
                      {techName}
                    </span>
                  ))}
                </div>
              </a>
            ))}
          </div>

        </div>
      </div>
    </>
  );
}

// Styling tata letak (Layout)
const styles = {
  container: {
    backgroundColor: '#000000', // Tetap matching hitam pekat
    minHeight: '85vh',
    fontFamily: "'Segoe UI', Roboto, sans-serif",
    color: '#ffffff',
    padding: '40px 20px',
    display: 'flex',
    justifyContent: 'center',
  },
  contentWrapper: {
    maxWidth: '1000px',
    width: '100%',
    textAlign: 'center' as const,
  },
  title: {
    fontSize: '36px',
    fontWeight: '700',
    marginBottom: '10px',
    letterSpacing: '-0.5px',
  },
  subtitle: {
    fontSize: '16px',
    color: '#a1a1aa',
    marginBottom: '30px',
  },
  divider: {
    border: '0',
    borderTop: '1px solid #27272a',
    marginBottom: '40px',
  },
  gridContainer: {
    display: 'grid',
    // Membuat grid otomatis 2 kolom di layar sedang/besar, 1 kolom di HP
    gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
    gap: '20px',
    textAlign: 'left' as const,
  },
  cardTitle: {
    fontSize: '20px',
    fontWeight: '600',
    color: '#ffffff',
    margin: '0 0 10px 0',
    transition: 'color 0.2s ease',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  arrow: {
    fontSize: '16px',
    color: '#71717a',
  },
  cardText: {
    fontSize: '14px',
    color: '#a1a1aa',
    lineHeight: '1.6',
    margin: '0 0 20px 0',
  },
  techContainer: {
    display: 'flex',
    gap: '8px',
    flexWrap: 'wrap' as const,
    marginTop: 'auto', // Memaksa badge menempel di bawah kartu
  },
  techBadge: {
    backgroundColor: '#18181b',
    color: '#cbd5e1',
    padding: '4px 10px',
    borderRadius: '6px',
    fontSize: '12px',
    fontWeight: '500',
    border: '1px solid #27272a',
  },
};
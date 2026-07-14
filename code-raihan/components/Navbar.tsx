import React from 'react';

export default function Navbar() {
  // Kamu bisa ganti link atau nama menu di sini
  const menuItems = [
    { name: 'Home', link: '/' },
    { name: 'About', link: '/about' },
    { name: 'Projects', link: '/projects' }
  ];

  return (
    <>
      {/* 1. CSS Global khusus untuk menangani efek Hover secara halus */}
      <style>{`
        .nav-link {
          color: #a1a1aa; /* Warna abu-abu soft di awal */
          text-decoration: none;
          font-size: 15px;
          font-weight: 500;
          padding: 8px 16px;
          border-radius: 8px;
          transition: all 0.3s ease; /* Transisi animasi mulus */
          position: relative;
        }

        /* Saat kursor diarahkan (Hover) */
        .nav-link:hover {
          color: #ffffff; /* Teks jadi putih terang */
          background-color: #18181b; /* Background tombol menjadi gelap/abu tua */
          transform: translateY(-1px); /* Sedikit efek naik ke atas */
        }

        /* Efek aktif/fokus saat diklik */
        .nav-link:active {
          background-color: #09090b; /* Lebih gelap lagi saat ditekan */
          transform: translateY(0);
        }

        /* Desain logo/nama brand */
        .brand-logo {
          font-weight: 700;
          font-size: 18px;
          color: #ffffff;
          letter-spacing: -0.5px;
          text-decoration: none;
        }
      `}</style>

      {/* 2. Struktur Navbarnya */}
      <nav style={styles.navbar}>
        <div style={styles.navContainer}>
          
          {/* Sisi Kiri: Logo / Nama Kamu */}
          <a href="/" className="brand-logo" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <span>⚡</span> portfolio
          </a>

          {/* Sisi Kanan: Menu Navigasi */}
          <div style={styles.menuContainer}>
            {menuItems.map((item, index) => (
              <a 
                key={index} 
                href={item.link} 
                className="nav-link"
              >
                {item.name}
              </a>
            ))}
          </div>

        </div>
      </nav>
    </>
  );
}

// Styling tata letak (Layout) Navbar
const styles = {
  navbar: {
    position: 'sticky' as const,
    top: 0,
    zIndex: 1000,
    // Efek Glassmorphism (transparan ngeblur mewah)
    backgroundColor: 'rgba(0, 0, 0, 0.75)', 
    backdropFilter: 'blur(12px)',
    WebkitBackdropFilter: 'blur(12px)',
    borderBottom: '1px solid #18181b', // Garis tipis pembatas di bawah navbar
    fontFamily: "'Segoe UI', Roboto, sans-serif",
    width: '100%',
  },
  navContainer: {
    maxWidth: '1000px',
    margin: '0 auto',
    padding: '16px 24px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  menuContainer: {
    display: 'flex',
    gap: '8px', // Jarak antar tombol menu
    alignItems: 'center',
  },
};
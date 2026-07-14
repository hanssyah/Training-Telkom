import React from 'react';

export default function Home() {
  const nama: string = "Rehan";
  const pekerjaan: string = "Full Stack Developer"; // Sesuai dengan screenshot terbarumu!

  return (
    <>
      {/* CSS internal khusus untuk efek hover pada badge React yang interaktif */}
      <style>{`
        .react-badge {
          background-color: #334155;
          color: #94a3b8;
          padding: 6px 12px;
          border-radius: 20px;
          fontSize: 13px;
          font-weight: 500;
          border: 1px solid #475569;
          text-decoration: none;
          display: inline-flex;
          align-items: center;
          gap: 6px;
          transition: all 0.2s ease-in-out;
          cursor: pointer;
        }

        /* Efek ketika kursor diarahkan ke badge React */
        .react-badge:hover {
          background-color: #0f172a;
          color: #38bdf8; /* Teks berubah jadi biru khas React */
          border-color: #38bdf8; /* Border menyala biru */
          transform: scale(1.08); /* Sedikit membesar */
          box-shadow: 0 0 10px rgba(56, 189, 248, 0.3); /* Efek glow biru */
        }
      `}</style>

      <div style={styles.container}>
        {/* Kartu Profil */}
        <div style={styles.card}>
          
          {/* Avatar Laptop Guy */}
          <div style={styles.avatarContainer}>
            <div style={styles.avatar}>
              <span style={{ fontSize: '40px' }}>👨‍💻</span>
            </div>
          </div>

          {/* Teks Perkenalan */}
          <h1 style={styles.heading}>
            Halo, Salam Kenal! <span style={styles.wave}>👋</span>
          </h1>
          
          <p style={styles.text}>
            Nama saya adalah <strong style={styles.highlight}>{nama}</strong>.
          </p>
          <p style={styles.text}>
            Saat ini saya bekerja sebagai <strong style={styles.highlightBlue}>{pekerjaan}</strong>.
          </p>

          {/* Badge Teknologi */}
          <div style={styles.badgeContainer}>
            {/* Link Rick Roll disisipkan di badge React ini */}
            <a 
              href="" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="react-badge"
              title="Click me!"
            >
              ⚛️ React
            </a>
            
            <span style={styles.badge}>📘 TypeScript</span>
            <span style={styles.badge}>▲ Next.js</span>
          </div>

        </div>
      </div>
    </>
  );
}

// Styling tata letak
const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '80vh', 
    backgroundColor: '#000000', // BG diubah menjadi Hitam Pekat sesuai request!
    fontFamily: "'Segoe UI', Roboto, Helvetica, Arial, sans-serif",
    color: '#f8fafc',
    padding: '20px',
  },
  card: {
    backgroundColor: '#09090b', // Card hitam pekat yang sedikit lebih terang dari BG luar
    padding: '40px 30px',
    borderRadius: '16px',
    boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.5), 0 8px 10px -6px rgba(0, 0, 0, 0.5)',
    textAlign: 'center' as const,
    maxWidth: '450px',
    width: '100%',
    border: '1px solid #18181b', // Border card diperhalus agar rapi di BG hitam
  },
  avatarContainer: {
    display: 'flex',
    justifyContent: 'center',
    marginBottom: '20px',
  },
  avatar: {
    width: '90px',
    height: '90px',
    borderRadius: '50%',
    backgroundColor: '#18181b',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    border: '3px solid #38bdf8', 
    boxShadow: '0 0 15px rgba(56, 189, 248, 0.2)',
  },
  heading: {
    fontSize: '28px',
    fontWeight: '700',
    marginBottom: '15px',
    color: '#ffffff',
  },
  wave: {
    display: 'inline-block',
  },
  text: {
    fontSize: '16px',
    color: '#cbd5e1',
    lineHeight: '1.6',
    margin: '8px 0',
  },
  highlight: {
    color: '#f59e0b', 
    fontWeight: '600',
  },
  highlightBlue: {
    color: '#38bdf8', 
    fontWeight: '600',
  },
  badgeContainer: {
    display: 'flex',
    justifyContent: 'center',
    gap: '10px',
    marginTop: '25px',
    flexWrap: 'wrap' as const,
  },
  badge: {
    backgroundColor: '#18181b',
    color: '#94a3b8',
    padding: '6px 12px',
    borderRadius: '20px',
    fontSize: '13px',
    fontWeight: '500',
    border: '1px solid #27272a',
  },
};
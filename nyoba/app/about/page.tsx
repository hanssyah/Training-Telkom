import React from 'react';

export default function AboutMe() {
  // Data dinamis (bisa kamu ubah isinya sesuai hobi & background kamu)
  const hobi = ["🎮 Gaming", "🎧 Listening Music", "☕ Coffee Brewing", "📸 Photography"];
  const skills = ["HTML/CSS", "JavaScript", "TypeScript", "React.js", "Tailwind CSS"];

  return (
    <div style={styles.container}>
      <div style={styles.contentWrapper}>
        
        {/* Judul Utama */}
        <h1 style={styles.title}>About Me</h1>
        <p style={styles.subtitle}>Kenal lebih dekat dengan saya, aktivitas, dan hal yang saya sukai.</p>
        
        <hr style={styles.divider} />

        {/* Grid Konten */}
        <div style={styles.gridContainer}>
          
          {/* Kotak 1: Background / Cerita */}
          <div style={styles.card}>
            <h3 style={styles.cardTitle}>📖 My Background</h3>
            <p style={styles.cardText}>
              Saya adalah seorang Frontend Developer yang berbasis di Indonesia. Saya sangat antusias membangun antarmuka web yang interaktif, bersih, dan nyaman digunakan oleh user. Berawal dari rasa penasaran bagaimana sebuah website dibuat, sekarang menjadi jalan ninja saya!
            </p>
          </div>

          {/* Kotak 2: Hobi */}
          <div style={styles.card}>
            <h3 style={styles.cardTitle}>✨ Hobbies & Interests</h3>
            <div style={styles.listContainer}>
              {hobi.map((item, index) => (
                <span key={index} style={styles.interestItem}>
                  {item}
                </span>
              ))}
            </div>
          </div>

          {/* Kotak 3: Tech Stack (Opsional tapi keren buat dipajang) */}
          <div style={styles.cardFullWidth}>
            <h3 style={styles.cardTitle}>🛠️ Current Tech Stack</h3>
            <div style={styles.badgeContainer}>
              {skills.map((skill, index) => (
                <span key={index} style={styles.skillBadge}>
                  {skill}
                </span>
              ))}
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}

// Styling terpusat agar rapi
const styles = {
  container: {
    backgroundColor: '#000000', // Sesuai dengan warna background hitam di screenshot-mu
    minHeight: '80vh',
    fontFamily: "'Segoe UI', Roboto, sans-serif",
    color: '#ffffff',
    padding: '40px 20px',
    display: 'flex',
    justifyContent: 'center',
  },
  contentWrapper: {
    maxWidth: '800px',
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
    color: '#a1a1aa', // Abu-abu khas dark mode
    marginBottom: '30px',
  },
  divider: {
    border: '0',
    borderTop: '1px solid #27272a',
    marginBottom: '40px',
  },
  gridContainer: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '20px',
    textAlign: 'left' as const,
  },
  card: {
    backgroundColor: '#09090b', // Hitam agak terang sedikit (card)
    border: '1px solid #27272a',
    borderRadius: '12px',
    padding: '24px',
  },
  cardFullWidth: {
    backgroundColor: '#09090b',
    border: '1px solid #27272a',
    borderRadius: '12px',
    padding: '24px',
    gridColumn: '1 / -1', // Supaya memanjang penuh di bawahnya
  },
  cardTitle: {
    fontSize: '18px',
    fontWeight: '600',
    marginBottom: '15px',
    color: '#f4f4f5',
  },
  cardText: {
    fontSize: '15px',
    color: '#d4d4d8',
    lineHeight: '1.6',
  },
  listContainer: {
    display: 'flex',
    flexDirection: 'column' as const,
    gap: '10px',
  },
  interestItem: {
    fontSize: '15px',
    color: '#d4d4d8',
    backgroundColor: '#18181b',
    padding: '8px 12px',
    borderRadius: '8px',
    border: '1px solid #27272a',
  },
  badgeContainer: {
    display: 'flex',
    gap: '10px',
    flexWrap: 'wrap' as const,
  },
  skillBadge: {
    backgroundColor: '#ffffff',
    color: '#000000', // Efek monokrom minimalis (badge putih teks hitam)
    padding: '6px 14px',
    borderRadius: '20px',
    fontSize: '14px',
    fontWeight: '500',
  },
};
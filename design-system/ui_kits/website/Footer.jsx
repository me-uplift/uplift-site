// Footer.jsx — Uplift Digital Studio
export function Footer({ onNavigate }) {
  const cols = [
    { title: 'Services', links: ['Content Strategy', 'UGC Production', 'Community Management', 'Analytics'] },
    { title: 'Company', links: ['About', 'Work', 'Careers', 'Press'] },
    { title: 'Contact', links: ['Book a call', 'hello@upliftdigital.co', 'Instagram', 'LinkedIn'] },
  ];

  return (
    <footer style={{ background: '#0A0A12', borderTop: '1px solid rgba(255,255,255,0.07)', padding: '64px 48px 40px' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1fr', gap: 48, marginBottom: 64 }}>
          {/* Brand col */}
          <div>
            <img src="../../assets/UpliftLogo_White.svg" alt="Uplift" style={{ height: 28, marginBottom: 20 }} />
            <p style={{ fontFamily: "'Satoshi',sans-serif", fontSize: 14, color: '#6B6B85', lineHeight: 1.7, maxWidth: 280, marginBottom: 24 }}>
              Social media management and UGC content for brands ready to grow.
            </p>
            {/* Social icons */}
            <div style={{ display: 'flex', gap: 12 }}>
              {['IG', 'TK', 'LI', 'YT'].map(s => (
                <div key={s} style={{
                  width: 36, height: 36, borderRadius: 10,
                  background: '#1A1A28', border: '1px solid rgba(255,255,255,0.08)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  cursor: 'pointer',
                }}>
                  <span style={{ fontFamily: "'Satoshi',sans-serif", fontSize: 10, fontWeight: 700, color: '#6B6B85' }}>{s}</span>
                </div>
              ))}
            </div>
          </div>
          {/* Link cols */}
          {cols.map((col, i) => (
            <div key={i}>
              <div style={{ fontFamily: "'Satoshi',sans-serif", fontSize: 11, fontWeight: 500, color: '#fff', textTransform: 'uppercase', letterSpacing: '0.12em', marginBottom: 20 }}>{col.title}</div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                {col.links.map(link => (
                  <span key={link} style={{ fontFamily: "'Satoshi',sans-serif", fontSize: 14, color: '#6B6B85', cursor: 'pointer', fontWeight: 400 }}
                    onMouseEnter={e => e.target.style.color = '#B0B0C8'}
                    onMouseLeave={e => e.target.style.color = '#6B6B85'}
                  >{link}</span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: '1px solid rgba(255,255,255,0.07)', paddingTop: 24 }}>
          <span style={{ fontFamily: "'Satoshi',sans-serif", fontSize: 12, color: '#3A3A54' }}>© 2025 Uplift Digital Studio. All rights reserved.</span>
          <div style={{ display: 'flex', gap: 24 }}>
            {['Privacy', 'Terms'].map(l => (
              <span key={l} style={{ fontFamily: "'Satoshi',sans-serif", fontSize: 12, color: '#3A3A54', cursor: 'pointer' }}>{l}</span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

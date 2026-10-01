// Nav.jsx — Uplift Digital Studio
export function Nav({ activePage, onNavigate }) {
  const [scrolled, setScrolled] = React.useState(false);

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const links = ['Services', 'Work', 'Pricing', 'About'];

  return (
    <nav style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
      padding: '0 48px',
      height: '72px',
      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      background: scrolled ? 'rgba(16,16,26,0.92)' : 'transparent',
      backdropFilter: scrolled ? 'blur(16px)' : 'none',
      borderBottom: scrolled ? '1px solid rgba(255,255,255,0.07)' : 'none',
      transition: 'all 250ms cubic-bezier(0.4,0,0.2,1)',
    }}>
      {/* Logo */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 10, cursor: 'pointer' }} onClick={() => onNavigate('home')}>
        <img src="../../assets/UpliftLogo_White.svg" alt="Uplift" style={{ height: 32 }} />
      </div>

      {/* Links */}
      <div style={{ display: 'flex', gap: 36, alignItems: 'center' }}>
        {links.map(link => (
          <button key={link} onClick={() => onNavigate(link.toLowerCase())} style={{
            background: 'none', border: 'none', cursor: 'pointer',
            fontFamily: "'Satoshi', sans-serif",
            fontSize: 13, fontWeight: 500, letterSpacing: '0.1em',
            textTransform: 'uppercase',
            color: activePage === link.toLowerCase() ? '#fff' : '#6B6B85',
            transition: 'color 200ms',
          }}>{link}</button>
        ))}
      </div>

      {/* CTA */}
      <button style={{
        fontFamily: "'Satoshi', sans-serif",
        fontWeight: 700, fontSize: 14,
        color: '#fff',
        background: 'linear-gradient(90deg, #E8998A, #C97BAF, #9B70C0, #5E65B5)',
        border: 'none', cursor: 'pointer',
        borderRadius: 999, padding: '11px 24px',
        letterSpacing: '0.02em',
        transition: 'opacity 200ms, transform 200ms',
      }}
        onMouseEnter={e => { e.target.style.opacity = '0.9'; e.target.style.transform = 'scale(1.02)'; }}
        onMouseLeave={e => { e.target.style.opacity = '1'; e.target.style.transform = 'scale(1)'; }}
      >
        Book a call
      </button>
    </nav>
  );
}

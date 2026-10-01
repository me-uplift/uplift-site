// Services.jsx — Uplift Digital Studio
export function Services() {
  const services = [
    {
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18M9 21V9"/>
        </svg>
      ),
      grad: ['#E8998A','#C97BAF'],
      title: 'Content Strategy',
      desc: 'Platform-specific strategy built around your audience, goals, and competitive landscape.',
    },
    {
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M15 10l4.553-2.069A1 1 0 0121 8.87V15.13a1 1 0 01-1.447.898L15 14M3 8a2 2 0 012-2h8a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2V8z"/>
        </svg>
      ),
      grad: ['#C97BAF','#9B70C0'],
      title: 'UGC Production',
      desc: 'Creator-led content that feels native — shot, edited, and delivered on your schedule.',
    },
    {
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75"/>
        </svg>
      ),
      grad: ['#9B70C0','#7878C8'],
      title: 'Community Management',
      desc: 'Daily engagement, DM handling, and comment moderation — your brand, always present.',
    },
    {
      icon: (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M18 20V10M12 20V4M6 20v-6"/>
        </svg>
      ),
      grad: ['#7878C8','#5E65B5'],
      title: 'Analytics & Reporting',
      desc: 'Monthly reports with real numbers — reach, engagement, growth, and what to do next.',
    },
  ];

  return (
    <section style={{ background: '#10101A', padding: '96px 48px' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        {/* Header */}
        <div style={{ marginBottom: 64 }}>
          <div style={{ fontFamily: "'Satoshi',sans-serif", fontSize: 11, fontWeight: 500, color: '#9B70C0', textTransform: 'uppercase', letterSpacing: '0.15em', marginBottom: 16 }}>
            What we do
          </div>
          <h2 style={{ fontFamily: "'Satoshi',sans-serif", fontSize: 40, fontWeight: 900, color: '#fff', letterSpacing: '-0.02em', lineHeight: 1.1, maxWidth: 500 }}>
            Everything your brand needs to grow.
          </h2>
        </div>

        {/* Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 16 }}>
          {services.map((svc, i) => (
            <div key={i} style={{
              background: '#1A1A28',
              border: '1px solid rgba(255,255,255,0.08)',
              borderRadius: 16,
              padding: 28,
              transition: 'transform 250ms cubic-bezier(0.4,0,0.2,1), box-shadow 250ms',
              cursor: 'default',
            }}
              onMouseEnter={e => { e.currentTarget.style.transform='translateY(-3px)'; e.currentTarget.style.boxShadow='0 8px 40px rgba(0,0,0,0.25)'; }}
              onMouseLeave={e => { e.currentTarget.style.transform='translateY(0)'; e.currentTarget.style.boxShadow='none'; }}
            >
              <div style={{
                width: 44, height: 44, borderRadius: 12,
                background: `linear-gradient(135deg, ${svc.grad[0]}, ${svc.grad[1]})`,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                marginBottom: 20,
              }}>
                {svc.icon}
              </div>
              <div style={{ fontFamily: "'Satoshi',sans-serif", fontSize: 17, fontWeight: 700, color: '#fff', marginBottom: 10 }}>{svc.title}</div>
              <div style={{ fontFamily: "'Satoshi',sans-serif", fontSize: 14, color: '#6B6B85', lineHeight: 1.7 }}>{svc.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

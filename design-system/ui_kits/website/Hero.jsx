// Hero.jsx — Uplift Digital Studio
export function Hero({ onNavigate }) {
  return (
    <section style={{
      minHeight: '100vh',
      background: '#10101A',
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      flexDirection: 'column',
      textAlign: 'center',
      padding: '120px 48px 80px',
      position: 'relative',
      overflow: 'hidden',
    }}>
      {/* Background gradient glow */}
      <div style={{
        position: 'absolute', top: '20%', left: '50%', transform: 'translateX(-50%)',
        width: 800, height: 400,
        background: 'radial-gradient(ellipse, rgba(155,112,192,0.18) 0%, rgba(94,101,181,0.08) 50%, transparent 75%)',
        pointerEvents: 'none',
      }} />

      {/* Eyebrow */}
      <div style={{
        display: 'inline-flex', alignItems: 'center', gap: 8,
        background: 'rgba(155,112,192,0.12)',
        border: '1px solid rgba(155,112,192,0.25)',
        borderRadius: 999,
        padding: '6px 16px',
        marginBottom: 32,
      }}>
        <div style={{ width: 6, height: 6, borderRadius: '50%', background: 'linear-gradient(135deg,#E8998A,#9B70C0)' }} />
        <span style={{ fontFamily: "'Satoshi',sans-serif", fontSize: 11, fontWeight: 500, color: '#B0B0C8', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
          Social Media &amp; UGC Agency
        </span>
      </div>

      {/* Headline */}
      <h1 style={{
        fontFamily: "'Satoshi', sans-serif",
        fontSize: 'clamp(52px, 6vw, 88px)',
        fontWeight: 900,
        lineHeight: 1.05,
        letterSpacing: '-0.02em',
        color: '#fff',
        maxWidth: 820,
        marginBottom: 16,
      }}>
        Your audience is ready.
      </h1>
      <h1 style={{
        fontFamily: "'Satoshi', sans-serif",
        fontStyle: 'italic',
        fontSize: 'clamp(52px, 6vw, 88px)',
        fontWeight: 900,
        lineHeight: 1.05,
        letterSpacing: '-0.02em',
        background: 'linear-gradient(90deg, #E8998A 0%, #C97BAF 35%, #9B70C0 65%, #5E65B5 100%)',
        WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
        maxWidth: 820,
        marginBottom: 32,
      }}>
        Let's give them something worth watching.
      </h1>

      {/* Subheadline */}
      <p style={{
        fontFamily: "'Satoshi', sans-serif",
        fontSize: 18, fontWeight: 400, color: '#6B6B85',
        lineHeight: 1.7, maxWidth: 520,
        marginBottom: 48,
      }}>
        Full-service social media management and UGC content — built for brands ready to grow.
      </p>

      {/* CTAs */}
      <div style={{ display: 'flex', gap: 14, alignItems: 'center', flexWrap: 'wrap', justifyContent: 'center' }}>
        <button onClick={() => onNavigate('pricing')} style={{
          fontFamily: "'Satoshi',sans-serif", fontWeight: 700, fontSize: 15,
          color: '#fff',
          background: 'linear-gradient(90deg, #E8998A, #C97BAF, #9B70C0, #5E65B5)',
          border: 'none', cursor: 'pointer',
          borderRadius: 999, padding: '16px 36px',
          transition: 'opacity 200ms, transform 200ms',
        }}
          onMouseEnter={e => { e.currentTarget.style.opacity='0.9'; e.currentTarget.style.transform='scale(1.02)'; }}
          onMouseLeave={e => { e.currentTarget.style.opacity='1'; e.currentTarget.style.transform='scale(1)'; }}
        >
          See pricing
        </button>
        <button onClick={() => onNavigate('work')} style={{
          fontFamily: "'Satoshi',sans-serif", fontWeight: 700, fontSize: 15,
          color: '#fff',
          background: 'transparent',
          border: '1px solid rgba(255,255,255,0.18)', cursor: 'pointer',
          borderRadius: 999, padding: '15px 36px',
          transition: 'border-color 200ms',
        }}
          onMouseEnter={e => e.currentTarget.style.borderColor='rgba(255,255,255,0.4)'}
          onMouseLeave={e => e.currentTarget.style.borderColor='rgba(255,255,255,0.18)'}
        >
          View our work
        </button>
      </div>

      {/* Stats row */}
      <div style={{
        display: 'flex', gap: 64, marginTop: 96,
        borderTop: '1px solid rgba(255,255,255,0.07)',
        paddingTop: 48,
      }}>
        {[
          { num: '340%', label: 'Avg. reach increase' },
          { num: '50+', label: 'Brands managed' },
          { num: '2M+', label: 'Impressions delivered' },
        ].map(stat => (
          <div key={stat.num} style={{ textAlign: 'center' }}>
            <div style={{
              fontFamily: "'Satoshi',sans-serif", fontSize: 36, fontWeight: 900,
              letterSpacing: '-0.02em',
              background: 'linear-gradient(90deg, #E8998A, #9B70C0, #5E65B5)',
              WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
            }}>{stat.num}</div>
            <div style={{ fontFamily: "'Satoshi',sans-serif", fontSize: 11, fontWeight: 500, color: '#6B6B85', textTransform: 'uppercase', letterSpacing: '0.1em', marginTop: 6 }}>{stat.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

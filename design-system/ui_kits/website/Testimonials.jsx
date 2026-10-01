// Testimonials.jsx — Uplift Digital Studio
export function Testimonials() {
  const testimonials = [
    {
      quote: "We went from 4,000 to 28,000 followers in three months. The content actually sounds like us.",
      name: "Maria González",
      role: "Founder, Solana Skincare",
      result: "+600% follower growth",
    },
    {
      quote: "Uplift handles everything. I stopped thinking about content and started thinking about the business.",
      name: "James Okafor",
      role: "CEO, Verve Apparel",
      result: "2.3M impressions / month",
    },
    {
      quote: "The UGC videos perform better than anything our in-house team ever made. And they cost less.",
      name: "Sofia Reyes",
      role: "Marketing Director, Tierra Foods",
      result: "4.8× ROAS on paid social",
    },
  ];

  return (
    <section style={{ background: '#10101A', padding: '96px 48px' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <div style={{ marginBottom: 56 }}>
          <div style={{ fontFamily: "'Satoshi',sans-serif", fontSize: 11, fontWeight: 500, color: '#9B70C0', textTransform: 'uppercase', letterSpacing: '0.15em', marginBottom: 16 }}>Results</div>
          <h2 style={{ fontFamily: "'Satoshi',sans-serif", fontSize: 40, fontWeight: 900, color: '#fff', letterSpacing: '-0.02em' }}>Brands that invested. Results that prove it.</h2>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 16 }}>
          {testimonials.map((t, i) => (
            <div key={i} style={{
              background: '#1A1A28',
              border: '1px solid rgba(255,255,255,0.08)',
              borderRadius: 16, padding: 28,
              display: 'flex', flexDirection: 'column', gap: 20,
            }}>
              {/* Result badge */}
              <div style={{
                display: 'inline-flex', alignItems: 'center',
                background: 'rgba(155,112,192,0.12)',
                border: '1px solid rgba(155,112,192,0.2)',
                borderRadius: 999, padding: '5px 14px', alignSelf: 'flex-start',
              }}>
                <span style={{ fontFamily: "'Satoshi',sans-serif", fontSize: 11, fontWeight: 700, color: '#9B70C0', letterSpacing: '0.06em' }}>{t.result}</span>
              </div>
              {/* Quote */}
              <p style={{ fontFamily: "'Satoshi', sans-serif", fontSize: 19, fontWeight: 400, color: '#fff', lineHeight: 1.55, fontStyle: 'italic', flex: 1 }}>
                "{t.quote}"
              </p>
              {/* Attribution */}
              <div style={{ display: 'flex', alignItems: 'center', gap: 12, borderTop: '1px solid rgba(255,255,255,0.07)', paddingTop: 18 }}>
                <div style={{
                  width: 36, height: 36, borderRadius: '50%',
                  background: `linear-gradient(135deg, ${['#E8998A','#C97BAF','#9B70C0'][i]}, ${['#C97BAF','#9B70C0','#5E65B5'][i]})`,
                }} />
                <div>
                  <div style={{ fontFamily: "'Satoshi',sans-serif", fontSize: 13, fontWeight: 700, color: '#fff' }}>{t.name}</div>
                  <div style={{ fontFamily: "'Satoshi',sans-serif", fontSize: 12, color: '#6B6B85', fontWeight: 500 }}>{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

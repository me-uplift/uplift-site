// Pricing.jsx — Uplift Digital Studio
export function Pricing() {
  const [annual, setAnnual] = React.useState(false);

  const plans = [
    {
      name: 'Starter',
      price: { monthly: 1200, annual: 1000 },
      desc: 'For brands just getting serious about social.',
      features: ['8 posts/month', '2 platforms', 'Monthly strategy call', 'Basic analytics report', 'Caption + hashtag copy'],
      cta: 'Get started',
      highlight: false,
    },
    {
      name: 'Growth',
      price: { monthly: 2500, annual: 2100 },
      desc: 'Full-service management for scaling brands.',
      features: ['20 posts/month', '3 platforms', 'UGC content (4 videos)', 'Weekly check-ins', 'Advanced analytics', 'Community management'],
      cta: 'Most popular',
      highlight: true,
    },
    {
      name: 'Premium',
      price: { monthly: 4800, annual: 4000 },
      desc: 'End-to-end creative and social infrastructure.',
      features: ['Unlimited posts', 'All platforms', 'UGC content (12 videos)', 'Dedicated strategist', 'Full analytics suite', 'Paid social management', 'Bilingual content'],
      cta: 'Talk to us',
      highlight: false,
    },
  ];

  return (
    <section style={{ background: '#0A0A12', padding: '96px 48px' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: 56 }}>
          <div style={{ fontFamily: "'Satoshi',sans-serif", fontSize: 11, fontWeight: 500, color: '#9B70C0', textTransform: 'uppercase', letterSpacing: '0.15em', marginBottom: 16 }}>Pricing</div>
          <h2 style={{ fontFamily: "'Satoshi',sans-serif", fontSize: 40, fontWeight: 900, color: '#fff', letterSpacing: '-0.02em', marginBottom: 24 }}>Simple, transparent pricing.</h2>
          {/* Toggle */}
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 12, background: '#1A1A28', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 999, padding: '6px 20px' }}>
            <span style={{ fontFamily: "'Satoshi',sans-serif", fontSize: 13, fontWeight: 500, color: annual ? '#6B6B85' : '#fff' }}>Monthly</span>
            <div onClick={() => setAnnual(!annual)} style={{
              width: 40, height: 22, borderRadius: 999, cursor: 'pointer',
              background: annual ? 'linear-gradient(90deg,#9B70C0,#5E65B5)' : '#2A2A3C',
              position: 'relative', transition: 'background 250ms',
            }}>
              <div style={{
                position: 'absolute', top: 3, left: annual ? 21 : 3,
                width: 16, height: 16, borderRadius: '50%', background: '#fff',
                transition: 'left 200ms',
              }} />
            </div>
            <span style={{ fontFamily: "'Satoshi',sans-serif", fontSize: 13, fontWeight: 500, color: annual ? '#fff' : '#6B6B85' }}>Annual <span style={{ color: '#5BB585' }}>−20%</span></span>
          </div>
        </div>

        {/* Cards */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 16, alignItems: 'start' }}>
          {plans.map((plan, i) => (
            <div key={i} style={{
              background: plan.highlight ? '#1A1A28' : '#10101A',
              border: plan.highlight ? '1px solid rgba(155,112,192,0.4)' : '1px solid rgba(255,255,255,0.08)',
              borderRadius: 20,
              padding: 32,
              position: 'relative', overflow: 'hidden',
              boxShadow: plan.highlight ? '0 0 40px rgba(155,112,192,0.15)' : 'none',
            }}>
              {plan.highlight && (
                <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 3, background: 'linear-gradient(90deg,#E8998A,#C97BAF,#9B70C0,#5E65B5)' }} />
              )}
              <div style={{ fontFamily: "'Satoshi',sans-serif", fontSize: 11, fontWeight: 500, color: '#6B6B85', textTransform: 'uppercase', letterSpacing: '0.12em', marginBottom: 8 }}>{plan.name}</div>
              <div style={{ display: 'flex', alignItems: 'baseline', gap: 4, marginBottom: 8 }}>
                <span style={{ fontFamily: "'Satoshi',sans-serif", fontSize: 44, fontWeight: 900, color: '#fff', letterSpacing: '-0.03em' }}>
                  ${(annual ? plan.price.annual : plan.price.monthly).toLocaleString()}
                </span>
                <span style={{ fontFamily: "'Satoshi',sans-serif", fontSize: 14, color: '#6B6B85', fontWeight: 500 }}>/mo</span>
              </div>
              <div style={{ fontFamily: "'Satoshi',sans-serif", fontSize: 14, color: '#6B6B85', lineHeight: 1.6, marginBottom: 28 }}>{plan.desc}</div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 10, marginBottom: 32 }}>
                {plan.features.map((f, j) => (
                  <div key={j} style={{ display: 'flex', gap: 10, alignItems: 'center' }}>
                    <div style={{ width: 16, height: 16, borderRadius: '50%', background: 'linear-gradient(135deg,#9B70C0,#5E65B5)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                      <svg width="8" height="8" viewBox="0 0 10 10" fill="none"><path d="M2 5l2.5 2.5L8 3" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                    </div>
                    <span style={{ fontFamily: "'Satoshi',sans-serif", fontSize: 14, color: '#B0B0C8', fontWeight: 400 }}>{f}</span>
                  </div>
                ))}
              </div>
              <button style={{
                width: '100%',
                fontFamily: "'Satoshi',sans-serif", fontWeight: 700, fontSize: 14,
                color: '#fff',
                background: plan.highlight ? 'linear-gradient(90deg,#E8998A,#C97BAF,#9B70C0,#5E65B5)' : '#2A2A3C',
                border: 'none', cursor: 'pointer',
                borderRadius: 999, padding: '14px',
                transition: 'opacity 200ms, transform 200ms',
              }}
                onMouseEnter={e => { e.currentTarget.style.opacity='0.85'; e.currentTarget.style.transform='scale(1.01)'; }}
                onMouseLeave={e => { e.currentTarget.style.opacity='1'; e.currentTarget.style.transform='scale(1)'; }}
              >{plan.cta}</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* @ds-bundle: {"format":4,"namespace":"UpliftDigitalStudioDesignSystem_f3d16e","components":[{"name":"Footer","sourcePath":"ui_kits/website/Footer.jsx"},{"name":"Hero","sourcePath":"ui_kits/website/Hero.jsx"},{"name":"Nav","sourcePath":"ui_kits/website/Nav.jsx"},{"name":"Pricing","sourcePath":"ui_kits/website/Pricing.jsx"},{"name":"Services","sourcePath":"ui_kits/website/Services.jsx"},{"name":"Testimonials","sourcePath":"ui_kits/website/Testimonials.jsx"}],"sourceHashes":{"ui_kits/website/Footer.jsx":"c7219c4919e7","ui_kits/website/Hero.jsx":"8f60fee9229e","ui_kits/website/Nav.jsx":"78628f325bd6","ui_kits/website/Pricing.jsx":"7e581141732c","ui_kits/website/Services.jsx":"a24160106808","ui_kits/website/Testimonials.jsx":"35f41dd80a75"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.UpliftDigitalStudioDesignSystem_f3d16e = window.UpliftDigitalStudioDesignSystem_f3d16e || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// ui_kits/website/Footer.jsx
try { (() => {
// Footer.jsx — Uplift Digital Studio
function Footer({
  onNavigate
}) {
  const cols = [{
    title: 'Services',
    links: ['Content Strategy', 'UGC Production', 'Community Management', 'Analytics']
  }, {
    title: 'Company',
    links: ['About', 'Work', 'Careers', 'Press']
  }, {
    title: 'Contact',
    links: ['Book a call', 'hello@upliftdigital.co', 'Instagram', 'LinkedIn']
  }];
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      background: '#0A0A12',
      borderTop: '1px solid rgba(255,255,255,0.07)',
      padding: '64px 48px 40px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1200,
      margin: '0 auto'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '2fr 1fr 1fr 1fr',
      gap: 48,
      marginBottom: 64
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/UpliftLogo_White.svg",
    alt: "Uplift",
    style: {
      height: 28,
      marginBottom: 20
    }
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "'Satoshi',sans-serif",
      fontSize: 14,
      color: '#6B6B85',
      lineHeight: 1.7,
      maxWidth: 280,
      marginBottom: 24
    }
  }, "Social media management and UGC content for brands ready to grow."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 12
    }
  }, ['IG', 'TK', 'LI', 'YT'].map(s => /*#__PURE__*/React.createElement("div", {
    key: s,
    style: {
      width: 36,
      height: 36,
      borderRadius: 10,
      background: '#1A1A28',
      border: '1px solid rgba(255,255,255,0.08)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      cursor: 'pointer'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "'Satoshi',sans-serif",
      fontSize: 10,
      fontWeight: 700,
      color: '#6B6B85'
    }
  }, s))))), cols.map((col, i) => /*#__PURE__*/React.createElement("div", {
    key: i
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "'Satoshi',sans-serif",
      fontSize: 11,
      fontWeight: 500,
      color: '#fff',
      textTransform: 'uppercase',
      letterSpacing: '0.12em',
      marginBottom: 20
    }
  }, col.title), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 12
    }
  }, col.links.map(link => /*#__PURE__*/React.createElement("span", {
    key: link,
    style: {
      fontFamily: "'Satoshi',sans-serif",
      fontSize: 14,
      color: '#6B6B85',
      cursor: 'pointer',
      fontWeight: 400
    },
    onMouseEnter: e => e.target.style.color = '#B0B0C8',
    onMouseLeave: e => e.target.style.color = '#6B6B85'
  }, link)))))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      borderTop: '1px solid rgba(255,255,255,0.07)',
      paddingTop: 24
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "'Satoshi',sans-serif",
      fontSize: 12,
      color: '#3A3A54'
    }
  }, "\xA9 2025 Uplift Digital Studio. All rights reserved."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 24
    }
  }, ['Privacy', 'Terms'].map(l => /*#__PURE__*/React.createElement("span", {
    key: l,
    style: {
      fontFamily: "'Satoshi',sans-serif",
      fontSize: 12,
      color: '#3A3A54',
      cursor: 'pointer'
    }
  }, l))))));
}
Object.assign(__ds_scope, { Footer });
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Footer.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Hero.jsx
try { (() => {
// Hero.jsx — Uplift Digital Studio
function Hero({
  onNavigate
}) {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      minHeight: '100vh',
      background: '#10101A',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'column',
      textAlign: 'center',
      padding: '120px 48px 80px',
      position: 'relative',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: '20%',
      left: '50%',
      transform: 'translateX(-50%)',
      width: 800,
      height: 400,
      background: 'radial-gradient(ellipse, rgba(155,112,192,0.18) 0%, rgba(94,101,181,0.08) 50%, transparent 75%)',
      pointerEvents: 'none'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 8,
      background: 'rgba(155,112,192,0.12)',
      border: '1px solid rgba(155,112,192,0.25)',
      borderRadius: 999,
      padding: '6px 16px',
      marginBottom: 32
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 6,
      height: 6,
      borderRadius: '50%',
      background: 'linear-gradient(135deg,#E8998A,#9B70C0)'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "'Satoshi',sans-serif",
      fontSize: 11,
      fontWeight: 500,
      color: '#B0B0C8',
      letterSpacing: '0.1em',
      textTransform: 'uppercase'
    }
  }, "Social Media & UGC Agency")), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: "'Satoshi', sans-serif",
      fontSize: 'clamp(52px, 6vw, 88px)',
      fontWeight: 900,
      lineHeight: 1.05,
      letterSpacing: '-0.02em',
      color: '#fff',
      maxWidth: 820,
      marginBottom: 16
    }
  }, "Your audience is ready."), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: "'Satoshi', sans-serif",
      fontStyle: 'italic',
      fontSize: 'clamp(52px, 6vw, 88px)',
      fontWeight: 900,
      lineHeight: 1.05,
      letterSpacing: '-0.02em',
      background: 'linear-gradient(90deg, #E8998A 0%, #C97BAF 35%, #9B70C0 65%, #5E65B5 100%)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      backgroundClip: 'text',
      maxWidth: 820,
      marginBottom: 32
    }
  }, "Let's give them something worth watching."), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "'Satoshi', sans-serif",
      fontSize: 18,
      fontWeight: 400,
      color: '#6B6B85',
      lineHeight: 1.7,
      maxWidth: 520,
      marginBottom: 48
    }
  }, "Full-service social media management and UGC content \u2014 built for brands ready to grow."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 14,
      alignItems: 'center',
      flexWrap: 'wrap',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => onNavigate('pricing'),
    style: {
      fontFamily: "'Satoshi',sans-serif",
      fontWeight: 700,
      fontSize: 15,
      color: '#fff',
      background: 'linear-gradient(90deg, #E8998A, #C97BAF, #9B70C0, #5E65B5)',
      border: 'none',
      cursor: 'pointer',
      borderRadius: 999,
      padding: '16px 36px',
      transition: 'opacity 200ms, transform 200ms'
    },
    onMouseEnter: e => {
      e.currentTarget.style.opacity = '0.9';
      e.currentTarget.style.transform = 'scale(1.02)';
    },
    onMouseLeave: e => {
      e.currentTarget.style.opacity = '1';
      e.currentTarget.style.transform = 'scale(1)';
    }
  }, "See pricing"), /*#__PURE__*/React.createElement("button", {
    onClick: () => onNavigate('work'),
    style: {
      fontFamily: "'Satoshi',sans-serif",
      fontWeight: 700,
      fontSize: 15,
      color: '#fff',
      background: 'transparent',
      border: '1px solid rgba(255,255,255,0.18)',
      cursor: 'pointer',
      borderRadius: 999,
      padding: '15px 36px',
      transition: 'border-color 200ms'
    },
    onMouseEnter: e => e.currentTarget.style.borderColor = 'rgba(255,255,255,0.4)',
    onMouseLeave: e => e.currentTarget.style.borderColor = 'rgba(255,255,255,0.18)'
  }, "View our work")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 64,
      marginTop: 96,
      borderTop: '1px solid rgba(255,255,255,0.07)',
      paddingTop: 48
    }
  }, [{
    num: '340%',
    label: 'Avg. reach increase'
  }, {
    num: '50+',
    label: 'Brands managed'
  }, {
    num: '2M+',
    label: 'Impressions delivered'
  }].map(stat => /*#__PURE__*/React.createElement("div", {
    key: stat.num,
    style: {
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "'Satoshi',sans-serif",
      fontSize: 36,
      fontWeight: 900,
      letterSpacing: '-0.02em',
      background: 'linear-gradient(90deg, #E8998A, #9B70C0, #5E65B5)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      backgroundClip: 'text'
    }
  }, stat.num), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "'Satoshi',sans-serif",
      fontSize: 11,
      fontWeight: 500,
      color: '#6B6B85',
      textTransform: 'uppercase',
      letterSpacing: '0.1em',
      marginTop: 6
    }
  }, stat.label)))));
}
Object.assign(__ds_scope, { Hero });
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Hero.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Nav.jsx
try { (() => {
// Nav.jsx — Uplift Digital Studio
function Nav({
  activePage,
  onNavigate
}) {
  const [scrolled, setScrolled] = React.useState(false);
  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  const links = ['Services', 'Work', 'Pricing', 'About'];
  return /*#__PURE__*/React.createElement("nav", {
    style: {
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      zIndex: 100,
      padding: '0 48px',
      height: '72px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      background: scrolled ? 'rgba(16,16,26,0.92)' : 'transparent',
      backdropFilter: scrolled ? 'blur(16px)' : 'none',
      borderBottom: scrolled ? '1px solid rgba(255,255,255,0.07)' : 'none',
      transition: 'all 250ms cubic-bezier(0.4,0,0.2,1)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      cursor: 'pointer'
    },
    onClick: () => onNavigate('home')
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/UpliftLogo_White.svg",
    alt: "Uplift",
    style: {
      height: 32
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 36,
      alignItems: 'center'
    }
  }, links.map(link => /*#__PURE__*/React.createElement("button", {
    key: link,
    onClick: () => onNavigate(link.toLowerCase()),
    style: {
      background: 'none',
      border: 'none',
      cursor: 'pointer',
      fontFamily: "'Satoshi', sans-serif",
      fontSize: 13,
      fontWeight: 500,
      letterSpacing: '0.1em',
      textTransform: 'uppercase',
      color: activePage === link.toLowerCase() ? '#fff' : '#6B6B85',
      transition: 'color 200ms'
    }
  }, link))), /*#__PURE__*/React.createElement("button", {
    style: {
      fontFamily: "'Satoshi', sans-serif",
      fontWeight: 700,
      fontSize: 14,
      color: '#fff',
      background: 'linear-gradient(90deg, #E8998A, #C97BAF, #9B70C0, #5E65B5)',
      border: 'none',
      cursor: 'pointer',
      borderRadius: 999,
      padding: '11px 24px',
      letterSpacing: '0.02em',
      transition: 'opacity 200ms, transform 200ms'
    },
    onMouseEnter: e => {
      e.target.style.opacity = '0.9';
      e.target.style.transform = 'scale(1.02)';
    },
    onMouseLeave: e => {
      e.target.style.opacity = '1';
      e.target.style.transform = 'scale(1)';
    }
  }, "Book a call"));
}
Object.assign(__ds_scope, { Nav });
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Nav.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Pricing.jsx
try { (() => {
// Pricing.jsx — Uplift Digital Studio
function Pricing() {
  const [annual, setAnnual] = React.useState(false);
  const plans = [{
    name: 'Starter',
    price: {
      monthly: 1200,
      annual: 1000
    },
    desc: 'For brands just getting serious about social.',
    features: ['8 posts/month', '2 platforms', 'Monthly strategy call', 'Basic analytics report', 'Caption + hashtag copy'],
    cta: 'Get started',
    highlight: false
  }, {
    name: 'Growth',
    price: {
      monthly: 2500,
      annual: 2100
    },
    desc: 'Full-service management for scaling brands.',
    features: ['20 posts/month', '3 platforms', 'UGC content (4 videos)', 'Weekly check-ins', 'Advanced analytics', 'Community management'],
    cta: 'Most popular',
    highlight: true
  }, {
    name: 'Premium',
    price: {
      monthly: 4800,
      annual: 4000
    },
    desc: 'End-to-end creative and social infrastructure.',
    features: ['Unlimited posts', 'All platforms', 'UGC content (12 videos)', 'Dedicated strategist', 'Full analytics suite', 'Paid social management', 'Bilingual content'],
    cta: 'Talk to us',
    highlight: false
  }];
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: '#0A0A12',
      padding: '96px 48px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1200,
      margin: '0 auto'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center',
      marginBottom: 56
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "'Satoshi',sans-serif",
      fontSize: 11,
      fontWeight: 500,
      color: '#9B70C0',
      textTransform: 'uppercase',
      letterSpacing: '0.15em',
      marginBottom: 16
    }
  }, "Pricing"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: "'Satoshi',sans-serif",
      fontSize: 40,
      fontWeight: 900,
      color: '#fff',
      letterSpacing: '-0.02em',
      marginBottom: 24
    }
  }, "Simple, transparent pricing."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 12,
      background: '#1A1A28',
      border: '1px solid rgba(255,255,255,0.08)',
      borderRadius: 999,
      padding: '6px 20px'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "'Satoshi',sans-serif",
      fontSize: 13,
      fontWeight: 500,
      color: annual ? '#6B6B85' : '#fff'
    }
  }, "Monthly"), /*#__PURE__*/React.createElement("div", {
    onClick: () => setAnnual(!annual),
    style: {
      width: 40,
      height: 22,
      borderRadius: 999,
      cursor: 'pointer',
      background: annual ? 'linear-gradient(90deg,#9B70C0,#5E65B5)' : '#2A2A3C',
      position: 'relative',
      transition: 'background 250ms'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: 3,
      left: annual ? 21 : 3,
      width: 16,
      height: 16,
      borderRadius: '50%',
      background: '#fff',
      transition: 'left 200ms'
    }
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "'Satoshi',sans-serif",
      fontSize: 13,
      fontWeight: 500,
      color: annual ? '#fff' : '#6B6B85'
    }
  }, "Annual ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: '#5BB585'
    }
  }, "\u221220%")))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3,1fr)',
      gap: 16,
      alignItems: 'start'
    }
  }, plans.map((plan, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      background: plan.highlight ? '#1A1A28' : '#10101A',
      border: plan.highlight ? '1px solid rgba(155,112,192,0.4)' : '1px solid rgba(255,255,255,0.08)',
      borderRadius: 20,
      padding: 32,
      position: 'relative',
      overflow: 'hidden',
      boxShadow: plan.highlight ? '0 0 40px rgba(155,112,192,0.15)' : 'none'
    }
  }, plan.highlight && /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      height: 3,
      background: 'linear-gradient(90deg,#E8998A,#C97BAF,#9B70C0,#5E65B5)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "'Satoshi',sans-serif",
      fontSize: 11,
      fontWeight: 500,
      color: '#6B6B85',
      textTransform: 'uppercase',
      letterSpacing: '0.12em',
      marginBottom: 8
    }
  }, plan.name), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'baseline',
      gap: 4,
      marginBottom: 8
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "'Satoshi',sans-serif",
      fontSize: 44,
      fontWeight: 900,
      color: '#fff',
      letterSpacing: '-0.03em'
    }
  }, "$", (annual ? plan.price.annual : plan.price.monthly).toLocaleString()), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "'Satoshi',sans-serif",
      fontSize: 14,
      color: '#6B6B85',
      fontWeight: 500
    }
  }, "/mo")), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "'Satoshi',sans-serif",
      fontSize: 14,
      color: '#6B6B85',
      lineHeight: 1.6,
      marginBottom: 28
    }
  }, plan.desc), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 10,
      marginBottom: 32
    }
  }, plan.features.map((f, j) => /*#__PURE__*/React.createElement("div", {
    key: j,
    style: {
      display: 'flex',
      gap: 10,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 16,
      height: 16,
      borderRadius: '50%',
      background: 'linear-gradient(135deg,#9B70C0,#5E65B5)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "8",
    height: "8",
    viewBox: "0 0 10 10",
    fill: "none"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M2 5l2.5 2.5L8 3",
    stroke: "#fff",
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }))), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "'Satoshi',sans-serif",
      fontSize: 14,
      color: '#B0B0C8',
      fontWeight: 400
    }
  }, f)))), /*#__PURE__*/React.createElement("button", {
    style: {
      width: '100%',
      fontFamily: "'Satoshi',sans-serif",
      fontWeight: 700,
      fontSize: 14,
      color: '#fff',
      background: plan.highlight ? 'linear-gradient(90deg,#E8998A,#C97BAF,#9B70C0,#5E65B5)' : '#2A2A3C',
      border: 'none',
      cursor: 'pointer',
      borderRadius: 999,
      padding: '14px',
      transition: 'opacity 200ms, transform 200ms'
    },
    onMouseEnter: e => {
      e.currentTarget.style.opacity = '0.85';
      e.currentTarget.style.transform = 'scale(1.01)';
    },
    onMouseLeave: e => {
      e.currentTarget.style.opacity = '1';
      e.currentTarget.style.transform = 'scale(1)';
    }
  }, plan.cta))))));
}
Object.assign(__ds_scope, { Pricing });
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Pricing.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Services.jsx
try { (() => {
// Services.jsx — Uplift Digital Studio
function Services() {
  const services = [{
    icon: /*#__PURE__*/React.createElement("svg", {
      width: "20",
      height: "20",
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "#fff",
      strokeWidth: "1.5",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }, /*#__PURE__*/React.createElement("rect", {
      x: "3",
      y: "3",
      width: "18",
      height: "18",
      rx: "2"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M3 9h18M9 21V9"
    })),
    grad: ['#E8998A', '#C97BAF'],
    title: 'Content Strategy',
    desc: 'Platform-specific strategy built around your audience, goals, and competitive landscape.'
  }, {
    icon: /*#__PURE__*/React.createElement("svg", {
      width: "20",
      height: "20",
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "#fff",
      strokeWidth: "1.5",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }, /*#__PURE__*/React.createElement("path", {
      d: "M15 10l4.553-2.069A1 1 0 0121 8.87V15.13a1 1 0 01-1.447.898L15 14M3 8a2 2 0 012-2h8a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2V8z"
    })),
    grad: ['#C97BAF', '#9B70C0'],
    title: 'UGC Production',
    desc: 'Creator-led content that feels native — shot, edited, and delivered on your schedule.'
  }, {
    icon: /*#__PURE__*/React.createElement("svg", {
      width: "20",
      height: "20",
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "#fff",
      strokeWidth: "1.5",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }, /*#__PURE__*/React.createElement("path", {
      d: "M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "9",
      cy: "7",
      r: "4"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75"
    })),
    grad: ['#9B70C0', '#7878C8'],
    title: 'Community Management',
    desc: 'Daily engagement, DM handling, and comment moderation — your brand, always present.'
  }, {
    icon: /*#__PURE__*/React.createElement("svg", {
      width: "20",
      height: "20",
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "#fff",
      strokeWidth: "1.5",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }, /*#__PURE__*/React.createElement("path", {
      d: "M18 20V10M12 20V4M6 20v-6"
    })),
    grad: ['#7878C8', '#5E65B5'],
    title: 'Analytics & Reporting',
    desc: 'Monthly reports with real numbers — reach, engagement, growth, and what to do next.'
  }];
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: '#10101A',
      padding: '96px 48px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1200,
      margin: '0 auto'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 64
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "'Satoshi',sans-serif",
      fontSize: 11,
      fontWeight: 500,
      color: '#9B70C0',
      textTransform: 'uppercase',
      letterSpacing: '0.15em',
      marginBottom: 16
    }
  }, "What we do"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: "'Satoshi',sans-serif",
      fontSize: 40,
      fontWeight: 900,
      color: '#fff',
      letterSpacing: '-0.02em',
      lineHeight: 1.1,
      maxWidth: 500
    }
  }, "Everything your brand needs to grow.")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4,1fr)',
      gap: 16
    }
  }, services.map((svc, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      background: '#1A1A28',
      border: '1px solid rgba(255,255,255,0.08)',
      borderRadius: 16,
      padding: 28,
      transition: 'transform 250ms cubic-bezier(0.4,0,0.2,1), box-shadow 250ms',
      cursor: 'default'
    },
    onMouseEnter: e => {
      e.currentTarget.style.transform = 'translateY(-3px)';
      e.currentTarget.style.boxShadow = '0 8px 40px rgba(0,0,0,0.25)';
    },
    onMouseLeave: e => {
      e.currentTarget.style.transform = 'translateY(0)';
      e.currentTarget.style.boxShadow = 'none';
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 44,
      height: 44,
      borderRadius: 12,
      background: `linear-gradient(135deg, ${svc.grad[0]}, ${svc.grad[1]})`,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom: 20
    }
  }, svc.icon), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "'Satoshi',sans-serif",
      fontSize: 17,
      fontWeight: 700,
      color: '#fff',
      marginBottom: 10
    }
  }, svc.title), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "'Satoshi',sans-serif",
      fontSize: 14,
      color: '#6B6B85',
      lineHeight: 1.7
    }
  }, svc.desc))))));
}
Object.assign(__ds_scope, { Services });
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Services.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Testimonials.jsx
try { (() => {
// Testimonials.jsx — Uplift Digital Studio
function Testimonials() {
  const testimonials = [{
    quote: "We went from 4,000 to 28,000 followers in three months. The content actually sounds like us.",
    name: "Maria González",
    role: "Founder, Solana Skincare",
    result: "+600% follower growth"
  }, {
    quote: "Uplift handles everything. I stopped thinking about content and started thinking about the business.",
    name: "James Okafor",
    role: "CEO, Verve Apparel",
    result: "2.3M impressions / month"
  }, {
    quote: "The UGC videos perform better than anything our in-house team ever made. And they cost less.",
    name: "Sofia Reyes",
    role: "Marketing Director, Tierra Foods",
    result: "4.8× ROAS on paid social"
  }];
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: '#10101A',
      padding: '96px 48px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1200,
      margin: '0 auto'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 56
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "'Satoshi',sans-serif",
      fontSize: 11,
      fontWeight: 500,
      color: '#9B70C0',
      textTransform: 'uppercase',
      letterSpacing: '0.15em',
      marginBottom: 16
    }
  }, "Results"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: "'Satoshi',sans-serif",
      fontSize: 40,
      fontWeight: 900,
      color: '#fff',
      letterSpacing: '-0.02em'
    }
  }, "Brands that invested. Results that prove it.")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3,1fr)',
      gap: 16
    }
  }, testimonials.map((t, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      background: '#1A1A28',
      border: '1px solid rgba(255,255,255,0.08)',
      borderRadius: 16,
      padding: 28,
      display: 'flex',
      flexDirection: 'column',
      gap: 20
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      background: 'rgba(155,112,192,0.12)',
      border: '1px solid rgba(155,112,192,0.2)',
      borderRadius: 999,
      padding: '5px 14px',
      alignSelf: 'flex-start'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "'Satoshi',sans-serif",
      fontSize: 11,
      fontWeight: 700,
      color: '#9B70C0',
      letterSpacing: '0.06em'
    }
  }, t.result)), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "'Satoshi', sans-serif",
      fontSize: 19,
      fontWeight: 400,
      color: '#fff',
      lineHeight: 1.55,
      fontStyle: 'italic',
      flex: 1
    }
  }, "\"", t.quote, "\""), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      borderTop: '1px solid rgba(255,255,255,0.07)',
      paddingTop: 18
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 36,
      height: 36,
      borderRadius: '50%',
      background: `linear-gradient(135deg, ${['#E8998A', '#C97BAF', '#9B70C0'][i]}, ${['#C97BAF', '#9B70C0', '#5E65B5'][i]})`
    }
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "'Satoshi',sans-serif",
      fontSize: 13,
      fontWeight: 700,
      color: '#fff'
    }
  }, t.name), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "'Satoshi',sans-serif",
      fontSize: 12,
      color: '#6B6B85',
      fontWeight: 500
    }
  }, t.role))))))));
}
Object.assign(__ds_scope, { Testimonials });
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Testimonials.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Footer = __ds_scope.Footer;

__ds_ns.Hero = __ds_scope.Hero;

__ds_ns.Nav = __ds_scope.Nav;

__ds_ns.Pricing = __ds_scope.Pricing;

__ds_ns.Services = __ds_scope.Services;

__ds_ns.Testimonials = __ds_scope.Testimonials;

})();

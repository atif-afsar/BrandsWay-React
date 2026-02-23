/**
 * HeroSection — Brandsway
 * Right side: image with magnetic tilt + custom cursor glow + spotlight reveal
 * No Three.js · Pure CSS + framer-motion · 60fps
 */

import { useEffect, useRef, useState, useCallback } from "react";
import { motion, useAnimation, useMotionValue, useSpring, useTransform, animate } from "framer-motion";

const BRAND = "#b70a01";

// ─── Pre-computed particle data ───────────────────────────────────────────────
const PARTICLES = Array.from({ length: 26 }, (_, i) => ({
  left:  5  + (i * 3.91) % 90,
  top:   5  + (i * 7.13) % 88,
  size:  1.5 + (i % 4)   * 0.55,
  dur:   3.5 + (i % 5)   * 0.9,
  delay: (i * 0.41)      % 5,
  color: i % 3 === 0 ? `${BRAND}cc`
       : i % 3 === 1 ? "rgba(96,165,250,0.7)"
       :               "rgba(255,255,255,0.4)",
}));

// ─── Stat chips shown below / around image ────────────────────────────────────
const CHIPS = [
  { label: "ROAS",     value: "4.8×",  color: BRAND,     icon: "📈" },
  { label: "Revenue",  value: "$284K", color: "#3ecf6e",  icon: "💰" },
  { label: "Leads/Day",value: "247",   color: "#60a5fa",  icon: "⚡" },
  { label: "CTR",      value: "8.2%",  color: "#a78bfa",  icon: "🎯" },
];

// ─── ROOT ─────────────────────────────────────────────────────────────────────
export default function HeroSection() {
  const controls = useAnimation();
  const [menuOpen, setMenuOpen] = useState(false);
  const NAV = ["Services", "Cases", "About", "Resource"];

  useEffect(() => { controls.start("visible"); }, []);

  const fadeUp = {
    hidden:  { opacity: 0, y: 26 },
    visible: (i = 0) => ({
      opacity: 1, y: 0,
      transition: { delay: i * 0.11, duration: 0.62, ease: [0.16, 1, 0.3, 1] },
    }),
  };

  return (
    <div className="bw-root">
      <GridBg />

      {/* ── NAVBAR ── */}
      <motion.nav
        className="bw-nav"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55, ease: "easeOut" }}
      >
        <img src="/public/logo/brandsway.png" alt="Brandsway" className="bw-logo" />

        <div className="bw-nav-pill bw-desktop">
          {NAV.map(l => <NavLink key={l}>{l}</NavLink>)}
          <button className="bw-btn-audit">
            <span className="bw-dot-live" /> Free Audit
          </button>
        </div>

        <div className="bw-nav-end bw-desktop">
          <button className="bw-btn-ghost">
            <PhoneIcon /> Call Us
          </button>
          <button className="bw-btn-primary">
            Get In Touch <ArrowIcon />
          </button>
        </div>

        <button className="bw-burger bw-mobile" onClick={() => setMenuOpen(v => !v)}>
          {[0,1,2].map(i => <span key={i} className={`bw-bar${menuOpen ? ` bw-bar${i}` : ""}`} />)}
        </button>
      </motion.nav>

      {menuOpen && (
        <motion.div className="bw-drawer"
          initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.16 }}>
          {NAV.map(l => <button key={l} className="bw-drawer-link">{l}</button>)}
          <div className="bw-drawer-row">
            <button className="bw-btn-ghost-sm">Call Us</button>
            <button className="bw-btn-primary-sm">Get In Touch</button>
          </div>
        </motion.div>
      )}

      {/* ── HERO BODY ── */}
      <div className="bw-hero">

        {/* LEFT — copy */}
        <div className="bw-copy">

          <motion.div custom={0} variants={fadeUp} initial="hidden" animate={controls}
            className="bw-badge">
            <FireIcon /> Only 2 Client Spots Left In Q2
          </motion.div>

          <motion.h1 custom={1} variants={fadeUp} initial="hidden" animate={controls}
            className="bw-h1">
            We Scale Brands<br />
            <span className="bw-grad">That Demand</span><br />
            Real Results.
          </motion.h1>

          <motion.p custom={2} variants={fadeUp} initial="hidden" animate={controls}
            className="bw-sub">
            The performance marketing agency that{" "}
            <strong>doubles your revenue</strong>{" "}
            without doubling your budget. Data-driven, ROI-obsessed, built for modern brands.
          </motion.p>

          <motion.div custom={3} variants={fadeUp} initial="hidden" animate={controls}
            className="bw-ctas">
            <motion.button whileHover={{ scale: 1.04, boxShadow: `0 0 36px ${BRAND}55` }}
              whileTap={{ scale: 0.97 }} className="bw-btn-primary bw-btn-lg">
              Free Brand Audit <ArrowIcon />
            </motion.button>
            <motion.button whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}
              className="bw-btn-outline bw-btn-lg">
              View Case Studies <ArrowIcon />
            </motion.button>
          </motion.div>

          <motion.div custom={4} variants={fadeUp} initial="hidden" animate={controls}
            className="bw-stats">
            {[
              { v: 280, p: "$", s: "M+", l: "Revenue Generated" },
              { v: 120, p: "",  s: "+",  l: "Brands Scaled"     },
              { v: 100, p: "$", s: "M",  l: "Ad Spend Managed"  },
            ].map((x, i) => (
              <div key={i} className={`bw-stat${i < 2 ? " bw-stat-sep" : ""}`}>
                <CountUp target={x.v} prefix={x.p} suffix={x.s} />
                <span className="bw-stat-lbl">{x.l}</span>
              </div>
            ))}
          </motion.div>
        </div>

        {/* RIGHT — image with cursor effects */}
        <motion.div className="bw-img-col"
          initial={{ opacity: 0, x: 55 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.05, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}>
          <ImageScene controls={controls} />
        </motion.div>
      </div>

      <Styles />
    </div>
  );
}

// ─── ImageScene ───────────────────────────────────────────────────────────────
// Wraps the image with:
//   1. Magnetic 3D tilt (framer-motion spring rotateX / rotateY)
//   2. Custom red glowing cursor dot that follows the mouse over the image
//   3. Radial spotlight that follows cursor (CSS mask)
//   4. Floating stat chips that pop in around the image
function ImageScene({ controls }) {
  const containerRef = useRef(null);
  const cursorRef    = useRef(null);

  // Motion values for tilt (spring-smoothed)
  const rawX  = useMotionValue(0);
  const rawY  = useMotionValue(0);
  const rotX  = useSpring(rawX, { stiffness: 120, damping: 20 });
  const rotY  = useSpring(rawY, { stiffness: 120, damping: 20 });

  // Subtle scale-up on hover
  const [hovered, setHovered] = useState(false);

  // Spotlight position (% strings for CSS)
  const [spotlight, setSpotlight] = useState({ x: "50%", y: "30%" });
  const [spotOn,    setSpotOn]    = useState(false);

  const onMove = useCallback((e) => {
    const el = containerRef.current;
    if (!el) return;
    const r  = el.getBoundingClientRect();
    const mx = (e.clientX - r.left)  / r.width;   // 0…1
    const my = (e.clientY - r.top)   / r.height;  // 0…1
    const nx = mx - 0.5;  // −0.5…+0.5
    const ny = my - 0.5;

    // Tilt: max ±12° rotateY, ±8° rotateX
    rawY.set( nx * 24);
    rawX.set(-ny * 16);

    // Spotlight
    setSpotlight({ x: `${(mx * 100).toFixed(1)}%`, y: `${(my * 100).toFixed(1)}%` });

    // Custom cursor
    if (cursorRef.current) {
      cursorRef.current.style.left   = `${(e.clientX - r.left).toFixed(1)}px`;
      cursorRef.current.style.top    = `${(e.clientY - r.top ).toFixed(1)}px`;
      cursorRef.current.style.opacity = "1";
    }
  }, []);

  const onLeave = useCallback(() => {
    rawX.set(0); rawY.set(0);
    setSpotOn(false);
    if (cursorRef.current) cursorRef.current.style.opacity = "0";
  }, []);

  const onEnter = useCallback(() => setSpotOn(true), []);

  return (
    <div className="bw-scene" ref={containerRef}
      onMouseMove={onMove}
      onMouseEnter={onEnter}
      onMouseLeave={onLeave}>

      {/* Particles behind everything */}
      <div className="bw-particles" aria-hidden>
        {PARTICLES.map((p, i) => (
          <div key={i} className="bw-particle" style={{
            left: `${p.left}%`, top: `${p.top}%`,
            width: p.size, height: p.size,
            background: p.color,
            animationDuration: `${p.dur}s`,
            animationDelay:    `${p.delay}s`,
          }} />
        ))}
      </div>

      {/* 3D tilt card */}
      <motion.div
        className="bw-tilt-card"
        style={{ rotateX: rotX, rotateY: rotY, scale: hovered ? 1.025 : 1 }}
        onHoverStart={() => setHovered(true)}
        onHoverEnd={()   => setHovered(false)}
        transition={{ scale: { type: "spring", stiffness: 200, damping: 22 } }}
      >
        {/* ── IMAGE (replace src with your own) ── */}
        <img
          src="/public/hero/image.png"
          alt="Brandsway hero image"
          className="bw-hero-img"
          draggable="false"
        />

        {/* Spotlight overlay */}
        <div
          className="bw-spotlight"
          style={{
            background: spotOn
              ? `radial-gradient(circle 180px at ${spotlight.x} ${spotlight.y}, rgba(255,255,255,0.09) 0%, transparent 65%)`
              : "none",
          }}
        />

        {/* Gradient vignette always on */}
        <div className="bw-vignette" />

        {/* Red glow border on hover */}
        <div className={`bw-img-border${hovered ? " bw-img-border-on" : ""}`} />

        {/* Corner badge — top left */}
        <motion.div className="bw-corner-badge"
          initial={{ opacity: 0, scale: 0.8, y: -8 }}
          animate={{ opacity: 1, scale: 1,   y: 0  }}
          transition={{ delay: 1.2, type: "spring", stiffness: 160 }}>
          <span className="bw-live-dot" />
          Live Campaign Active
        </motion.div>

        {/* Corner badge — bottom right */}
        <motion.div className="bw-corner-badge bw-corner-badge-br"
          initial={{ opacity: 0, scale: 0.8, y: 8 }}
          animate={{ opacity: 1, scale: 1,   y: 0  }}
          transition={{ delay: 1.4, type: "spring", stiffness: 160 }}>
          127% ROAS Growth ↑
        </motion.div>
      </motion.div>

      {/* Custom cursor — absolute inside scene */}
      <div ref={cursorRef} className="bw-cursor" aria-hidden />

      {/* ── Stat chips ── */}
      {CHIPS.map((c, i) => {
        const positions = [
          { bottom: "14%", right: "-6%"  },   // right-bottom
          { top:    "12%", right: "-8%"  },   // right-top
          { bottom: "28%", left:  "-6%"  },   // left-bottom
          { top:    "28%", left:  "-7%"  },   // left-top
        ];
        return (
          <motion.div
            key={i}
            className="bw-chip"
            style={{ ...positions[i], borderColor: `${c.color}30` }}
            initial={{ opacity: 0, scale: 0.75, x: i % 2 === 0 ? 20 : -20 }}
            animate={{ opacity: 1, scale: 1,    x: 0 }}
            transition={{ delay: 1.3 + i * 0.15, type: "spring", stiffness: 160, damping: 18 }}
          >
            <span className="bw-chip-icon">{c.icon}</span>
            <div>
              <div className="bw-chip-val" style={{ color: c.color }}>{c.value}</div>
              <div className="bw-chip-lbl">{c.label}</div>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}

// ─── CountUp ─────────────────────────────────────────────────────────────────
function CountUp({ target, prefix = "", suffix = "" }) {
  const ref = useRef(null);
  useEffect(() => {
    const node = ref.current;
    const ctrl = animate(0, target, {
      duration: 2.4, delay: 1.4,
      ease: [0.16, 1, 0.3, 1],
      onUpdate(v) { if (node) node.textContent = prefix + Math.round(v) + suffix; },
    });
    return () => ctrl.stop();
  }, []);
  return <span ref={ref} className="bw-stat-val">{prefix}0{suffix}</span>;
}

// ─── Grid bg ─────────────────────────────────────────────────────────────────
function GridBg() {
  return (
    <div className="bw-gridbg" aria-hidden>
      <div className="bw-dotgrid" />
      <div className="bw-glow-tl" />
      <div className="bw-glow-br" />
    </div>
  );
}

// ─── NavLink ─────────────────────────────────────────────────────────────────
function NavLink({ children }) {
  const [h, setH] = useState(false);
  return (
    <button className="bw-nav-link"
      style={{ color: h ? "#fff" : "rgba(255,255,255,0.62)", background: h ? "rgba(255,255,255,0.08)" : "none" }}
      onMouseEnter={() => setH(true)} onMouseLeave={() => setH(false)}>
      {children}
    </button>
  );
}

// ─── Icon helpers ─────────────────────────────────────────────────────────────
const ArrowIcon = () => (
  <svg width="12" height="12" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"/>
  </svg>
);
const PhoneIcon = () => (
  <svg width="13" height="13" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"/>
  </svg>
);
const FireIcon = () => (
  <svg width="11" height="11" fill="currentColor" viewBox="0 0 24 24">
    <path d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z"/>
  </svg>
);

// ─── Styles ───────────────────────────────────────────────────────────────────
function Styles() {
  return (
    <style>{`
      @import url('https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,400;0,9..40,600;0,9..40,700;0,9..40,800;0,9..40,900&display=swap');
      *, *::before, *::after { box-sizing: border-box; }

      /* Root */
      .bw-root {
        min-height: 100vh; background: #060608;
        font-family: 'DM Sans', sans-serif;
        display: flex; flex-direction: column;
        overflow: hidden; position: relative;
      }

      /* Grid bg */
      .bw-gridbg { position: absolute; inset: 0; pointer-events: none; z-index: 0; overflow: hidden; }
      .bw-dotgrid {
        position: absolute; inset: 0;
        background-image: radial-gradient(rgba(255,255,255,0.052) 1px, transparent 1px);
        background-size: 34px 34px;
        mask-image: radial-gradient(ellipse at center, black 28%, transparent 70%);
        -webkit-mask-image: radial-gradient(ellipse at center, black 28%, transparent 70%);
      }
      .bw-glow-tl {
        position: absolute; top: -260px; left: -180px;
        width: 620px; height: 620px; border-radius: 50%;
        background: radial-gradient(circle, rgba(183,10,1,0.09) 0%, transparent 65%);
        filter: blur(48px);
      }
      .bw-glow-br {
        position: absolute; bottom: -180px; right: -120px;
        width: 540px; height: 540px; border-radius: 50%;
        background: radial-gradient(circle, rgba(50,70,240,0.06) 0%, transparent 65%);
        filter: blur(52px);
      }

      /* Navbar */
      .bw-nav {
        position: relative; z-index: 30;
        display: flex; align-items: center; justify-content: space-between;
        padding: 15px 40px;
        border-bottom: 1px solid rgba(255,255,255,0.05);
        backdrop-filter: blur(14px);
        -webkit-backdrop-filter: blur(14px);
        background: rgba(6,6,8,0.72); flex-shrink: 0;
      }
      .bw-logo { width: 96px; border-radius: 999px; border: 1px solid rgba(255,255,255,0.14); flex-shrink: 0; }
      .bw-nav-pill {
        display: flex; align-items: center; gap: 4px;
        background: rgba(255,255,255,0.04); border: 1px solid rgba(255,255,255,0.08);
        border-radius: 999px; padding: 6px 8px;
      }
      .bw-nav-link {
        padding: 6px 17px; border-radius: 999px; font-size: 13px;
        border: none; cursor: pointer; transition: all 0.18s;
        font-family: inherit; font-weight: 500;
      }
      .bw-btn-audit {
        display: flex; align-items: center; gap: 6px;
        padding: 6px 17px; border-radius: 999px; font-size: 13px;
        font-weight: 700; color: #fff; background: ${BRAND};
        border: none; cursor: pointer; font-family: inherit;
      }
      .bw-dot-live {
        width: 6px; height: 6px; border-radius: 50%; background: #fff;
        animation: bwBlink 1.6s ease-in-out infinite; flex-shrink: 0;
      }
      .bw-nav-end { display: flex; gap: 12px; align-items: center; }
      .bw-btn-ghost {
        display: flex; align-items: center; gap: 7px; font-size: 13px;
        color: rgba(255,255,255,0.52); background: none; border: none;
        cursor: pointer; font-family: inherit; transition: color 0.18s;
      }
      .bw-btn-ghost:hover { color: rgba(255,255,255,0.88); }
      .bw-btn-primary {
        display: inline-flex; align-items: center; gap: 7px;
        padding: 10px 22px; border-radius: 10px; font-size: 13px;
        font-weight: 700; color: #fff; background: ${BRAND};
        border: none; cursor: pointer; font-family: inherit;
        box-shadow: 0 0 18px rgba(183,10,1,0.35);
        transition: filter 0.18s;
      }
      .bw-btn-primary:hover { filter: brightness(1.12); }

      /* Mobile nav */
      .bw-burger {
        flex-direction: column; gap: 5px; padding: 8px;
        background: rgba(255,255,255,0.05); border: 1px solid rgba(255,255,255,0.1);
        border-radius: 8px; cursor: pointer;
      }
      .bw-bar { display: block; width: 20px; height: 2px; background: #fff; border-radius: 2px; transition: all 0.26s ease; }
      .bw-bar0 { transform: rotate(45deg)  translateY(7px);  }
      .bw-bar1 { transform: scaleX(0); opacity: 0;           }
      .bw-bar2 { transform: rotate(-45deg) translateY(-7px); }
      .bw-desktop { display: flex !important; }
      .bw-mobile  { display: none  !important; }

      .bw-drawer {
        position: relative; z-index: 29; margin: 0 12px 8px;
        background: rgba(10,10,14,0.97); backdrop-filter: blur(20px);
        -webkit-backdrop-filter: blur(20px);
        border: 1px solid rgba(255,255,255,0.07); border-radius: 16px; padding: 16px;
      }
      .bw-drawer-link {
        display: block; width: 100%; text-align: left; padding: 10px 14px;
        border-radius: 10px; font-size: 14px; color: rgba(255,255,255,0.68);
        background: none; border: none; cursor: pointer; font-family: inherit; transition: background 0.15s;
      }
      .bw-drawer-link:hover { background: rgba(255,255,255,0.07); }
      .bw-drawer-row {
        display: flex; gap: 8px; margin-top: 12px;
        padding-top: 12px; border-top: 1px solid rgba(255,255,255,0.07);
      }
      .bw-btn-ghost-sm {
        flex: 1; padding: 10px; border-radius: 10px; font-size: 13px;
        color: rgba(255,255,255,0.68); border: 1px solid rgba(255,255,255,0.12);
        background: none; cursor: pointer; font-family: inherit;
      }
      .bw-btn-primary-sm {
        flex: 1; padding: 10px; border-radius: 10px; font-size: 13px;
        font-weight: 700; color: #fff; background: ${BRAND};
        border: none; cursor: pointer; font-family: inherit;
      }

      /* Hero layout */
      .bw-hero {
        flex: 1; display: flex; align-items: center;
        padding: 36px 40px; gap: 48px;
        max-width: 1280px; margin: 0 auto; width: 100%;
        position: relative; z-index: 10;
      }

      /* Copy */
      .bw-copy { flex: 0 0 44%; display: flex; flex-direction: column; }
      .bw-badge {
        display: inline-flex; align-items: center; gap: 7px;
        padding: 6px 14px; border-radius: 999px; margin-bottom: 22px; width: fit-content;
        background: rgba(183,10,1,0.13); border: 1px solid rgba(183,10,1,0.38);
        color: ${BRAND}; font-size: 12px; font-weight: 700;
      }
      .bw-h1 {
        font-size: clamp(2.2rem, 4vw, 3.75rem); font-weight: 900;
        line-height: 1.06; letter-spacing: -0.034em; margin: 0 0 20px; color: #fff;
      }
      .bw-grad {
        background: linear-gradient(130deg, #ff3a20 0%, ${BRAND} 58%);
        -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;
      }
      .bw-sub {
        font-size: clamp(0.9rem, 1.5vw, 1.05rem); color: rgba(255,255,255,0.44);
        line-height: 1.82; margin-bottom: 30px; max-width: 420px;
      }
      .bw-sub strong { color: #fff; font-weight: 600; }
      .bw-ctas { display: flex; gap: 12px; flex-wrap: wrap; margin-bottom: 38px; }
      .bw-btn-lg { padding: 13px 26px !important; border-radius: 12px !important; font-size: 14px !important; font-weight: 700 !important; }
      .bw-btn-outline {
        display: inline-flex; align-items: center; gap: 7px;
        color: #fff; background: rgba(255,255,255,0.05);
        border: 1px solid rgba(255,255,255,0.14); border-radius: 12px;
        cursor: pointer; font-family: inherit; transition: border-color 0.18s;
      }
      .bw-btn-outline:hover { border-color: rgba(255,255,255,0.36); }
      .bw-stats {
        display: flex; padding-top: 26px; border-top: 1px solid rgba(255,255,255,0.07);
      }
      .bw-stat { flex: 1; display: flex; flex-direction: column; gap: 4px; }
      .bw-stat-sep { padding-right: 20px; margin-right: 20px; border-right: 1px solid rgba(255,255,255,0.07); }
      .bw-stat-val { font-size: clamp(1.5rem, 2.8vw, 2.1rem); font-weight: 900; color: #fff; letter-spacing: -0.04em; line-height: 1; }
      .bw-stat-lbl { font-size: 11px; color: rgba(255,255,255,0.30); font-weight: 500; }

      /* ── Image column ── */
      .bw-img-col { flex: 1; }

      /* Scene wrapper — position:relative so chips + cursor are absolute inside */
      .bw-scene {
        position: relative;
        cursor: none;           /* hide default cursor over image */
        perspective: 900px;
        perspective-origin: center center;
      }

      /* Tilt card */
      .bw-tilt-card {
        position: relative; border-radius: 20px; overflow: hidden;
        will-change: transform;
        box-shadow: 0 24px 64px rgba(0,0,0,0.55), 0 0 0 1px rgba(255,255,255,0.06);
        transform-style: preserve-3d;
        transition: box-shadow 0.35s ease;
      }
      .bw-tilt-card:hover {
        box-shadow: 0 32px 80px rgba(0,0,0,0.65), 0 0 40px rgba(183,10,1,0.22), 0 0 0 1px rgba(183,10,1,0.18);
      }

      /* Hero image */
      .bw-hero-img {
        display: block; width: 100%; height: clamp(300px, 44vw, 520px);
        object-fit: cover; object-position: center;
        user-select: none; -webkit-user-drag: none;
        border-radius: 20px;
      }

      /* Spotlight radial overlay */
      .bw-spotlight {
        position: absolute; inset: 0;
        pointer-events: none; border-radius: 20px;
        transition: background 0.05s linear;
        mix-blend-mode: overlay;
      }

      /* Dark vignette */
      .bw-vignette {
        position: absolute; inset: 0; border-radius: 20px; pointer-events: none;
        background: linear-gradient(
          160deg,
          rgba(0,0,0,0.18) 0%,
          transparent       40%,
          rgba(0,0,0,0.45) 100%
        );
      }

      /* Animated border */
      .bw-img-border {
        position: absolute; inset: 0; border-radius: 20px;
        border: 1.5px solid rgba(255,255,255,0.1);
        pointer-events: none; transition: border-color 0.3s ease, box-shadow 0.3s ease;
      }
      .bw-img-border-on {
        border-color: rgba(183,10,1,0.55);
        box-shadow: inset 0 0 28px rgba(183,10,1,0.10);
      }

      /* Corner badges */
      .bw-corner-badge {
        position: absolute; top: 14px; left: 14px;
        display: flex; align-items: center; gap: 6px;
        padding: 6px 12px; border-radius: 999px; font-size: 11px; font-weight: 700;
        background: rgba(6,6,8,0.78); border: 1px solid rgba(255,255,255,0.14);
        color: rgba(255,255,255,0.82);
        backdrop-filter: blur(10px);
        -webkit-backdrop-filter: blur(10px);
      }
      .bw-corner-badge-br {
        top: unset; left: unset; bottom: 14px; right: 14px;
        color: #3ecf6e; border-color: rgba(62,207,110,0.28);
        background: rgba(6,6,8,0.82);
      }

      /* Custom cursor dot */
      .bw-cursor {
        position: absolute;
        width: 36px; height: 36px;
        border-radius: 50%;
        pointer-events: none;
        opacity: 0;
        transform: translate(-50%, -50%);
        background: radial-gradient(circle, rgba(183,10,1,0.72) 0%, rgba(183,10,1,0.0) 70%);
        border: 1.5px solid rgba(183,10,1,0.65);
        transition: opacity 0.25s ease;
        will-change: left, top;
        z-index: 50;
        /* Inner bright core */
        box-shadow: 0 0 0 2px rgba(255,100,80,0.35), 0 0 16px rgba(183,10,1,0.55);
      }

      /* Stat chips */
      .bw-chip {
        position: absolute;
        display: flex; align-items: center; gap: 10px;
        padding: 10px 14px; border-radius: 14px;
        background: rgba(6,6,8,0.82); border: 1px solid;
        backdrop-filter: blur(10px);
        -webkit-backdrop-filter: blur(10px);
        white-space: nowrap; z-index: 30;
        box-shadow: 0 8px 28px rgba(0,0,0,0.38);
      }
      .bw-chip-icon { font-size: 18px; line-height: 1; }
      .bw-chip-val  { font-size: 16px; font-weight: 900; letter-spacing: -0.04em; line-height: 1; }
      .bw-chip-lbl  { font-size: 9px; color: rgba(255,255,255,0.36); font-weight: 700; letter-spacing: 0.07em; text-transform: uppercase; margin-top: 2px; }

      /* Particles */
      .bw-particles { position: absolute; inset: 0; pointer-events: none; overflow: hidden; z-index: 0; }
      .bw-particle  { position: absolute; border-radius: 50%; animation: bwParticle linear infinite; }

      /* ── Keyframes ── */
      @keyframes bwBlink    { 0%,100%{opacity:1} 50%{opacity:0.25} }
      @keyframes bwParticle {
        0%  { opacity:0;   transform:translateY(0)    scale(1);   }
        12% { opacity:0.9; }
        85% { opacity:0.5; }
        100%{ opacity:0;   transform:translateY(-65px) scale(0.35); }
      }

      /* ── Responsive ── */
      @media (max-width: 900px) {
        .bw-hero    { flex-direction: column; padding: 24px 20px 32px; gap: 32px; }
        .bw-copy    { flex: unset; }
        .bw-img-col { width: 100%; }
        .bw-desktop { display: none !important; }
        .bw-mobile  { display: flex !important; }
        .bw-nav     { padding: 14px 20px; }
        .bw-chip    { display: none; }   /* chips overlap on small screens */
      }
      @media (max-width: 480px) {
        .bw-hero-img { height: clamp(220px, 62vw, 300px); }
      }
    `}</style>
  );
}
import React, { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, GraduationCap, X } from "lucide-react";

const DISMISS_KEY = "brandsway-courses-launch-v2";
const COURSES_URL = "https://bw-skills.vercel.app/";
const SHOW_DELAY_MS = 1200;

const CONFETTI = Array.from({ length: 16 }, (_, i) => ({
  id: i,
  left: `${4 + Math.random() * 92}%`,
  delay: Math.random() * 0.55,
  duration: 2.4 + Math.random() * 1.8,
  color: ["#C61407", "#FFD166", "#080C12", "#FF4757"][i % 4],
  w: 5 + Math.random() * 6,
  h: 8 + Math.random() * 8,
  rotate: Math.random() * 360,
}));

function readDismissed() {
  try {
    return localStorage.getItem(DISMISS_KEY) === "1";
  } catch {
    return false;
  }
}

function writeDismissed() {
  try {
    localStorage.setItem(DISMISS_KEY, "1");
  } catch {
    /* private mode */
  }
}

export default function CoursesLaunchPopup() {
  const [visible, setVisible] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setMounted(true);
    const mq = window.matchMedia("(max-width: 767px)");
    const update = () => setIsMobile(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  useEffect(() => {
    if (!mounted || readDismissed()) return undefined;
    const timer = window.setTimeout(() => setVisible(true), SHOW_DELAY_MS);
    return () => window.clearTimeout(timer);
  }, [mounted]);

  useEffect(() => {
    if (!visible || isMobile) return undefined;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [visible, isMobile]);

  const dismiss = () => {
    writeDismissed();
    setVisible(false);
  };

  if (!mounted) return null;

  return createPortal(
    <AnimatePresence mode="wait">
      {visible && (
        <motion.div
          key="courses-launch-popup"
          role="dialog"
          aria-modal="true"
          aria-label="Learn Real Skills — Brandsway Skills courses launch"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-[1200] flex items-end justify-center p-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] md:items-center md:p-6"
          data-lenis-prevent
        >
          {/* Backdrop — lighter on mobile */}
          <motion.button
            type="button"
            aria-label="Close announcement"
            className="absolute inset-0 bg-[#080C12]/50 md:bg-[#080C12]/70 backdrop-blur-[2px] md:backdrop-blur-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={dismiss}
          />

          {/* Confetti — desktop only */}
          <div className="pointer-events-none absolute inset-0 hidden overflow-hidden md:block" aria-hidden>
            {CONFETTI.map((piece) => (
              <motion.span
                key={piece.id}
                className="absolute top-0 rounded-sm"
                style={{
                  left: piece.left,
                  width: piece.w,
                  height: piece.h,
                  backgroundColor: piece.color,
                  rotate: piece.rotate,
                }}
                initial={{ y: "-10%", opacity: 0 }}
                animate={{
                  y: "110vh",
                  opacity: [0, 1, 1, 0],
                  rotate: piece.rotate + 720,
                }}
                transition={{
                  duration: piece.duration,
                  delay: piece.delay,
                  repeat: Infinity,
                  ease: "linear",
                }}
              />
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: isMobile ? 40 : 48, scale: isMobile ? 1 : 0.92 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: isMobile ? 24 : 32, scale: 0.98 }}
            transition={{ type: "spring", stiffness: 340, damping: 30 }}
            className="relative z-10 w-full max-w-[22rem] md:max-w-md lg:max-w-lg"
          >
            <div
              className="absolute -inset-0.5 rounded-2xl md:-inset-1 md:rounded-[2rem] bg-gradient-to-br from-[#C61407]/60 via-[#FFD166]/25 to-[#C61407]/20 blur-lg opacity-70 md:opacity-80"
              aria-hidden
            />

            <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-[#080C12] shadow-2xl shadow-[#C61407]/15 md:rounded-[1.75rem] md:shadow-[#C61407]/20">
              <div className="h-0.5 md:h-1 w-full bg-gradient-to-r from-transparent via-[#C61407] to-transparent" aria-hidden />

              <button
                type="button"
                onClick={dismiss}
                className="absolute top-2.5 right-2.5 z-10 flex h-7 w-7 md:top-4 md:right-4 md:h-9 md:w-9 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/70 transition hover:bg-white/10 hover:text-white"
                aria-label="Close"
              >
                <X className="h-3.5 w-3.5 md:h-4 md:w-4" />
              </button>

              {/* ── Mobile: compact banner ── */}
              <div className="md:hidden px-4 pt-4 pb-3.5">
                <div className="mb-2 inline-flex items-center gap-1.5 rounded-full border border-[#C61407]/35 bg-[#C61407]/12 px-2.5 py-0.5">
                  <span className="relative flex h-1.5 w-1.5">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#C61407] opacity-60" />
                    <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-[#C61407]" />
                  </span>
                  <span className="text-[9px] font-black uppercase tracking-[0.2em] text-[#FFD166]">
                    New · Courses live
                  </span>
                </div>

                <h2 className="pr-8 text-xl font-black uppercase leading-tight tracking-tight text-white">
                  Learn <span className="text-[#C61407]">Real</span> Skills
                </h2>
                <p className="mt-1.5 text-xs leading-snug text-gray-400">
                  AI &amp; coding courses in Aligarh — now on Brandsway Skills.
                </p>

                <div className="mt-3 flex gap-2">
                  <a
                    href={COURSES_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={dismiss}
                    className="inline-flex flex-1 items-center justify-center gap-1.5 rounded-xl bg-[#C61407] px-3 py-2.5 text-[11px] font-bold uppercase tracking-wide text-white"
                  >
                    <GraduationCap className="h-3.5 w-3.5" aria-hidden />
                    Explore
                    <ArrowUpRight className="h-3.5 w-3.5" aria-hidden />
                  </a>
                  <button
                    type="button"
                    onClick={dismiss}
                    className="rounded-xl border border-white/15 px-3 py-2.5 text-[11px] font-semibold text-gray-400"
                  >
                    Later
                  </button>
                </div>
              </div>

              {/* ── Desktop: full celebration card ── */}
              <div className="hidden md:block px-8 pt-9 pb-7 lg:px-9 lg:pt-10 lg:pb-9">
                <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#C61407]/40 bg-[#C61407]/15 px-4 py-1.5">
                  <span className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#C61407] opacity-60" />
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-[#C61407]" />
                  </span>
                  <span className="text-[10px] font-black uppercase tracking-[0.28em] text-[#FFD166]">
                    New launch · Celebrate with us
                  </span>
                </div>

                <h2 className="mb-3 text-4xl lg:text-[3.25rem] font-black uppercase leading-[0.92] tracking-tighter text-white">
                  Learn
                  <br />
                  Real
                  <br />
                  <span className="text-[#C61407]">Skills.</span>
                </h2>

                <p className="mb-1 text-sm font-semibold uppercase tracking-widest text-[#FFD166]/90">
                  Brandsway Skills is live
                </p>
                <p className="mb-6 max-w-sm text-sm leading-relaxed text-gray-400">
                  AI &amp; coding courses in Aligarh — hands-on learning and real projects for your career.
                </p>

                <div className="mb-6 flex flex-wrap gap-2">
                  {["AI Fundamentals", "Web Development", "Live Mentorship"].map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] font-semibold text-gray-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3">
                  <a
                    href={COURSES_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={dismiss}
                    className="group inline-flex flex-1 items-center justify-center gap-2 rounded-2xl bg-[#C61407] px-6 py-3.5 text-sm font-bold uppercase tracking-wider text-white shadow-lg shadow-[#C61407]/30 transition hover:bg-red-700"
                  >
                    <GraduationCap className="h-4 w-4" aria-hidden />
                    Explore courses
                    <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden />
                  </a>
                  <button
                    type="button"
                    onClick={dismiss}
                    className="inline-flex flex-1 items-center justify-center rounded-2xl border border-white/15 px-6 py-3.5 text-sm font-semibold text-gray-400 transition hover:border-white/25 hover:text-white"
                  >
                    Maybe later
                  </button>
                </div>
              </div>

              <div className="hidden border-t border-white/5 bg-white/[0.02] px-6 py-2.5 text-center md:block lg:px-9">
                <p className="text-[10px] font-medium uppercase tracking-[0.2em] text-gray-500">
                  From the team at The BrandsWay · Aligarh
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body,
  );
}

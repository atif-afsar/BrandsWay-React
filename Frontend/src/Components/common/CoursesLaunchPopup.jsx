import React, { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, GraduationCap, PartyPopper, Sparkles, X } from "lucide-react";

/** Bump version if you need everyone to see the popup again after copy/design changes */
const DISMISS_KEY = "brandsway-courses-launch-v2";
const COURSES_URL = "https://bw-skills.vercel.app/";
const SHOW_DELAY_MS = 1200;

const CONFETTI = Array.from({ length: 28 }, (_, i) => ({
  id: i,
  left: `${4 + Math.random() * 92}%`,
  delay: Math.random() * 0.55,
  duration: 2.4 + Math.random() * 1.8,
  color: ["#C61407", "#FFD166", "#080C12", "#FF4757", "#FFFFFF", "#E8D5B7"][i % 6],
  w: 5 + Math.random() * 7,
  h: 8 + Math.random() * 10,
  rotate: Math.random() * 360,
}));

const headlineWords = ["Learn", "Real", "Skills"];

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
    /* private mode — ignore */
  }
}

export default function CoursesLaunchPopup() {
  const [visible, setVisible] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted || readDismissed()) return undefined;

    const timer = window.setTimeout(() => setVisible(true), SHOW_DELAY_MS);
    return () => window.clearTimeout(timer);
  }, [mounted]);

  useEffect(() => {
    if (!visible) return undefined;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [visible]);

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
          aria-labelledby="courses-launch-title"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.35 }}
          className="fixed inset-0 z-[1200] flex items-center justify-center p-4 sm:p-6"
          data-lenis-prevent
        >
          <motion.button
            type="button"
            aria-label="Close announcement"
            className="absolute inset-0 bg-[#080C12]/70 backdrop-blur-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={dismiss}
          />

          <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
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
                initial={{ y: "-10%", opacity: 0, scale: 0 }}
                animate={{
                  y: "110vh",
                  opacity: [0, 1, 1, 0],
                  rotate: piece.rotate + 720,
                  scale: [0, 1, 1, 0.6],
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
            initial={{ opacity: 0, y: 48, scale: 0.92 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 24, scale: 0.96 }}
            transition={{ type: "spring", stiffness: 320, damping: 28, delay: 0.05 }}
            className="relative z-10 w-full max-w-md sm:max-w-lg"
          >
            <div
              className="absolute -inset-1 rounded-[2rem] bg-gradient-to-br from-[#C61407] via-[#FFD166]/40 to-[#C61407]/30 blur-xl opacity-80"
              aria-hidden
            />

            <div className="relative overflow-hidden rounded-[1.75rem] border border-white/10 bg-[#080C12] shadow-2xl shadow-[#C61407]/20">
              <div className="h-1 w-full bg-gradient-to-r from-transparent via-[#C61407] to-transparent" aria-hidden />

              <button
                type="button"
                onClick={dismiss}
                className="absolute top-4 right-4 z-10 flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/70 transition hover:bg-white/10 hover:text-white"
                aria-label="Close"
              >
                <X className="h-4 w-4" />
              </button>

              <div className="relative px-6 pt-8 pb-7 sm:px-9 sm:pt-10 sm:pb-9">
                <motion.div
                  animate={{ rotate: [0, 8, -8, 0], scale: [1, 1.08, 1] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute top-6 left-6 text-[#FFD166]/80"
                  aria-hidden
                >
                  <Sparkles className="h-5 w-5" />
                </motion.div>
                <motion.div
                  animate={{ y: [0, -6, 0] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute top-8 right-14 text-[#C61407]"
                  aria-hidden
                >
                  <PartyPopper className="h-6 w-6" />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.15 }}
                  className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#C61407]/40 bg-[#C61407]/15 px-4 py-1.5"
                >
                  <span className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#C61407] opacity-60" />
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-[#C61407]" />
                  </span>
                  <span className="text-[10px] font-black uppercase tracking-[0.28em] text-[#FFD166]">
                    New launch · Celebrate with us
                  </span>
                </motion.div>

                <div id="courses-launch-title" className="mb-4">
                  {headlineWords.map((word, i) => (
                    <motion.span
                      key={word}
                      initial={{ opacity: 0, x: -28 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{
                        delay: 0.22 + i * 0.1,
                        type: "spring",
                        stiffness: 260,
                        damping: 22,
                      }}
                      className="block text-[2.75rem] sm:text-[3.5rem] font-black uppercase leading-[0.92] tracking-tighter text-white"
                    >
                      {word}
                      {i === 2 && <span className="text-[#C61407]">.</span>}
                    </motion.span>
                  ))}
                </div>

                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.55 }}
                  className="mb-2 text-sm font-semibold text-[#FFD166]/90 uppercase tracking-widest"
                >
                  Brandsway Skills is live
                </motion.p>

                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.62 }}
                  className="mb-8 max-w-sm text-sm sm:text-base leading-relaxed text-gray-400"
                >
                  We&apos;re landing AI &amp; coding courses in Aligarh — hands-on learning,
                  real projects, and skills that actually move your career forward.
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.68 }}
                  className="mb-8 flex flex-wrap gap-2"
                >
                  {["AI Fundamentals", "Web Development", "Live Mentorship"].map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] font-semibold text-gray-300"
                    >
                      {tag}
                    </span>
                  ))}
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.75 }}
                  className="flex flex-col sm:flex-row gap-3"
                >
                  <a
                    href={COURSES_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={dismiss}
                    className="group inline-flex flex-1 items-center justify-center gap-2 rounded-2xl bg-[#C61407] px-6 py-3.5 text-sm font-bold uppercase tracking-wider text-white shadow-lg shadow-[#C61407]/30 transition hover:bg-red-700"
                  >
                    <GraduationCap className="h-4 w-4" aria-hidden />
                    Explore courses
                    <ArrowUpRight
                      className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                      aria-hidden
                    />
                  </a>
                  <button
                    type="button"
                    onClick={dismiss}
                    className="inline-flex flex-1 items-center justify-center rounded-2xl border border-white/15 px-6 py-3.5 text-sm font-semibold text-gray-400 transition hover:border-white/25 hover:text-white"
                  >
                    Maybe later
                  </button>
                </motion.div>
              </div>

              <div className="border-t border-white/5 bg-white/[0.02] px-6 py-3 text-center sm:px-9">
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

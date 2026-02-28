import { useEffect } from "react";
import styled, { keyframes } from "styled-components";

/* ── Letters ─────────────────────────────────── */
const BRANDS = ["B","r","a","n","d","s"];
const WAY    = ["W","a","y"];

/* ── Keyframes ───────────────────────────────── */
const letterAnim = keyframes`
  0%   { opacity: 0; transform: translateY(6px); filter: blur(4px); }
  8%   { opacity: 1; transform: translateY(-1px); filter: blur(0); }
  22%  { opacity: 0.85; transform: translateY(0); }
  100% { opacity: 0; transform: translateY(-4px); filter: blur(2px); }
`;

const sweepMove = keyframes`
  0%   { transform: translateX(-62%); }
  100% { transform: translateX(62%); }
`;

const sweepFade = keyframes`
  0%, 100% { opacity: 0; }
  12%       { opacity: 1; }
  60%       { opacity: 0; }
`;

const pulseBar = keyframes`
  0%, 100% { opacity: 0.3; transform: scaleX(0.92); }
  50%       { opacity: 0.65; transform: scaleX(1); }
`;

const glowPulse = keyframes`
  0%, 100% { opacity: 0.12; }
  50%       { opacity: 0.28; }
`;

/* ── Styled components ───────────────────────── */
const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0;
  position: relative;
  user-select: none;
`;

const WordRow = styled.div`
  position: relative;
  display: flex;
  align-items: baseline;
  gap: 0;
  height: 72px;
`;

/* Sweep light overlay */
const Sweep = styled.div`
  position: absolute;
  inset: 0;
  z-index: 1;
  pointer-events: none;
  mask: repeating-linear-gradient(
    90deg,
    transparent 0px,
    transparent 5px,
    black 6px,
    black 7px
  );

  &::after {
    content: "";
    position: absolute;
    inset: 0;
    background-image:
      radial-gradient(circle at 50% 50%, rgba(198,20,7,0.9) 0%, transparent 50%),
      radial-gradient(circle at 44% 44%, rgba(255,80,60,0.7) 0%, transparent 44%),
      radial-gradient(circle at 56% 56%, rgba(255,200,180,0.5) 0%, transparent 40%),
      radial-gradient(circle at 44% 56%, rgba(180,10,0,0.6) 0%, transparent 44%);
    mask: radial-gradient(
      circle at 50% 50%,
      transparent 0%,
      transparent 8%,
      black 22%
    );
    animation:
      ${sweepMove} 2.4s cubic-bezier(0.6, 0.8, 0.5, 1) infinite alternate,
      ${sweepFade} 4.8s ease-in-out infinite;
  }
`;

/* Individual letter */
const Letter = styled.span`
  display: inline-block;
  font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
  font-weight: 700;
  font-size: clamp(34px, 5.5vw, 56px);
  letter-spacing: -0.02em;
  line-height: 1;
  z-index: 2;
  opacity: 0;
  color: ${p => p.$red ? "#C61407" : "#EDE9E2"};
  text-shadow: ${p => p.$red
    ? "0 0 18px rgba(198,20,7,0.5), 0 0 40px rgba(198,20,7,0.2)"
    : "0 0 14px rgba(237,233,226,0.3)"};
  animation: ${letterAnim} ${p => p.$dur || "4.8"}s infinite linear;
  animation-delay: ${p => p.$delay}s;
`;

/* Red glow behind "Way" */
const RedGlow = styled.div`
  position: absolute;
  right: -8px;
  top: 50%;
  transform: translateY(-50%);
  width: 110px;
  height: 60px;
  background: radial-gradient(ellipse, rgba(198,20,7,0.22) 0%, transparent 70%);
  filter: blur(16px);
  border-radius: 50%;
  pointer-events: none;
  animation: ${glowPulse} 2.4s ease-in-out infinite;
`;

/* Hairline rule below wordmark */
const Rule = styled.div`
  width: 100%;
  height: 1px;
  background: linear-gradient(
    90deg,
    transparent 0%,
    rgba(198,20,7,0.7) 30%,
    rgba(198,20,7,0.9) 50%,
    rgba(198,20,7,0.7) 70%,
    transparent 100%
  );
  box-shadow: 0 0 8px rgba(198,20,7,0.4);
  margin-top: 6px;
  animation: ${pulseBar} 2.4s ease-in-out infinite;
`;

/* Tagline */
const tagAnim = keyframes`
  0%, 100% { opacity: 0.18; letter-spacing: 0.28em; }
  50%       { opacity: 0.38; letter-spacing: 0.32em; }
`;

const Tagline = styled.p`
  font-family: "Helvetica Neue", sans-serif;
  font-size: 10px;
  font-weight: 600;
  color: white;
  letter-spacing: 0.28em;
  text-transform: uppercase;
  margin-top: 14px;
  animation: ${tagAnim} 2.4s ease-in-out infinite;
`;

/* ── Wrapper with dark bg ───────────────────── */
const StyledWrapper = styled.div`
  min-height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #080C12;
  position: fixed;
  inset: 0;
  z-index: 999;
  overflow: hidden;

  /* Subtle grid */
  &::before {
    content: "";
    position: absolute;
    inset: 0;
    background-image:
      linear-gradient(rgba(255,255,255,0.012) 1px, transparent 1px),
      linear-gradient(90deg, rgba(255,255,255,0.012) 1px, transparent 1px);
    background-size: 72px 72px;
    pointer-events: none;
  }

  /* Grain */
  &::after {
    content: "";
    position: absolute;
    inset: 0;
    opacity: 0.04;
    mix-blend-mode: overlay;
    background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.72' numOctaves='4' stitchTiles='stitch'/%3E%3CfeColorMatrix type='saturate' values='0'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");
    background-size: 160px;
    pointer-events: none;
  }
`;

const BASE_DELAY = 0.1;
const STEP = 0.11;

export default function BrandsWayLoader({ onComplete }) {
  useEffect(() => {
    // Loader displays for 3.5 seconds, then calls onComplete
    const timer = setTimeout(() => {
      onComplete();
    }, 1800);

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <StyledWrapper>
      <Wrap>
        <WordRow>
          {/* "Brands" */}
          {BRANDS.map((l, i) => (
            <Letter
              key={`b${i}`}
              $delay={BASE_DELAY + i * STEP}
              $dur="4.8"
            >
              {l}
            </Letter>
          ))}

          {/* "Way" — crimson */}
          <RedGlow />
          {WAY.map((l, i) => (
            <Letter
              key={`w${i}`}
              $red
              $delay={BASE_DELAY + (BRANDS.length + i) * STEP}
              $dur="4.8"
            >
              {l}
            </Letter>
          ))}

          {/* Chromatic sweep overlay */}
          <Sweep />
        </WordRow>

        <Rule />
        <Tagline>Establishing Authority</Tagline>
      </Wrap>
    </StyledWrapper>
  );
}

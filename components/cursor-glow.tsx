"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { useUIStore } from "@/store/use-store";

export default function CursorGlow() {
  const { setCursorPosition } = useUIStore();
  const [isVisible, setIsVisible] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const [isClicking, setIsClicking] = useState(false);

  const mouseX = useMotionValue(-200);
  const mouseY = useMotionValue(-200);

  // Dot follows instantly
  const dotX = useSpring(mouseX, { stiffness: 2000, damping: 80 });
  const dotY = useSpring(mouseY, { stiffness: 2000, damping: 80 });

  // Reticle — subtle smooth lag, not springy
  const ringX = useSpring(mouseX, { stiffness: 500, damping: 40 });
  const ringY = useSpring(mouseY, { stiffness: 500, damping: 40 });

  // Ambient glow tracks slowly
  const glowX = useSpring(mouseX, { stiffness: 80, damping: 30 });
  const glowY = useSpring(mouseY, { stiffness: 80, damping: 30 });

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      setCursorPosition({ x: e.clientX, y: e.clientY });
      setIsVisible(true);
    };

    const onLeave = () => setIsVisible(false);
    const onEnter = () => setIsVisible(true);

    const onMouseDown = () => setIsClicking(true);
    const onMouseUp = () => setIsClicking(false);

    const onOver = (e: MouseEvent) => {
      const el = e.target as HTMLElement;
      setIsHovering(!!el.closest("a, button, [role='button'], input, select, textarea, label"));
    };

    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseover", onOver);
    document.addEventListener("mouseleave", onLeave);
    document.addEventListener("mouseenter", onEnter);
    window.addEventListener("mousedown", onMouseDown);
    window.addEventListener("mouseup", onMouseUp);

    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseover", onOver);
      document.removeEventListener("mouseleave", onLeave);
      document.removeEventListener("mouseenter", onEnter);
      window.removeEventListener("mousedown", onMouseDown);
      window.removeEventListener("mouseup", onMouseUp);
    };
  }, [mouseX, mouseY, setCursorPosition]);

  return (
    <>
      {/* ── Ambient crimson glow that drifts after cursor ── */}
      <motion.div
        className="pointer-events-none fixed z-0 hidden lg:block"
        style={{
          x: glowX,
          y: glowY,
          translateX: "-50%",
          translateY: "-50%",
          width: 600,
          height: 600,
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(225,29,72,0.09) 0%, rgba(159,18,57,0.04) 45%, transparent 70%)",
          filter: "blur(40px)",
          opacity: isVisible ? 1 : 0,
        }}
        transition={{ opacity: { duration: 0.4 } }}
        aria-hidden="true"
      />

      {/* ── Outer elastic reticle ring ── */}
      <motion.div
        className="pointer-events-none fixed z-[9998] hidden lg:block"
        style={{
          x: ringX,
          y: ringY,
          translateX: "-50%",
          translateY: "-50%",
          opacity: isVisible ? 1 : 0,
        }}
        animate={{
          width: isHovering ? 46 : isClicking ? 20 : 30,
          height: isHovering ? 46 : isClicking ? 20 : 30,
          rotate: isHovering ? 45 : 0,
        }}
        transition={{ duration: 0.18, ease: "easeOut" }}
        aria-hidden="true"
      >
        {/* Ring border */}
        <div
          className="absolute inset-0 rounded-full transition-colors duration-200"
          style={{
            border: `1px solid ${isHovering ? "rgba(225,29,72,0.9)" : "rgba(225,29,72,0.55)"}`,
            background: isHovering ? "rgba(225,29,72,0.08)" : "transparent",
            boxShadow: isHovering
              ? "0 0 12px rgba(225,29,72,0.35), inset 0 0 8px rgba(225,29,72,0.15)"
              : "none",
          }}
        />
        {/* Crosshair ticks — top */}
        <div
          className="absolute left-1/2 -translate-x-1/2 transition-all duration-200"
          style={{
            top: -5,
            width: 1,
            height: 4,
            background: isHovering ? "rgba(225,29,72,0.9)" : "rgba(225,29,72,0.5)",
          }}
        />
        {/* bottom */}
        <div
          className="absolute left-1/2 -translate-x-1/2 transition-all duration-200"
          style={{
            bottom: -5,
            width: 1,
            height: 4,
            background: isHovering ? "rgba(225,29,72,0.9)" : "rgba(225,29,72,0.5)",
          }}
        />
        {/* left */}
        <div
          className="absolute top-1/2 -translate-y-1/2 transition-all duration-200"
          style={{
            left: -5,
            width: 4,
            height: 1,
            background: isHovering ? "rgba(225,29,72,0.9)" : "rgba(225,29,72,0.5)",
          }}
        />
        {/* right */}
        <div
          className="absolute top-1/2 -translate-y-1/2 transition-all duration-200"
          style={{
            right: -5,
            width: 4,
            height: 1,
            background: isHovering ? "rgba(225,29,72,0.9)" : "rgba(225,29,72,0.5)",
          }}
        />
      </motion.div>

      {/* ── Inner dot — sharp, instant follow ── */}
      <motion.div
        className="pointer-events-none fixed z-[9999] hidden lg:block rounded-full"
        style={{
          x: dotX,
          y: dotY,
          translateX: "-50%",
          translateY: "-50%",
          background: "rgba(225,29,72,1)",
          boxShadow: "0 0 6px rgba(225,29,72,0.8)",
          opacity: isVisible ? (isHovering ? 0 : 1) : 0,
        }}
        animate={{
          width: isClicking ? 3 : 4,
          height: isClicking ? 3 : 4,
        }}
        transition={{ duration: 0.1 }}
        aria-hidden="true"
      />
    </>
  );
}

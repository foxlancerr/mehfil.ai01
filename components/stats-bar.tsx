"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";

interface StatItem {
  prefix: string;
  value: string;
  suffix: string;
  label: string;
  isDecimal?: boolean;
  isStatic?: boolean;
}

const STATS: StatItem[] = [
  { prefix: "", value: "10", suffix: "+", label: "Live Deployed Projects" },
  { prefix: "", value: "5", suffix: "★", label: "Verified Fiverr Rating" },
  { prefix: "", value: "4", suffix: "th / 600", label: "CS Department Rank" },
  { prefix: "", value: "5", suffix: "+", label: "Countries Served" },
];

function AnimatedNumber({ target, isDecimal }: { target: string; isDecimal?: boolean }) {
  const [display, setDisplay] = useState(isDecimal ? "0.0" : "0");
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;
    const end = parseFloat(target);
    const duration = 1800;
    const startTime = performance.now();

    const animate = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = eased * end;
      setDisplay(isDecimal ? current.toFixed(1) : Math.round(current).toString());
      if (progress < 1) requestAnimationFrame(animate);
    };

    requestAnimationFrame(animate);
  }, [isInView, target, isDecimal]);

  return <span ref={ref}>{display}</span>;
}

export default function StatsBar() {
  return (
    <section className="relative px-6 lg:px-12 py-6">
      <div className="mx-auto max-w-[1100px]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden rounded-2xl border border-subtle/60 bg-surface"
        >
          {/* Ambient crimson glow at top */}
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_50%_0%,rgba(225,29,72,0.09),transparent_65%)]" />

          <div className="grid grid-cols-2 divide-subtle/40 lg:grid-cols-4 divide-x divide-y lg:divide-y-0">
            {STATS.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex flex-col items-center justify-center px-6 py-10 text-center"
              >
                <div className="flex items-baseline gap-0.5">
                  {stat.prefix && (
                    <span className="text-xl font-bold text-crimson mr-0.5">{stat.prefix}</span>
                  )}
                  <span className="text-4xl font-extrabold text-white tabular-nums lg:text-5xl">
                    <AnimatedNumber target={stat.value} isDecimal={stat.isDecimal} />
                  </span>
                  <span className="text-xl font-bold text-crimson ml-0.5">{stat.suffix}</span>
                </div>
                <p className="mt-2.5 font-mono text-xs uppercase tracking-widest text-text-muted/60">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

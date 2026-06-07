"use client";

export default function AnimatedGrid() {
  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden" aria-hidden="true">
      {/* Vertical lines */}
      <div className="absolute inset-0 animate-grid-drift" style={{ animationDuration: "25s" }}>
        <div className="line-grid-bg h-[200%] w-[200%] opacity-30" />
      </div>

      {/* Top-left corner glow */}
      <div
        className="absolute -left-[200px] -top-[200px] h-[600px] w-[600px] rounded-full opacity-[0.10]"
        style={{
          background:
            "radial-gradient(circle, rgba(225, 29, 72, 1) 0%, transparent 70%)",
          filter: "blur(80px)",
        }}
      />

      {/* Bottom-right corner glow */}
      <div
        className="absolute -bottom-[200px] -right-[200px] h-[500px] w-[500px] rounded-full opacity-[0.07]"
        style={{
          background:
            "radial-gradient(circle, rgba(159, 18, 57, 1) 0%, transparent 70%)",
          filter: "blur(80px)",
        }}
      />

      {/* Subtle noise texture overlay */}
      <div
        className="absolute inset-0 opacity-[0.015]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
          backgroundRepeat: "repeat",
          backgroundSize: "128px 128px",
        }}
      />
    </div>
  );
}
import { ImageResponse } from "next/og";

export const alt = "Mehfil.ai — Full-Service Digital Agency by Muhammad Asim";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#000000",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "system-ui, -apple-system, sans-serif",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Crimson radial glow background */}
        <div
          style={{
            position: "absolute",
            top: "-100px",
            left: "50%",
            transform: "translateX(-50%)",
            width: "900px",
            height: "600px",
            background:
              "radial-gradient(ellipse at center, rgba(225, 29, 72, 0.28) 0%, rgba(225, 29, 72, 0.08) 45%, transparent 70%)",
            borderRadius: "50%",
          }}
        />

        {/* Subtle grid lines */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />

        {/* Content */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "20px",
            zIndex: 1,
            padding: "0 60px",
          }}
        >
          {/* Logo */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "12px",
              marginBottom: "8px",
            }}
          >
            <div
              style={{
                width: "48px",
                height: "48px",
                borderRadius: "12px",
                background: "rgba(225, 29, 72, 0.15)",
                border: "1px solid rgba(225, 29, 72, 0.3)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "22px",
              }}
            >
              ⚡
            </div>
            <span
              style={{
                fontSize: "42px",
                fontWeight: 800,
                color: "#FFFFFF",
                letterSpacing: "-1px",
              }}
            >
              Mehfil
              <span style={{ color: "#E11D48" }}>.ai</span>
            </span>
          </div>

          {/* Tagline */}
          <div
            style={{
              fontSize: "26px",
              fontWeight: 400,
              color: "#9CA3AF",
              textAlign: "center",
              maxWidth: "760px",
              lineHeight: 1.4,
            }}
          >
            One agency. Every skill you need to compete online.
          </div>

          {/* Service Pills */}
          <div
            style={{
              display: "flex",
              gap: "10px",
              marginTop: "10px",
              flexWrap: "wrap",
              justifyContent: "center",
              maxWidth: "900px",
            }}
          >
            {[
              "Web Development",
              "AI Automation",
              "SEO & Growth",
              "Digital Marketing",
              "Web3 & Blockchain",
              "WordPress",
              "DevOps",
            ].map((service) => (
              <div
                key={service}
                style={{
                  padding: "7px 18px",
                  borderRadius: "9999px",
                  border: "1px solid rgba(225, 29, 72, 0.35)",
                  background: "rgba(225, 29, 72, 0.1)",
                  color: "#FB7185",
                  fontSize: "16px",
                  fontWeight: 500,
                }}
              >
                {service}
              </div>
            ))}
          </div>

          {/* Stats strip */}
          <div
            style={{
              display: "flex",
              gap: "40px",
              marginTop: "20px",
              padding: "14px 36px",
              background: "rgba(255,255,255,0.04)",
              borderRadius: "12px",
              border: "1px solid rgba(255,255,255,0.08)",
            }}
          >
            {[
              { value: "10+", label: "Live Projects" },
              { value: "5★", label: "Fiverr Rated" },
              { value: "5+", label: "Countries" },
              { value: "8", label: "Services" },
            ].map(({ value, label }) => (
              <div
                key={label}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: "2px",
                }}
              >
                <span
                  style={{
                    fontSize: "24px",
                    fontWeight: 700,
                    color: "#FFFFFF",
                  }}
                >
                  {value}
                </span>
                <span
                  style={{
                    fontSize: "13px",
                    color: "#6B7280",
                  }}
                >
                  {label}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom URL */}
        <div
          style={{
            position: "absolute",
            bottom: "28px",
            display: "flex",
            alignItems: "center",
            gap: "6px",
            color: "#4B5563",
            fontSize: "15px",
          }}
        >
          mehfil.ai
        </div>
      </div>
    ),
    { ...size }
  );
}

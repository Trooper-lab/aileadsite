"use client";

import HeroForm from "./HeroForm";

export default function Hero() {
    return (
        <section
            style={{
                position: "relative",
                padding: "80px 0 100px",
                backgroundColor: "#0A192F",
                color: "#fff",
                overflow: "hidden",
            }}
        >
            {/* Background accent skew remains */}
            <div
                style={{
                    position: "absolute",
                    top: 0,
                    right: 0,
                    width: "50%",
                    height: "100%",
                    backgroundColor: "rgba(255,107,0,0.05)",
                    transform: "skewX(12deg) translateX(8rem)",
                    pointerEvents: "none",
                }}
            />

            <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 1.5rem", position: "relative", zIndex: 10 }}>
                <div className="hero-grid">
                    {/* Left Content */}
                    <div style={{ display: "flex", flexDirection: "column", gap: 32 }}>
                        <div
                            style={{
                                display: "inline-flex",
                                alignItems: "center",
                                gap: 8,
                                padding: "8px 20px",
                                borderRadius: 9999,
                                backgroundColor: "#FF6B00",
                                width: "fit-content",
                            }}
                        >
                            <span
                                style={{
                                    fontSize: 11,
                                    fontWeight: 900,
                                    textTransform: "uppercase",
                                    letterSpacing: "0.2em",
                                    color: "#fff",
                                }}
                            >
                                Guaranteed ROI
                            </span>
                        </div>

                        <h1
                            style={{
                                fontSize: "clamp(2.5rem, 6vw, 4.5rem)",
                                fontFamily: "Montserrat, sans-serif",
                                fontWeight: 800,
                                lineHeight: 1.1,
                                margin: 0,
                            }}
                        >
                            Stop Losing Customers To{" "}
                            <span style={{ color: "#FF6B00", fontStyle: "italic" }}>Outdated</span>{" "}
                            Websites.
                        </h1>

                        <p
                            style={{
                                fontSize: 20,
                                color: "#cbd5e1",
                                maxWidth: 520,
                                lineHeight: 1.7,
                                margin: 0,
                            }}
                        >
                            We build high-performance websites for busy business owners who need more leads, not more headaches. Get a site that works as hard as you do.
                        </p>

                        <div style={{ display: "flex", flexWrap: "wrap", gap: 20 }}>
                            <a
                                href="#contact"
                                style={{
                                    backgroundColor: "#FF6B00",
                                    color: "#fff",
                                    padding: "18px 40px",
                                    borderRadius: 12,
                                    fontSize: 16,
                                    fontWeight: 900,
                                    textTransform: "uppercase",
                                    letterSpacing: "0.08em",
                                    textDecoration: "none",
                                    boxShadow: "0 20px 40px rgba(255,107,0,0.25)",
                                    transition: "background 0.2s",
                                    display: "inline-block",
                                }}
                                onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#FF8533")}
                                onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#FF6B00")}
                            >
                                Get a Free Audit
                            </a>
                            <a
                                href="#work"
                                style={{
                                    backgroundColor: "transparent",
                                    color: "#fff",
                                    padding: "18px 40px",
                                    borderRadius: 12,
                                    fontSize: 16,
                                    fontWeight: 700,
                                    border: "2px solid rgba(255,255,255,0.2)",
                                    textDecoration: "none",
                                    transition: "border-color 0.2s",
                                    display: "inline-block",
                                }}
                                onMouseEnter={(e) => (e.currentTarget.style.borderColor = "#fff")}
                                onMouseLeave={(e) => (e.currentTarget.style.borderColor = "rgba(255,255,255,0.2)")}
                            >
                                View Our Work
                            </a>
                        </div>

                        <div style={{ display: "flex", alignItems: "center", gap: 16, fontSize: 14, color: "#94a3b8" }}>
                            <div style={{ display: "flex" }}>
                                {[1, 2, 3].map((i) => (
                                    <div
                                        key={i}
                                        style={{
                                            width: 32,
                                            height: 32,
                                            borderRadius: "50%",
                                            border: "2px solid #0A192F",
                                            backgroundColor: "#112240",
                                            marginLeft: i > 1 ? -8 : 0,
                                            backgroundImage: `url('https://i.pravatar.cc/100?u=${i}')`,
                                            backgroundSize: "cover"
                                        }}
                                    />
                                ))}
                            </div>
                            <span style={{ fontWeight: 500 }}>Trusted by 500+ Local Business Owners</span>
                        </div>
                    </div>

                    {/* Right Visual - Replaced Image with HeroForm */}
                    <div style={{ position: "relative" }}>
                        <HeroForm />
                    </div>
                </div>
            </div>

            <style>{`
        .hero-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 64px;
          align-items: center;
        }
        @media (max-width: 1024px) {
          .hero-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
        </section>
    );
}

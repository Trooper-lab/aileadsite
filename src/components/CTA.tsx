"use client";

export default function CTA() {
    return (
        <section style={{ padding: "96px 0", backgroundColor: "#fff" }}>
            <div style={{ maxWidth: 1024, margin: "0 auto", padding: "0 1.5rem" }}>
                <div style={{ position: "relative", borderRadius: 48, backgroundColor: "#0A192F", padding: "80px 48px", textAlign: "center", color: "#fff", overflow: "hidden" }}>
                    {/* Radial gradient overlay */}
                    <div style={{ position: "absolute", inset: 0, opacity: 0.2, pointerEvents: "none", background: "radial-gradient(circle at center, #FF6B00 0%, transparent 70%)" }} />

                    <div style={{ position: "relative", zIndex: 10 }}>
                        <h2 style={{ fontSize: "clamp(2rem, 6vw, 4rem)", fontWeight: 800, marginBottom: 32, fontFamily: "Montserrat, sans-serif", letterSpacing: "-0.04em" }}>
                            Ready to Win Your <span style={{ color: "#FF6B00", fontStyle: "italic" }}>Market</span>?
                        </h2>
                        <p style={{ fontSize: 20, color: "#cbd5e1", maxWidth: 640, margin: "0 auto 48px", lineHeight: 1.6, fontWeight: 500 }}>
                            Stop letting competitors steal your traffic. Build a high-performance website that converts visitors into profit today.
                        </p>
                        <button style={{ backgroundColor: "#fff", color: "#0A192F", border: "none", borderRadius: 16, padding: "20px 48px", fontSize: 20, fontWeight: 900, textTransform: "uppercase", letterSpacing: "0.1em", cursor: "pointer", transition: "all 0.2s" }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.backgroundColor = "#FF6B00";
                                e.currentTarget.style.color = "#fff";
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.backgroundColor = "#fff";
                                e.currentTarget.style.color = "#0A192F";
                            }}>
                            Start Your Project
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}

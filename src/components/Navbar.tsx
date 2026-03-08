"use client";

import { useState, useEffect } from "react";

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header
            style={{
                position: "sticky",
                top: 0,
                zIndex: 50,
                width: "100%",
                borderBottom: "1px solid #e2e8f0",
                backgroundColor: "rgba(255,255,255,0.97)",
                backdropFilter: "blur(12px)",
                boxShadow: scrolled ? "0 2px 20px rgba(0,0,0,0.06)" : "none",
                transition: "box-shadow 0.3s",
            }}
        >
            <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 1.5rem" }}>
                <div style={{ display: "flex", height: 80, alignItems: "center", justifyContent: "space-between" }}>
                    {/* Logo */}
                    <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                        <span style={{ fontSize: 36, color: "#FF6B00" }}>🚀</span>
                        <span
                            style={{
                                fontSize: 22,
                                fontFamily: "Montserrat, sans-serif",
                                fontWeight: 800,
                                letterSpacing: "-0.04em",
                                color: "#0A192F",
                                textTransform: "uppercase",
                            }}
                        >
                            AIleadsite<span style={{ color: "#FF6B00" }}>.</span>
                        </span>
                    </div>

                    {/* Desktop Nav */}
                    <nav style={{ display: "flex", alignItems: "center", gap: 40 }} className="hidden-mobile">
                        {["Growth Solutions", "Success Stories", "Pricing"].map((item) => (
                            <a
                                key={item}
                                href="#"
                                style={{
                                    fontSize: 13,
                                    fontWeight: 700,
                                    textTransform: "uppercase",
                                    letterSpacing: "0.08em",
                                    color: "#0A192F",
                                    textDecoration: "none",
                                    transition: "color 0.2s",
                                }}
                                onMouseEnter={(e) => (e.currentTarget.style.color = "#FF6B00")}
                                onMouseLeave={(e) => (e.currentTarget.style.color = "#0A192F")}
                            >
                                {item}
                            </a>
                        ))}
                    </nav>

                    {/* CTA Button */}
                    <a
                        href="#contact"
                        style={{
                            backgroundColor: "#0A192F",
                            color: "#fff",
                            padding: "12px 24px",
                            borderRadius: 8,
                            fontSize: 13,
                            fontWeight: 800,
                            textTransform: "uppercase",
                            letterSpacing: "0.08em",
                            textDecoration: "none",
                            transition: "background 0.2s",
                            display: "inline-block",
                        }}
                        onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#112240")}
                        onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#0A192F")}
                    >
                        Get My Free Audit
                    </a>
                </div>
            </div>

            <style>{`
        @media (max-width: 768px) {
          .hidden-mobile { display: none !important; }
        }
      `}</style>
        </header>
    );
}

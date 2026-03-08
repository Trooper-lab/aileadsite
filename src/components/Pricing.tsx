"use client";

import { useState, useRef, useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
}

const tiers = [
    {
        name: "Growth Starter",
        desc: "Perfect for small local businesses",
        price: "$1,500",
        priceLabel: "flat fee",
        featured: false,
        features: [
            "High-Conversion Landing Page",
            "Local SEO Foundation",
            "Fast Mobile Loading",
            "Google Business Sync",
        ],
        cta: "Claim This Plan",
    },
    {
        name: "Market Leader",
        desc: "Dominate your local competition",
        price: "$3,500",
        priceLabel: "flat fee",
        featured: true,
        features: [
            "Up to 10 SEO-Optimized Pages",
            "AI-Powered Lead Capture Chat",
            "Full Conversion Funnel Setup",
            "Competitor Rank Analysis",
        ],
        cta: "Start Growing Now",
    },
    {
        name: "Custom Power",
        desc: "For high-volume established firms",
        price: "$7K+",
        priceLabel: "custom",
        featured: false,
        features: [
            "Unlimited Page Architecture",
            "Advanced CRM Integrations",
            "Professional Video Integration",
            "Dedicated Growth Strategist",
        ],
        cta: "Speak to a Pro",
    },
];

const monthly = [
    {
        name: "Basic Maintenance",
        desc: "For teams that need site upkeep",
        price: "$90",
        priceLabel: "/mo",
        featured: false,
        features: ["Hosting & SSL", "Weekly Backups", "Uptime Monitoring", "Security Patches"],
        cta: "Get Basic",
    },
    {
        name: "AI Evolution",
        desc: "Unlimited changes via AI",
        price: "$150",
        priceLabel: "/mo",
        featured: true,
        features: ["Everything in Basic", "Unlimited AI Changes", "Design Refreshes", "Priority Support"],
        cta: "Start Evolving",
    },
    {
        name: "Growth Engine",
        desc: "SEO & visibility domination",
        price: "$400",
        priceLabel: "/mo",
        featured: false,
        features: ["Everything in AI Plan", "Monthly SEO Reports", "Content Strategy", "Advanced Analytics"],
        cta: "Dominate Now",
    },
];

export default function Pricing() {
    const [mode, setMode] = useState<"project" | "monthly">("project");
    const containerRef = useRef<HTMLDivElement>(null);
    const gridRef = useRef<HTMLDivElement>(null);
    const data = mode === "project" ? tiers : monthly;

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            const cards = gridRef.current?.children;
            if (!cards || cards.length < 3) return;

            if (window.innerWidth > 768) {
                const cardLeft = cards[0];
                const cardMiddle = cards[1];
                const cardRight = cards[2];

                gsap.set(cardLeft, { x: "100%", opacity: 0, zIndex: 1 });
                gsap.set(cardRight, { x: "-100%", opacity: 0, zIndex: 1 });
                gsap.set(cardMiddle, { zIndex: 10, scale: 1.05 });

                gsap.to([cardLeft, cardRight], {
                    x: 0,
                    opacity: 1,
                    duration: 1.2,
                    ease: "power4.out",
                    scrollTrigger: {
                        trigger: gridRef.current,
                        start: "top 80%",
                        toggleActions: "play none none reverse",
                    },
                });
            }
        }, containerRef);

        return () => ctx.revert();
    }, [mode]);

    return (
        <section id="pricing" ref={containerRef} style={{ padding: "96px 0", overflow: "hidden" }}>
            <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 1.5rem" }}>
                <div
                    style={{
                        display: "flex",
                        flexWrap: "wrap",
                        justifyContent: "space-between",
                        alignItems: "flex-end",
                        marginBottom: 64,
                        gap: 24,
                    }}
                >
                    <div style={{ maxWidth: 540 }}>
                        <h2
                            style={{
                                fontSize: "clamp(2rem, 4vw, 3rem)",
                                fontFamily: "Montserrat, sans-serif",
                                fontWeight: 800,
                                color: "#0A192F",
                                marginBottom: 16,
                                lineHeight: 1.2,
                            }}
                        >
                            Investment Options Built For{" "}
                            <span style={{ color: "#FF6B00" }}>Scale</span>.
                        </h2>
                        <p style={{ fontSize: 18, color: "#475569", fontWeight: 500, lineHeight: 1.7, margin: 0 }}>
                            No fluff, no technical jargon. Just clear pricing for business owners who want to win online.
                        </p>
                    </div>

                    <div
                        style={{
                            display: "flex",
                            gap: 4,
                            backgroundColor: "#f1f5f9",
                            padding: 4,
                            borderRadius: 8,
                        }}
                    >
                        {(["project", "monthly"] as const).map((m) => (
                            <button
                                key={m}
                                onClick={() => setMode(m)}
                                style={{
                                    padding: "8px 24px",
                                    borderRadius: 6,
                                    fontSize: 14,
                                    fontWeight: 700,
                                    border: "none",
                                    cursor: "pointer",
                                    transition: "all 0.2s",
                                    backgroundColor: mode === m ? "#fff" : "transparent",
                                    color: mode === m ? "#0A192F" : "#64748b",
                                    boxShadow: mode === m ? "0 1px 4px rgba(0,0,0,0.1)" : "none",
                                }}
                            >
                                {m === "project" ? "One-Time Projects" : "Monthly Partners"}
                            </button>
                        ))}
                    </div>
                </div>

                <div className="pricing-grid" ref={gridRef}>
                    {data.map((tier) => (
                        <div
                            key={tier.name}
                            className="pricing-card"
                            style={{
                                display: "flex",
                                flexDirection: "column",
                                padding: 40,
                                borderRadius: 16,
                                border: tier.featured ? "4px solid #FF6B00" : "2px solid #f1f5f9",
                                backgroundColor: tier.featured ? "#fff" : "rgba(248,250,252,0.5)",
                                position: "relative",
                                transform: tier.featured ? "scale(1.05)" : "scale(1)",
                                boxShadow: tier.featured ? "0 40px 80px rgba(0,0,0,0.1)" : "none",
                                zIndex: tier.featured ? 10 : 1,
                                transition: "border-color 0.3s, background 0.3s, transform 0.3s",
                            }}
                            onMouseEnter={(e) => {
                                if (!tier.featured) {
                                    (e.currentTarget as HTMLElement).style.borderColor = "#FF6B00";
                                    (e.currentTarget as HTMLElement).style.backgroundColor = "#fff";
                                    (e.currentTarget as HTMLElement).style.transform = "translateY(-8px)";
                                }
                            }}
                            onMouseLeave={(e) => {
                                if (!tier.featured) {
                                    (e.currentTarget as HTMLElement).style.borderColor = "#f1f5f9";
                                    (e.currentTarget as HTMLElement).style.backgroundColor = "rgba(248,250,252,0.5)";
                                    (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
                                }
                            }}
                        >
                            {tier.featured && (
                                <div
                                    style={{
                                        position: "absolute",
                                        top: -20,
                                        left: "50%",
                                        transform: "translateX(-50%)",
                                        backgroundColor: "#FF6B00",
                                        color: "#fff",
                                        padding: "6px 24px",
                                        borderRadius: 9999,
                                        fontSize: 11,
                                        fontWeight: 900,
                                        textTransform: "uppercase",
                                        letterSpacing: "0.15em",
                                        boxShadow: "0 4px 12px rgba(255,107,0,0.4)",
                                        whiteSpace: "nowrap",
                                    }}
                                >
                                    Our Best Value
                                </div>
                            )}

                            <div style={{ marginBottom: 40 }}>
                                <h3
                                    style={{
                                        fontFamily: "Montserrat, sans-serif",
                                        fontSize: 22,
                                        fontWeight: 800,
                                        marginBottom: 8,
                                        color: "#0A192F",
                                    }}
                                >
                                    {tier.name}
                                </h3>
                                <p style={{ fontSize: 14, color: "#64748b", fontWeight: 500, marginBottom: 24 }}>{tier.desc}</p>
                                <div style={{ display: "flex", alignItems: "baseline", gap: 4 }}>
                                    <span
                                        style={{
                                            fontFamily: "Montserrat, sans-serif",
                                            fontSize: "clamp(2.5rem, 4vw, 3rem)",
                                            fontWeight: 900,
                                            color: tier.featured ? "#FF6B00" : "#0A192F",
                                        }}
                                    >
                                        {tier.price}
                                    </span>
                                    <span style={{ fontSize: 14, fontWeight: 700, color: "#94a3b8", textTransform: "uppercase" }}>
                                        {tier.priceLabel}
                                    </span>
                                </div>
                            </div>

                            <ul style={{ flexGrow: 1, listStyle: "none", padding: 0, margin: "0 0 40px", display: "flex", flexDirection: "column", gap: 20 }}>
                                {tier.features.map((f: string) => (
                                    <li
                                        key={f}
                                        style={{
                                            display: "flex",
                                            alignItems: "flex-start",
                                            gap: 12,
                                            fontWeight: 600,
                                            color: tier.featured ? "#0A192F" : "#475569",
                                        }}
                                    >
                                        <span style={{ color: "#FF6B00", fontSize: 20, lineHeight: 1.2, flexShrink: 0 }}>✓</span>
                                        {f}
                                    </li>
                                ))}
                            </ul>

                            <a
                                href="#contact"
                                style={{
                                    display: "block",
                                    width: "100%",
                                    padding: "16px 0",
                                    borderRadius: 12,
                                    textAlign: "center",
                                    fontWeight: 900,
                                    fontSize: 14,
                                    textTransform: "uppercase",
                                    letterSpacing: "0.1em",
                                    textDecoration: "none",
                                    cursor: "pointer",
                                    transition: "all 0.2s",
                                    backgroundColor: tier.featured ? "#FF6B00" : "transparent",
                                    color: tier.featured ? "#fff" : "#0A192F",
                                    border: tier.featured ? "none" : "2px solid #0A192F",
                                    boxShadow: tier.featured ? "0 20px 40px rgba(255,107,0,0.3)" : "none",
                                }}
                                onMouseEnter={(e) => {
                                    const el = e.currentTarget as HTMLElement;
                                    if (tier.featured) {
                                        el.style.backgroundColor = "#FF8533";
                                    } else {
                                        el.style.backgroundColor = "#0A192F";
                                        el.style.color = "#fff";
                                    }
                                }}
                                onMouseLeave={(e) => {
                                    const el = e.currentTarget as HTMLElement;
                                    if (tier.featured) {
                                        el.style.backgroundColor = "#FF6B00";
                                    } else {
                                        el.style.backgroundColor = "transparent";
                                        el.style.color = "#0A192F";
                                    }
                                }}
                            >
                                {tier.cta}
                            </a>
                        </div>
                    ))}
                </div>
            </div>

            <style>{`
        .pricing-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 32px;
          align-items: center;
        }
        @media (max-width: 768px) {
          .pricing-grid {
            grid-template-columns: 1fr;
          }
          .pricing-grid > div {
            transform: scale(1) !important;
          }
        }
      `}</style>
        </section>
    );
}

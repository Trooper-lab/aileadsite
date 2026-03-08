"use client";

import { useState } from "react";

const faqs = [
    {
        q: "How long until I see more leads?",
        a: "Our sites are built for conversion from day one. While SEO takes 30–90 days to fully ramp up, many clients see increased lead flow within the first 14 days of launch due to better site performance and professional design.",
    },
    {
        q: "Is this going to take up all my time?",
        a: "No. We built this process for busy people. We only need two 30-minute calls: one to start and one to hand over the keys. We handle all the heavy lifting in between.",
    },
    {
        q: "What happens after the site is launched?",
        a: "You own it. 100%. We offer optional monthly growth plans to handle hosting and ongoing SEO, but you are never locked in or held hostage by your website provider.",
    },
];

export default function FAQ() {
    const [open, setOpen] = useState<number | null>(null);

    return (
        <section style={{ padding: "96px 0", backgroundColor: "#fff" }}>
            <div style={{ maxWidth: 800, margin: "0 auto", padding: "0 1.5rem" }}>
                <div style={{ textAlign: "center", marginBottom: 64 }}>
                    <h2
                        style={{
                            fontFamily: "Montserrat, sans-serif",
                            fontSize: "clamp(1.8rem, 3vw, 2.5rem)",
                            fontWeight: 800,
                            color: "#0A192F",
                            marginBottom: 12,
                        }}
                    >
                        You Ask, We Answer
                    </h2>
                    <p style={{ color: "#64748b", fontWeight: 500, margin: 0 }}>Clear answers for busy entrepreneurs.</p>
                </div>

                <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                    {faqs.map((faq, i) => (
                        <div
                            key={i}
                            style={{
                                backgroundColor: "#f8fafc",
                                borderRadius: 12,
                                border: "1px solid #e2e8f0",
                                overflow: "hidden",
                            }}
                        >
                            <button
                                onClick={() => setOpen(open === i ? null : i)}
                                style={{
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "space-between",
                                    width: "100%",
                                    padding: "24px",
                                    background: "none",
                                    border: "none",
                                    cursor: "pointer",
                                    textAlign: "left",
                                    fontWeight: 700,
                                    color: "#0A192F",
                                    fontSize: 16,
                                }}
                            >
                                <span>{faq.q}</span>
                                <span
                                    style={{
                                        fontSize: 24,
                                        fontWeight: 900,
                                        transform: open === i ? "rotate(45deg)" : "rotate(0deg)",
                                        transition: "transform 0.2s",
                                        color: "#FF6B00",
                                        flexShrink: 0,
                                        marginLeft: 16,
                                        lineHeight: 1,
                                    }}
                                >
                                    +
                                </span>
                            </button>
                            {open === i && (
                                <div style={{ padding: "0 24px 24px", color: "#475569", fontWeight: 500, lineHeight: 1.7 }}>
                                    {faq.a}
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

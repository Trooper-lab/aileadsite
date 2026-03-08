"use client";

import { useRef, useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
}

const projects = [
    {
        title: "SolarEdge Tech",
        category: "Industrial / B2B",
        result: "+185% Leads",
        metrics: "In 3 months post-launch",
        image: "/project_showcase_1.png",
        accent: "#FF6B00",
    },
    {
        title: "Nova Health",
        category: "Medical / Healthcare",
        result: "$2.4M Revenue",
        metrics: "Tracked from new booking system",
        image: "/project_showcase_2.png",
        accent: "#0ea5e9",
    },
    {
        title: "Apex Logistics",
        category: "Supply Chain",
        result: "42% Faster",
        metrics: "User conversion rate increase",
        image: "/project_showcase_3.png",
        accent: "#10b981",
    },
];

export default function WorkShowcase() {
    const containerRef = useRef<HTMLDivElement>(null);
    const titleRef = useRef<HTMLHeadingElement>(null);
    const gridRef = useRef<HTMLDivElement>(null);

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            // Header animation
            gsap.from(titleRef.current, {
                y: 50,
                opacity: 0,
                duration: 1,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: titleRef.current,
                    start: "top 90%",
                }
            });

            // Grid cards animation
            const cards = gridRef.current?.children;
            if (cards) {
                gsap.from(cards, {
                    y: 100,
                    opacity: 0,
                    duration: 1,
                    stagger: 0.2,
                    ease: "power4.out",
                    scrollTrigger: {
                        trigger: gridRef.current,
                        start: "top 85%",
                    }
                });
            }
        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <section id="work" ref={containerRef} style={{ padding: "120px 0", backgroundColor: "#0A192F", color: "#fff", overflow: "hidden" }}>
            <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 1.5rem" }}>
                <div style={{ marginBottom: 80, textAlign: "center" }}>
                    <h2
                        ref={titleRef}
                        style={{
                            fontSize: "clamp(2.5rem, 5vw, 4rem)",
                            fontFamily: "Montserrat, sans-serif",
                            fontWeight: 800,
                            lineHeight: 1.1,
                            marginBottom: 24,
                        }}
                    >
                        Real Work. <br />
                        <span style={{ color: "#FF6B00" }}>Extraordinary Results.</span>
                    </h2>
                    <p style={{ fontSize: 20, color: "#94a3b8", maxWidth: 700, margin: "0 auto", fontWeight: 500 }}>
                        We don't just build websites. We build growth engines that consistently outperform the competition.
                    </p>
                </div>

                <div
                    ref={gridRef}
                    style={{
                        display: "grid",
                        gridTemplateColumns: "repeat(auto-fit, minmax(350px, 1fr))",
                        gap: 40
                    }}
                >
                    {projects.map((project, idx) => (
                        <div
                            key={idx}
                            className="group relative"
                            style={{
                                borderRadius: 24,
                                overflow: "hidden",
                                backgroundColor: "#112240",
                                cursor: "pointer",
                                transition: "transform 0.5s cubic-bezier(0.2, 0.8, 0.2, 1)",
                            }}
                            onMouseEnter={(e) => {
                                (e.currentTarget as HTMLElement).style.transform = "translateY(-12px) scale(1.02)";
                                const img = (e.currentTarget as HTMLElement).querySelector("img");
                                if (img) img.style.transform = "scale(1.1)";
                            }}
                            onMouseLeave={(e) => {
                                (e.currentTarget as HTMLElement).style.transform = "translateY(0) scale(1)";
                                const img = (e.currentTarget as HTMLElement).querySelector("img");
                                if (img) img.style.transform = "scale(1)";
                            }}
                        >
                            <div style={{ position: "relative", height: 400, overflow: "hidden" }}>
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    style={{
                                        width: "100%",
                                        height: "100%",
                                        objectFit: "cover",
                                        transition: "transform 0.8s cubic-bezier(0.2, 0.8, 0.2, 1)",
                                    }}
                                />
                                <div style={{
                                    position: "absolute",
                                    inset: 0,
                                    background: "linear-gradient(to top, #0A192F 0%, transparent 60%)",
                                    opacity: 0.8
                                }} />

                                <div style={{
                                    position: "absolute",
                                    top: 24,
                                    right: 24,
                                    backgroundColor: project.accent,
                                    padding: "8px 16px",
                                    borderRadius: 999,
                                    fontSize: 12,
                                    fontWeight: 800,
                                    textTransform: "uppercase",
                                    letterSpacing: "0.05em"
                                }}>
                                    {project.category}
                                </div>
                            </div>

                            <div style={{ padding: 40 }}>
                                <div style={{ marginBottom: 32 }}>
                                    <h3 style={{ fontFamily: "Montserrat, sans-serif", fontSize: 24, fontWeight: 800, marginBottom: 8 }}>
                                        {project.title}
                                    </h3>
                                    <div style={{ height: 2, width: 40, backgroundColor: project.accent }} />
                                </div>

                                <div>
                                    <div style={{
                                        fontSize: 48,
                                        fontWeight: 900,
                                        color: project.accent,
                                        fontFamily: "Montserrat, sans-serif",
                                        lineHeight: 1
                                    }}>
                                        {project.result}
                                    </div>
                                    <div style={{ fontSize: 16, color: "#94a3b8", fontWeight: 600, marginTop: 4 }}>
                                        {project.metrics}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <style jsx>{`
                .group:hover {
                    box-shadow: 0 40px 80px -20px rgba(0,0,0,0.5);
                }
            `}</style>
        </section>
    );
}

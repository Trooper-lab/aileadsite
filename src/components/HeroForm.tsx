"use client";

import { useState, useRef, useEffect } from "react";
import gsap from "gsap";

const steps = [
    {
        id: "project",
        title: "What are we building?",
        options: ["High-ROI Landing Page", "Full Business Website", "Enterprise Solution"],
    },
    {
        id: "goal",
        title: "What is your main goal?",
        options: ["More Qualified Leads", "Direct Online Sales", "Dominate Local Market"],
    },
    {
        id: "contact",
        title: "Where should we send your audit?",
    },
];

export default function HeroForm() {
    const [step, setStep] = useState(0);
    const [formData, setFormData] = useState({
        project: "",
        goal: "",
        name: "",
        email: "",
    });
    const [isSubmitted, setIsSubmitted] = useState(false);
    const formRef = useRef<HTMLDivElement>(null);
    const contentRef = useRef<HTMLDivElement>(null);

    const nextStep = () => {
        if (step < steps.length - 1) {
            gsap.to(contentRef.current, {
                opacity: 0,
                x: -20,
                duration: 0.3,
                onComplete: () => {
                    setStep(step + 1);
                    gsap.fromTo(contentRef.current,
                        { opacity: 0, x: 20 },
                        { opacity: 1, x: 0, duration: 0.4, ease: "power2.out" }
                    );
                }
            });
        } else {
            handleSubmit();
        }
    };

    const prevStep = () => {
        if (step > 0) {
            gsap.to(contentRef.current, {
                opacity: 0,
                x: 20,
                duration: 0.3,
                onComplete: () => {
                    setStep(step - 1);
                    gsap.fromTo(contentRef.current,
                        { opacity: 0, x: -20 },
                        { opacity: 1, x: 0, duration: 0.4, ease: "power2.out" }
                    );
                }
            });
        }
    };

    const handleSubmit = () => {
        gsap.to(formRef.current, {
            opacity: 0,
            scale: 0.95,
            duration: 0.4,
            onComplete: () => {
                setIsSubmitted(true);
                gsap.fromTo(formRef.current,
                    { opacity: 0, scale: 1.05 },
                    { opacity: 1, scale: 1, duration: 0.6, ease: "back.out(1.7)" }
                );
            }
        });
    };

    if (isSubmitted) {
        return (
            <div
                ref={formRef}
                style={{
                    backgroundColor: "rgba(17, 34, 64, 0.8)",
                    backdropFilter: "blur(12px)",
                    padding: 48,
                    borderRadius: 24,
                    border: "1px solid rgba(255, 255, 255, 0.1)",
                    textAlign: "center",
                    minHeight: 400,
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    boxShadow: "0 40px 80px rgba(0,0,0,0.5)",
                }}
            >
                <div style={{
                    width: 80,
                    height: 80,
                    borderRadius: "50%",
                    backgroundColor: "#FF6B00",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginBottom: 24,
                    fontSize: 40
                }}>
                    ✓
                </div>
                <h3 style={{ fontSize: 28, fontFamily: "Montserrat, sans-serif", fontWeight: 800, marginBottom: 16 }}>
                    Audit Requested!
                </h3>
                <p style={{ color: "#94a3b8", lineHeight: 1.6, maxWidth: 300 }}>
                    Our growth strategist will review your goals and reach out within 24 hours.
                </p>
            </div>
        );
    }

    return (
        <div
            ref={formRef}
            style={{
                backgroundColor: "rgba(17, 34, 64, 0.8)",
                backdropFilter: "blur(12px)",
                padding: 40,
                borderRadius: 24,
                border: "1px solid rgba(255, 255, 255, 0.1)",
                minHeight: 450,
                display: "flex",
                flexDirection: "column",
                boxShadow: "0 40px 80px rgba(0,0,0,0.5)",
                position: "relative",
            }}
        >
            {/* Progress Bar */}
            <div style={{ position: "absolute", top: 0, left: 0, width: "100%", height: 4, backgroundColor: "rgba(255,255,255,0.05)", borderRadius: "24px 24px 0 0", overflow: "hidden" }}>
                <div style={{
                    width: `${((step + 1) / steps.length) * 100}%`,
                    height: "100%",
                    backgroundColor: "#FF6B00",
                    transition: "width 0.4s ease"
                }} />
            </div>

            <div ref={contentRef} style={{ flexGrow: 1, display: "flex", flexDirection: "column" }}>
                <span style={{ fontSize: 12, fontWeight: 900, color: "#FF6B00", textTransform: "uppercase", letterSpacing: "0.15em", marginBottom: 12 }}>
                    Step {step + 1} of 3
                </span>
                <h3 style={{ fontSize: 24, fontFamily: "Montserrat, sans-serif", fontWeight: 800, marginBottom: 32, lineHeight: 1.3 }}>
                    {steps[step].title}
                </h3>

                <div style={{ display: "flex", flexDirection: "column", gap: 12, flexGrow: 1 }}>
                    {steps[step].options ? (
                        steps[step].options.map((opt) => (
                            <button
                                key={opt}
                                onClick={() => {
                                    setFormData({ ...formData, [steps[step].id]: opt });
                                    setTimeout(nextStep, 200);
                                }}
                                style={{
                                    padding: "16px 20px",
                                    borderRadius: 12,
                                    border: formData[steps[step].id as keyof typeof formData] === opt
                                        ? "2px solid #FF6B00"
                                        : "2px solid rgba(255,255,255,0.1)",
                                    backgroundColor: formData[steps[step].id as keyof typeof formData] === opt
                                        ? "rgba(255,107,0,0.1)"
                                        : "rgba(255,255,255,0.03)",
                                    color: "#fff",
                                    textAlign: "left",
                                    fontSize: 15,
                                    fontWeight: 600,
                                    cursor: "pointer",
                                    transition: "all 0.2s",
                                }}
                                onMouseEnter={(e) => {
                                    if (formData[steps[step].id as keyof typeof formData] !== opt) {
                                        e.currentTarget.style.backgroundColor = "rgba(255,255,255,0.08)";
                                        e.currentTarget.style.borderColor = "rgba(255,255,255,0.2)";
                                    }
                                }}
                                onMouseLeave={(e) => {
                                    if (formData[steps[step].id as keyof typeof formData] !== opt) {
                                        e.currentTarget.style.backgroundColor = "rgba(255,255,255,0.03)";
                                        e.currentTarget.style.borderColor = "rgba(255,255,255,0.1)";
                                    }
                                }}
                            >
                                {opt}
                            </button>
                        ))
                    ) : (
                        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
                            <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                                <label style={{ fontSize: 13, fontWeight: 700, color: "#94a3b8" }}>Full Name</label>
                                <input
                                    type="text"
                                    placeholder="John Doe"
                                    value={formData.name}
                                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                    style={{
                                        padding: "16px",
                                        borderRadius: 12,
                                        backgroundColor: "rgba(255,255,255,0.05)",
                                        border: "1px solid rgba(255,255,255,0.1)",
                                        color: "#fff",
                                        outline: "none",
                                        fontSize: 15,
                                    }}
                                />
                            </div>
                            <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                                <label style={{ fontSize: 13, fontWeight: 700, color: "#94a3b8" }}>Work Email</label>
                                <input
                                    type="email"
                                    placeholder="john@company.com"
                                    value={formData.email}
                                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                    style={{
                                        padding: "16px",
                                        borderRadius: 12,
                                        backgroundColor: "rgba(255,255,255,0.05)",
                                        border: "1px solid rgba(255,255,255,0.1)",
                                        color: "#fff",
                                        outline: "none",
                                        fontSize: 15,
                                    }}
                                />
                            </div>
                        </div>
                    )}
                </div>

                <div style={{ display: "flex", gap: 16, marginTop: 40 }}>
                    {step > 0 && (
                        <button
                            onClick={prevStep}
                            style={{
                                flex: 1,
                                padding: "16px 0",
                                borderRadius: 12,
                                border: "1px solid rgba(255,255,255,0.2)",
                                backgroundColor: "transparent",
                                color: "#fff",
                                fontWeight: 700,
                                cursor: "pointer",
                                transition: "all 0.2s",
                            }}
                        >
                            Back
                        </button>
                    )}
                    {!steps[step].options && (
                        <button
                            onClick={nextStep}
                            disabled={!formData.name || !formData.email}
                            style={{
                                flex: 2,
                                padding: "16px 0",
                                borderRadius: 12,
                                backgroundColor: formData.name && formData.email ? "#FF6B00" : "rgba(255,107,0,0.5)",
                                color: "#fff",
                                fontWeight: 900,
                                textTransform: "uppercase",
                                letterSpacing: "0.05em",
                                border: "none",
                                cursor: formData.name && formData.email ? "pointer" : "not-allowed",
                                transition: "all 0.2s",
                            }}
                        >
                            Finish Audit Request
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
}

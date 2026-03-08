const testimonials = [
    {
        initials: "JD",
        name: "Jim Davidson",
        role: "Owner, Davidson HVAC",
        quote:
            '"My old site was just a business card. AIleadsite turned it into a 24/7 salesperson. Our phone hasn\'t stopped ringing."',
    },
    {
        initials: "SR",
        name: "Sarah Russo",
        role: "Founder, Bloom & Vine",
        quote:
            '"They promised a site in 48 hours and delivered. The speed and professionalism is unmatched in this industry."',
    },
    {
        initials: "MK",
        name: "Mark Knight",
        role: "Director, Zenith Auto",
        quote:
            '"Finally, a tech company that speaks \'business\'. No confusing jargon, just clear ROI and a massive boost in leads."',
    },
];

export default function Testimonials() {
    return (
        <section id="testimonials" style={{ padding: "96px 0", backgroundColor: "#f8fafc" }}>
            <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 1.5rem" }}>
                <div style={{ textAlign: "center", maxWidth: 600, margin: "0 auto 80px" }}>
                    <h2
                        style={{
                            fontFamily: "Montserrat, sans-serif",
                            fontSize: "clamp(2rem, 4vw, 3rem)",
                            fontWeight: 800,
                            color: "#0A192F",
                            textTransform: "uppercase",
                            letterSpacing: "-0.02em",
                            marginBottom: 16,
                        }}
                    >
                        Voices of <span style={{ color: "#FF6B00" }}>Growth</span>
                    </h2>
                    <p style={{ fontSize: 18, color: "#475569", fontWeight: 500, lineHeight: 1.7, margin: 0 }}>
                        Hear from real owners who stopped &ldquo;just having a website&rdquo; and started generating revenue.
                    </p>
                </div>

                <div className="testimonials-grid">
                    {testimonials.map((t) => (
                        <div
                            key={t.name}
                            style={{
                                backgroundColor: "#fff",
                                padding: 40,
                                borderRadius: 16,
                                boxShadow: "0 20px 40px rgba(0,0,0,0.08)",
                                borderBottom: "4px solid #FF6B00",
                            }}
                        >
                            <div style={{ display: "flex", gap: 4, marginBottom: 24 }}>
                                {[...Array(5)].map((_, i) => (
                                    <span key={i} style={{ color: "#FF6B00", fontSize: 20 }}>★</span>
                                ))}
                            </div>
                            <p
                                style={{
                                    fontWeight: 700,
                                    fontSize: 18,
                                    color: "#0A192F",
                                    lineHeight: 1.7,
                                    marginBottom: 32,
                                }}
                            >
                                {t.quote}
                            </p>
                            <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
                                <div
                                    style={{
                                        width: 48,
                                        height: 48,
                                        borderRadius: "50%",
                                        backgroundColor: "#0A192F",
                                        color: "#fff",
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        fontWeight: 900,
                                        fontSize: 14,
                                        flexShrink: 0,
                                    }}
                                >
                                    {t.initials}
                                </div>
                                <div>
                                    <p style={{ fontWeight: 800, color: "#0A192F", margin: "0 0 4px" }}>{t.name}</p>
                                    <p style={{ fontSize: 12, color: "#64748b", fontWeight: 700, textTransform: "uppercase", margin: 0 }}>
                                        {t.role}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <style>{`
        .testimonials-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 32px;
        }
        @media (max-width: 1024px) {
          .testimonials-grid { grid-template-columns: 1fr; }
        }
      `}</style>
        </section>
    );
}

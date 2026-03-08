"use client";

export default function ContactForm() {
    return (
        <section id="contact" style={{ padding: "96px 0", backgroundColor: "#0A192F", color: "#fff", position: "relative", overflow: "hidden" }}>
            <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 1.5rem", position: "relative", zIndex: 10 }}>
                <div className="contact-grid">
                    <div>
                        <h2 style={{ fontSize: "clamp(2.5rem, 5vw, 3.5rem)", fontFamily: "Montserrat, sans-serif", fontWeight: 800, marginBottom: 32, lineHeight: 1.2 }}>
                            Claim Your Free <span style={{ color: "#FF6B00" }}>Growth Audit</span>.
                        </h2>
                        <p style={{ fontSize: 20, color: "#cbd5e1", marginBottom: 40, lineHeight: 1.6, fontWeight: 500 }}>
                            We’ll record a 5-minute video teardown of your current site, showing you exactly where you're losing money and how to fix it. No strings attached.
                        </p>

                        <div style={{ display: "flex", flexDirection: "column", gap: 32 }}>
                            <div style={{ display: "flex", alignItems: "center", gap: 24 }}>
                                <div style={{ width: 56, height: 56, borderRadius: "50%", backgroundColor: "rgba(255,107,0,0.2)", display: "flex", alignItems: "center", justifyContent: "center", color: "#FF6B00", flexShrink: 0 }}>
                                    <span style={{ fontSize: 24 }}>✉️</span>
                                </div>
                                <div>
                                    <p style={{ fontSize: 12, fontWeight: 900, textTransform: "uppercase", color: "#94a3b8", margin: "0 0 4px" }}>Direct Contact</p>
                                    <p style={{ fontSize: 20, fontWeight: 800, margin: 0, letterSpacing: "-0.02em" }}>growth@aileadsite.com</p>
                                </div>
                            </div>
                            <div style={{ display: "flex", alignItems: "center", gap: 24 }}>
                                <div style={{ width: 56, height: 56, borderRadius: "50%", backgroundColor: "rgba(255,107,0,0.2)", display: "flex", alignItems: "center", justifyContent: "center", color: "#FF6B00", flexShrink: 0 }}>
                                    <span style={{ fontSize: 24 }}>📞</span>
                                </div>
                                <div>
                                    <p style={{ fontSize: 12, fontWeight: 900, textTransform: "uppercase", color: "#94a3b8", margin: "0 0 4px" }}>Call the Office</p>
                                    <p style={{ fontSize: 20, fontWeight: 800, margin: 0, letterSpacing: "-0.02em" }}>+1 (888) LEAD-GEN</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div style={{ backgroundColor: "#fff", padding: 40, borderRadius: 24, boxShadow: "0 25px 50px rgba(0,0,0,0.3)" }}>
                        <form style={{ display: "grid", gridTemplateColumns: "1fr", gap: 24 }}>
                            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24 }} className="form-row">
                                <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                                    <label style={{ fontSize: 11, fontWeight: 900, textTransform: "uppercase", color: "#0A192F", letterSpacing: "0.1em" }}>Your Name</label>
                                    <input type="text" placeholder="First & Last Name" style={{ backgroundColor: "#f8fafc", border: "1px solid #e2e8f0", borderRadius: 8, padding: 16, color: "#0A192F", fontWeight: 700 }} />
                                </div>
                                <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                                    <label style={{ fontSize: 11, fontWeight: 900, textTransform: "uppercase", color: "#0A192F", letterSpacing: "0.1em" }}>Business Email</label>
                                    <input type="email" placeholder="name@company.com" style={{ backgroundColor: "#f8fafc", border: "1px solid #e2e8f0", borderRadius: 8, padding: 16, color: "#0A192F", fontWeight: 700 }} />
                                </div>
                            </div>
                            <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                                <label style={{ fontSize: 11, fontWeight: 900, textTransform: "uppercase", color: "#0A192F", letterSpacing: "0.1em" }}>Website URL</label>
                                <input type="url" placeholder="https://yourwebsite.com" style={{ backgroundColor: "#f8fafc", border: "1px solid #e2e8f0", borderRadius: 8, padding: 16, color: "#0A192F", fontWeight: 700 }} />
                            </div>
                            <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                                <label style={{ fontSize: 11, fontWeight: 900, textTransform: "uppercase", color: "#0A192F", letterSpacing: "0.1em" }}>Monthly Revenue Goal</label>
                                <select style={{ backgroundColor: "#f8fafc", border: "1px solid #e2e8f0", borderRadius: 8, padding: 16, color: "#0A192F", fontWeight: 700 }}>
                                    <option>Select target growth...</option>
                                    <option>$5k - $10k more/mo</option>
                                    <option>$10k - $50k more/mo</option>
                                    <option>$50k+ more/mo</option>
                                </select>
                            </div>
                            <button type="submit" style={{ backgroundColor: "#FF6B00", color: "#fff", border: "none", borderRadius: 12, padding: "20px", fontSize: 18, fontWeight: 900, textTransform: "uppercase", letterSpacing: "0.05em", cursor: "pointer", boxShadow: "0 15px 30px rgba(255,107,0,0.3)" }}>
                                Get My Free Audit Video
                            </button>
                        </form>
                    </div>
                </div>
            </div>
            <style>{`
        .contact-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 80px; align-items: center; }
        @media (max-width: 1024px) { 
          .contact-grid { grid-template-columns: 1fr; gap: 48px; }
          .form-row { grid-template-columns: 1fr; }
        }
      `}</style>
        </section>
    );
}

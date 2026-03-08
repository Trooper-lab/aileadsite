"use client";

const stack = [
    { icon: "⚛️", name: "ReactJS" },
    { icon: "⚡", name: "Bolt.new" },
    { icon: "🗄️", name: "Supabase" },
    { icon: "🚀", name: "Antigravity" },
    { icon: "🧠", name: "Claude" },
    { icon: "✨", name: "Gemini" },
];

export default function TechStack() {
    return (
        <section
            style={{
                padding: "64px 0",
                backgroundColor: "#0A192F",
                color: "#fff",
                overflow: "hidden",
            }}
        >
            <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 1.5rem" }}>
                <p
                    style={{
                        textAlign: "center",
                        fontSize: 11,
                        fontWeight: 900,
                        color: "#FF6B00",
                        textTransform: "uppercase",
                        letterSpacing: "0.3em",
                        marginBottom: 48,
                    }}
                >
                    The Engine Behind Your Success
                </p>
                <div
                    style={{
                        display: "flex",
                        flexWrap: "wrap",
                        justifyContent: "center",
                        alignItems: "center",
                        gap: 40,
                        opacity: 0.7,
                    }}
                >
                    {stack.map(({ icon, name }) => (
                        <div
                            key={name}
                            style={{
                                display: "flex",
                                alignItems: "center",
                                gap: 12,
                                filter: "grayscale(1)",
                                transition: "filter 0.3s",
                                cursor: "default",
                            }}
                            onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.filter = "grayscale(0)")}
                            onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.filter = "grayscale(1)")}
                        >
                            <span style={{ fontSize: 28 }}>{icon}</span>
                            <span style={{ fontWeight: 800, fontSize: 18 }}>{name}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

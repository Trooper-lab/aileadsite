"use client";

import { Zap, ShieldCheck, Sparkle } from "lucide-react";
import { motion } from "framer-motion";

const plans = [
    {
        name: "Basic Service",
        price: "$90",
        description: "Keep your site running at peak performance with zero effort.",
        icon: <ShieldCheck className="w-6 h-6 text-blue-400" />,
        features: ["Hosting & SSL", "Weekly Backups", "Uptime Monitoring", "Security Patches"],
        color: "blue",
    },
    {
        name: "Evolution Plan",
        price: "$150",
        description: "Get full access to the AI for unlimited changes on the fly.",
        icon: <Sparkle className="w-6 h-6 text-purple-400" />,
        features: ["Everything in Basic", "Unlimited AI Changes", "Design Refreshes", "Priority Support"],
        color: "purple",
    },
    {
        name: "Growth Engine",
        price: "$400",
        description: "Dominate search results with high-tier SEO management.",
        icon: <Zap className="w-6 h-6 text-yellow-500" />,
        features: ["Everything in Evolution", "Monthly SEO Optimization", "Content Strategy", "Advanced Analytics"],
        color: "yellow",
    },
];

export default function Subscription() {
    return (
        <section id="subscriptions" className="py-32 relative overflow-hidden">
            <div className="container mx-auto px-6">
                <div className="glass rounded-[60px] p-12 md:p-20 relative overflow-hidden border-white/5">
                    <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-purple-600/10 blur-[100px] -z-10" />
                    <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-600/10 blur-[100px] -z-10" />

                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold tracking-tighter mb-4">Ongoing Excellence</h2>
                        <p className="text-white/60 text-lg max-w-2xl mx-auto">
                            Retain our services to keep your digital presence sharp, fast, and ahead of the competition.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {plans.map((plan, index) => (
                            <motion.div
                                key={plan.name}
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className="p-8 rounded-3xl bg-white/5 border border-white/10 hover:border-white/20 transition-all group"
                            >
                                <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                    {plan.icon}
                                </div>
                                <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
                                <div className="flex items-baseline gap-1 mb-4">
                                    <span className="text-3xl font-bold">{plan.price}</span>
                                    <span className="text-white/40 text-sm">/mo</span>
                                </div>
                                <p className="text-sm text-white/50 mb-8 leading-relaxed">
                                    {plan.description}
                                </p>
                                <ul className="space-y-3 mb-8">
                                    {plan.features.map((feature) => (
                                        <li key={feature} className="text-xs text-white/70 flex items-center gap-2">
                                            <div className="w-1 h-1 rounded-full bg-white/30" />
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                                <button className="w-full py-3 rounded-xl border border-white/10 text-sm font-semibold hover:bg-white hover:text-black transition-all">
                                    Subscribe Now
                                </button>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

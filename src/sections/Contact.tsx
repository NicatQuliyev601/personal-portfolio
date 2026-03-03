"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Mail, MapPin, Phone, Send, Loader2, CheckCircle2 } from "lucide-react";

export default function Contact() {
    const [formData, setFormData] = useState({ name: "", email: "", message: "" });
    const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus("submitting");

        // Simulate API call 
        setTimeout(() => {
            setStatus("success");
            setFormData({ name: "", email: "", message: "" });

            // Reset form status after 3 seconds
            setTimeout(() => setStatus("idle"), 3000);
        }, 1500);
    };

    return (
        <section id="contact" className="py-24 bg-white dark:bg-zinc-900 px-4">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="mb-16 text-center"
                >
                    <h2 className="text-3xl md:text-5xl font-extrabold text-zinc-900 dark:text-zinc-100 mb-6 tracking-tight">
                        Let's <span className="text-blue-600">Connect</span>
                    </h2>
                    <p className="text-zinc-600 dark:text-zinc-400 text-lg max-w-2xl mx-auto">
                        Discussing a new integration, need robust backend architecture,
                        or looking for a reliable Java Developer? I am available.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
                    {/* Contact Info Panel */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="lg:col-span-5 space-y-8"
                    >
                        <div className="bg-zinc-50 dark:bg-zinc-950 p-8 rounded-3xl border border-zinc-100 dark:border-zinc-800">
                            <h3 className="text-2xl font-bold text-zinc-900 dark:text-zinc-100 mb-8">Contact Information</h3>

                            <div className="space-y-8 relative">
                                <div className="absolute left-[1.15rem] top-8 bottom-8 w-px bg-zinc-200 dark:bg-zinc-800 pointer-events-none"></div>

                                <div className="flex items-center gap-6 relative z-10">
                                    <div className="bg-blue-600 text-white p-3 rounded-2xl shadow-md border-4 border-zinc-50 dark:border-zinc-950">
                                        <Mail className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <h4 className="text-sm font-semibold text-zinc-500 dark:text-zinc-400 mb-1 uppercase tracking-wider">Direct Email</h4>
                                        <a href="mailto:quliyevv.nicat2003@gmail.com" className="text-lg font-bold text-zinc-900 dark:text-zinc-100 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">quliyevv.nicat2003@gmail.com</a>
                                    </div>
                                </div>

                                <div className="flex items-center gap-6 relative z-10">
                                    <div className="bg-blue-600 text-white p-3 rounded-2xl shadow-md border-4 border-zinc-50 dark:border-zinc-950">
                                        <Phone className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <h4 className="text-sm font-semibold text-zinc-500 dark:text-zinc-400 mb-1 uppercase tracking-wider">Phone Call</h4>
                                        <a href="tel:+994502858581" className="text-lg font-bold text-zinc-900 dark:text-zinc-100 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">+994 50 285 85 81</a>
                                    </div>
                                </div>

                                <div className="flex items-center gap-6 relative z-10">
                                    <div className="bg-blue-600 text-white p-3 rounded-2xl shadow-md border-4 border-zinc-50 dark:border-zinc-950">
                                        <MapPin className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <h4 className="text-sm font-semibold text-zinc-500 dark:text-zinc-400 mb-1 uppercase tracking-wider">Headquarters</h4>
                                        <p className="text-lg font-bold text-zinc-900 dark:text-zinc-100">Baku, Azerbaijan</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Contact Form Panel */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="lg:col-span-7"
                    >
                        <div className="bg-white dark:bg-zinc-900 p-8 sm:p-10 rounded-3xl shadow-xl shadow-zinc-200/50 dark:shadow-black/20 border border-zinc-100 dark:border-zinc-800">
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label htmlFor="name" className="text-sm font-semibold text-zinc-700 dark:text-zinc-300 ml-1">
                                            Full Name
                                        </label>
                                        <input
                                            id="name"
                                            type="text"
                                            required
                                            value={formData.name}
                                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                            className="w-full px-5 py-4 rounded-2xl border-2 border-zinc-100 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100 focus:ring-0 focus:border-blue-600 hover:border-zinc-200 dark:hover:border-zinc-700 outline-none transition-all"
                                            placeholder="John Doe"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label htmlFor="email" className="text-sm font-semibold text-zinc-700 dark:text-zinc-300 ml-1">
                                            Email Address
                                        </label>
                                        <input
                                            id="email"
                                            type="email"
                                            required
                                            value={formData.email}
                                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                            className="w-full px-5 py-4 rounded-2xl border-2 border-zinc-100 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100 focus:ring-0 focus:border-blue-600 hover:border-zinc-200 dark:hover:border-zinc-700 outline-none transition-all"
                                            placeholder="john@example.com"
                                        />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label htmlFor="message" className="text-sm font-semibold text-zinc-700 dark:text-zinc-300 ml-1">
                                        Your Message
                                    </label>
                                    <textarea
                                        id="message"
                                        required
                                        rows={5}
                                        value={formData.message}
                                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                        className="w-full px-5 py-4 rounded-2xl border-2 border-zinc-100 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100 focus:ring-0 focus:border-blue-600 hover:border-zinc-200 dark:hover:border-zinc-700 outline-none transition-all resize-none"
                                        placeholder="Hello! Let's build something great together..."
                                    ></textarea>
                                </div>

                                <button
                                    type="submit"
                                    disabled={status === "submitting" || status === "success"}
                                    className={`w-full py-4 px-8 rounded-2xl text-white font-bold text-lg flex items-center justify-center gap-2 transition-all transform hover:-translate-y-0.5 shadow-lg ${status === "submitting" ? "bg-blue-400 cursor-not-allowed hidden"
                                            : status === "success" ? "bg-emerald-500 shadow-emerald-500/20"
                                                : "bg-blue-600 hover:bg-blue-700 shadow-blue-600/20"
                                        }`}
                                >
                                    {status === "idle" && (
                                        <>
                                            Send Message
                                            <Send className="w-5 h-5 ml-2" />
                                        </>
                                    )}
                                    {status === "submitting" && (
                                        <>
                                            Sending...
                                            <Loader2 className="w-5 h-5 ml-2 animate-spin" />
                                        </>
                                    )}
                                    {status === "success" && (
                                        <>
                                            Message Sent
                                            <CheckCircle2 className="w-6 h-6 ml-2" />
                                        </>
                                    )}
                                </button>
                                {/* Fallback button when submitting for rendering smooth state visually  */}
                                {status === "submitting" && (
                                    <div className="w-full py-4 px-8 rounded-2xl text-white font-bold text-lg flex items-center justify-center gap-2 bg-blue-400 cursor-not-allowed shadow-lg">
                                        Sending...
                                        <Loader2 className="w-5 h-5 ml-2 animate-spin" />
                                    </div>
                                )}
                            </form>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}

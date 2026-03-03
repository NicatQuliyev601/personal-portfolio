"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Mail, MapPin, Phone } from "lucide-react";

export default function Contact() {
    const [formData, setFormData] = useState({ name: "", email: "", message: "" });
    const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus("submitting");

        // Simulate API call to Formspree/EmailJS
        setTimeout(() => {
            setStatus("success");
            setFormData({ name: "", email: "", message: "" });
        }, 1500);
    };

    return (
        <section id="contact" className="py-24 bg-white dark:bg-zinc-900 px-4">
            <div className="max-w-6xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="mb-12 text-center"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 dark:text-zinc-100 mb-4">
                        Get In Touch
                    </h2>
                    <p className="text-zinc-600 dark:text-zinc-400 text-lg max-w-2xl mx-auto">
                        Whether you are discussing a new integration, need robust backend architecture,
                        or are looking for a reliable Java Developer, I am available.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="space-y-8 lg:pr-10"
                    >
                        <div className="flex items-center gap-4">
                            <div className="bg-zinc-50 dark:bg-zinc-800 p-4 justify-center items-center rounded-xl shadow-sm border border-zinc-100 dark:border-zinc-700">
                                <Mail className="w-6 h-6 text-blue-600" />
                            </div>
                            <div>
                                <h4 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100 mb-0.5">Email</h4>
                                <a href="mailto:quliyevv.nicat2003@gmail.com" className="text-zinc-600 hover:text-blue-600 dark:text-zinc-400 transition-colors">quliyevv.nicat2003@gmail.com</a>
                            </div>
                        </div>

                        <div className="flex items-center gap-4">
                            <div className="bg-zinc-50 dark:bg-zinc-800 p-4 justify-center items-center rounded-xl shadow-sm border border-zinc-100 dark:border-zinc-700">
                                <Phone className="w-6 h-6 text-blue-600" />
                            </div>
                            <div>
                                <h4 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100 mb-0.5">Phone</h4>
                                <a href="tel:+994502858581" className="text-zinc-600 hover:text-blue-600 dark:text-zinc-400 transition-colors">+994 50 285 85 81</a>
                            </div>
                        </div>

                        <div className="flex items-center gap-4">
                            <div className="bg-zinc-50 dark:bg-zinc-800 p-4 justify-center items-center rounded-xl shadow-sm border border-zinc-100 dark:border-zinc-700">
                                <MapPin className="w-6 h-6 text-blue-600" />
                            </div>
                            <div>
                                <h4 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100 mb-0.5">Location</h4>
                                <p className="text-zinc-600 dark:text-zinc-400">Baku, Azerbaijan</p>
                            </div>
                        </div>
                    </motion.div>

                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="bg-zinc-50 dark:bg-zinc-800/50 p-8 rounded-2xl shadow-sm border border-zinc-100 dark:border-zinc-800"
                    >
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div>
                                <label className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-2">
                                    Name
                                </label>
                                <input
                                    type="text"
                                    required
                                    value={formData.name}
                                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                    className="w-full px-4 py-3 rounded-lg border border-zinc-200 dark:border-zinc-700 bg-white dark:bg-zinc-900 text-zinc-900 dark:text-zinc-100 focus:ring-2 focus:ring-blue-600 outline-none transition-all"
                                    placeholder="Your Name"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-2">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    required
                                    value={formData.email}
                                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                    className="w-full px-4 py-3 rounded-lg border border-zinc-200 dark:border-zinc-700 bg-white dark:bg-zinc-900 text-zinc-900 dark:text-zinc-100 focus:ring-2 focus:ring-blue-600 outline-none transition-all"
                                    placeholder="your@email.com"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-2">
                                    Message
                                </label>
                                <textarea
                                    required
                                    rows={4}
                                    value={formData.message}
                                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                    className="w-full px-4 py-3 rounded-lg border border-zinc-200 dark:border-zinc-700 bg-white dark:bg-zinc-900 text-zinc-900 dark:text-zinc-100 focus:ring-2 focus:ring-blue-600 outline-none transition-all resize-none"
                                    placeholder="How can I help you?"
                                ></textarea>
                            </div>
                            <button
                                type="submit"
                                disabled={status === "submitting"}
                                className={`w-full py-3 px-6 rounded-lg text-white font-semibold shadow-md transition-all ${status === "submitting" ? "bg-blue-400" : "bg-blue-600 hover:bg-blue-700"
                                    }`}
                            >
                                {status === "submitting" ? "Sending..." : "Send Message"}
                            </button>

                            {status === "success" && (
                                <p className="text-green-600 dark:text-green-400 text-sm font-medium text-center mt-4">
                                    Message sent successfully! I will get back to you soon.
                                </p>
                            )}
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}

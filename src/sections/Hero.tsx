"use client";

import { motion } from "framer-motion";
import { ArrowRight, Download } from "lucide-react";

export default function Hero() {
    return (
        <section id="hero" className="min-h-screen flex items-center justify-center pt-16 px-4 bg-zinc-50 dark:bg-zinc-950">
            <div className="max-w-4xl mx-auto text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <span className="text-blue-600 font-semibold tracking-wide uppercase text-sm">
                        Java Developer
                    </span>
                    <h1 className="mt-4 text-5xl md:text-7xl font-extrabold text-zinc-900 dark:text-zinc-100 tracking-tight">
                        Hi, I'm <span className="text-blue-600">Nicat</span> Quliyev.<br />
                        I build scalable <br className="hidden md:block" />
                        backend systems.
                    </h1>
                    <p className="mt-6 text-lg md:text-xl text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto leading-relaxed">
                        I specialize in Java, Spring Boot, and Microservices architecture. Dedicated to creating and implementing innovative solutions to ensure optimal performance and high-quality project delivery.
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="mt-10 flex flex-col sm:flex-row justify-center gap-4"
                >
                    <a
                        href="#projects"
                        className="inline-flex items-center justify-center px-8 py-3 w-full sm:w-auto text-base font-medium rounded-full text-white bg-zinc-900 hover:bg-zinc-800 dark:bg-white dark:text-zinc-900 dark:hover:bg-zinc-100 transition-all shadow-sm"
                    >
                        View Projects
                        <ArrowRight className="ml-2 h-5 w-5" />
                    </a>
                    <a
                        href="/NicatQuliyev_Resume.docx"
                        download="NicatQuliyev_Resume.docx"
                        className="inline-flex items-center justify-center px-8 py-3 w-full sm:w-auto text-base font-medium rounded-full text-zinc-900 bg-white border border-zinc-200 hover:bg-zinc-50 dark:bg-zinc-900 dark:text-white dark:border-zinc-800 dark:hover:bg-zinc-800 transition-all shadow-sm"
                    >
                        Download CV
                        <Download className="ml-2 h-5 w-5" />
                    </a>
                </motion.div>
            </div>
        </section>
    );
}

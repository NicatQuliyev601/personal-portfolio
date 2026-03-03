"use client";

import { motion } from "framer-motion";
import { ArrowRight, Download, Terminal, Database, Cloud } from "lucide-react";

export default function Hero() {
    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: { staggerChildren: 0.15 }
        }
    };

    const item = {
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0, transition: { type: "spring" as const, stiffness: 100 } }
    };

    return (
        <section id="hero" className="min-h-screen flex items-center justify-center pt-20 px-4 bg-zinc-50 dark:bg-zinc-950 relative overflow-hidden">

            {/* Background Graphic elements (Subtle) */}
            <div className="absolute top-1/4 -left-64 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl opacity-50 dark:opacity-20 pointer-events-none"></div>
            <div className="absolute bottom-1/4 -right-64 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl opacity-50 dark:opacity-20 pointer-events-none"></div>

            <div className="max-w-5xl mx-auto z-10 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

                {/* Main Text Content */}
                <motion.div
                    className="lg:col-span-7 text-left"
                    variants={container}
                    initial="hidden"
                    animate="show"
                >
                    <motion.div variants={item} className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-900/30 border border-blue-100 dark:border-blue-800/50 mb-6">
                        <span className="flex h-2 w-2 rounded-full bg-blue-600 animate-pulse"></span>
                        <span className="text-blue-700 dark:text-blue-300 text-xs font-semibold tracking-wide uppercase">
                            Available for new roles
                        </span>
                    </motion.div>

                    <motion.h1 variants={item} className="text-5xl md:text-7xl font-extrabold text-zinc-900 dark:text-zinc-100 tracking-tight leading-tight">
                        Hi, I'm <span className="text-blue-600">Nicat</span>.<br />
                        I architect solid <br className="hidden md:block" />
                        <span className="relative">
                            backend systems.
                            <svg className="absolute w-full h-3 -bottom-1 left-0 text-blue-500/30 dark:text-blue-500/40 -z-10" viewBox="0 0 100 10" preserveAspectRatio="none">
                                <path d="M0 5 Q 50 10 100 5" fill="currentColor" />
                            </svg>
                        </span>
                    </motion.h1>

                    <motion.p variants={item} className="mt-6 text-lg md:text-xl text-zinc-600 dark:text-zinc-400 max-w-2xl leading-relaxed">
                        I am a Software Engineer based in Baku specializing in <strong className="text-zinc-900 dark:text-zinc-200">Java</strong>, <strong className="text-zinc-900 dark:text-zinc-200">Spring Boot</strong>, and <strong className="text-zinc-900 dark:text-zinc-200">Microservices</strong> architecture. I transform complex requirements into fast, scalable, and resilient digital solutions.
                    </motion.p>

                    <motion.div variants={item} className="mt-10 flex flex-col sm:flex-row gap-4">
                        <a
                            href="#projects"
                            className="inline-flex items-center justify-center px-8 py-3.5 w-full sm:w-auto text-base font-semibold rounded-full text-white bg-blue-600 hover:bg-blue-700 transition-all shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
                        >
                            Explore My Work
                            <ArrowRight className="ml-2 h-5 w-5" />
                        </a>
                        <a
                            href="/NicatQuliyev_Resume.docx"
                            download="NicatQuliyev_Resume.docx"
                            className="inline-flex items-center justify-center px-8 py-3.5 w-full sm:w-auto text-base font-semibold rounded-full text-zinc-900 bg-white border border-zinc-200 hover:bg-zinc-50 dark:bg-zinc-900 dark:text-white dark:border-zinc-700 dark:hover:bg-zinc-800 transition-all shadow-sm transform hover:-translate-y-0.5"
                        >
                            Download CV
                            <Download className="ml-2 h-5 w-5" />
                        </a>
                    </motion.div>
                </motion.div>

                {/* What I Do Mini-Grid */}
                <motion.div
                    className="lg:col-span-5 hidden md:grid grid-cols-1 gap-4"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.7, delay: 0.3 }}
                >
                    <div className="bg-white dark:bg-zinc-900 p-6 rounded-2xl shadow-sm border border-zinc-100 dark:border-zinc-800 hover:border-blue-500/30 transition-colors group">
                        <Terminal className="w-8 h-8 text-blue-600 mb-4 group-hover:scale-110 transition-transform" />
                        <h3 className="text-lg font-bold text-zinc-900 dark:text-zinc-100 mb-2">API Development</h3>
                        <p className="text-zinc-600 dark:text-zinc-400 text-sm">Designing secure, high-performance RESTful APIs using Spring Boot to drive enterprise applications.</p>
                    </div>

                    <div className="bg-white dark:bg-zinc-900 p-6 rounded-2xl shadow-sm border border-zinc-100 dark:border-zinc-800 hover:border-blue-500/30 transition-colors group ml-8">
                        <Database className="w-8 h-8 text-blue-600 mb-4 group-hover:scale-110 transition-transform" />
                        <h3 className="text-lg font-bold text-zinc-900 dark:text-zinc-100 mb-2">Data Architecture</h3>
                        <p className="text-zinc-600 dark:text-zinc-400 text-sm">Optimizing SQL queries and managing complex relational structures in PostgreSQL and Oracle.</p>
                    </div>

                    <div className="bg-white dark:bg-zinc-900 p-6 rounded-2xl shadow-sm border border-zinc-100 dark:border-zinc-800 hover:border-blue-500/30 transition-colors group">
                        <Cloud className="w-8 h-8 text-blue-600 mb-4 group-hover:scale-110 transition-transform" />
                        <h3 className="text-lg font-bold text-zinc-900 dark:text-zinc-100 mb-2">Microservices</h3>
                        <p className="text-zinc-600 dark:text-zinc-400 text-sm">Transforming legacy monoliths into scalable, distributed systems using Docker, RabbitMQ, and Kafka.</p>
                    </div>
                </motion.div>

            </div>
        </section>
    );
}

"use client";

import { motion } from "framer-motion";
import { Coffee, Code, Server, Globe } from "lucide-react";

export default function About() {
    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: { staggerChildren: 0.1 }
        }
    };

    const item = {
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0 }
    };

    return (
        <section id="about" className="py-24 bg-white dark:bg-zinc-900 px-4">
            <div className="max-w-6xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="mb-12"
                >
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-100 dark:bg-zinc-800 text-sm font-medium text-zinc-600 dark:text-zinc-300 mb-6">
                        <Coffee className="w-4 h-4" />
                        <span>Get to know me</span>
                    </div>
                    <h2 className="text-3xl md:text-5xl font-bold text-zinc-900 dark:text-zinc-100 mb-8">
                        About Me
                    </h2>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                    {/* Main Bio */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="space-y-6 text-lg text-zinc-600 dark:text-zinc-300 leading-relaxed"
                    >
                        <p className="font-medium text-zinc-900 dark:text-zinc-100 text-xl">
                            I am an accomplished Java Developer based in Baku, Azerbaijan with a passion for transforming complex requirements into reliable backend architectures.
                        </p>
                        <p>
                            My expertise centers around the <strong className="font-semibold text-zinc-800 dark:text-zinc-200">Java ecosystem</strong>—primarily Spring Boot, PostgreSQL, and modern message brokers like Kafka and RabbitMQ. I have hands-on experience converting monolithic structures into agile, resilient microservices, helping teams scale their applications securely.
                        </p>
                        <p>
                            Currently, I am pursuing my <strong className="font-semibold text-zinc-800 dark:text-zinc-200">Master's degree in Project Management</strong> at Azerbaijan Technical University while continuing my work building scalable systems. Beyond writing code, I actively participate in code reviews, bug resolution, and collaborative problem solving because I believe great software is fundamentally a team effort.
                        </p>
                    </motion.div>

                    {/* Side Modules: Focus & Languages */}
                    <motion.div
                        variants={container}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true }}
                        className="space-y-8"
                    >
                        {/* Current Focus */}
                        <motion.div variants={item} className="bg-zinc-50 dark:bg-zinc-950 p-8 rounded-3xl border border-zinc-100 dark:border-zinc-800">
                            <h3 className="text-xl font-bold text-zinc-900 dark:text-zinc-100 mb-4 flex items-center">
                                <Server className="w-5 h-5 mr-2 text-blue-600" />
                                Current Focus
                            </h3>
                            <ul className="space-y-3">
                                <li className="flex items-start text-zinc-600 dark:text-zinc-400">
                                    <span className="text-blue-500 mr-2">›</span>
                                    Refining distributed system design patterns.
                                </li>
                                <li className="flex items-start text-zinc-600 dark:text-zinc-400">
                                    <span className="text-blue-500 mr-2">›</span>
                                    Optimizing database queries for high-throughput applications.
                                </li>
                                <li className="flex items-start text-zinc-600 dark:text-zinc-400">
                                    <span className="text-blue-500 mr-2">›</span>
                                    Deepening event-driven architecture knowledge using Kafka.
                                </li>
                            </ul>
                        </motion.div>

                        {/* Languages Grid */}
                        <motion.div variants={item} className="bg-zinc-50 dark:bg-zinc-950 p-8 rounded-3xl border border-zinc-100 dark:border-zinc-800">
                            <h3 className="text-xl font-bold text-zinc-900 dark:text-zinc-100 mb-4 flex items-center">
                                <Globe className="w-5 h-5 mr-2 text-blue-600" />
                                Languages
                            </h3>
                            <div className="grid grid-cols-2 gap-4">
                                <div className="bg-white dark:bg-zinc-900 p-4 rounded-xl shadow-sm">
                                    <p className="font-semibold text-zinc-900 dark:text-zinc-100">Azerbaijani</p>
                                    <p className="text-xs text-blue-600 dark:text-blue-400 font-medium">Native</p>
                                </div>
                                <div className="bg-white dark:bg-zinc-900 p-4 rounded-xl shadow-sm">
                                    <p className="font-semibold text-zinc-900 dark:text-zinc-100">English</p>
                                    <p className="text-xs text-blue-600 dark:text-blue-400 font-medium">Intermediate</p>
                                </div>
                                <div className="bg-white dark:bg-zinc-900 p-4 rounded-xl shadow-sm">
                                    <p className="font-semibold text-zinc-900 dark:text-zinc-100">Russian</p>
                                    <p className="text-xs text-blue-600 dark:text-blue-400 font-medium">Intermediate</p>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}

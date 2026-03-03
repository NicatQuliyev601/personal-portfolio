"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

export default function Skills() {
    const skillsData = [
        {
            category: "Backend & Core",
            items: [
                { name: "Java", level: 95 },
                { name: "Spring Boot", level: 90 },
                { name: "Microservices", level: 85 },
                { name: "RESTful APIs", level: 90 },
                { name: "Data Structures", level: 80 },
                { name: "Algorithms", level: 80 },
            ],
        },
        {
            category: "Tools & Infrastructure",
            items: [
                { name: "Docker", level: 85 },
                { name: "Kubernetes", level: 60 },
                { name: "Git", level: 90 },
                { name: "RabbitMQ", level: 80 },
                { name: "Kafka", level: 75 },
                { name: "Linux", level: 85 },
            ],
        },
        {
            category: "Databases & Caching",
            items: [
                { name: "SQL", level: 90 },
                { name: "PL/SQL", level: 85 },
                { name: "PostgreSQL", level: 85 },
                { name: "Redis", level: 80 },
            ],
        },
        {
            category: "Frontend & Methodologies",
            items: [
                { name: "HTML/CSS", level: 85 },
                { name: "JavaScript", level: 80 },
                { name: "Agile/Scrum", level: 90 },
                { name: "Jira / Trello", level: 90 },
            ],
        },
    ];

    return (
        <section id="skills" className="py-24 bg-zinc-50 dark:bg-zinc-950 px-4 relative overflow-hidden">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="mb-16 text-center md:text-left"
                >
                    <h2 className="text-3xl md:text-5xl font-extrabold text-zinc-900 dark:text-zinc-100 mb-4 tracking-tight">
                        Tech Stack <span className="text-blue-600">Expertise</span>
                    </h2>
                    <p className="text-zinc-600 dark:text-zinc-400 text-lg max-w-2xl">
                        A detailed breakdown of my technical proficiencies, frameworks, and tools.
                        Focused primarily on robust backend engineering and distributed systems.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
                    {skillsData.map((skillGroup, index) => (
                        <motion.div
                            key={skillGroup.category}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="bg-white dark:bg-zinc-900 p-8 rounded-3xl shadow-sm border border-zinc-100 dark:border-zinc-800 hover:shadow-md transition-shadow relative group overflow-hidden"
                        >
                            {/* Subtle background highlight on hover */}
                            <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-transparent dark:from-blue-900/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                            <h3 className="text-xl font-bold text-zinc-900 dark:text-zinc-100 mb-6 flex items-center gap-2 relative z-10">
                                <CheckCircle2 className="w-5 h-5 text-blue-600" />
                                {skillGroup.category}
                            </h3>

                            <div className="space-y-5 relative z-10">
                                {skillGroup.items.map((item) => (
                                    <div key={item.name}>
                                        <div className="flex justify-between items-center mb-1.5">
                                            <span className="text-sm font-semibold text-zinc-700 dark:text-zinc-300">
                                                {item.name}
                                            </span>
                                        </div>
                                        {/* Animated Progress Bar */}
                                        <div className="w-full h-2 bg-zinc-100 dark:bg-zinc-800 rounded-full overflow-hidden">
                                            <motion.div
                                                className="h-full bg-blue-600 rounded-full"
                                                initial={{ width: 0 }}
                                                whileInView={{ width: `${item.level}%` }}
                                                viewport={{ once: true }}
                                                transition={{ duration: 1, delay: 0.2 + (index * 0.1), ease: "easeOut" }}
                                            />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

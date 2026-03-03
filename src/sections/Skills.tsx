"use client";

import { motion } from "framer-motion";

export default function Skills() {
    const skillsData = [
        {
            category: "Backend Development",
            items: ["Java", "Spring Boot", "Microservices", "RESTful APIs", "Data Structures", "Algorithms"],
        },
        {
            category: "Tools & Infrastructure",
            items: ["Docker", "Kubernetes", "Git", "RabbitMQ", "Kafka", "Linux"],
        },
        {
            category: "Databases & Caching",
            items: ["SQL", "PL/SQL", "PostgreSQL", "Redis"],
        },
        {
            category: "Frontend & Management",
            items: ["HTML", "CSS", "JavaScript", "Jira", "Trello", "Slack"],
        },
    ];

    return (
        <section id="skills" className="py-24 bg-zinc-50 dark:bg-zinc-950 px-4">
            <div className="max-w-6xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="mb-12"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 dark:text-zinc-100 mb-4">
                        Technical Stack
                    </h2>
                    <p className="text-zinc-600 dark:text-zinc-400 text-lg">
                        Technologies, frameworks, and methodologies I specialize in.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {skillsData.map((skillGroup, index) => (
                        <motion.div
                            key={skillGroup.category}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="bg-white dark:bg-zinc-900 p-6 rounded-2xl shadow-sm border border-zinc-100 dark:border-zinc-800"
                        >
                            <h3 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100 mb-4 pb-4 border-b border-zinc-100 dark:border-zinc-800">
                                {skillGroup.category}
                            </h3>
                            <ul className="space-y-3">
                                {skillGroup.items.map((item) => (
                                    <li key={item} className="flex items-center text-zinc-600 dark:text-zinc-300">
                                        <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-3"></span>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

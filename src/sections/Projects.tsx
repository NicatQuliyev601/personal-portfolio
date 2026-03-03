"use client";

import { motion } from "framer-motion";
import { Github, LayoutTemplate, Layers, Database } from "lucide-react";

export default function Projects() {
    const projects = [
        {
            title: "Learning Management System (LMS)",
            description: "A comprehensive web application built using Java Spring Boot for managing learning management system functionalities. Allows administrators, teachers, and students to interact seamlessly with courses, assignments, and grades.",
            architecture: "Monolithic Spring Boot application transitioned into modular components, utilizing Spring Security for role-based access control.",
            tags: ["Java", "Spring Boot", "REST API", "PostgreSQL"],
            github: "https://github.com/NicatQuliyev601/lms-project",
            icon: <LayoutTemplate className="w-6 h-6 text-blue-500" />
        },
        {
            title: "Task Management App",
            description: "Developed an online task management platform enabling secure user authentication, complex task creation, and structured assignment flows.",
            architecture: "Event-driven microservice utilizing Apache Kafka to asynchronously process and dispatch task assignation notifications securely.",
            tags: ["Java", "Spring Boot", "PostgreSQL", "Kafka"],
            github: "https://gitlab.com/NicatQuliyev/task-management",
            icon: <Layers className="w-6 h-6 text-indigo-500" />
        },
        {
            title: "Tour Travel Telegram Bot",
            description: "An automated Telegram bot that intelligently pairs tour companies with client requests. Built alongside a companion app to directly push matching customized offers securely to clients based on their bot inputs.",
            architecture: "Distributed architecture handling high-frequency webhook calls from Telegram API, caching frequent responses in Redis, and asynchronously buffering client data in RabbitMQ/Kafka.",
            tags: ["Spring Boot", "PostgreSQL", "Redis", "Kafka", "Telegram API"],
            github: "https://github.com/NicatQuliyev601/Tour-telegram-bot",
            icon: <Database className="w-6 h-6 text-emerald-500" />
        },
    ];

    return (
        <section id="projects" className="py-24 bg-zinc-50 dark:bg-zinc-950 px-4">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="mb-16 text-center"
                >
                    <h2 className="text-3xl md:text-5xl font-extrabold text-zinc-900 dark:text-zinc-100 mb-6 tracking-tight">
                        Featured <span className="text-blue-600">Architecture</span>
                    </h2>
                    <p className="text-zinc-600 dark:text-zinc-400 text-lg max-w-3xl mx-auto">
                        A selection of my recent backend implementations showcasing scalable design patterns, message brokering, and resilient database integration.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="group flex flex-col bg-white dark:bg-zinc-900 rounded-3xl overflow-hidden shadow-sm border border-zinc-100 dark:border-zinc-800 hover:shadow-xl hover:border-blue-500/20 transition-all duration-300 p-8 relative"
                        >
                            {/* Highlight bar at top */}
                            <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-blue-500 to-indigo-500 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500"></div>

                            <div className="mb-6 flex justify-between items-start">
                                <div className="p-3 bg-zinc-50 dark:bg-zinc-800 rounded-2xl group-hover:scale-110 transition-transform duration-300">
                                    {project.icon}
                                </div>
                                <a
                                    href={project.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors"
                                    aria-label="View source on GitHub"
                                >
                                    <Github className="w-6 h-6" />
                                </a>
                            </div>

                            <div className="flex-grow">
                                <h3 className="text-2xl font-bold text-zinc-900 dark:text-zinc-100 mb-4 line-clamp-2">
                                    {project.title}
                                </h3>
                                <p className="text-zinc-600 dark:text-zinc-400 mb-6 text-base leading-relaxed line-clamp-3">
                                    {project.description}
                                </p>

                                {/* Architecture Highlights */}
                                <div className="bg-blue-50/50 dark:bg-blue-900/10 border border-blue-100 dark:border-blue-900/30 p-4 rounded-2xl mb-6">
                                    <p className="text-sm text-zinc-700 dark:text-zinc-300 font-medium leading-relaxed">
                                        <span className="text-blue-600 dark:text-blue-400 font-bold block mb-1 text-xs uppercase tracking-wider">System Design</span>
                                        {project.architecture}
                                    </p>
                                </div>

                                <div className="flex flex-wrap gap-2 mb-2">
                                    {project.tags.map((tag) => (
                                        <span
                                            key={tag}
                                            className="px-3 py-1 bg-zinc-100 dark:bg-zinc-800/80 text-zinc-700 dark:text-zinc-300 text-xs font-semibold rounded-lg border border-zinc-200/50 dark:border-zinc-700/50"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

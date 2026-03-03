"use client";

import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";

export default function Projects() {
    const projects = [
        {
            title: "Learning Management System (LMS)",
            description: "A comprehensive web application built using Java Spring Boot for managing learning management system functionalities. Allows administrators, teachers, and students to interact seamlessly with courses, assignments, and grades.",
            tags: ["Java", "Spring Boot", "REST API", "Backend"],
            github: "https://github.com/NicatQuliyev601/lms-project",
        },
        {
            title: "Task Management App",
            description: "Developed an online task management platform enabling secure user authentication, complex task creation, and structured assignment flows.",
            tags: ["Java", "Spring Boot", "PostgreSQL", "Kafka"],
            github: "https://gitlab.com/NicatQuliyev/task-management",
        },
        {
            title: "Tour Travel Telegram Bot",
            description: "An automated Telegram bot that intelligently pairs tour companies with client requests. Built alongside a companion app to directly push matching customized offers securely to clients based on their bot inputs.",
            tags: ["Java", "Spring Boot", "PostgreSQL", "Redis", "Kafka", "Telegram API"],
            github: "https://github.com/NicatQuliyev601/Tour-telegram-bot",
        },
    ];

    return (
        <section id="projects" className="py-24 bg-zinc-50 dark:bg-zinc-950 px-4">
            <div className="max-w-6xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="mb-12"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 dark:text-zinc-100 mb-4">
                        Featured Projects
                    </h2>
                    <p className="text-zinc-600 dark:text-zinc-400 text-lg">
                        A selection of my recent backend and architectural implementations.
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
                            className="flex flex-col bg-white dark:bg-zinc-900 rounded-2xl overflow-hidden shadow-sm border border-zinc-200 dark:border-zinc-800 hover:shadow-lg transition-all p-6"
                        >
                            <div className="flex-grow">
                                <h3 className="text-xl font-bold text-zinc-900 dark:text-zinc-100 mb-3">
                                    {project.title}
                                </h3>
                                <p className="text-zinc-600 dark:text-zinc-400 mb-6 text-sm leading-relaxed">
                                    {project.description}
                                </p>
                                <div className="flex flex-wrap gap-2 mb-6">
                                    {project.tags.map((tag) => (
                                        <span
                                            key={tag}
                                            className="px-3 py-1 bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 text-xs font-semibold rounded-md"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                            <div className="flex items-center gap-4 mt-auto pt-4 border-t border-zinc-100 dark:border-zinc-800">
                                <a
                                    href={project.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center text-sm font-medium text-zinc-600 dark:text-zinc-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                                >
                                    <Github className="w-5 h-5 mr-2" />
                                    Repository View
                                </a>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

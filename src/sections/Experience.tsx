"use client";

import { motion } from "framer-motion";
import { Briefcase, GraduationCap, Award } from "lucide-react";

export default function Experience() {
    const experiences = [
        {
            company: "Sinam",
            location: "Baku",
            role: "Java Developer",
            date: "July 2024 – Present",
            bullets: [
                "Architect and maintain Java-based applications for client projects, ensuring high availability, optimal performance, and horizontal scalability.",
                "Integrate complex disparate systems utilizing modern Java frameworks, drastically improving cross-platform interoperability.",
                "Perform advanced database management and query optimization using Java and SQL, accelerating data retrieval operations.",
                "Drive code quality through rigorous code reviews, automated testing, and active bug resolution in a fast-paced agile environment."
            ]
        },
        {
            company: "Yelo Bank",
            location: "Baku",
            role: "Java Developer Intern",
            date: "April 2023 – June 2023",
            bullets: [
                "Played a core role in modernizing the bank's backend architecture by successfully migrating a legacy Tomcat monolithic service into agile Microservices.",
                "Implemented secure encryption techniques and ensured strict compliance with banking security standards.",
                "Collaborated closely with senior developers, writing logic utilizing Java, Spring Boot, and PL/SQL for high-stakes financial applications.",
            ]
        }
    ];

    const education = [
        {
            degree: "Master's Degree in Project Management",
            institution: "Azerbaijan Technical University (Baku)",
            date: "2024 – Present"
        },
        {
            degree: "Bachelor's Degree in Computer Science",
            institution: "Azerbaijan State Oil and Industry University (Baku)",
            date: "2020 – 2024"
        }
    ];

    const certifications = [
        {
            title: "Advanced Full Stack Backend Programming",
            issuer: "Code Academy & Technest",
            date: "2023 – 2024"
        },
        {
            title: "Microservices Development",
            issuer: "Ingress Academy",
            date: "2023"
        },
        {
            title: "Java Backend Programming",
            issuer: "ATL Academy",
            date: "2021 – 2022"
        }
    ];

    return (
        <section id="experience" className="py-24 bg-white dark:bg-zinc-900 px-4 border-t border-zinc-100 dark:border-zinc-800">
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16">

                {/* Work Experience Section */}
                <div className="lg:col-span-7">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="mb-12 flex items-center gap-3"
                    >
                        <div className="p-3 bg-blue-50 dark:bg-blue-900/30 text-blue-600 rounded-xl">
                            <Briefcase className="w-6 h-6" />
                        </div>
                        <div>
                            <h2 className="text-3xl font-extrabold text-zinc-900 dark:text-zinc-100">Work Experience</h2>
                            <p className="text-zinc-500 dark:text-zinc-400 font-medium mt-1">My professional journey</p>
                        </div>
                    </motion.div>

                    <div className="space-y-12">
                        {experiences.map((exp, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="relative pl-8 md:pl-0"
                            >
                                {/* Timeline Desktop */}
                                <div className="hidden md:block absolute w-px h-full bg-zinc-200 dark:bg-zinc-800 left-[-2rem] top-2"></div>
                                <div className="hidden md:block absolute w-4 h-4 bg-white dark:bg-zinc-900 border-2 border-blue-600 rounded-full left-[-2.4rem] top-1 z-10"></div>

                                {/* Timeline Mobile */}
                                <div className="md:hidden absolute w-px h-full bg-zinc-200 dark:bg-zinc-800 left-0 top-2"></div>
                                <div className="md:hidden absolute w-3 h-3 bg-white dark:bg-zinc-900 border-2 border-blue-600 rounded-full left-[-0.3rem] top-1.5 z-10"></div>

                                <div className="bg-zinc-50 dark:bg-zinc-950 p-6 md:p-8 rounded-3xl border border-zinc-100 dark:border-zinc-800 hover:border-blue-500/30 transition-colors">
                                    <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4 gap-2">
                                        <div>
                                            <h3 className="text-xl font-bold text-zinc-900 dark:text-zinc-100">{exp.role}</h3>
                                            <p className="text-lg font-semibold text-blue-600 mt-1">{exp.company}</p>
                                        </div>
                                        <div className="inline-flex items-center px-3 py-1 bg-white dark:bg-zinc-800 text-sm font-semibold text-zinc-600 dark:text-zinc-300 rounded-full border border-zinc-200 dark:border-zinc-700 shadow-sm whitespace-nowrap">
                                            {exp.date}
                                        </div>
                                    </div>
                                    <ul className="space-y-3 mt-6">
                                        {exp.bullets.map((bullet, i) => (
                                            <li key={i} className="text-zinc-600 dark:text-zinc-400 text-base leading-relaxed flex items-start">
                                                <span className="text-blue-500 mr-3 mt-1.5 shrink-0 rounded-full w-1.5 h-1.5 bg-blue-500"></span>
                                                <span>{bullet}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Education & Certs Section */}
                <div className="lg:col-span-5 space-y-16">

                    {/* Education */}
                    <div>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                            className="mb-10 flex items-center gap-3"
                        >
                            <div className="p-3 bg-blue-50 dark:bg-blue-900/30 text-blue-600 rounded-xl">
                                <GraduationCap className="w-6 h-6" />
                            </div>
                            <h2 className="text-2xl font-extrabold text-zinc-900 dark:text-zinc-100">Education</h2>
                        </motion.div>

                        <div className="space-y-6">
                            {education.map((edu, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, x: 20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    className="bg-zinc-50 dark:bg-zinc-950 p-6 rounded-2xl border border-zinc-100 dark:border-zinc-800"
                                >
                                    <h3 className="text-lg font-bold text-zinc-900 dark:text-zinc-100 leading-snug">{edu.degree}</h3>
                                    <p className="text-base font-medium text-zinc-600 dark:text-zinc-400 mt-2">{edu.institution}</p>
                                    <p className="text-sm font-semibold text-blue-600 mt-2">{edu.date}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Certifications */}
                    <div>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                            className="mb-10 flex items-center gap-3"
                        >
                            <div className="p-3 bg-blue-50 dark:bg-blue-900/30 text-blue-600 rounded-xl">
                                <Award className="w-6 h-6" />
                            </div>
                            <h2 className="text-2xl font-extrabold text-zinc-900 dark:text-zinc-100">Certifications</h2>
                        </motion.div>

                        <div className="space-y-4">
                            {certifications.map((cert, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, x: 20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    className="flex flex-col sm:flex-row sm:items-center sm:justify-between bg-zinc-50 dark:bg-zinc-950 p-5 rounded-2xl border border-zinc-100 dark:border-zinc-800 hover:border-blue-500/30 transition-colors gap-4"
                                >
                                    <div>
                                        <h3 className="text-base font-bold text-zinc-900 dark:text-zinc-100">{cert.title}</h3>
                                        <p className="text-sm font-medium text-zinc-500 dark:text-zinc-400 mt-1">{cert.issuer}</p>
                                    </div>
                                    <div className="sm:text-right shrink-0 relative">
                                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold bg-zinc-200 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300">
                                            {cert.date}
                                        </span>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}

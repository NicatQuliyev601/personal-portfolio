"use client";

import { motion } from "framer-motion";

export default function Experience() {
    const experiences = [
        {
            company: "Sinam",
            location: "Baku",
            role: "Java Developer",
            date: "July 2024 – Present",
            bullets: [
                "Developed and maintained Java-based applications for various client projects, ensuring optimal performance and scalability.",
                "Integrated complex systems using Java frameworks, improving interoperability between different IT solutions.",
                "Worked on database management and optimization, utilizing Java and SQL to ensure smooth data operations.",
                "Participated in code reviews, bug fixing, and testing to ensure the quality and reliability of the software."
            ]
        },
        {
            company: "Yelo Bank",
            location: "Baku",
            role: "Java Developer Intern",
            date: "April 2023 – June 2023",
            bullets: [
                "Collaborated with a team of developers to contribute to the development of the bank’s backend systems.",
                "Gained practical experience in Java, Spring Boot, and PL/SQL, working on various aspects of applications.",
                "Successfully converted the Tomcat monolith service into microservices, improving system scalability and flexibility.",
                "Ensured compliance with security standards and best practices in encryption techniques for banking applications."
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
        },
        {
            degree: "Advanced Full stack Backend Programming",
            institution: "Code Academy & Technest",
            date: "2023 – 2024"
        },
        {
            degree: "Microservices Development",
            institution: "Ingress Academy",
            date: "2023"
        }
    ];

    return (
        <section id="experience" className="py-24 bg-white dark:bg-zinc-900 px-4 border-t border-zinc-100 dark:border-zinc-800">
            <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">

                {/* Experience Section */}
                <div>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="mb-10"
                    >
                        <h2 className="text-3xl font-bold text-zinc-900 dark:text-zinc-100 mb-2">Professional Experience</h2>
                        <div className="w-12 h-1 bg-blue-600 rounded"></div>
                    </motion.div>

                    <div className="space-y-12">
                        {experiences.map((exp, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="relative pl-8 border-l-2 border-zinc-200 dark:border-zinc-800"
                            >
                                <div className="absolute w-4 h-4 bg-white dark:bg-zinc-900 border-2 border-blue-600 rounded-full -left-[9px] top-1"></div>
                                <h3 className="text-xl font-bold text-zinc-900 dark:text-zinc-100">{exp.role}</h3>
                                <p className="text-base font-medium text-blue-600 mt-1">{exp.company}, {exp.location}</p>
                                <p className="text-sm font-medium text-zinc-500 dark:text-zinc-400 mt-1 mb-4">{exp.date}</p>
                                <ul className="space-y-2">
                                    {exp.bullets.map((bullet, i) => (
                                        <li key={i} className="text-zinc-600 dark:text-zinc-300 text-base leading-relaxed flex items-start">
                                            <span className="text-blue-500 mr-2 mt-1">•</span>
                                            <span>{bullet}</span>
                                        </li>
                                    ))}
                                </ul>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Education Section */}
                <div>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="mb-10"
                    >
                        <h2 className="text-3xl font-bold text-zinc-900 dark:text-zinc-100 mb-2">Education & Certifications</h2>
                        <div className="w-12 h-1 bg-blue-600 rounded"></div>
                    </motion.div>

                    <div className="space-y-10">
                        {education.map((edu, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="relative pl-8 border-l-2 border-zinc-200 dark:border-zinc-800"
                            >
                                <div className="absolute w-4 h-4 bg-zinc-200 dark:bg-zinc-800 rounded-full -left-[9px] top-1"></div>
                                <h3 className="text-lg font-bold text-zinc-900 dark:text-zinc-100">{edu.degree}</h3>
                                <p className="text-base font-medium text-zinc-600 dark:text-zinc-400 mt-1">{edu.institution}</p>
                                <p className="text-sm font-medium text-blue-600 mt-1">{edu.date}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
}

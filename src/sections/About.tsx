"use client";

import { motion } from "framer-motion";

export default function About() {
    return (
        <section id="about" className="py-24 bg-white dark:bg-zinc-900 px-4">
            <div className="max-w-4xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 dark:text-zinc-100 mb-8">
                        About Me
                    </h2>
                    <div className="space-y-6 text-lg text-zinc-600 dark:text-zinc-300 leading-relaxed">
                        <p>
                            I am an accomplished Java Developer based in Baku, Azerbaijan with a passion for transforming complex requirements into reliable backend architectures.
                        </p>
                        <p>
                            My expertise centers around the Java ecosystem—primarily Spring Boot, PostgreSQL, and modern message brokers like Kafka and RabbitMQ. I have hands-on experience converting monolithic structures into agile, resilient microservices. I am committed to continuous learning, regularly attending advanced courses to refine my knowledge encompassing RESTful services, database optimization, and high-quality software delivery.
                        </p>
                        <p>
                            Currently, I am pursuing my Master's degree in Project Management at Azerbaijan Technical University while continuing my work building scalable systems. Beyond writing code, I actively participate in code reviews, bug resolution, and collaborative problem solving because I believe great software is fundamentally a team effort.
                        </p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}

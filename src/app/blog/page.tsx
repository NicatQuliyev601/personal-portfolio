import { PenTool } from "lucide-react";
import Link from "next/link";

export default function BlogHome() {
    return (
        <div className="max-w-4xl mx-auto px-4 mt-12 text-center">
            <div className="flex justify-center mb-6 text-zinc-300 dark:text-zinc-800">
                <PenTool className="w-24 h-24" />
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold text-zinc-900 dark:text-zinc-100 mb-6">
                Engineering Insights
            </h1>
            <p className="text-lg text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto mb-10 leading-relaxed">
                This space is dedicated to deep dives into Backend Architecture, JVM Internals, and Microservices design patterns. Articles are currently being formulated.
            </p>

            <div className="inline-flex flex-col sm:flex-row gap-4 items-center justify-center">
                <Link
                    href="/"
                    className="px-8 py-3 rounded-full font-semibold bg-zinc-100 dark:bg-zinc-900 text-zinc-900 dark:text-zinc-100 hover:bg-zinc-200 dark:hover:bg-zinc-800 transition-colors"
                >
                    Return to Portfolio
                </Link>
            </div>
        </div>
    );
}

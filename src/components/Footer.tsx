import { Github, Linkedin } from "lucide-react";

export default function Footer() {
    return (
        <footer className="bg-white dark:bg-zinc-900 border-t border-zinc-200 dark:border-zinc-800 py-12 px-4">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center">
                <div className="mb-6 md:mb-0 text-center md:text-left">
                    <span className="text-xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100">
                        NQ<span className="text-blue-600">.</span>
                    </span>
                    <p className="text-zinc-500 dark:text-zinc-400 text-sm mt-2">
                        © {new Date().getFullYear()} Nicat Quliyev. All rights reserved.
                    </p>
                </div>

                <div className="flex space-x-6">
                    <a
                        href="https://github.com/NicatQuliyev601"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors"
                    >
                        <span className="sr-only">GitHub</span>
                        <Github className="h-6 w-6" />
                    </a>
                    <a
                        href="https://linkedin.com/in/nicatquliyev"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-zinc-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                    >
                        <span className="sr-only">LinkedIn</span>
                        <Linkedin className="h-6 w-6" />
                    </a>
                </div>
            </div>
        </footer>
    );
}

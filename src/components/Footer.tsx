import { Github, Linkedin, Gitlab } from "lucide-react";
import Link from "next/link";

export default function Footer() {
    return (
        <footer className="bg-white dark:bg-zinc-900 border-t border-zinc-200 dark:border-zinc-800 py-12 px-4">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">

                <div className="text-center md:text-left">
                    <Link href="/" className="text-2xl font-black tracking-tight text-zinc-900 dark:text-zinc-100 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                        NQ<span className="text-blue-600">.</span>
                    </Link>
                    <p className="text-zinc-500 dark:text-zinc-400 text-sm mt-3 font-medium">
                        © {new Date().getFullYear()} Nicat Quliyev. <br className="md:hidden" />All rights reserved.
                    </p>
                </div>

                {/* Dynamic Center Links (Blog integration preview) */}
                <div className="flex gap-6 text-sm font-bold text-zinc-600 dark:text-zinc-400 tracking-wider uppercase">
                    <Link href="/blog" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                        Read Blog
                    </Link>
                    <a href="/NicatQuliyev_Resume.docx" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                        Curriculum Vitae
                    </a>
                </div>

                <div className="flex space-x-6 items-center">
                    <a
                        href="https://github.com/NicatQuliyev601"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-full bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400 hover:bg-blue-600 hover:text-white dark:hover:bg-blue-600 dark:hover:text-white transition-all transform hover:-translate-y-1"
                    >
                        <span className="sr-only">GitHub</span>
                        <Github className="h-5 w-5" />
                    </a>
                    <a
                        href="https://gitlab.com/NicatQuliyev"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-full bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400 hover:bg-orange-600 hover:text-white dark:hover:bg-orange-600 dark:hover:text-white transition-all transform hover:-translate-y-1"
                    >
                        <span className="sr-only">GitLab</span>
                        <Gitlab className="h-5 w-5" />
                    </a>
                    <a
                        href="https://linkedin.com/in/nicatquliyev"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-full bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400 hover:bg-blue-700 hover:text-white dark:hover:bg-blue-600 dark:hover:text-white transition-all transform hover:-translate-y-1"
                    >
                        <span className="sr-only">LinkedIn</span>
                        <Linkedin className="h-5 w-5" />
                    </a>
                </div>

            </div>
        </footer>
    );
}

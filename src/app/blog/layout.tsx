import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function BlogLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="min-h-screen flex flex-col bg-white dark:bg-zinc-950 text-zinc-900 dark:text-zinc-50 w-full overflow-x-hidden">
            <Navbar />
            <main className="flex-grow pt-24 pb-16">
                {children}
            </main>
            <Footer />
        </div>
    );
}

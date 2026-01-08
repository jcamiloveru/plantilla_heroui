import { Link } from "@heroui/link";

import { Navbar } from "@/components/navbar";

export default function DefaultLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative flex flex-col h-screen">
      <Navbar />
      <main className="container mx-auto max-w-7xl pt-16 px-6 flex-grow">
        {children}
      </main>
      <footer className="w-full flex items-center justify-center py-3">
        <Link
          isExternal
          className="flex items-center gap-1 text-current"
          href="https://jcamiloveru.com"
          title="Portafolio Camilo Veru"
        >
          <span className="text-default-600">Powered by</span>
          <p className="text-primary">jcamiloveru</p>
        </Link>
      </footer>
    </div>
  );
}

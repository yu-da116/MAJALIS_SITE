import { Link } from "wouter";
import { Container } from "./Container";
import { ThemeToggle } from "../shared/ThemeToggle";
import { motion } from "framer-motion";

export function Navbar() {
  const links = [
    { href: "/", label: "Home" },
    { href: "/works", label: "Works" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b bg-background/80 backdrop-blur-sm">
      <Container>
        <nav className="flex h-16 items-center justify-between">
          <Link href="/">
            <motion.a
              whileHover={{ scale: 1.05 }}
              className="text-xl font-bold tracking-tighter"
            >
              Portfolio
            </motion.a>
          </Link>
          
          <div className="flex items-center gap-6">
            <div className="hidden md:flex items-center gap-6">
              {links.map((link) => (
                <Link key={link.href} href={link.href}>
                  <motion.a
                    whileHover={{ y: -2 }}
                    className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </motion.a>
                </Link>
              ))}
            </div>
            <ThemeToggle />
          </div>
        </nav>
      </Container>
    </header>
  );
}

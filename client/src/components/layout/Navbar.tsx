import { Link } from "wouter";
import { Container } from "./Container";
import { ThemeToggle } from "../shared/ThemeToggle";
import { motion } from "framer-motion";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { useState } from "react";
import { LilyIcon } from "../shared/LilyIcon";

export function Navbar() {
  const [open, setOpen] = useState(false);

  const links = [
    { href: "/", label: "Home" },
    { href: "/works", label: "Works" },
    { href: "/about", label: "About" },
    { href: "/blog", label: "Blog" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b bg-background/80 backdrop-blur-sm">
      <Container>
        <nav className="flex h-16 items-center justify-between">
          <Link href="/">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center gap-2 text-xl font-bold tracking-tighter cursor-pointer"
            >
              <motion.div
                initial={{ rotate: 0 }}
                whileHover={{ rotate: 15 }}
                transition={{ duration: 0.2 }}
              >
                <LilyIcon className="w-6 h-6" />
              </motion.div>
              Majalis
            </motion.div>
          </Link>

          <div className="flex items-center gap-6">
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-6">
              {links.map((link) => (
                <Link key={link.href} href={link.href}>
                  <motion.div
                    whileHover={{ y: -2 }}
                    className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
                  >
                    {link.label}
                  </motion.div>
                </Link>
              ))}
            </div>

            <ThemeToggle />

            {/* Mobile Navigation */}
            <div className="md:hidden">
              <Sheet open={open} onOpenChange={setOpen}>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="icon">
                    <Menu className="h-5 w-5" />
                    <span className="sr-only">Toggle menu</span>
                  </Button>
                </SheetTrigger>
                <SheetContent side="right" className="w-[240px] sm:w-[300px]">
                  <div className="flex flex-col gap-4 mt-8">
                    {links.map((link) => (
                      <Link key={link.href} href={link.href}>
                        <div
                          className="text-lg font-medium text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
                          onClick={() => setOpen(false)}
                        >
                          {link.label}
                        </div>
                      </Link>
                    ))}
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </nav>
      </Container>
    </header>
  );
}
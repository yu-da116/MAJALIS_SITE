import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "wouter";

export default function Home() {
  return (
    <>
      <section className="py-24 md:py-32">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl"
          >
            <h1 className="text-4xl md:text-6xl font-bold tracking-tighter mb-6">
              Crafting Digital Experiences with Minimalist Design
            </h1>
            <p className="text-lg text-muted-foreground mb-8">
              Frontend developer specializing in creating beautiful, functional, and accessible web applications.
            </p>
            <div className="flex gap-4">
              <Link href="/works">
                <Button size="lg">
                  View My Work
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link href="/contact">
                <Button variant="outline" size="lg">
                  Get in Touch
                </Button>
              </Link>
            </div>
          </motion.div>
        </Container>
      </section>

      <section className="py-24 bg-muted">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="grid md:grid-cols-3 gap-8"
          >
            {[
              { title: "Design", description: "Clean and minimalist design approach" },
              { title: "Development", description: "Modern web technologies and best practices" },
              { title: "Performance", description: "Optimized for speed and accessibility" },
            ].map((item) => (
              <div key={item.title} className="p-6 bg-background rounded-lg">
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </motion.div>
        </Container>
      </section>
    </>
  );
}

import { Container } from "@/components/layout/Container";
import { SEO } from "@/components/shared/SEO";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "wouter";
import { ArrowUpRight } from "lucide-react";

interface WorkItem {
  title: string;
  description: string;
  tags: string[];
  image: string;
  link: string;
}

const works: WorkItem[] = [
  {
    title: "モダンECサイト",
    description: "Next.js、Tailwind CSS、Stripeを使用したフルスタックECサイト",
    tags: ["Next.js", "TypeScript", "Tailwind CSS"],
    image: "/images/work1.png",
    link: "https://example.com/work1"
  },
  {
    title: "AI文章校正アプリ",
    description: "OpenAI APIを活用した文章校正・提案エンジン",
    tags: ["React", "Node.js", "OpenAI"],
    image: "/images/work2.png",
    link: "https://example.com/work2"
  },
  {
    title: "デザインシステム",
    description: "再利用可能なUIコンポーネントライブラリ",
    tags: ["React", "Storybook", "Figma"],
    image: "/images/work3.png",
    link: "https://example.com/work3"
  }
];

export default function Works() {
  return (
    <>
      <SEO
        title="Works"
        description="A collection of my recent projects and works in web development and design."
        keywords="portfolio, web development, projects, React, TypeScript"
      />
      <Container className="py-16 md:py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto text-center mb-12"
        >
          <h1 className="text-4xl font-bold tracking-tighter mb-4">Works</h1>
          <p className="text-lg text-muted-foreground">
            A collection of my recent projects and explorations in web development.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {works.map((work, index) => (
            <motion.div
              key={work.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Link href={work.link}>
                <Card className="group cursor-pointer hover:shadow-lg transition-all">
                  <CardHeader className="relative">
                    <div className="aspect-video bg-muted rounded-t-lg mb-4" />
                    <CardTitle className="flex items-center gap-2">
                      {work.title}
                      <ArrowUpRight className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground mb-4">
                      {work.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {work.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-xs px-2 py-1 bg-muted rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </Link>
            </motion.div>
          ))}
        </div>
      </Container>
    </>
  );
}

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
  features: string[];
}

const portfolioProject: WorkItem = {
  title: "モノクロームポートフォリオサイト",
  description: "モダンなReactテクノロジースタックを活用した、ミニマルでエレガントなポートフォリオサイト。SEO最適化とアクセシビリティを重視したデザイン。",
  tags: [
    "React",
    "TypeScript",
    "Tailwind CSS",
    "Framer Motion",
    "next-themes",
    "Wouter",
    "React Helmet"
  ],
  features: [
    "レスポンシブデザイン",
    "ダークモード対応",
    "スムーズなページ遷移アニメーション",
    "SEO最適化",
    "アクセシビリティ対応"
  ]
};

export default function Works() {
  return (
    <>
      <SEO
        title="Works"
        description="A showcase of my recent project - A modern, minimalist portfolio website built with React and TypeScript."
        keywords="portfolio, web development, React, TypeScript, frontend development"
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
            Showcasing my latest project in web development.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Card className="max-w-4xl mx-auto">
            <CardHeader>
              <CardTitle className="text-2xl">{portfolioProject.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-6">
                {portfolioProject.description}
              </p>

              <div className="space-y-6">
                <div>
                  <h3 className="font-semibold mb-2">技術スタック</h3>
                  <div className="flex flex-wrap gap-2">
                    {portfolioProject.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-sm px-3 py-1 bg-muted rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="font-semibold mb-2">主要機能</h3>
                  <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                    {portfolioProject.features.map((feature) => (
                      <li key={feature}>{feature}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </Container>
    </>
  );
}
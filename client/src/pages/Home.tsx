import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight, Palette, Code, Users, Zap } from "lucide-react";
import { Link } from "wouter";
import { SEO } from "@/components/shared/SEO";

const services = [
  {
    icon: Palette,
    title: "デザイン",
    description: "美しく使いやすいUIデザインを提供します。モダンでミニマルなデザインで、ユーザー体験を向上させます。",
    points: ["レスポンシブデザイン", "アクセシビリティ対応", "ブランドアイデンティティの反映"]
  },
  {
    icon: Code,
    title: "開発",
    description: "最新のWeb技術を活用した高品質な開発を行います。保守性と拡張性を考慮した実装を心がけています。",
    points: ["モダンな技術スタック", "クリーンなコード", "継続的な改善"]
  },
  {
    icon: Users,
    title: "ユーザー中心設計",
    description: "ユーザーのニーズを理解し、使いやすさを追求したデザインを提供します。フィードバックを大切にした改善を行います。",
    points: ["ユーザビリティテスト", "フィードバック反映", "継続的な改善"]
  },
  {
    icon: Zap,
    title: "パフォーマンス",
    description: "高速で快適なユーザー体験を実現します。SEO対策やページ読み込みの最適化を徹底的に行います。",
    points: ["高速な読み込み", "SEO最適化", "スムーズな操作感"]
  }
];

export default function Home() {
  return (
    <>
      <SEO
        title="Home"
        description="Frontend developer specializing in creating beautiful, functional, and accessible web applications with modern technologies."
        keywords="frontend developer, web development, React, TypeScript, portfolio"
      />
      <section className="min-h-[80vh] flex items-center py-16 md:py-24">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h1 className="text-4xl md:text-6xl font-bold tracking-tighter mb-6">
              Simplifying IT for You with Majalis
            </h1>
            <p className="text-lg text-muted-foreground mb-8">
              Frontend developer specializing in creating beautiful, functional, and accessible web applications.
            </p>
            <div className="flex gap-4 justify-center">
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
            className="max-w-5xl mx-auto"
          >
            <h2 className="text-3xl font-bold tracking-tighter text-center mb-12">サービス内容</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {services.map((service, index) => (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="p-6 bg-background rounded-lg hover:shadow-lg transition-shadow">
                    <service.icon className="h-12 w-12 mb-4 text-foreground/80" />
                    <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                    <p className="text-muted-foreground mb-4">{service.description}</p>
                    <ul className="space-y-2">
                      {service.points.map((point, i) => (
                        <li key={i} className="flex items-center text-sm text-muted-foreground">
                          <span className="w-1.5 h-1.5 rounded-full bg-foreground/60 mr-2" />
                          {point}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </Container>
      </section>
    </>
  );
}
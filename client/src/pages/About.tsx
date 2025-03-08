import { Container } from "@/components/layout/Container";
import { SEO } from "@/components/shared/SEO";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { SiReact, SiTypescript, SiTailwindcss, SiFramer, SiVuedotjs, SiPhp, SiLaravel } from "react-icons/si";

const skills = [
  { icon: SiReact, name: "React", description: "モダンなUIの構築" },
  { icon: SiTypescript, name: "TypeScript", description: "型安全な開発" },
  { icon: SiTailwindcss, name: "Tailwind CSS", description: "洗練されたデザイン" },
  { icon: SiFramer, name: "Framer Motion", description: "滑らかなアニメーション" },
  { icon: SiVuedotjs, name: "Vue.js", description: "インタラクティブなUI開発" },
  { icon: SiPhp, name: "PHP", description: "サーバーサイド開発" },
  { icon: SiLaravel, name: "Laravel", description: "堅牢なバックエンド構築" }
];

export default function About() {
  return (
    <>
      <SEO
        title="About"
        description="Frontend developer with a passion for creating beautiful and functional web applications."
        keywords="frontend developer, React, TypeScript, web development, portfolio"
      />
      <Container className="py-16 md:py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto text-center mb-12"
        >
          <h1 className="text-4xl font-bold tracking-tighter mb-4">About Me</h1>
          <p className="text-lg text-muted-foreground">
            フロントエンド開発者として、美しく機能的なWebアプリケーションの作成に情熱を注いでいます。
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mb-12"
          >
            <Card>
              <CardContent className="pt-6">
                <h2 className="text-2xl font-semibold mb-4">私について</h2>
                <p className="text-muted-foreground mb-4">
                  モダンなWebテクノロジーを活用し、ユーザー体験を重視したアプリケーション開発を行っています。
                  特にReactエコシステムを中心に、パフォーマンスとアクセシビリティの両立を目指しています。
                </p>
                <p className="text-muted-foreground">
                  新しい技術やベストプラクティスの学習を継続的に行い、
                  より良いプロダクトの提供を心がけています。
                </p>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <h2 className="text-2xl font-semibold mb-6 text-center">スキル & 技術</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                >
                  <Card>
                    <CardContent className="p-6 flex items-center gap-4">
                      <skill.icon className="h-8 w-8" />
                      <div>
                        <h3 className="font-semibold">{skill.name}</h3>
                        <p className="text-sm text-muted-foreground">
                          {skill.description}
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </Container>
    </>
  );
}
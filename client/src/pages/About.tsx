import { Container } from "@/components/layout/Container";
import { SEO } from "@/components/shared/SEO";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { SiReact, SiTypescript, SiTailwindcss, SiVuedotjs, SiPhp, SiLaravel, SiHtml5, SiCss3, SiJavascript, SiNodedotjs, SiDotnet, SiMysql } from "react-icons/si";
import { VBAIcon } from "@/components/shared/VBAIcon";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const skills = {
  languages: [
    { icon: SiHtml5, name: "HTML", description: "マークアップ言語" },
    { icon: SiCss3, name: "CSS", description: "スタイリング" },
    { icon: SiJavascript, name: "JavaScript", description: "フロントエンド開発" },
    { icon: SiTypescript, name: "TypeScript", description: "型安全な開発" },
    { icon: SiPhp, name: "PHP", description: "サーバーサイド開発" },
    { icon: SiMysql, name: "SQL", description: "データベース操作" },
    { icon: VBAIcon, name: "VBA", description: "業務効率化" }
  ],
  frameworks: [
    { icon: SiReact, name: "React", description: "モダンなUIの構築" },
    { icon: SiVuedotjs, name: "Vue.js", description: "インタラクティブなUI開発" },
    { icon: SiNodedotjs, name: "Node.js", description: "サーバーサイド開発" },
    { icon: SiLaravel, name: "Laravel", description: "堅牢なバックエンド構築" },
    { icon: SiTailwindcss, name: "Tailwind CSS", description: "モダンなスタイリング" },
    { icon: SiDotnet, name: ".NET", description: "エンタープライズ開発" }
  ]
};

export default function About() {
  const { ref: skillsRef, isInView: skillsInView } = useScrollAnimation();

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
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    はじめまして。私はITエンジニアとして、スマートフォンアプリ、会計システム、システムエンジニア向け研修・教育システムの開発に携わってきました。
                    ただ作るだけでなく、お客様が直感的に使えるシステムを提供することを大切にしています。
                  </p>
                  <div className="py-4">
                    <p className="italic">
                      「ITを活用したいけど、何から始めればいいかわからない…」
                    </p>
                    <p className="italic">
                      「システムはあるけれど、もっと使いやすくしたい…」
                    </p>
                  </div>
                  <p>
                    そんなお悩みに寄り添い、お客様目線に立った開発とサポートを行います。
                    お困りごとがあれば、ぜひお気軽にご相談ください。
                  </p>
                  <p className="font-medium text-foreground">
                    あなたのアイデアをカタチにするお手伝いをいたします。
                  </p>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <div ref={skillsRef}>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="space-y-12"
            >
              {/* プログラミング言語 */}
              <div>
                <h2 className="text-2xl font-semibold mb-6 text-center">プログラミング言語</h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {skills.languages.map((skill, index) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, y: 50 }}
                      animate={skillsInView ? { opacity: 1, y: 0 } : {}}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                      <Card className="hover:scale-105 transition-transform">
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
              </div>

              {/* フレームワーク/ライブラリ */}
              <div>
                <h2 className="text-2xl font-semibold mb-6 text-center">フレームワーク/ライブラリ</h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {skills.frameworks.map((skill, index) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, y: 50 }}
                      animate={skillsInView ? { opacity: 1, y: 0 } : {}}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                      <Card className="hover:scale-105 transition-transform">
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
              </div>
            </motion.div>
          </div>
        </div>
      </Container>
    </>
  );
}
import { Container } from "@/components/layout/Container";
import { SEO } from "@/components/shared/SEO";
import { motion } from "framer-motion";

export default function BlogList() {
  return (
    <>
      <SEO
        title="Blog"
        description="技術ブログ記事の一覧です。"
        keywords="blog, tech blog, programming"
      />
      <Container className="py-16 md:py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto text-center mb-12"
        >
          <h1 className="text-4xl font-bold tracking-tighter mb-4">Blog</h1>
          <p className="text-lg text-muted-foreground">
            Coming Soon...
          </p>
        </motion.div>
      </Container>
    </>
  );
}

import { Container } from "@/components/layout/Container";
import { SEO } from "@/components/shared/SEO";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail } from "lucide-react";

export default function Contact() {
  return (
    <>
      <SEO
        title="Contact"
        description="お問い合わせはメールにてお願いいたします。"
        keywords="contact, お問い合わせ"
      />
      <Container className="py-16 md:py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto text-center mb-12"
        >
          <h1 className="text-4xl font-bold tracking-tighter mb-4">Contact</h1>
          <p className="text-lg text-muted-foreground">
            お問い合わせはメールにてお願いいたします。
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Card className="max-w-xl mx-auto">
            <CardHeader>
              <CardTitle>お問い合わせ</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <div className="flex flex-col items-center gap-4">
                <Mail className="h-12 w-12 text-muted-foreground" />
                <p className="text-muted-foreground">
                  以下のメールアドレスまでご連絡ください：
                </p>
                <a
                  href="mailto:majalis.work@gmail.com"
                  className="text-lg font-medium hover:underline"
                >
                  majalis.work@gmail.com
                </a>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </Container>
    </>
  );
}
import { Container } from "@/components/layout/Container";
import { SEO } from "@/components/shared/SEO";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useToast } from "@/hooks/use-toast";

const formSchema = z.object({
  name: z.string().min(1, "お名前を入力してください"),
  email: z.string().email("有効なメールアドレスを入力してください"),
  message: z.string().min(10, "メッセージは10文字以上で入力してください"),
});

type FormValues = z.infer<typeof formSchema>;

export default function Contact() {
  const { toast } = useToast();
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  function onSubmit(data: FormValues) {
    console.log(data);
    toast({
      title: "送信完了",
      description: "お問い合わせありがとうございます。確認次第ご連絡いたします。",
    });
    form.reset();
  }

  return (
    <>
      <SEO
        title="Contact"
        description="お問い合わせはこちらのフォームからお願いいたします。"
        keywords="contact, お問い合わせ, フォーム"
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
            お問い合わせ・ご相談はこちらのフォームからお願いいたします。
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Card className="max-w-xl mx-auto">
            <CardHeader>
              <CardTitle>お問い合わせフォーム</CardTitle>
            </CardHeader>
            <CardContent>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="!text-foreground">お名前</FormLabel>
                        <FormControl>
                          <Input placeholder="山田 太郎" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="!text-foreground">メールアドレス</FormLabel>
                        <FormControl>
                          <Input placeholder="yamada@example.com" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="!text-foreground">メッセージ</FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder="お問い合わせ内容をご記入ください"
                            className="min-h-[120px]"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <Button type="submit" className="w-full">送信する</Button>
                </form>
              </Form>
            </CardContent>
          </Card>
        </motion.div>
      </Container>
    </>
  );
}
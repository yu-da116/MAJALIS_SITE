import { Container } from "@/components/layout/Container";
import { SEO } from "@/components/shared/SEO";
import { motion } from "framer-motion";
import { useWelcomeTooltip } from "@/hooks/useWelcomeTooltip";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";

export default function BlogList() {
  const { showTooltip, dismissTooltip } = useWelcomeTooltip('blog');

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
          <TooltipProvider>
            <Tooltip open={showTooltip}>
              <TooltipTrigger asChild>
                <div>
                  <h1 className="text-4xl font-bold tracking-tighter mb-4">Blog</h1>
                  <p className="text-lg text-muted-foreground">
                    Coming Soon...
                  </p>
                </div>
              </TooltipTrigger>
              <TooltipContent side="bottom" className="max-w-sm p-6">
                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute -top-2 -right-2 hover:bg-muted"
                  onClick={dismissTooltip}
                >
                  <X className="h-4 w-4" />
                </Button>
                <p className="text-sm pr-4">
                  ブログ機能は現在開発中です。技術記事やプロジェクトの詳細な解説をお届けする予定です。
                  乞うご期待ください！
                </p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </motion.div>
      </Container>
    </>
  );
}
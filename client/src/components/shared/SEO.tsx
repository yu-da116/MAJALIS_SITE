import { Helmet } from "react-helmet-async";

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  ogImage?: string;
  ogUrl?: string;
  twitterCard?: "summary" | "summary_large_image";
}

export function SEO({
  title = "Portfolio",
  description = "Frontend developer specializing in creating beautiful, functional, and accessible web applications.",
  keywords = "frontend developer, web development, React, TypeScript",
  ogImage = "/og-image.png",
  ogUrl = typeof window !== "undefined" ? window.location.href : "",
  twitterCard = "summary_large_image",
}: SEOProps) {
  const fullTitle = `${title} | My Portfolio`;

  return (
    <Helmet>
      {/* Basic metadata */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />

      {/* Open Graph */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={ogUrl} />
      <meta property="og:image" content={ogImage} />

      {/* Twitter Card */}
      <meta name="twitter:card" content={twitterCard} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />

      {/* Additional SEO tags */}
      <link rel="canonical" href={ogUrl} />
      <meta name="robots" content="index, follow" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <html lang="ja" />
    </Helmet>
  );
}

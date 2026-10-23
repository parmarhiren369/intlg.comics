import { createFileRoute } from "@tanstack/react-router";
import { ArticleDetail } from "@/components/site/ArticleDetail";
import { getArticleBySlug } from "@/data/articles";

export const Route = createFileRoute("/articles/$slug")({
  head: ({ params }) => {
    const article = getArticleBySlug(params.slug);
    const title = article
      ? `${article.title} — Legacy Digitronics`
      : "Article — Legacy Digitronics";
    const description = article ? article.excerpt : "Editorial article from Legacy Digitronics.";

    return {
      meta: [
        { title },
        { name: "description", content: description },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
        { property: "og:type", content: "article" },
      ],
    };
  },
  component: ArticleSlugComponent,
});

function ArticleSlugComponent() {
  const { slug } = Route.useParams();
  return <ArticleDetail slug={slug} />;
}

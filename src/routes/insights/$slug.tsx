import { createFileRoute } from "@tanstack/react-router";
import { InsightDetail } from "@/components/site/InsightDetail";
import { getInsightBySlug } from "@/data/insights";

export const Route = createFileRoute("/insights/$slug")({
  head: ({ params }) => {
    const insight = getInsightBySlug(params.slug);
    const title = insight
      ? `${insight.title} — Legacy Digitronics`
      : "Insight Report — Legacy Digitronics";
    const description = insight
      ? insight.summary
      : "Strategic research report from Legacy Digitronics.";

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
  component: InsightSlugComponent,
});

function InsightSlugComponent() {
  const { slug } = Route.useParams();
  return <InsightDetail slug={slug} />;
}

import { createFileRoute } from "@tanstack/react-router";
import { InsightsList } from "@/components/site/InsightsList";

export const Route = createFileRoute("/insights/")({
  head: () => ({
    meta: [
      { title: "Insights & Market Intelligence — Legacy Digitronics" },
      {
        name: "description",
        content:
          "Executive research reports, industry benchmarks, and strategic case studies on global outsourcing, RPO, and technology from Legacy Group International.",
      },
      { property: "og:title", content: "Insights & Market Intelligence — Legacy Digitronics" },
      {
        property: "og:description",
        content:
          "Access enterprise research, trend analysis, and benchmark reports on global workforce and operational strategy.",
      },
    ],
  }),
  component: InsightsList,
});

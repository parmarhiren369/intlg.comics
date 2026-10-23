import { createFileRoute } from "@tanstack/react-router";
import { ArticlesList } from "@/components/site/ArticlesList";

export const Route = createFileRoute("/articles/")({
  head: () => ({
    meta: [
      { title: "Articles & Editorial — Legacy Digitronics" },
      {
        name: "description",
        content:
          "Thought leadership, operational playbooks, and strategic analysis on enterprise outsourcing, global RPO, and technology from Legacy Group International.",
      },
      { property: "og:title", content: "Articles & Editorial — Legacy Digitronics" },
      {
        property: "og:description",
        content:
          "In-depth articles and guides on scaling global workforce, optimizing BPO costs, and cybersecurity compliance.",
      },
    ],
  }),
  component: ArticlesList,
});

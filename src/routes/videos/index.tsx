import { createFileRoute } from "@tanstack/react-router";
import { VideosList } from "@/components/site/VideosList";

export const Route = createFileRoute("/videos/")({
  head: () => ({
    meta: [
      { title: "Videos & Briefings — Legacy Digitronics" },
      {
        name: "description",
        content:
          "Executive video briefings, client transformation stories, and operational walkthroughs from Legacy Group International.",
      },
      { property: "og:title", content: "Videos & Briefings — Legacy Digitronics" },
      {
        property: "og:description",
        content:
          "Watch enterprise video briefings on lead generation, RPO, technical support engineering, and BPO operations.",
      },
    ],
  }),
  component: VideosList,
});

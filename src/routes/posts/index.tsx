import { createFileRoute } from "@tanstack/react-router";
import { PostsList } from "@/components/site/PostsList";

export const Route = createFileRoute("/posts/")({
  head: () => ({
    meta: [
      { title: "Company Posts & Updates — Legacy Digitronics" },
      {
        name: "description",
        content:
          "Live updates, milestone announcements, and commentary from Legacy Group International leadership.",
      },
      { property: "og:title", content: "Company Posts & Updates — Legacy Digitronics" },
      {
        property: "og:description",
        content:
          "Explore real-time corporate updates, client delivery milestones, and workforce perspectives from Legacy Digitronics.",
      },
    ],
  }),
  component: PostsList,
});

import { createFileRoute, redirect } from "@tanstack/react-router";
import { VideosList } from "@/components/site/VideosList";

export const Route = createFileRoute("/insights/")({
  beforeLoad: () => {
    throw redirect({ to: "/videos" });
  },
  head: () => ({
    meta: [
      { title: "Video Intelligence & Briefings — Legacy Digitronics" },
      {
        name: "description",
        content:
          "Executive video briefings, client transformation stories, and operational walkthroughs from Legacy Group International.",
      },
    ],
  }),
  component: VideosList,
});

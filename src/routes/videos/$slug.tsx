import { createFileRoute } from "@tanstack/react-router";
import { VideoDetail } from "@/components/site/VideoDetail";
import { getVideoBySlug } from "@/data/videos";

export const Route = createFileRoute("/videos/$slug")({
  head: ({ params }) => {
    const video = getVideoBySlug(params.slug);
    const title = video
      ? `${video.title} — Legacy Digitronics`
      : "Video Briefing — Legacy Digitronics";
    const description = video ? video.description : "Enterprise video intelligence briefing.";

    return {
      meta: [
        { title },
        { name: "description", content: description },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
        { property: "og:type", content: "video.other" },
      ],
    };
  },
  component: VideoSlugComponent,
});

function VideoSlugComponent() {
  const { slug } = Route.useParams();
  return <VideoDetail slug={slug} />;
}

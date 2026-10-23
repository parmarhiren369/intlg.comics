import { createFileRoute } from "@tanstack/react-router";
import { PostDetail } from "@/components/site/PostDetail";
import { getPostBySlug } from "@/data/posts";

export const Route = createFileRoute("/posts/$slug")({
  head: ({ params }) => {
    const post = getPostBySlug(params.slug);
    const title = post ? `${post.title} — Legacy Digitronics` : "Update — Legacy Digitronics";
    const description =
      post && post.content.length > 0
        ? post.content[0]
        : "Corporate update from Legacy Digitronics.";

    return {
      meta: [
        { title },
        { name: "description", content: description },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
      ],
    };
  },
  component: PostSlugComponent,
});

function PostSlugComponent() {
  const { slug } = Route.useParams();
  return <PostDetail slug={slug} />;
}

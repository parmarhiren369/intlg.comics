import { createFileRoute } from "@tanstack/react-router";
import { AboutUs } from "@/components/site/AboutUs";

export const Route = createFileRoute("/about")({
  component: AboutUs,
});

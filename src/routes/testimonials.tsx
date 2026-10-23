import { createFileRoute } from "@tanstack/react-router";
import { Testimonials } from "../components/site/Testimonials";

export const Route = createFileRoute("/testimonials")({
  component: Testimonials,
});

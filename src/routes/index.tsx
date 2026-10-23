import { createFileRoute } from "@tanstack/react-router";
import { Home } from "@/components/site/Home";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Legacy Digitronics — Enterprise Business Outsourcing" },
      {
        name: "description",
        content:
          "19+ years engineering outsourcing excellence for global enterprises — RPO, BPO, KPO, MRO, Technical Support, Lead Generation and Digital Marketing.",
      },
      { property: "og:title", content: "Legacy Digitronics — Enterprise Business Outsourcing" },
      {
        property: "og:description",
        content:
          "Trusted by industry leaders for two decades. Precision outsourcing built on people, process and technology.",
      },
    ],
  }),
  component: Home,
});

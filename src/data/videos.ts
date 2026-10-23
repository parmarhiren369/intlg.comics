import leadGenVideo from "@/assets/videos/lead-generation.mp4";

export type VideoItem = {
  id: string;
  slug: string;
  title: string;
  description: string;
  category:
    "Client Success" | "Executive Perspective" | "Operational Excellence" | "Webinars & Tech";
  publishedAt: string;
  duration: string;
  author: string;
  authorRole: string;
  thumbnail: string;
  videoUrl: string;
  embedType: "local" | "youtube";
  featured?: boolean;
  tags: string[];
  keyTakeaways: string[];
  transcriptSummary: string;
};

export const videos: VideoItem[] = [
  {
    id: "vid-1",
    slug: "scaling-global-lead-generation-enterprise",
    title: "Scaling Global Lead Generation: The Predictable Pipeline Blueprint",
    description:
      "A deep dive into how Legacy Group International engineers high-velocity, multi-channel B2B lead generation engines for Fortune 500 tech and industrial leaders.",
    category: "Client Success",
    publishedAt: "2024-10-14",
    duration: "14:20",
    author: "Raj Kapoor",
    authorRole: "Managing Director & Global Operations Lead",
    thumbnail:
      "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1200&q=80",
    videoUrl: leadGenVideo,
    embedType: "local",
    featured: true,
    tags: ["Lead Generation", "Pipeline Growth", "B2B Sales", "AI Outreach"],
    keyTakeaways: [
      "How multi-touch cadences increased sales qualified pipeline by 247% in 90 days.",
      "Structuring research teams for deep account-based intelligence before first contact.",
      "Maintaining 98%+ email deliverability at high volume without burning domains.",
    ],
    transcriptSummary:
      "In this briefing, Raj Kapoor outlines the operational architecture behind Legacy's outbound pipeline engine, explaining the convergence of verified researcher intelligence, multi-tier compliance, and adaptive messaging across global enterprise territories.",
  },
  {
    id: "vid-2",
    slug: "building-agile-rpo-recruitment-teams",
    title: "Building Resilient RPO Teams: 20 Years of Global Talent Delivery",
    description:
      "Executive perspectives on how recruitment process outsourcing has evolved from cost arbitrage to strategic talent agility across engineering, finance, and healthcare.",
    category: "Executive Perspective",
    publishedAt: "2024-09-28",
    duration: "18:45",
    author: "Lauren Kondic",
    authorRole: "Global Research & Delivery Director",
    thumbnail:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=1200&q=80",
    videoUrl: "https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ",
    embedType: "youtube",
    featured: false,
    tags: ["RPO", "Talent Acquisition", "Global Staffing", "HR Strategy"],
    keyTakeaways: [
      "Transitioning from transactional recruiting to embedded strategic talent partner.",
      "Managing cross-border time zones with synchronized 24/7 delivery hubs.",
      "Predictive candidate profiling that lowered first-year attrition below 4%.",
    ],
    transcriptSummary:
      "Lauren discusses two decades of recruitment process outsourcing frameworks, highlighting how dedicated sourcing pods integrate into client ATS workflows to dramatically compress time-to-hire while elevating candidate caliber.",
  },
  {
    id: "vid-3",
    slug: "modernizing-bpo-operations-with-ai-automation",
    title: "Modernizing Enterprise BPO: Human Expertise Powered by AI",
    description:
      "How modern business process outsourcing combines human domain judgment with automated data extraction and workflow orchestration.",
    category: "Operational Excellence",
    publishedAt: "2024-09-12",
    duration: "12:10",
    author: "Vikram Mehta",
    authorRole: "VP of Enterprise Technology & Automation",
    thumbnail:
      "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80",
    videoUrl: leadGenVideo,
    embedType: "local",
    featured: false,
    tags: ["BPO", "Automation", "Operational Excellence", "Process Optimization"],
    keyTakeaways: [
      "Integrating automated OCR and data parsing with senior analyst verification.",
      "Achieving 99.8% SLA accuracy in complex regulatory data entry.",
      "Security safeguards when handling sensitive client financial and healthcare records.",
    ],
    transcriptSummary:
      "Vikram walks through a live operational case study demonstrating how intelligent document pipelines and human-in-the-loop validation teams process over 50,000 monthly compliance records without a single SLA breach.",
  },
  {
    id: "vid-4",
    slug: "customer-support-engineering-l1-l3-playbook",
    title: "24/7 Technical Support: Engineering L1–L3 SLA Excellence",
    description:
      "A walkthrough of our follow-the-sun technical support center architecture, incident escalation protocols, and engineer onboarding.",
    category: "Operational Excellence",
    publishedAt: "2024-08-19",
    duration: "16:35",
    author: "Amit Patel",
    authorRole: "Head of Global Support Services",
    thumbnail:
      "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=1200&q=80",
    videoUrl: "https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ",
    embedType: "youtube",
    featured: false,
    tags: ["Technical Support", "Helpdesk", "ITSM", "SLAs"],
    keyTakeaways: [
      "Tiered escalation matrices that prevent ticket bottlenecks between L1 and L3.",
      "Real-time CSAT tracking and quality assurance calibration protocols.",
      "Multi-tenant knowledge base management for accelerated agent ramp-up.",
    ],
    transcriptSummary:
      "Amit details the staffing, tooling, and governance mechanisms that enable Legacy's support engineers to maintain a 15-minute response time SLA across global enterprise software accounts.",
  },
  {
    id: "vid-5",
    slug: "digital-marketing-attribution-b2b-enterprise",
    title: "Digital Marketing & Performance Attribution for B2B Leaders",
    description:
      "Learn how our digital team pairs content authority, search visibility, and paid demand generation to drive tangible pipeline rather than vanity impressions.",
    category: "Webinars & Tech",
    publishedAt: "2024-07-22",
    duration: "21:05",
    author: "Elena Rossi",
    authorRole: "Director of Digital Strategy & Growth",
    thumbnail:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80",
    videoUrl: leadGenVideo,
    embedType: "local",
    featured: false,
    tags: ["Digital Marketing", "Demand Generation", "B2B Attribution", "Content Strategy"],
    keyTakeaways: [
      "Connecting digital touchpoints to CRM revenue milestones with closed-loop attribution.",
      "Technical SEO foundations that drove 180% organic search traffic growth in 6 months.",
      "Creating high-intent LinkedIn paid campaigns that convert enterprise buyers.",
    ],
    transcriptSummary:
      "Elena breaks down omnichannel marketing attribution, illustrating how enterprise brands link top-of-funnel content creation to qualified sales pipeline and recurring contracts.",
  },
  {
    id: "vid-6",
    slug: "knowledge-process-outsourcing-for-legal-finance",
    title: "Knowledge Process Outsourcing: Research Excellence for Legal & Finance",
    description:
      "How specialized research analysts handle deep secondary research, case documentation, and market intelligence for investment firms and legal counsel.",
    category: "Webinars & Tech",
    publishedAt: "2024-06-30",
    duration: "15:50",
    author: "Raj Kapoor & Butch Sweeder",
    authorRole: "Executive Leadership Team",
    thumbnail:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1200&q=80",
    videoUrl: "https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ",
    embedType: "youtube",
    featured: false,
    tags: ["KPO", "Market Intelligence", "Legal Research", "Financial Analysis"],
    keyTakeaways: [
      "Research methodologies that verify primary and secondary market data.",
      "Strict data confidentiality and ISO-compliant information security standards.",
      "Customizable deliverable templates for executive boards and investment committees.",
    ],
    transcriptSummary:
      "A strategic conversation examining how high-touch KPO operations empower tier-1 financial and legal firms to offload labor-intensive analytical legwork without sacrificing quality.",
  },
];

export function getVideos(): VideoItem[] {
  return videos;
}

export function getVideoBySlug(slug: string): VideoItem | undefined {
  return videos.find((v) => v.slug === slug);
}

export function getVideoCategories(): string[] {
  return [
    "All",
    "Client Success",
    "Executive Perspective",
    "Operational Excellence",
    "Webinars & Tech",
  ];
}

export function getRelatedVideos(currentSlug: string, count = 3): VideoItem[] {
  return videos.filter((v) => v.slug !== currentSlug).slice(0, count);
}

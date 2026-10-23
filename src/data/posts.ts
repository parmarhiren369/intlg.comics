export type PostItem = {
  id: string;
  slug: string;
  title: string;
  content: string[];
  category: "Announcements" | "Client Wins" | "Culture & Talent" | "Industry Trends" | "Operations";
  publishedAt: string;
  timestampFormatted: string;
  author: {
    name: string;
    role: string;
    avatar: string;
    verified?: boolean;
  };
  mediaType: "none" | "image" | "link";
  mediaUrl?: string;
  mediaAlt?: string;
  linkPreview?: {
    title: string;
    description: string;
    url: string;
    domain: string;
    image?: string;
  };
  tags: string[];
};

export const posts: PostItem[] = [
  {
    id: "post-1",
    slug: "celebrating-20-years-of-outsourcing-excellence",
    title: "Reflecting on 20 Years of Global Outsourcing Excellence",
    content: [
      "Two decades ago, we founded Legacy Digitronics with a singular vision: to bring engineering rigor and absolute reliability to business process outsourcing and global talent acquisition.",
      "Today, we are immensely proud to support over 150 enterprise partners across 18 specialized industrial sectors. To our extraordinary global team, our visionary clients, and our long-standing partners across the United States, Europe, and Asia — thank you for walking this journey with us.",
      "Here's to the next chapter of innovation, AI-enabled delivery, and relentless dedication to quality.",
    ],
    category: "Announcements",
    publishedAt: "2024-10-21T09:30:00Z",
    timestampFormatted: "2 days ago",
    author: {
      name: "Raj Kapoor",
      role: "Managing Director, Legacy Digitronics",
      avatar:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=200&q=80",
      verified: true,
    },
    mediaType: "image",
    mediaUrl:
      "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=1200&q=80",
    mediaAlt: "Legacy 20 Year Anniversary Global Team Celebration",
    tags: ["Milestone", "CompanyAnniversary", "GlobalWorkforce", "EnterpriseOutsourcing"],
  },
  {
    id: "post-2",
    slug: "enterprise-client-scales-support-pod-record-csat",
    title: "Client Milestone: Scaling 24/7 Tier-2 Technical Helpdesk to 99.4% CSAT",
    content: [
      "Congratulations to our Technical Support Practice on completing another stellar quarter for our enterprise SaaS partner in the FinTech infrastructure space.",
      "Over the past 6 months, our dedicated 24-member Tier-2 engineering pod resolved more than 38,000 mission-critical support tickets with an average first-response time of 8.2 minutes and a record 99.4% CSAT rating.",
      "When domain expertise and structured playbooks align, technical support transitions from an operational cost center to a potent client retention engine.",
    ],
    category: "Client Wins",
    publishedAt: "2024-10-17T14:15:00Z",
    timestampFormatted: "6 days ago",
    author: {
      name: "Amit Patel",
      role: "Head of Global Support Services",
      avatar:
        "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=200&q=80",
      verified: true,
    },
    mediaType: "link",
    linkPreview: {
      title: "FinTech Infrastructure Case Study: 24/7 SLA Engineering",
      description:
        "How follow-the-sun support desks eliminate critical ticket backlogs and uphold strict multi-tenant financial service SLAs.",
      url: "https://legacydigitronics.com/services",
      domain: "legacydigitronics.com",
      image:
        "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=800&q=80",
    },
    tags: ["ClientWins", "FinTech", "CustomerSupport", "SLAExcellence"],
  },
  {
    id: "post-3",
    slug: "talent-acquisition-trends-q4-2024",
    title: "Q4 Talent Outlook: Why Specialized Niche Roles Require Dedicated Talent Pods",
    content: [
      "A quick observation from our recruitment delivery leads this week: generic job boards are generating 3x more incoming volume than last year, yet qualified shortlists for specialized engineering, battery storage, and cybersecurity roles are 40% harder to assemble through inbound applications alone.",
      "The answer isn't posting to more boards—it's precision boolean mapping and proactive headhunting. High-performing organizations are treating niche talent acquisition with the same account-based rigor traditionally reserved for enterprise sales.",
    ],
    category: "Culture & Talent",
    publishedAt: "2024-10-12T11:00:00Z",
    timestampFormatted: "Oct 12, 2024",
    author: {
      name: "Lauren Kondic",
      role: "Global Head of Talent Solutions",
      avatar:
        "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80",
      verified: true,
    },
    mediaType: "none",
    tags: ["TalentTrends", "RecruitmentStrategy", "EngineeringTalent", "WorkforcePlanning"],
  },
  {
    id: "post-4",
    slug: "iso-27001-recertification-zero-trust-workstations",
    title: "Security Update: Successful ISO 27001 Recertification & Zero-Trust Expansion",
    content: [
      "We are delighted to report the flawless completion of our annual ISO/IEC 27001:2022 surveillance audit across our global facilities and remote virtual operations with zero major non-conformities.",
      "In tandem with the recertification, our InfoSec and Infrastructure engineering groups completed the rollout of next-generation hardware-enforced virtual desktop infrastructure across all delivery clusters.",
      "Security and client data integrity will forever remain non-negotiable foundations of Legacy's service architecture.",
    ],
    category: "Operations",
    publishedAt: "2024-10-04T16:20:00Z",
    timestampFormatted: "Oct 4, 2024",
    author: {
      name: "Vikram Mehta",
      role: "VP of Enterprise Technology & Security",
      avatar:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80",
      verified: true,
    },
    mediaType: "image",
    mediaUrl:
      "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=1200&q=80",
    mediaAlt: "ISO 27001 Security Recertification Dashboard",
    tags: ["ISO27001", "InfoSec", "ZeroTrust", "EnterpriseSecurity"],
  },
  {
    id: "post-5",
    slug: "ai-assisted-outreach-research-insights",
    title: "Balancing AI Speed with Human Research Validation in B2B Lead Gen",
    content: [
      "Everyone in sales tech is talking about automated AI outreach agents. But here's what the data is showing us across our 50+ active outbound client campaigns:",
      "100% automated AI outreach generates high spam flags and swift domain blacklists. However, AI used as an intelligence multiplier—where LLMs parse quarterly filings and executive press releases, and human senior researchers review and polish each customized hook—delivers a 34% increase in executive meeting conversions.",
      "The winning formula is not 'AI vs. Human'—it is 'Empowered Human Researchers Augmented by AI'.",
    ],
    category: "Industry Trends",
    publishedAt: "2024-09-26T10:45:00Z",
    timestampFormatted: "Sep 26, 2024",
    author: {
      name: "Butch Sweeder",
      role: "Chief Operating Officer",
      avatar:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80",
      verified: true,
    },
    mediaType: "none",
    tags: ["AIStrategy", "LeadGeneration", "SalesOperations", "HumanInTheLoop"],
  },
  {
    id: "post-6",
    slug: "welcoming-new-cohort-of-research-associates",
    title: "Welcoming 45 New Global Research & Sourcing Associates to Legacy",
    content: [
      "A warm welcome to the 45 brilliant associates who completed our rigorous 6-week Legacy Sourcing & Data Excellence Academy this Friday!",
      "Their training encompassed complex boolean search syntax, GDPR and data ethics, ATS workflow governance, and multi-channel account-based research across engineering, healthcare, and financial verticals.",
      "Watching the passion and hunger of the next generation of knowledge analysts fuels our dedication to continuous learning and career mobility.",
    ],
    category: "Culture & Talent",
    publishedAt: "2024-09-15T08:00:00Z",
    timestampFormatted: "Sep 15, 2024",
    author: {
      name: "Raj Kapoor",
      role: "Managing Director, Legacy Digitronics",
      avatar:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=200&q=80",
      verified: true,
    },
    mediaType: "image",
    mediaUrl:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80",
    mediaAlt: "Graduation Cohort of Legacy Research Associates",
    tags: ["LegacyAcademy", "CareerGrowth", "PeopleFirst", "TeamExcellence"],
  },
];

export function getPosts(): PostItem[] {
  return posts;
}

export function getPostBySlug(slug: string): PostItem | undefined {
  return posts.find((p) => p.slug === slug);
}

export function getPostCategories(): string[] {
  return [
    "All",
    "Announcements",
    "Client Wins",
    "Culture & Talent",
    "Industry Trends",
    "Operations",
  ];
}

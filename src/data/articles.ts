export type ArticleSection = {
  heading?: string;
  subheading?: string;
  paragraphs: string[];
  quote?: {
    text: string;
    author: string;
    role?: string;
  };
  list?: {
    title?: string;
    items: string[];
  };
  callout?: {
    title: string;
    text: string;
  };
  image?: {
    url: string;
    alt: string;
    caption?: string;
  };
};

export type Article = {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  category:
    | "Talent Acquisition"
    | "Business Operations"
    | "Technology & AI"
    | "Market Intelligence"
    | "Leadership";
  publishedAt: string;
  readingTime: string;
  coverImage: string;
  featured?: boolean;
  author: {
    name: string;
    role: string;
    avatar: string;
  };
  tags: string[];
  seo: {
    metaTitle: string;
    metaDescription: string;
    keywords: string[];
  };
  sections: ArticleSection[];
};

export const articles: Article[] = [
  {
    id: "art-1",
    slug: "modern-rpo-playbook-scaling-engineering-talent",
    title: "The Modern RPO Playbook: Scaling Specialized Engineering Teams Globally",
    excerpt:
      "How top-tier enterprise organizations leverage embedded Recruitment Process Outsourcing (RPO) to overcome localized talent shortages, reduce hiring cycles, and scale high-demand engineering squads.",
    category: "Talent Acquisition",
    publishedAt: "2024-10-18",
    readingTime: "7 min read",
    coverImage:
      "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80",
    featured: true,
    author: {
      name: "Lauren Kondic",
      role: "Global Head of Talent Solutions",
      avatar:
        "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80",
    },
    tags: ["RPO", "Engineering Recruitment", "Global Workforce", "Talent Strategy"],
    seo: {
      metaTitle: "The Modern RPO Playbook — Scaling Engineering Teams | Legacy",
      metaDescription:
        "Learn how enterprise RPO frameworks enable organizations to hire specialized engineers 40% faster while maintaining strict quality benchmarks.",
      keywords: [
        "RPO playbook",
        "engineering recruitment",
        "technical outsourcing",
        "talent scaling",
      ],
    },
    sections: [
      {
        heading: "The Shift from Transactional Staffing to Embedded Talent Partnerships",
        paragraphs: [
          "For over two decades, enterprise talent acquisition teams have relied on conventional agency staffing models to plug immediate hiring gaps. While viable for single urgent requisitions, this piecemeal approach creates fragmented candidate experiences, uncontrolled recruitment spend, and inconsistent technical vetting.",
          "Today's engineering leaders are shifting toward embedded Recruitment Process Outsourcing (RPO). Unlike third-party recruiters juggling dozens of competing accounts, an embedded RPO team operates inside the client's ATS, adheres to client cultural rubrics, and represents the client's employer brand natively.",
        ],
        quote: {
          text: "When recruitment partners integrate natively into your engineering leadership cadence, hiring velocity ceases to be a bottleneck and becomes a strategic advantage.",
          author: "Raj Kapoor",
          role: "Managing Director, Legacy Digitronics",
        },
      },
      {
        heading: "Core Architectural Pillars of an Enterprise RPO Pod",
        paragraphs: [
          "A successful global engineering RPO delivery model is structured around synchronized specialist roles rather than generalist headhunters. At Legacy, an enterprise pod is composed of three interconnected tiers:",
        ],
        list: {
          title: "The Three-Tier Delivery Model",
          items: [
            "Dedicated Talent Researchers: Mapping passive candidates, conducting boolean intelligence, and analyzing competitor org charts across 15+ time zones.",
            "Technical Sourcing Specialists: Conducting initial code competency screens, behavioral assessments, and salary alignment before submitting profiles.",
            "Account Delivery Directors: Partnering directly with client VP of Engineering and HR leads on workforce forecasting, diversity metrics, and SLA compliance.",
          ],
        },
      },
      {
        heading: "Overcoming the Cross-Border Compliance Hurdle",
        paragraphs: [
          "Hiring across international frontiers brings intricate compliance realities, including localized labor codes, IP protection agreements, and statutory benefit structures. When establishing follow-the-sun technical centers, organizations must ensure clear legal containment.",
          "Our enterprise agreements and international operational footprint guarantee full governance over intellectual property assignment, NDA enforcement, and multi-jurisdictional compliance from day one.",
        ],
        callout: {
          title: "Measurable Impact in Practice",
          text: "In a recent 12-month deployment for a leading cloud communications enterprise, an embedded Legacy RPO pod decreased average technical time-to-fill from 68 days to 29 days, while cutting cost-per-hire by 44%.",
        },
      },
      {
        heading: "The Verdict: Agility Through Continuous Talent Infrastructure",
        paragraphs: [
          "As product development roadmaps accelerate, the capacity to spool up or contract recruitment resources with fluctuating hiring needs is indispensable. RPO delivers the institutional muscle memory of an internal recruitment department with the elasticity of an on-demand partner.",
        ],
      },
    ],
  },
  {
    id: "art-2",
    slug: "bpo-cost-optimization-without-sacrificing-quality",
    title: "Optimizing BPO Cost Structures Without Sacrificing Service Quality",
    excerpt:
      "Strategic guidance on modernizing business process outsourcing by pairing human expertise with automated workflow governance to preserve precision while lowering operational expenditures.",
    category: "Business Operations",
    publishedAt: "2024-10-05",
    readingTime: "5 min read",
    coverImage:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80",
    featured: false,
    author: {
      name: "Butch Sweeder",
      role: "Chief Operating Officer",
      avatar:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80",
    },
    tags: ["BPO", "Cost Optimization", "Quality Assurance", "Process Governance"],
    seo: {
      metaTitle: "BPO Cost Optimization Without Sacrificing Quality | Legacy",
      metaDescription:
        "Discover how enterprise leaders achieve sustainable 30-50% cost reductions in back-office operations through process standard operating procedures.",
      keywords: [
        "BPO cost optimization",
        "business process outsourcing",
        "operational excellence",
        "back office efficiency",
      ],
    },
    sections: [
      {
        heading: "Debunking the False Trade-off Between Cost and Quality",
        paragraphs: [
          "Historically, procurement executives viewed outsourcing strictly as labor arbitrage: finding lower hourly wages regardless of error rates or downstream remediation costs. This legacy perspective invariably backfires, leading to operational friction and customer dissatisfaction.",
          "Modern enterprise BPO fundamentally changes this equation. By combining standardized SOP documentation, real-time quality calibration, and automated anomaly detection, high-performing outsourcing programs consistently surpass internal departmental accuracy benchmarks.",
        ],
      },
      {
        heading: "Key Operational Levers for Sustainable Efficiency",
        paragraphs: [
          "To achieve lasting reductions in cost-to-serve without diluting customer experience or regulatory compliance, organizations must concentrate on three fundamental levers:",
        ],
        list: {
          title: "Three Foundations of High-Value BPO",
          items: [
            "Standard Operating Procedure (SOP) Digitization: Translating tribal workplace knowledge into clear, step-by-step digital execution manuals.",
            "Continuous Dual-Audit Quality Control: Subjecting sample batches to independent peer review and statistical process control checks.",
            "Tiered Human-in-the-Loop Automation: Using robotic process automation for repetitive data parsing while preserving experienced human analysts for exception handling.",
          ],
        },
      },
      {
        heading: "Summary",
        paragraphs: [
          "Sustainable BPO savings do not stem from cutting corners; they arise from eliminating process waste, minimizing rework, and giving front-line operators robust tools and transparent metrics.",
        ],
      },
    ],
  },
  {
    id: "art-3",
    slug: "enterprise-data-security-in-global-outsourcing",
    title: "Enterprise Data Security & ISO Compliance in Global Outsourcing",
    excerpt:
      "A comprehensive guide for CISOs and compliance leaders on evaluating offshore vendor security postures, zero-trust workstation protocols, and regulatory adherence.",
    category: "Technology & AI",
    publishedAt: "2024-09-22",
    readingTime: "8 min read",
    coverImage:
      "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=1200&q=80",
    featured: false,
    author: {
      name: "Vikram Mehta",
      role: "VP of Enterprise Technology & Security",
      avatar:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80",
    },
    tags: ["Cybersecurity", "Data Privacy", "ISO 27001", "Compliance"],
    seo: {
      metaTitle: "Enterprise Data Security in Global Outsourcing | Legacy",
      metaDescription:
        "CISO guidelines on zero-trust workstation environments, ISO 27001 compliance, and data governance in business process outsourcing.",
      keywords: [
        "outsourcing data security",
        "ISO 27001",
        "BPO compliance",
        "zero trust workforce",
      ],
    },
    sections: [
      {
        heading: "The Security Imperative in Modern Enterprise Services",
        paragraphs: [
          "As regulatory frameworks like GDPR, HIPAA, and CCPA tighten, enterprise organizations cannot afford data leakage or vendor security vulnerabilities. Third-party outsourcing partners must adhere to the same zero-trust defenses expected of internal IT systems.",
          "Securing global delivery centers requires defense-in-depth across three interconnected spheres: physical facility access, workstation virtualization, and rigorous employee background verification.",
        ],
        quote: {
          text: "In global operations, security is not a compliance checkmark—it is the bedrock upon which institutional trust is earned and preserved.",
          author: "Vikram Mehta",
          role: "VP of Enterprise Technology, Legacy Digitronics",
        },
      },
      {
        heading: "Zero-Trust Virtual Desktops and Clean-Room Workstations",
        paragraphs: [
          "Legacy Digitronics employs strict virtual desktop infrastructure (VDI) environments. No customer proprietary data ever resides locally on endpoint hardware. Clipboard sharing, local USB drive mounting, and external file transfers are systematically restricted by enterprise policy.",
        ],
        list: {
          title: "Workstation Security Standards",
          items: [
            "Restricted Clean-Room Floor Policies: Mobile devices, cameras, and external recording equipment prohibited in delivery bays.",
            "Encrypted Ephemeral Sessions: Virtual desktops scrubbed and reset between user sessions.",
            "Continuous Behavior Auditing: Real-time logging of session activity with automated alerts for anomalous access patterns.",
            "Multi-Factor Biometric and Hardware Key Authentication: Mandatory 2FA for all system and network entry points.",
          ],
        },
      },
    ],
  },
  {
    id: "art-4",
    slug: "the-death-of-cold-calling-intent-driven-lead-generation",
    title: "The Death of Cold Calling: Intent-Driven B2B Lead Generation",
    excerpt:
      "Why traditional cold calling dials have collapsed in ROI and how high-performing revenue teams pivot to account intelligence, multi-channel touches, and buying-signal timing.",
    category: "Market Intelligence",
    publishedAt: "2024-09-08",
    readingTime: "6 min read",
    coverImage:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80",
    featured: false,
    author: {
      name: "Raj Kapoor",
      role: "Managing Director",
      avatar:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=200&q=80",
    },
    tags: ["Lead Generation", "B2B Sales", "Intent Data", "Pipeline Strategy"],
    seo: {
      metaTitle: "Intent-Driven B2B Lead Generation Playbook | Legacy",
      metaDescription:
        "Learn how intent data and research-backed outreach generate 3x higher meeting conversion rates compared to legacy cold outreach.",
      keywords: [
        "intent lead generation",
        "B2B outbound sales",
        "pipeline development",
        "account based marketing",
      ],
    },
    sections: [
      {
        heading: "Why Cold Outreach Volume Has Collapsed in Efficiency",
        paragraphs: [
          "For years, sales development leaders played a pure numbers game: send 10,000 automated emails, dial 100 phone numbers a day, and hope for a 1% response rate. In 2024, modern spam filters, mobile spam shields, and executive fatigue have rendered spray-and-pray tactics virtually obsolete.",
          "Decision-makers do not respond to generic pitches. When an executive opens an email or takes a brief call, they immediately evaluate whether the sender understands their specific strategic mandate, company tech stack, and current quarterly friction points.",
        ],
      },
      {
        heading: "The Intent-First Lead Generation Architecture",
        paragraphs: [
          "Rather than blasting broad lists, our outbound specialists track concrete commercial intent signals before composing a single custom outreach cadence.",
        ],
        list: {
          title: "Signals That Trigger High-Conversion Outreach",
          items: [
            "Executive Leadership Transitions: New VP of Operations or CTO appointments typically reset vendor portfolios within 90 days.",
            "Funding and Expansion Milestones: Capital deployment and expansion into new geographic regions.",
            "Technology Stack Alterations: Adoption of new cloud, ERP, or CRM software necessitating implementation support.",
            "Content Engagement Spikes: Surge in third-party research consumption around specific technical pain points.",
          ],
        },
      },
    ],
  },
  {
    id: "art-5",
    slug: "engineering-24-7-customer-support-slas",
    title: "Engineering 24/7 Technical Support: How to Build World-Class SLAs",
    excerpt:
      "A strategic breakdown of multi-tiered helpdesk operations, follow-the-sun engineer handoffs, and CSAT metrics that guarantee 99.9% uptime compliance.",
    category: "Technology & AI",
    publishedAt: "2024-08-25",
    readingTime: "6 min read",
    coverImage:
      "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=1200&q=80",
    featured: false,
    author: {
      name: "Amit Patel",
      role: "Head of Support Engineering",
      avatar:
        "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=200&q=80",
    },
    tags: ["Technical Support", "Customer Support", "SLAs", "Helpdesk"],
    seo: {
      metaTitle: "Engineering 24/7 Technical Support SLAs | Legacy",
      metaDescription:
        "How global software and infrastructure companies design follow-the-sun technical support teams with sub-15 minute response times.",
      keywords: [
        "technical support SLAs",
        "24/7 helpdesk",
        "customer support engineering",
        "L1 L3 support",
      ],
    },
    sections: [
      {
        heading: "The Mission-Critical Nature of Follow-The-Sun Support",
        paragraphs: [
          "For enterprise B2B SaaS and infrastructure providers, an unresolved Sev-1 outage or degraded database response during non-business hours can cost hundreds of thousands of dollars and trigger catastrophic SLA penalty clauses.",
          "True 24/7 technical support requires disciplined shift handoffs, standardized diagnostic runbooks, and synchronized incident war rooms across global centers.",
        ],
      },
    ],
  },
  {
    id: "art-6",
    slug: "executive-leadership-building-agile-hybrid-organizations",
    title: "The Resilient Enterprise: Leadership Strategies for Hybrid Workforce Agility",
    excerpt:
      "Reflections on two decades of organizational design, cultural cohesion across distributed delivery hubs, and leading high-performance cross-functional teams.",
    category: "Leadership",
    publishedAt: "2024-08-10",
    readingTime: "5 min read",
    coverImage:
      "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=1200&q=80",
    featured: false,
    author: {
      name: "Raj Kapoor",
      role: "Managing Director",
      avatar:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=200&q=80",
    },
    tags: ["Leadership", "Hybrid Work", "Organizational Culture", "Global Management"],
    seo: {
      metaTitle: "Leadership Strategies for Hybrid Workforce Agility | Legacy",
      metaDescription:
        "Insights from 20 years of leading cross-border teams across the US, Europe, and Asia on fostering accountability and excellence.",
      keywords: [
        "hybrid workforce",
        "leadership strategy",
        "organizational agility",
        "remote enterprise",
      ],
    },
    sections: [
      {
        heading: "Culture Is What Happens When No One Is Watching",
        paragraphs: [
          "When organizations expand across continents and time zones, physical presence cannot be the barometer of productivity. High-trust cultures substitute rigid oversight with crystal-clear output expectations and radical transparency.",
        ],
      },
    ],
  },
];

export function getArticles(): Article[] {
  return articles;
}

export function getArticleBySlug(slug: string): Article | undefined {
  return articles.find((a) => a.slug === slug);
}

export function getArticleCategories(): string[] {
  return [
    "All",
    "Talent Acquisition",
    "Business Operations",
    "Technology & AI",
    "Market Intelligence",
    "Leadership",
  ];
}

export function getRelatedArticles(currentSlug: string, count = 3): Article[] {
  return articles.filter((a) => a.slug !== currentSlug).slice(0, count);
}

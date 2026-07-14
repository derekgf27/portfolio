export type ProjectScreenshot = {
  label: string;
  variant: "dashboard" | "analytics" | "mobile" | "admin" | "scheduling";
};

export type ProjectCaseStudy = {
  slug: string;
  title: string;
  subtitle: string;
  tagline: string;
  description: string;
  longDescription: string;
  tech: string[];
  accomplishments: string[];
  liveUrl?: string;
  githubUrl?: string;
  accent: string;
  metrics?: { value: string; label: string }[];
  problem: string;
  solution: string;
  keyFeatures: string[];
  architecture: string;
  databaseDesign: string;
  technicalChallenges: string[];
  lessonsLearned: string[];
  futureImprovements: string[];
  screenshots: ProjectScreenshot[];
};

export const projects: ProjectCaseStudy[] = [
  {
    slug: "27outs",
    title: "27Outs",
    subtitle: "Baseball Analytics Platform",
    tagline: "Real-time analytics for coaches and analysts",
    description:
      "Real-time baseball analytics platform that transforms pitch-by-pitch game events into advanced performance insights for coaches and analysts.",
    longDescription:
      "27Outs is a data-driven baseball analytics product built to help coaching staffs move beyond box scores. The platform ingests granular game events and surfaces advanced metrics — pitch velocity trends, situational performance, and player comparisons — in dashboards designed for fast decision-making during and after games.",
    tech: ["React", "Next.js", "TypeScript", "Supabase", "PostgreSQL", "Tailwind CSS", "Vercel"],
    accomplishments: [
      "Engineered 40+ advanced baseball metrics from raw event data",
      "Designed analytics dashboards optimized for coaching workflows",
      "Built scalable data pipeline for pitch-by-pitch ingestion",
      "Delivered responsive views for sideline and office use",
    ],
    liveUrl: "https://baseball-analytics-a4jt.vercel.app/",
    githubUrl: "https://github.com/derekgf27",
    accent: "#3b82f6",
    metrics: [
      { value: "40+", label: "Advanced Metrics" },
      { value: "Real-time", label: "Event Processing" },
      { value: "Multi-view", label: "Dashboard Access" },
    ],
    problem:
      "Coaching staffs often rely on delayed, aggregated statistics that don't reflect in-game context. Pitch-by-pitch data exists but is difficult to access, interpret, and act on without dedicated analytics tooling.",
    solution:
      "27Outs centralizes game event data into a purpose-built analytics platform. Coaches can filter by situation, compare players across metrics, and identify performance patterns without exporting spreadsheets or waiting on manual reports.",
    keyFeatures: [
      "Pitch-by-pitch event ingestion and normalization",
      "Advanced metric calculations (velocity, spin, situational splits)",
      "Interactive player and team comparison dashboards",
      "Responsive layouts for desktop and tablet sideline use",
      "Export-ready reports for post-game review",
    ],
    architecture:
      "Client-server architecture with a React/Next.js frontend, API layer for metric computation, and PostgreSQL via Supabase for structured event storage. Server components and edge deployment on Vercel keep dashboard loads fast.",
    databaseDesign:
      "Relational schema organized around games, innings, at-bats, and pitch events. Indexed query paths support filtering by player, date range, and pitch type. Aggregated views pre-compute common coaching queries.",
    technicalChallenges: [
      "Normalizing heterogeneous Statcast-style event formats into a consistent schema",
      "Computing rolling metrics efficiently across large pitch datasets",
      "Balancing dashboard richness with sub-second load times on mobile networks",
    ],
    lessonsLearned: [
      "Domain-specific UX matters as much as the analytics — coaches need answers in seconds, not clicks",
      "Pre-aggregation beats on-the-fly computation for frequently accessed metrics",
      "Designing the data model around coaching questions simplifies every downstream feature",
    ],
    futureImprovements: [
      "Live game feed integration with automatic metric updates",
      "Custom report builder for scouting departments",
      "Role-based access for staff, players, and front office",
      "ML-powered pitch sequence recommendations",
    ],
    screenshots: [
      { label: "Analytics Dashboard", variant: "analytics" },
      { label: "Player Performance", variant: "dashboard" },
      { label: "Mobile View", variant: "mobile" },
      { label: "Metric Explorer", variant: "admin" },
    ],
  },
  {
    slug: "antesala",
    title: "Antesala Reservations",
    subtitle: "Restaurant Event Reservation Platform",
    tagline: "Automated event operations for hospitality teams",
    description:
      "Cloud-based reservation management platform that automates scheduling, pricing, customer management, and event operations for a high-capacity event venue.",
    longDescription:
      "Antesala Reservations is an operational platform built for a restaurant and event space managing weddings, corporate events, and large gatherings. It replaces manual quoting and spreadsheet tracking with automated pricing, real-time availability, and a centralized reservation workflow.",
    tech: ["JavaScript", "Firebase", "Firestore", "Vercel", "jsPDF"],
    accomplishments: [
      "Automated multi-tier pricing with tax, tip, and deposit calculations",
      "Built real-time reservation sync across dashboard, calendar, and analytics",
      "Designed modular food, beverage, and service configuration system",
      "Deployed isolated demo environment for portfolio and sales use",
    ],
    liveUrl: "https://antesala-reservations-demo.vercel.app/",
    githubUrl: "https://github.com/derekgf27/Antesala-Reservations",
    accent: "#10b981",
    metrics: [
      { value: "500", label: "Max Guest Capacity" },
      { value: "Real-time", label: "Pricing Engine" },
      { value: "Cloud", label: "Firebase Sync" },
    ],
    problem:
      "Event venues juggle complex pricing — food packages, beverages, taxes, deposits, and add-on services — across phone calls, emails, and spreadsheets. Errors in quotes and double-bookings create revenue loss and client frustration.",
    solution:
      "A unified reservation platform where staff configure events through guided forms, see instant price breakdowns, and manage the full lifecycle from inquiry to event day. Real-time Firestore sync keeps every view consistent.",
    keyFeatures: [
      "Dynamic pricing engine with tax, tip, and deposit rules",
      "Buffet, beverage, and entremeses configuration modals",
      "Calendar view with month navigation and event density",
      "Analytics dashboard for revenue, guest counts, and room utilization",
      "PDF export for client-facing reservation summaries",
      "Dedicated demo deployment with fictional sample data",
    ],
    architecture:
      "Single-page application with modular JavaScript classes, Firebase Firestore for persistence, and real-time listeners for live updates. Deployed on Vercel with separate production and demo environments.",
    databaseDesign:
      "Firestore collections store reservation documents with nested pricing, service selections, and client metadata. Real-time listeners propagate changes to dashboard stats, calendar, and reservation lists without manual refresh.",
    technicalChallenges: [
      "Modeling complex pricing rules (per-person buffets, flat-rate beverages, percentage taxes)",
      "Keeping UI state in sync across modals, forms, and summary views",
      "Separating demo and production data without maintaining two codebases",
    ],
    lessonsLearned: [
      "Operational software must mirror how staff actually work — not idealized workflows",
      "Pricing logic belongs in a single computation layer, not scattered across the UI",
      "Demo environments are essential for showcasing business software safely",
    ],
    futureImprovements: [
      "Customer self-service booking portal",
      "Payment integration for deposits and invoicing",
      "Staff role permissions and audit logging",
      "Email notifications and calendar sync (Google/Outlook)",
    ],
    screenshots: [
      { label: "Operations Dashboard", variant: "dashboard" },
      { label: "New Reservation", variant: "scheduling" },
      { label: "Calendar View", variant: "scheduling" },
      { label: "Analytics", variant: "analytics" },
      { label: "Mobile Layout", variant: "mobile" },
    ],
  },
  {
    slug: "it-management",
    title: "Enterprise IT Equipment Management",
    subtitle: "Asset Tracking & Lifecycle System",
    tagline: "Inventory control for enterprise IT operations",
    description:
      "Enterprise web application for tracking received equipment, managing user access, document uploads, and maintaining accurate IT asset records across departments.",
    longDescription:
      "Built during a professional IT internship, this system replaces manual asset logs with a centralized platform for receiving, assigning, and auditing enterprise equipment. It supports document attachments, user management, and searchable inventory records.",
    tech: ["ASP.NET", "VB.NET", "SQL Server", "Bootstrap"],
    accomplishments: [
      "Digitized manual equipment receiving workflows for enterprise IT",
      "Implemented role-based user management and document upload",
      "Designed relational database schema for asset lifecycle tracking",
      "Delivered admin interface for inventory search and reporting",
    ],
    githubUrl: "https://github.com/derekgf27/PHSU-Received-Equipments",
    accent: "#8b5cf6",
    metrics: [
      { value: "Enterprise", label: "Deployment Context" },
      { value: "RBAC", label: "User Management" },
      { value: "SQL Server", label: "Relational Data" },
    ],
    problem:
      "IT departments receiving hardware across multiple locations lacked a single source of truth. Paper forms and shared drives led to lost records, duplicate entries, and slow audits.",
    solution:
      "A centralized ASP.NET application where staff log received equipment, attach documentation, assign assets to users, and query inventory through a structured admin interface backed by SQL Server.",
    keyFeatures: [
      "Equipment receiving and intake forms",
      "Document upload and attachment storage",
      "User management with role-based access",
      "Searchable inventory with filtering",
      "Audit-friendly record history",
    ],
    architecture:
      "Classic three-tier ASP.NET web application with server-side rendering, SQL Server for persistence, and Bootstrap for responsive admin UI. Business logic separated from data access for maintainability.",
    databaseDesign:
      "Normalized SQL Server schema with tables for equipment, users, departments, documents, and assignment history. Foreign keys enforce referential integrity; indexes optimize common search queries.",
    technicalChallenges: [
      "Migrating paper-based workflows without disrupting daily IT operations",
      "Designing flexible document storage linked to asset records",
      "Balancing enterprise security requirements with usability for non-technical staff",
    ],
    lessonsLearned: [
      "Enterprise software adoption depends on matching existing processes, then improving them incrementally",
      "Strong database design upfront prevents costly refactors as inventory grows",
      "Admin UX clarity reduces training time and support burden",
    ],
    futureImprovements: [
      "Barcode/QR scanning for asset check-in",
      "Automated depreciation and lifecycle alerts",
      "Integration with procurement systems",
      "API layer for cross-department reporting",
    ],
    screenshots: [
      { label: "Admin Dashboard", variant: "admin" },
      { label: "Equipment Intake", variant: "dashboard" },
      { label: "User Management", variant: "admin" },
      { label: "Inventory Search", variant: "dashboard" },
    ],
  },
  {
    slug: "ponce-floor",
    title: "Ponce Floor",
    subtitle: "Floor Cleaning Services Website",
    tagline: "Custom marketing site for a Puerto Rico cleaning business",
    description:
      "Custom Spanish-first marketing website for Ponce Floors & Cleaning Services — floor restoration, commercial cleaning, and island-wide service with WhatsApp and form-based lead capture.",
    longDescription:
      "Ponce Floor is a custom business site for a Puerto Rico floor care company with 30+ years of experience. It covers services (diamond polishing, restoration, sealing), owner story, gallery, testimonials, and free-quote CTAs via Formspree and WhatsApp.",
    tech: ["HTML", "CSS", "JavaScript", "Formspree", "Font Awesome", "Vercel"],
    accomplishments: [
      "Designed and shipped a production marketing site on poncefloor.com",
      "Built Spanish-first UX with clear CTAs for quotes and WhatsApp contact",
      "Implemented service gallery, owner story, and client testimonial sections",
      "Integrated Formspree-backed contact form for lead capture",
    ],
    liveUrl: "https://www.poncefloor.com/",
    githubUrl: "https://github.com/derekgf27/PonceFloor",
    accent: "#DC143C",
    metrics: [
      { value: "Island-wide", label: "Service Coverage" },
      { value: "30+", label: "Years Experience Showcased" },
      { value: "ES", label: "Spanish-First Content" },
    ],
    problem:
      "An established floor cleaning business relied on word-of-mouth and social media without a professional web presence. Potential commercial and residential clients had no central place to review services, see results, or request quotes.",
    solution:
      "A custom responsive website that presents the brand, services, and owner story clearly in Spanish — with prominent free-consultation and WhatsApp CTAs so visitors can reach the business in one tap.",
    keyFeatures: [
      "Hero with dual CTAs (free consultation + WhatsApp)",
      "Mission, vision, and owner biography sections",
      "Floor care and commercial cleaning service listings",
      "Photo/video gallery of completed work",
      "Client testimonials from local businesses",
      "Contact form with service-type selection and Formspree delivery",
      "Mobile-responsive layout and sticky WhatsApp float button",
    ],
    architecture:
      "Static multi-section landing page (HTML/CSS/JS) with Formspree for contact submissions. Deployed to Vercel and served on a custom domain (poncefloor.com). No backend app server — marketing content and assets are static for fast loads and simple hosting.",
    databaseDesign:
      "No relational database. Lead inquiries are submitted through Formspree and delivered by email. Media assets (gallery images/videos, brand logo) are stored as static files alongside the site.",
    technicalChallenges: [
      "Balancing rich media (gallery photos/videos) with fast mobile performance",
      "Designing a Spanish-first layout that still feels premium for commercial clients",
      "Wiring reliable lead capture without maintaining a custom backend",
    ],
    lessonsLearned: [
      "Local service businesses convert when contact options match how customers already communicate — especially WhatsApp",
      "Clear service lists and social proof matter more than flashy effects on service sites",
      "Static sites with form SaaS keep ownership costs low for small business clients",
    ],
    futureImprovements: [
      "Lightbox gallery for before/after comparisons",
      "Google Maps embed for service area visibility",
      "Analytics and conversion tracking on CTAs",
      "Online quote request flow with photo upload",
    ],
    screenshots: [
      { label: "Marketing Home", variant: "dashboard" },
      { label: "Services Overview", variant: "admin" },
      { label: "Mobile Layout", variant: "mobile" },
      { label: "Contact Form", variant: "scheduling" },
    ],
  },
  {
    slug: "rir-elevate",
    title: "RIR Elevate Group",
    subtitle: "Business Consulting Website",
    tagline: "Personal brand site for a business transformation consultant",
    description:
      "Custom marketing website for RIR Elevate Group — showcasing Rafael Irizarry’s consulting services in operational excellence, business transformation, and industrial management.",
    longDescription:
      "RIR Elevate Group is a polished personal-brand site for a business consultant with 20+ years of experience. It presents specialization areas, service offerings, an ELEVATE methodology, client testimonials, media, FAQ, and a consultation request form — with bilingual EN/ES support.",
    tech: ["HTML", "CSS", "JavaScript", "EmailJS", "Vercel"],
    accomplishments: [
      "Shipped a production consulting site on rirelevategroup.com",
      "Built bilingual EN/ES content toggle for local and broader audiences",
      "Structured services, methodology, testimonials, media, and FAQ for lead conversion",
      "Integrated EmailJS consultation form with service-type selection",
    ],
    liveUrl: "https://www.rirelevategroup.com/",
    githubUrl: "https://github.com/derekgf27/RIR-Elevate-Group",
    accent: "#EAB308",
    metrics: [
      { value: "EN/ES", label: "Bilingual Toggle" },
      { value: "20+", label: "Years Experience Highlighted" },
      { value: "3", label: "Core Service Lines" },
    ],
    problem:
      "A business transformation consultant needed a professional web presence that communicated credibility, clarified service offerings, and made it easy for executives and organizations to request a consultation.",
    solution:
      "A custom dark-themed branding site that centers the consultant’s personal brand, explains the ELEVATE process, and funnels visitors toward LinkedIn, social channels, or an EmailJS-powered consultation form.",
    keyFeatures: [
      "Hero with dual CTAs (Consult Now / View Services)",
      "About section with credentials and cross-industry experience",
      "Specialization and consulting service cards",
      "Three-step ELEVATE methodology",
      "Testimonial carousel and media section",
      "FAQ accordion and bilingual EN/ES toggle",
      "Consultation form via EmailJS",
    ],
    architecture:
      "Static HTML/CSS/JS marketing site deployed on Vercel with a custom domain. Client-side EmailJS handles consultation submissions without a custom backend.",
    databaseDesign:
      "No relational database. Consultation leads are sent through EmailJS; site content and brand assets are stored as static files.",
    technicalChallenges: [
      "Supporting bilingual EN/ES content without duplicating page structure",
      "Keeping a premium dark brand look readable across mobile breakpoints",
      "Wiring reliable consultation email delivery with EmailJS",
    ],
    lessonsLearned: [
      "Consulting sites convert when credibility signals and a clear “request consult” path are obvious",
      "Bilingual toggles are essential for Puerto Rico–based professional services with mixed audiences",
      "Static sites plus form SaaS keep ownership simple for personal-brand clients",
    ],
    futureImprovements: [
      "Calendar booking integration for consultations",
      "Expanded media gallery with talks and workshop content",
      "Analytics on CTA and form conversion rates",
      "CMS-backed content updates for testimonials and FAQs",
    ],
    screenshots: [
      { label: "Brand Home", variant: "dashboard" },
      { label: "Services", variant: "admin" },
      { label: "Mobile Layout", variant: "mobile" },
      { label: "Consultation Form", variant: "scheduling" },
    ],
  },
];

export function getProjectBySlug(slug: string): ProjectCaseStudy | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getProjectSlugs(): string[] {
  return projects.map((p) => p.slug);
}

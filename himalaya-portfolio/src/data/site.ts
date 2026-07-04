/**
 * ============================================================================
 *  SITE DATA — the single source of truth for everything personal.
 * ----------------------------------------------------------------------------
 *  Everything visitors read comes from this file. To make the site yours,
 *  edit the values below. No component code needs to change.
 *
 *  Nothing here is invented about you — placeholders are marked. Replace the
 *  copy in your own words, add real links, and fill in real project/blog items
 *  as they exist. Anything you leave empty simply won't render.
 * ============================================================================
 */

export const profile = {
  name: "Parbat Adhikari", // ← your display name
  fullName: "Parbat", // ← used in the footer + structured data
  // A short role line shown under the hero name. Keep it calm and specific.
  role: "Technology · Business · Continuous Learning",
  location: "Kathmandu, Nepal",
  // The one-line thesis of who you are. This is the hero headline.
  headline: "Building at the meeting point of technology, business and human learning.",
  // 2–3 sentence introduction. Written plainly, no exaggeration.
  intro:
    "I'm a technology professional from Nepal working across business, artificial intelligence, research and education. I care about clear thinking, patient craftsmanship, and using technology to serve people — and I'm learning something new every week.",
  // A short personal philosophy line used on the home page.
  philosophy:
    "Move with the patience of the mountains and the curiosity of a beginner.",
  email: "adhikariparbat96@gmail.comS.com", // ← your email
  // Optional portrait. Drop an image in /public and set the path, e.g. "/portrait.jpg".
  // Leave as null to show an elegant monogram placeholder instead.
  portrait: "/portrait.jpg" as string | null,
  available: true, // shows an "available for opportunities" indicator
};

export const social = {
  github: "https://github.com/", // ← your GitHub
  linkedin: "https://linkedin.com/in/", // ← your LinkedIn
  website: "https://parbatadhikari.com.np", // ← your site / any third link
};

/** A few quiet numbers for the home page. Edit or set to [] to hide. */
export const stats: { value: number; suffix?: string; label: string }[] = [
  { value: 4, suffix: "+", label: "Professional roles" },
  { value: 10, suffix: "+", label: "Skill domains" },
  { value: 5, label: "Study destinations counseled" },
  { value: 100, suffix: "%", label: "Still a beginner at heart" },
];

/** ------------------------------------------------------------------ ABOUT */
export const about = {
  lead:
    "A short story of how business, technology and a love of learning came together.",
  // Each block is a small chapter. Keep them tight — elegant, not exhaustive.
  chapters: [
    {
      title: "Where it began",
      body:
        "I grew up curious — about how things work, how people decide, and how ideas travel. That curiosity pulled me toward technology and business at the same time, and I've never wanted to choose between them.",
    },
    {
      title: "Learning as a practice",
      body:
        "I treat learning as a daily discipline rather than an event. AI, programming, finance, research methods — I pick up what a problem needs and stay a patient beginner where I don't yet know enough.",
    },
    {
      title: "Working with people",
      body:
        "Across marketing, counseling, documentation and translation, the common thread is people: understanding what they need and communicating clearly across languages and cultures.",
    },
    {
      title: "Where it's going",
      body:
        "I'm building toward work that blends technology, research and enterprise — and that represents Nepal thoughtfully in the wider technology world.",
    },
  ],
  values: [
    { label: "Clarity", note: "Say the true thing simply." },
    { label: "Patience", note: "Compounding beats rushing." },
    { label: "Curiosity", note: "Stay a beginner on purpose." },
    { label: "Integrity", note: "Represent things as they are." },
  ],
};

/** ------------------------------------------------------------- EXPERIENCE */
export type Experience = {
  role: string;
  org: string;
  period: string;
  summary: string;
  responsibilities: string[];
  skills: string[];
  technologies?: string[];
};

export const experiences: Experience[] = [
  {
    role: "Marketing Head",
    org: "Neek Job",
    period: "Present",
    summary:
      "Leading marketing direction — brand, messaging and growth — for a job-focused platform.",
    responsibilities: [
      "Set marketing strategy and brand voice",
      "Plan and coordinate campaigns across channels",
      "Translate product value into clear messaging",
    ],
    skills: ["Marketing strategy", "Brand", "Communication", "Leadership"],
    technologies: ["Analytics", "Content tools"],
  },
  {
    role: "Education Counselor",
    org: "Study-abroad consultancy",
    period: "Recent",
    summary:
      "Guiding students toward higher education abroad with honest, well-researched advice.",
    responsibilities: [
      "Advise students on destinations, courses and admissions",
      "Support application and documentation processes",
      "Explain options clearly without over-promising outcomes",
    ],
    skills: ["Counseling", "Research", "Communication", "Empathy"],
  },
  {
    role: "Documentation Officer",
    org: "—",
    period: "Recent",
    summary:
      "Owning accuracy and clarity across official documents and records.",
    responsibilities: [
      "Prepare, review and organize documentation",
      "Ensure accuracy, consistency and compliance",
      "Maintain reliable, well-structured records",
    ],
    skills: ["Documentation", "Attention to detail", "Process"],
  },
  {
    role: "Translator",
    org: "—",
    period: "Recent",
    summary:
      "Bridging languages so meaning — not just words — carries across.",
    responsibilities: [
      "Translate between languages with care for tone and intent",
      "Preserve nuance and cultural context",
      "Support clear cross-language communication",
    ],
    skills: ["Translation", "Languages", "Cultural fluency"],
  },
];

/** ----------------------------------------------------------------- SKILLS */
export type SkillCategory = { name: string; items: string[] };

export const skillCategories: SkillCategory[] = [
  { name: "Business", items: ["Strategy", "Operations", "Growth", "Product thinking"] },
  { name: "Technology", items: ["Software fundamentals", "Web", "Systems", "Tooling"] },
  { name: "Artificial Intelligence", items: ["Machine learning", "Applied AI", "Prompt design", "Research reading"] },
  { name: "Programming", items: ["Python", "TypeScript", "SQL", "Git"] },
  { name: "Research", items: ["Literature review", "Analysis", "Synthesis", "Documentation"] },
  { name: "Leadership", items: ["Team direction", "Mentoring", "Decision-making"] },
  { name: "Marketing", items: ["Brand", "Content", "Messaging", "Campaigns"] },
  { name: "Finance", items: ["Fundamentals", "Analysis", "Planning"] },
  { name: "Communication", items: ["Writing", "Presentation", "Facilitation"] },
  { name: "Languages", items: ["Nepali", "English", "Translation"] },
];

/** --------------------------------------------------------------- PROJECTS */
export type Project = {
  title: string;
  description: string;
  technologies: string[];
  github?: string;
  demo?: string;
  featured?: boolean;
  status?: string; // e.g. "In progress", "Concept"
};

export const projects: Project[] = [
  {
    title: "Project coming soon",
    description:
      "A placeholder for your first showcased project. Replace this with a real build — what it does, who it's for, and what you learned.",
    technologies: ["React", "TypeScript"],
    featured: true,
    status: "Planned",
  },
  {
    title: "Research prototype",
    description:
      "Space for an applied AI or research experiment. Describe the question, the approach, and the outcome in a few honest sentences.",
    technologies: ["Python", "ML"],
    status: "Concept",
  },
  {
    title: "Business tool",
    description:
      "Room for a practical tool that solved a real problem for a team or a client.",
    technologies: ["TypeScript", "Data"],
    status: "Concept",
  },
];

/** -------------------------------------------------------------- RESOURCES */
export type Resource = { title: string; note: string; url?: string };
export type ResourceGroup = { category: string; items: Resource[] };

export const resourceGroups: ResourceGroup[] = [
  {
    category: "Books",
    items: [{ title: "Add a book that shaped you", note: "One line on why it matters." }],
  },
  {
    category: "AI Tools",
    items: [{ title: "A tool you rely on", note: "What you use it for." }],
  },
  {
    category: "Learning Platforms",
    items: [{ title: "Where you learn", note: "Courses, docs, communities." }],
  },
  {
    category: "Business Tools",
    items: [{ title: "A tool for the work", note: "Planning, analytics, ops." }],
  },
  {
    category: "Research Papers",
    items: [{ title: "A paper worth reading", note: "The idea in one line." }],
  },
  {
    category: "Programming Resources",
    items: [{ title: "A reference you return to", note: "Docs, guides, repos." }],
  },
];

/** ------------------------------------------------------------------- BLOG */
export type Post = {
  title: string;
  category: string;
  excerpt: string;
  date?: string;
  readingTime?: string;
  url?: string;
};

export const blogCategories = [
  "Artificial Intelligence",
  "Technology",
  "Business",
  "Finance",
  "Research",
  "Career",
  "Leadership",
  "Productivity",
];

export const posts: Post[] = [
  {
    title: "Your first article, on the way",
    category: "Technology",
    excerpt:
      "A placeholder for your first piece. Write about something you learned recently — the clearer and more specific, the better.",
    date: "Soon",
    readingTime: "— min",
  },
  {
    title: "Notes from learning AI in public",
    category: "Artificial Intelligence",
    excerpt:
      "Space for reflections on studying machine learning — what clicked, what didn't, and what you'd tell a beginner.",
    date: "Soon",
    readingTime: "— min",
  },
  {
    title: "What counseling taught me about decisions",
    category: "Career",
    excerpt:
      "A draft idea: how helping students choose a path reshaped how you think about big decisions.",
    date: "Soon",
    readingTime: "— min",
  },
];

/** --------------------------------------------------------------- NAV/META */
export const nav = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Experience", to: "/experience" },
  { label: "Skills", to: "/skills" },
  { label: "Projects", to: "/projects" },
  { label: "Resources", to: "/resources" },
  { label: "Blog", to: "/blog" },
  { label: "Contact", to: "/contact" },
];

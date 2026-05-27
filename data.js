// ─────────────────────────────────────────────────────
//  data.js — Single source of truth for all content
//  Edit this file to update your portfolio.
// ─────────────────────────────────────────────────────

export const siteConfig = {
  title: "Charvi Batra",
  tagline: "Advocate & Legal Professional",
  description:
    "Dedicated legal professional specializing in litigation, legal research, and constitutional law.",
  logo: "CB",
};

export const profile = {
  name: "Charvi Batra",
  firstName: "Charvi",
  photo: "/profile.png",
  email: "Charvibatra15@gmail.com",
  phone: "798705009",
  location: "Haryana, India",
  heroTagline: "I believe justice is the foundation of society. My legal practice is rooted in rigorous research, precision drafting, and unwavering advocacy.",
  bio: `Recent university graduate pursuing B.A. LL.B. (Hons.) at Amity University Haryana. I am passionate about constitutional law, litigation, and legal research. My goal is to make my mark in the legal profession through thoughtful advocacy and scholarly writing. I would love to work with firms and organisations that value diligence, analytical thinking, and a commitment to justice. Reach out if you think we can create meaningful legal impact together.`,
  shortBio:
    "Law student with a passion for constitutional law, legal research, and advocacy. Published author and active moot court participant.",
  socialHandle: "@charvibatra",
};

export const education = [
  {
    degree: "B.A. LL.B. (Hons.)",
    institution: "Amity University, Haryana",
    year: "2022 – 2027",
    detail: "4th Year",
    icon: "scale",
  },
  {
    degree: "Class XII — 79%",
    institution: "Kendriya Vidyalaya No.1",
    year: "",
    detail: "CBSE Board",
    icon: "book",
  },
  {
    degree: "Class X — 60%",
    institution: "Kendriya Vidyalaya No.1",
    year: "",
    detail: "CBSE Board",
    icon: "award",
  },
];

export const experience = [
  {
    role: "Legal Intern",
    organization: "Juris Consultus — Legal & Finance Consultant Firm",
    period: "June 2025 – July 2025",
    type: "On-site",
    highlights: [
      "Researched extensively on matters related to the Real Estate Regulatory Authority (RERA).",
      "Drafted a reply to divorce notice under the Special Marriage Act.",
      "Prepared arguments, arguments in advance, and a counter reply filed under RERA and before the Consumer Forum.",
      "Drafted legal arguments in a case involving dishonour of cheque under Section 138 of the Negotiable Instruments Act.",
      "Gained hands-on experience in maintaining and updating the advocate's diary.",
      "Attended and assisted court visits for filing, obtaining certified copies, and clerical procedures.",
    ],
  },
  {
    role: "Legal Research Intern",
    organization: "The Legal Quorum",
    period: "Oct 2024 – Oct 2024",
    type: "Remote",
    highlights: [
      "Conducted in-depth legal research and analytical writing on constitutional and comparative law issues.",
      "Produced original, well-referenced content supported by legal reasoning, case law, and statutory interpretation.",
      "Drafted legal documents adhering to real-world procedural frameworks.",
      "Strengthened skills in doctrinal research, policy analysis, and critical evaluation of judicial decisions.",
    ],
  },
  {
    role: "Legal Intern — Adv. Shailender Mohan",
    organization: "Punjab & Haryana High Court",
    period: "June 2024 – July 2024",
    type: "On-site",
    highlights: [
      "Interned under an advocate handling criminal matters, including POCSO Act and sexual offence cases.",
      "Observed trial proceedings, charge framing, and bail arguments in sessions courts.",
      "Assisted in organizing case files and preparing summaries of FIRs, witness statements, and charge sheets.",
      "Conducted preliminary research on provisions of IPC, CrPC, and POCSO Act.",
    ],
  },
  {
    role: "Legal Intern",
    organization: "District and Sessions Court, Chhindwara",
    period: "July 2023 – July 2023",
    type: "On-site",
    highlights: [
      "Observed court proceedings in civil and criminal matters.",
      "Assisted in case file organization and brief preparation.",
      "Conducted basic legal research and noted key observations from ongoing trials.",
    ],
  },
];

export const practiceFocuses = [
  {
    title: "Corporate Law",
    description: "Company incorporation, regulatory compliance, corporate governance, mergers & acquisitions, and business structuring under the Companies Act, 2013.",
    icon: "corporate",
  },
  {
    title: "Legal Research",
    description: "Doctrinal research, case law analysis, statutory interpretation, and policy evaluation with published academic articles.",
    icon: "research",
  },
  {
    title: "Drafting",
    description: "Petitions, case briefs, legal notices, counter-replies, and arguments for tribunals and consumer forums.",
    icon: "draft",
  },
];

export const skills = [
  "Legal Research & Analysis",
  "Drafting (Petitions, Case Briefs)",
  "MS Office Suite",
  "Case Law Interpretation",
  "Time Management",
  "Team Collaboration",
  "Communication",
  "Client Interaction",
];

export const publications = [
  {
    id: "federalism",
    title: "Federalism and Power Tussles Between Centre and State",
    excerpt:
      "An in-depth analysis of the constitutional framework governing Centre–State relations in India, exploring the balance of power, legislative conflicts, and landmark judicial interpretations.",
    date: "2024",
    category: "Constitutional Law",
    readTime: "12 min read",
    tag: "Article",
    externalUrl: "https://thelegalquorum.com/federalism-and-the-power-tussle-between-center-and-state/",
    publishedOn: "The Legal Quorum",
    content: `
      <p>India's federal structure, as enshrined in the Constitution, envisions a unique distribution of power between the Centre and the States. While Article 1 describes India as a "Union of States," the Constitution grants significant asymmetry in favour of the Central government.</p>
      <p>This article examines the historical evolution of Centre–State tensions, analysing key provisions under Articles 245–263, the three legislative lists under the Seventh Schedule, and the doctrine of repugnancy under Article 254.</p>
      <p>Through landmark cases such as <em>S.R. Bommai v. Union of India</em> and the recommendations of the Sarkaria Commission and Punchhi Commission, the piece traces how Indian federalism has evolved from a quasi-federal design to one increasingly shaped by coalition politics, judicial activism, and fiscal federalism reforms like the GST regime.</p>
      <p>The article concludes with a critical assessment of whether India's federal design adequately addresses the aspirations of regional diversity while maintaining national unity.</p>
    `,
  },
  {
    id: "trademark",
    title: "Understanding Trademark Under Intellectual Property",
    excerpt:
      "A comprehensive overview of trademark law in India, covering the Trademarks Act of 1999, the registration process, categories of marks, and contemporary challenges.",
    date: "2024",
    category: "Intellectual Property",
    readTime: "10 min read",
    tag: "Article",
    externalUrl: "https://thelegalquorum.com/understanding-trademarks-under-intellectual-property/",
    publishedOn: "The Legal Quorum",
    content: `
      <p>Trademarks serve as the cornerstone of brand identity and consumer protection. Under the Trade Marks Act, 1999, India provides a robust framework for the registration, protection, and enforcement of marks that distinguish the goods and services of one enterprise from another.</p>
      <p>This article explores the types of trademarks—word marks, device marks, shape marks, sound marks, and colour marks—alongside the classification system under the NICE Classification.</p>
      <p>It further examines the registration procedure from application to opposition, the concept of "well-known trademarks" under Section 11, and the remedies available for infringement and passing off.</p>
      <p>With the rise of e-commerce and digital branding, the piece also discusses emerging challenges around domain name disputes, social media handles as trademarks, and the intersection of trademark law with artificial intelligence–generated branding.</p>
    `,
  },
  {
    id: "ir-coelho",
    title: "I.R. Coelho vs. State of Tamil Nadu (2007)",
    excerpt:
      "A detailed case summary of the landmark nine-judge bench decision that reshaped the understanding of constitutional amendments and the basic structure doctrine.",
    date: "2024",
    category: "Case Analysis",
    readTime: "8 min read",
    tag: "Case Summary",
    externalUrl: "https://thelegalquorum.com/i-r-coelho-vs-state-of-tamil-nadu-2007/",
    publishedOn: "The Legal Quorum",
    content: `
      <p>In <em>I.R. Coelho v. State of Tamil Nadu</em> (2007), a nine-judge bench of the Supreme Court of India delivered a watershed judgment that fundamentally altered the landscape of constitutional law regarding the Ninth Schedule.</p>
      <p>The Court held that any law placed in the Ninth Schedule after 24 April 1973—the date of the Kesavananda Bharati judgment—is amenable to judicial review if it violates the basic structure of the Constitution, particularly the fundamental rights guaranteed under Articles 14, 19, and 21.</p>
      <p>This summary traces the facts, issues, arguments of both parties, the Court's reasoning, and the far-reaching implications of this decision on parliamentary sovereignty, the amending power under Article 368, and the protection of fundamental rights.</p>
      <p>The judgment stands as a critical affirmation that constitutional immunity cannot be a shield for legislation that destroys the core values of the Constitution.</p>
    `,
  },
];

export const mootCourt = [
  { event: "Amity Intra Moot Court Competition", year: "2022", role: "Participant" },
  { event: "Amity National Moot Court Competition", year: "2023", role: "Organiser" },
  { event: "Amity 1st International Moot Court Competition", year: "2023", role: "Organiser" },
  { event: "Amity 2nd International Moot Court Competition", year: "2024", role: "Organiser" },
  { event: "Amity Intra Moot Competition", year: "2024", role: "Organiser" },
];

export const activities = [
  "Speaker — Legal Awareness Camp, Amity University Haryana (2023, 2024)",
  "Volunteer — Sanitary Drive, Hifazat Project, Teens of God",
  "Military Camp — Amity University Haryana (2022)",
  "Member — Udaan Club (2023)",
  "Plantation Drive — Amity University Haryana (2024)",
  "Member — Organising Committee, Law Society, Amity University (2022 – Present)",
];

export const testimonials = [
  {
    quote: "Charvi's legal research is thorough and precise. Her drafting skills and attention to procedural detail made her an invaluable asset during her internship.",
    headline: "Thorough and precise",
    name: "Juris Consultus",
    role: "Legal & Finance Consultant Firm",
  },
  {
    quote: "A dedicated intern with strong analytical abilities. Charvi demonstrated excellent understanding of criminal law provisions and courtroom procedures.",
    headline: "Strong analytical abilities",
    name: "Punjab & Haryana High Court",
    role: "Under Adv. Shailender Mohan",
  },
  {
    quote: "Her commitment to legal research and scholarly writing sets her apart. Charvi produced well-referenced, original content during her time with us.",
    headline: "Commitment to excellence",
    name: "The Legal Quorum",
    role: "Legal Research Platform",
  },
];

export const documents = [
  {
    title: "Curriculum Vitae",
    description: "Full resume with academic and professional details.",
    file: "/docs/Charvi_Batra_CV.pdf",
    icon: "cv",
  },
  {
    title: "Federalism Article — Full PDF",
    description: "Published article on Centre–State power dynamics.",
    file: "/docs/federalism_article.pdf",
    icon: "article",
  },
  {
    title: "Trademark Article — Full PDF",
    description: "Published article on Indian Trademark law.",
    file: "/docs/trademark_article.pdf",
    icon: "article",
  },
  {
    title: "I.R. Coelho Case Summary",
    description: "Detailed case analysis — Ninth Schedule and Basic Structure.",
    file: "/docs/ir_coelho_summary.pdf",
    icon: "case",
  },
];

export const navigation = [
  { label: "Home", href: "/" },
  { label: "Articles", href: "/articles" },
  { label: "Documents", href: "/documents" },
  { label: "Contact", href: "/contact" },
];

// Central content for Regis and Savoy Corporate Services LLP.
// Source of truth: content/Coporate services-content.docx (client-supplied).

export const brand = {
  // Wordmark rendered as two stacked lines.
  nameLine1: "Regis and Savoy",
  nameLine2: "Corporate Services LLP",
  name: "Regis and Savoy",
  legalName: "Regis and Savoy Corporate Services LLP",
  parent: "Regis and Savoy Capital",
  tagline: "An Integrated Corporate Ecosystem",
  established: "Corporate Services",
};

// ── Home hero ────────────────────────────────────────────────────────────────
export const hero = {
  headlineLine1: "A corporate advisory practice",
  headlineLine2: "built on trust",
  sub: "Integrated Legal, Governance, Compliance and Strategic Advisory Solutions for Businesses.",
  lead:
    "At Regis and Savoy Corporate Services LLP, we help businesses navigate complex legal, regulatory, and strategic challenges through practical, business-focused advisory services. From business formation and corporate restructuring to governance, compliance, private equity transactions, risk management, and dispute resolution, we provide integrated solutions that enable businesses to grow with confidence.",
  ctas: [
    { label: "Explore Our Services", href: "/services" },
    { label: "Contact Our Experts", href: "/contact" },
  ],
};

// Kept for backward compatibility with older imports.
export const heroLead = hero.lead;

// Words that animate in on either side of the terrarium on hover.
// Each maps to a discipline balanced within the corporate ecosystem.
export const heroAnnotations = {
  left: ["Governance", "Compliance", "Legal Advisory"],
  right: ["Risk Management", "Structuring", "Strategic Advisory"],
  footnote: ["Integrated", "Balanced", "Sustainable"],
};

// ── Why Regis and Savoy — the Terrarium Framework ────────────────────────────
export const whyTerrarium = {
  eyebrow: "Why Regis and Savoy",
  title:
    "The Terrarium Framework: An Integrated Approach to Corporate Advisory",
  intro:
    "Just as a terrarium flourishes through the careful balance of every element within its ecosystem, successful businesses thrive when governance, legal, compliance, risk management, and strategic decision-making work in harmony. At Regis and Savoy Corporate Services LLP, this philosophy forms the foundation of our advisory approach—bringing together interconnected disciplines to help businesses build resilient, compliant, and investment-ready organisations.",
  setsApartTitle: "What Sets Us Apart",
  setsApart: [
    {
      title: "Integrated Advisory Ecosystem",
      desc: "Bringing together legal, governance, compliance, risk management, and strategic advisory within a single, coordinated framework.",
    },
    {
      title: "Commercially Focused Advice",
      desc: "Delivering practical, business-oriented solutions that align legal obligations with commercial objectives and decision-making.",
    },
    {
      title: "Private Equity and Transaction Capability",
      desc: "Advising on investment structuring, due diligence, transaction documentation, regulatory approvals, and exit strategies across the investment lifecycle.",
    },
    {
      title: "Lifecycle Business Advisory",
      desc: "Supporting businesses through every stage of their journey, from incorporation and expansion to restructuring, dispute resolution, and business continuity.",
    },
    {
      title: "Governance-Driven Growth",
      desc: "Helping organisations strengthen governance frameworks, manage regulatory obligations, and build resilient, investment-ready businesses.",
    },
  ],
};

// ── Home: Our Services intro ─────────────────────────────────────────────────
export const servicesIntro = {
  eyebrow: "Our Services",
  title: "Comprehensive Corporate Advisory Services",
  intro:
    "Whether you are establishing a new business, expanding operations, attracting investment, or strengthening governance, our services are designed to support your business at every stage.",
};

export type ServiceDetail = {
  name: string;
  desc: string;
};

export type Service = {
  id: string;
  title: string;
  summary: string;
  items: string[];
  details?: ServiceDetail[];
};

export const services: Service[] = [
  {
    id: "business-structuring",
    title: "Business Structuring & Corporate Formation",
    summary:
      "Building a robust foundation is crucial for sustainable success. Our expertise in business structuring ensures your organization is optimally designed for growth, flexibility, and legal compliance from the outset.",
    items: [
      "Company Incorporation",
      "Corporate Structuring & Restructuring",
      "Mergers & Acquisitions",
      "Foreign Investment Advisory",
    ],
    details: [
      {
        name: "Company Incorporation",
        desc: "We streamline the registration process, guiding you through all legal requirements, documentation, and filings to establish your business efficiently and compliantly—whether starting fresh or expanding.",
      },
      {
        name: "Corporate Structuring & Restructuring",
        desc: "As your enterprise evolves, so should its structure. We craft customized strategies—mergers, acquisitions, consolidations, or reorganizations—that enhance efficiency, fiscal health, and legal robustness.",
      },
      {
        name: "Mergers & Acquisitions",
        desc: "Our team manages the entire M&A process—from thorough due diligence and drafting agreements to negotiations and integration—helping you realize strategic synergies and growth.",
      },
      {
        name: "Foreign Investment Advisory",
        desc: "Expert guidance on foreign exchange laws, RBI regulations, and cross-border investment processes to facilitate seamless, compliant international transactions and investments.",
      },
    ],
  },
  {
    id: "governance-compliance",
    title: "Governance & Regulatory Compliance",
    summary:
      "Strong governance practices and adherence to regulations are vital for maintaining stakeholder trust and ensuring sustainable growth. Our services help embed these principles into your organizational fabric.",
    items: [
      "Corporate Governance",
      "Regulatory Compliance",
      "FEMA & RBI Advisory",
      "CSR & POSH Compliance",
    ],
    details: [
      {
        name: "Corporate Governance",
        desc: "We assist in establishing transparent governance frameworks, developing policies, and implementing practices that promote accountability, ethical decision-making, and stakeholder confidence.",
      },
      {
        name: "Regulatory Compliance",
        desc: "Ongoing compliance management, statutory filings, and legal health checks to ensure your business remains aligned with current legal standards, avoiding penalties and reputational risks.",
      },
      {
        name: "FEMA & RBI Advisory",
        desc: "Our specialists help you navigate foreign exchange laws, RBI policies, and related regulations—cross-border remittances, licensing, or compliance—efficiently and legally.",
      },
      {
        name: "CSR & POSH Compliance",
        desc: "We design impactful CSR initiatives and ensure compliance with the Prevention of Sexual Harassment (POSH) Act, fostering a safe, inclusive, and socially responsible workplace.",
      },
    ],
  },
  {
    id: "legal-advisory",
    title: "Legal Advisory & Contract Management",
    summary:
      "Operate with confidence, knowing your legal foundations are solid. Our legal advisory services are tailored to support your core business activities and safeguard your interests.",
    items: [
      "Commercial Contracts",
      "Employment & Labour Advisory",
      "Intellectual Property",
      "Corporate Litigation Support",
    ],
    details: [
      {
        name: "Commercial Contracts",
        desc: "We draft, review, and negotiate a wide array of agreements—supplier contracts, service agreements, licensing, distribution, and partnerships—ensuring clarity, enforceability, and alignment with your objectives.",
      },
      {
        name: "Employment & Labour Advisory",
        desc: "Guidance on employment agreements, HR policies, compliance with labour regulations, and dispute resolution to foster a fair and legally compliant environment.",
      },
      {
        name: "Intellectual Property",
        desc: "Protect your innovations, trademarks, copyrights, and patents through strategic registration and enforcement—safeguarding your intangible assets and preventing infringement.",
      },
      {
        name: "Corporate Litigation Support",
        desc: "When disputes arise, our litigators provide swift, effective resolution strategies—negotiation, arbitration, or litigation—minimizing disruptions and protecting your rights.",
      },
    ],
  },
  {
    id: "risk-strategic-advisory",
    title: "Risk Management & Strategic Advisory",
    summary:
      "Proactively managing risks is essential for resilience and long-term success. Our advisory services help you identify, assess, and mitigate potential threats before they impact your business.",
    items: [
      "Internal & Legal Audits",
      "Due Diligence",
      "Enterprise Risk Management",
      "Forensic & Fraud Risk Advisory",
      "Business Continuity Planning",
    ],
    details: [
      {
        name: "Internal & Legal Audits",
        desc: "Comprehensive reviews of your internal controls, compliance frameworks, and legal processes to identify vulnerabilities and recommend improvements.",
      },
      {
        name: "Due Diligence",
        desc: "Whether engaging in mergers, acquisitions, or investments, our detailed due diligence uncovers legal, financial, and operational risks for informed decision-making.",
      },
      {
        name: "Enterprise Risk Management",
        desc: "Tailored risk management strategies to anticipate and mitigate operational, legal, and strategic threats, keeping your business adaptable and resilient.",
      },
      {
        name: "Forensic & Fraud Risk Advisory",
        desc: "Our forensic experts investigate financial irregularities, internal fraud, and misconduct, delivering actionable insights to prevent future risks and protect your assets.",
      },
      {
        name: "Business Continuity Planning",
        desc: "We create comprehensive continuity plans—including disaster recovery and crisis management protocols—so your organization can withstand unforeseen events and resume operations swiftly.",
      },
    ],
  },
  {
    id: "private-equity",
    title: "Private Equity Advisory",
    summary:
      "Navigating investments with confidence. We support investors, private equity firms, promoters, and businesses through every stage of the investment lifecycle—from structuring investments and legal due diligence to transaction documentation, regulatory liaison, and exit strategies.",
    items: [
      "Foreign Investment Advisory",
      "Corporate & Securities Law Advisory",
      "Legal Due Diligence",
      "Investment Structuring",
      "Transaction Documentation",
      "Regulatory Liaison & Compliance",
      "Negotiation Support",
      "Exit Strategy Advisory",
    ],
    details: [
      {
        name: "Investment Structuring",
        desc: "Structuring transactions that are commercially sound, legally robust, and aligned with the strategic objectives of all stakeholders.",
      },
      {
        name: "Legal Due Diligence",
        desc: "Comprehensive legal due diligence uncovering the risks and obligations that shape a confident investment decision.",
      },
      {
        name: "Transaction Documentation",
        desc: "Drafting and negotiating the definitive documentation that governs investment, from term sheets to closing.",
      },
      {
        name: "Exit Strategy Advisory",
        desc: "Facilitating seamless execution from investment to exit—secondary sales, buy-backs, and strategic transitions.",
      },
    ],
  },
  {
    id: "specialized-dispute-audit",
    title: "Foreign Audit, Litigation & Insolvency",
    summary:
      "Specialised representation across cross-border audit, corporate dispute resolution, insolvency proceedings, and labour & employment law—protecting your business interests, reputation, and long-term objectives.",
    items: [
      "Foreign Audit",
      "Corporate Litigation & Dispute Resolution",
      "Insolvency & Bankruptcy Litigation",
      "Labour & Employment Law",
    ],
    details: [
      {
        name: "Foreign Audit",
        desc: "Comprehensive audit solutions for cross-border financial reporting—enhancing transparency, strengthening internal controls, and ensuring adherence to local and international compliance standards.",
      },
      {
        name: "Corporate Litigation & Dispute Resolution",
        desc: "Expert representation across contractual disputes, shareholder issues, and regulatory challenges—in courts, arbitration, and alternative dispute resolution forums.",
      },
      {
        name: "Insolvency & Bankruptcy Litigation",
        desc: "Counsel to secured and unsecured creditors and corporate debtors under the Insolvency and Bankruptcy Code, 2016—enforcing security interests and defending insolvency actions.",
      },
      {
        name: "Labour & Employment Law",
        desc: "Employee relations, HR policies and documentation, compensation and benefits, HR due diligence, employee transfers, and dispute resolution.",
      },
    ],
  },
];

// Flat marquee of specialisms.
export const specialisms: string[] = services.flatMap((s) => s.items);

// Business lifecycle stages the LLP supports.
export const lifecycle = [
  { n: "01", title: "Incorporation", note: "Formation, structuring and set-up." },
  { n: "02", title: "Governance", note: "Frameworks, boards and compliance." },
  { n: "03", title: "Growth", note: "Contracts, capital and expansion." },
  { n: "04", title: "Restructuring", note: "M&A, reorganisation and strategy." },
  { n: "05", title: "Assurance", note: "Audit, diligence and risk oversight." },
];

// ── About us ─────────────────────────────────────────────────────────────────
export const about = {
  title: "Trusted Advisors for Every Stage of Your Business Journey",
  paragraphs: [
    "Businesses today operate in an increasingly dynamic regulatory and commercial environment. Navigating this landscape requires more than legal advice—it requires practical insight, strategic thinking, and an integrated approach.",
    "At Regis and Savoy Corporate Services LLP, we combine expertise in corporate law, governance, compliance, risk management, and strategic advisory to help businesses build resilient, compliant, and growth-oriented organisations. Our multidisciplinary approach enables us to support clients through critical business decisions while safeguarding their legal and commercial interests.",
    "We work with entrepreneurs, family-owned businesses, corporates, investors, and growing enterprises across diverse sectors, delivering solutions that are practical, commercially focused, and aligned with long-term business objectives. By understanding each client's unique challenges and aspirations, we develop advisory strategies that address immediate priorities while laying the foundation for sustainable growth.",
  ],
  whyChooseTitle: "Why Businesses Choose Regis and Savoy",
  whyChoose: [
    {
      title: "Integrated Corporate Advisory",
      body: "Legal, governance, compliance, risk and strategy brought together within a single coordinated framework.",
    },
    {
      title: "Business-First Perspective",
      body: "Practical, commercially focused advice that aligns legal obligations with business objectives.",
    },
    {
      title: "Experienced Across the Business Lifecycle",
      body: "Support from incorporation and expansion through restructuring, dispute resolution and continuity.",
    },
    {
      title: "Technology-Driven Delivery",
      body: "Efficient, transparent delivery powered by modern tools and disciplined processes.",
    },
    {
      title: "Trusted Long-Term Partnerships",
      body: "Relationships built to last, grounded in discretion, stewardship and candour.",
    },
  ],
};

// ── Regis and Savoy Capital ──────────────────────────────────────────────────
export const capital = {
  eyebrow: "Regis and Savoy Capital",
  title: "Beyond Corporate Advisory. A Broader Advisory Platform.",
  intro: [
    "While Regis and Savoy Corporate Services LLP focus on legal, governance, compliance, risk management, and strategic advisory, Regis and Savoy Capital extend our ecosystem by providing independent wealth management and family office solutions to entrepreneurs, business owners, professionals, and families.",
    "Together, our two organisations offer complementary capabilities—supporting clients not only in building and strengthening their businesses but also in preserving, growing, and transitioning wealth across generations.",
  ],
  aboutTitle: "About Regis and Savoy Capital",
  belief:
    "The world measures wealth by how much you have. We begin by asking what it's for.",
  aboutBody: [
    "Regis and Savoy Capital is an independent, owner-led Investment Management and Multi-Family Office. Combining decades of institutional experience with the continuity, accessibility and personal commitment of an owner-led firm, we partner with entrepreneurs, business owners, professionals and multi-generational families to preserve wealth, simplify complexity and provide thoughtful guidance through every stage of their financial journey.",
    "Our role extends beyond investment advice. We help families navigate important decisions with independence, perspective and long-term stewardship—so wealth can continue to serve the people it was created for.",
  ],
  glance: [
    "Independent & 100% Owner-Led",
    "94 Years of Collective Leadership Experience",
    "Over a Decade of Trusted Family Stewardship",
    "Relationships Built to Last",
  ],
  services: [
    {
      title: "Wealth Management",
      desc: "Independent investment guidance tailored to individual financial goals, risk tolerance, liquidity requirements, and long-term objectives through disciplined portfolio construction and ongoing oversight.",
    },
    {
      title: "Private Equity",
      desc: "Access to carefully evaluated private market opportunities, supported by rigorous due diligence, disciplined opportunity assessment, and continuous monitoring throughout the investment lifecycle.",
    },
    {
      title: "Family Office",
      desc: "Coordinated oversight of family, business, and financial affairs through a unified framework of governance, succession planning, professional coordination, and long-term wealth stewardship.",
    },
    {
      title: "Legacy and Impact",
      desc: "Supporting families in creating enduring value through philanthropy, responsible investing, family governance, estate planning, and succession strategies.",
    },
  ],
  complementaryTitle: "A Complementary Relationship",
  complementaryBody:
    "Regis and Savoy Corporate Services LLP and Regis and Savoy Capital operate as independent businesses with complementary areas of expertise. While Corporate Services LLP assists organisations with legal, regulatory, governance, compliance, and strategic advisory, Regis and Savoy Capital focuses on wealth management, private equity, family office, and legacy planning. Together, they provide clients with access to a broader advisory ecosystem—bringing together corporate expertise and wealth stewardship to support businesses, entrepreneurs, and families through every stage of their journey.",
  quote: "Building, preserving, and transitioning wealth across generations.",
  cta: { label: "Visit Regis and Savoy Capital", href: "#" },
};

// Used by the home "The Firm" intro band.
export const stewardship = about.paragraphs[1];

// ── Navigation ───────────────────────────────────────────────────────────────
export const nav = [
  { label: "About Us", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Capital", href: "/capital" },
  { label: "Contact Us", href: "/contact" },
];

// ── Contact ──────────────────────────────────────────────────────────────────
export const contact = {
  email: "advisory@regisandsavoy.com",
  title: "Let's Build Your Business on a Strong Foundation",
  intro:
    "Whether you are launching a new venture, restructuring your organisation, navigating regulatory requirements, or planning your next investment, our team is ready to support your business with practical, strategic, and legally sound solutions.",
  cta: "Connect With Our Team",
};

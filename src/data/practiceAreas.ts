import { FileText, Gavel, Shield, Briefcase } from "lucide-react";

export interface PracticeArea {
  slug: string;
  title: string;
  shortDescription: string;
  icon: typeof FileText;
  heroDescription: string;
  overview: string[];
  whatWeHandle: string[];
  process: { step: number; title: string; description: string }[];
  faqs: { question: string; answer: string }[];
  testimonial: {
    quote: string;
    name: string;
    context: string;
  };
  metaTitle: string;
  metaDescription: string;
}

export const practiceAreas: PracticeArea[] = [
  {
    slug: "bankruptcy",
    title: "Bankruptcy Law",
    shortDescription:
      "Protect your assets and get a fresh financial start. We guide you through Chapter 7 and Chapter 13 bankruptcy with personalized attention and proven strategies.",
    icon: Shield,
    heroDescription: "Expert bankruptcy representation to help you regain financial stability.",
    overview: [
      "Filing for bankruptcy is a significant decision, but it can be the first step toward a brighter financial future. At the Law Office of Sundeep K. Mullick, we understand the stress and uncertainty that come with overwhelming debt. Our goal is to provide clear, compassionate guidance through every step of the bankruptcy process.",
      "Attorney Mullick has helped hundreds of Miami-area clients successfully navigate Chapter 7 and Chapter 13 bankruptcy proceedings. Whether you're facing foreclosure, wage garnishment, or crushing credit card debt, we'll work with you to find the best path forward.",
      "We believe in direct, honest communication. When you work with our firm, you'll have direct access to Attorney Mullick—not a paralegal or associate. Your case deserves personal attention, and that's exactly what you'll receive.",
    ],
    whatWeHandle: [
      "Chapter 7 Bankruptcy (Liquidation)",
      "Chapter 13 Bankruptcy (Reorganization)",
      "Foreclosure defense and prevention",
      "Wage garnishment relief",
      "Credit card debt elimination",
      "Medical debt discharge",
      "Auto repossession defense",
      "Creditor harassment and collections defense",
      "Debt consolidation alternatives",
      "Post-bankruptcy credit rebuilding guidance",
    ],
    process: [
      { step: 1, title: "Free Consultation", description: "We'll review your financial situation, discuss your goals, and determine the best course of action—whether that's Chapter 7, Chapter 13, or an alternative." },
      { step: 2, title: "Case Preparation", description: "We gather all necessary financial documents, complete required credit counseling, and prepare your bankruptcy petition with meticulous attention to detail." },
      { step: 3, title: "Filing & Automatic Stay", description: "Once filed, an automatic stay immediately halts most collection actions, foreclosures, and wage garnishments—giving you immediate relief." },
      { step: 4, title: "341 Meeting of Creditors", description: "Attorney Mullick will prepare you for and attend the meeting of creditors with you, ensuring you're confident and ready." },
      { step: 5, title: "Discharge & Fresh Start", description: "Upon successful completion, qualifying debts are discharged, giving you the clean financial slate you deserve." },
    ],
    faqs: [
      { question: "What is the difference between Chapter 7 and Chapter 13 bankruptcy?", answer: "Chapter 7 eliminates most unsecured debts quickly (typically 3-4 months), while Chapter 13 creates a 3-5 year repayment plan that can help you keep your home and catch up on mortgage payments. The right choice depends on your income, assets, and financial goals." },
      { question: "Will I lose my home if I file for bankruptcy?", answer: "Not necessarily. Florida has generous homestead exemptions that protect your primary residence. Chapter 13 specifically allows you to catch up on missed mortgage payments while keeping your home. We'll analyze your specific situation during your free consultation." },
      { question: "How long does bankruptcy stay on my credit report?", answer: "Chapter 7 remains on your credit report for 10 years, and Chapter 13 for 7 years. However, many clients begin rebuilding their credit immediately after discharge and see significant improvement within 1-2 years." },
      { question: "Can bankruptcy stop foreclosure?", answer: "Yes. Filing for bankruptcy triggers an automatic stay that immediately halts foreclosure proceedings. Chapter 13 can allow you to catch up on missed payments over 3-5 years while keeping your home." },
      { question: "How much does bankruptcy cost?", answer: "Costs vary based on the complexity of your case and the chapter you file. We offer transparent pricing and flexible payment arrangements. Your initial consultation is completely free, and we'll provide a clear fee estimate before you commit." },
      { question: "Will bankruptcy eliminate all my debts?", answer: "Most unsecured debts like credit cards, medical bills, and personal loans can be discharged. However, certain debts like student loans, recent taxes, child support, and alimony typically cannot be eliminated through bankruptcy." },
    ],
    testimonial: {
      quote: "Attorney Mullick helped me through one of the most difficult times in my life. He was honest, compassionate, and truly fought for my best interests. I'm now debt-free and rebuilding my life.",
      name: "Maria S.",
      context: "Chapter 7 Bankruptcy Client",
    },
    metaTitle: "Bankruptcy Attorney in Miami, FL — Mullick Law",
    metaDescription: "Expert bankruptcy representation in Miami. Chapter 7, 13 debt relief. Direct access to attorney. Free consultation available. Schedule now.",
  },
  {
    slug: "litigation",
    title: "Business Litigation",
    shortDescription:
      "Assertive representation in commercial disputes. From contract breaches to partnership conflicts, we protect your business interests with strategic litigation.",
    icon: Gavel,
    heroDescription: "Strategic litigation counsel to protect your business and personal interests.",
    overview: [
      "Business disputes can threaten everything you've built. Whether you're facing a breach of contract, partnership disagreement, or complex commercial conflict, you need an attorney who combines strategic thinking with aggressive advocacy.",
      "Attorney Sundeep K. Mullick brings over two decades of litigation experience to every case. We understand that litigation isn't just about legal arguments—it's about protecting your livelihood, your reputation, and your future.",
      "Our approach is results-driven. We'll thoroughly evaluate your case, develop a strategic plan, and pursue the most favorable outcome—whether that's through negotiation, mediation, or trial.",
    ],
    whatWeHandle: [
      "Breach of contract disputes",
      "Business partnership and shareholder disputes",
      "Commercial lease and real estate litigation",
      "Employment disputes",
      "Insurance coverage disputes",
      "Fraud and misrepresentation claims",
      "Collections and debt recovery",
      "Unfair business practices",
      "Non-compete and non-disclosure agreement disputes",
      "Civil appeals",
    ],
    process: [
      { step: 1, title: "Case Evaluation", description: "We'll analyze the facts, review relevant documents, and assess the strength of your position. You'll receive an honest assessment and clear strategic recommendations." },
      { step: 2, title: "Pre-Litigation Strategy", description: "Before filing suit, we explore all options including demand letters, negotiation, and mediation to resolve the dispute efficiently and cost-effectively." },
      { step: 3, title: "Filing & Discovery", description: "If litigation is necessary, we prepare and file compelling pleadings, then conduct thorough discovery to build the strongest possible case." },
      { step: 4, title: "Motions & Hearings", description: "We aggressively advocate for your position through strategic motions and court hearings, always keeping you informed of developments." },
      { step: 5, title: "Resolution", description: "Whether through settlement negotiation or trial, we pursue the best possible outcome for your case with tenacious representation." },
    ],
    faqs: [
      { question: "How long does a typical litigation case take?", answer: "Timelines vary significantly depending on complexity, court schedules, and the parties involved. Simple disputes may resolve in a few months, while complex litigation can take 1-2 years or more. We'll provide realistic timeline estimates during your initial consultation." },
      { question: "How much will litigation cost?", answer: "Litigation costs depend on the complexity and duration of your case. We provide transparent fee structures and regular billing updates so there are no surprises. We'll discuss all fee arrangements during your free consultation." },
      { question: "Should I try to settle or go to trial?", answer: "This depends on many factors including the strength of your case, potential damages, costs, and your goals. Attorney Mullick will provide honest counsel about the advantages and risks of each approach. Most cases settle before trial, but we're always prepared to go to court." },
      { question: "What is the discovery process?", answer: "Discovery is the pre-trial phase where both sides exchange information and evidence. This includes document requests, written questions (interrogatories), depositions, and expert reports. It's a critical phase that shapes the outcome of litigation." },
      { question: "Do I need to go to court?", answer: "Many business disputes are resolved through negotiation or mediation without ever going to court. However, if the other side is unreasonable, we're fully prepared to take your case to trial and advocate aggressively for your interests." },
    ],
    testimonial: {
      quote: "When a former partner tried to take advantage of our company, Attorney Mullick stepped in and handled everything professionally. His strategic approach saved us significant time and money.",
      name: "James T.",
      context: "Commercial Litigation Client",
    },
    metaTitle: "Business Litigation Attorney Miami, FL — Mullick Law",
    metaDescription: "Trusted business litigation services in Miami. Attorney Sundeep K. Mullick represents clients in complex disputes. Free consultation.",
  },
];

export const getPracticeArea = (slug: string) =>
  practiceAreas.find((pa) => pa.slug === slug);

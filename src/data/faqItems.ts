export interface FaqItem {
  question: string;
  answer: string;
}

export interface FaqCategory {
  category: string;
  items: FaqItem[];
}

export const faqCategories: FaqCategory[] = [
  {
    category: "General Questions",
    items: [
      {
        question: "Do you offer free consultations?",
        answer: "Yes, we offer a completely free initial consultation. This gives us the opportunity to understand your situation, answer your questions, and discuss potential strategies—all with no obligation.",
      },
      {
        question: "What should I bring to my first appointment?",
        answer: "Please bring any relevant documents including court papers, bills, collection letters, contracts, tax returns from the last two years, pay stubs, and a list of your debts and assets. Don't worry if you don't have everything—we'll let you know what's needed.",
      },
      {
        question: "What areas do you serve?",
        answer: "Our office is located in downtown Miami, and we serve clients throughout Miami-Dade County, Broward County, and the surrounding South Florida area.",
      },
      {
        question: "How long have you been practicing law?",
        answer: "Attorney Sundeep K. Mullick has over 20 years of experience practicing bankruptcy and litigation law in Florida. His extensive experience means you benefit from deep legal knowledge and practical courtroom skills.",
      },
      {
        question: "Are there payment plans available?",
        answer: "Yes, we understand that legal services can be a financial concern, especially during difficult times. We offer flexible payment arrangements and will discuss all options during your free consultation.",
      },
      {
        question: "Will I be working directly with the attorney?",
        answer: "Absolutely. When you hire our firm, you work directly with Attorney Sundeep K. Mullick—not associates or paralegals. You'll have direct access to your attorney throughout your case.",
      },
      {
        question: "How quickly can we schedule a meeting?",
        answer: "We strive to schedule consultations within 1-2 business days of your initial call. For urgent matters like pending foreclosure or active wage garnishment, we do our best to accommodate same-day or next-day meetings.",
      },
    ],
  },
  {
    category: "Bankruptcy Questions",
    items: [
      {
        question: "What is bankruptcy?",
        answer: "Bankruptcy is a legal process that provides individuals and businesses with relief from overwhelming debt. It's governed by federal law and can help you eliminate or restructure debts while protecting certain assets.",
      },
      {
        question: "Which chapter of bankruptcy is right for me?",
        answer: "The right chapter depends on your income, assets, debts, and goals. Chapter 7 is typically for those with limited income who want to eliminate unsecured debts. Chapter 13 is for those with regular income who want to keep assets and catch up on secured debts. We'll determine the best option during your consultation.",
      },
      {
        question: "How long does bankruptcy take?",
        answer: "Chapter 7 typically takes 3-4 months from filing to discharge. Chapter 13 involves a 3-5 year repayment plan. The process begins providing relief immediately through the automatic stay, which stops most collection actions as soon as you file.",
      },
      {
        question: "Will I lose my assets in bankruptcy?",
        answer: "Florida has some of the most generous exemptions in the country, including unlimited homestead protection for your primary residence. Most clients keep all of their property. We'll conduct a thorough analysis of your assets and applicable exemptions.",
      },
      {
        question: "How will bankruptcy affect my credit?",
        answer: "While bankruptcy does impact your credit score initially, many clients find that their credit begins improving within months of their discharge. Chapter 7 stays on your report for 10 years and Chapter 13 for 7 years, but responsible financial habits can rebuild your score significantly in 1-2 years.",
      },
    ],
  },
  {
    category: "Litigation Questions",
    items: [
      {
        question: "What is litigation?",
        answer: "Litigation refers to the process of resolving disputes through the court system. It encompasses everything from initial demand letters and filing a lawsuit through discovery, motions, trial, and potential appeals.",
      },
      {
        question: "How much do legal fees cost for litigation?",
        answer: "Litigation costs vary based on case complexity, duration, and the opposing party's approach. We provide transparent fee structures and keep you informed of costs throughout the process. Your initial consultation is free, and we'll provide a clear estimate of anticipated costs.",
      },
      {
        question: "How long do cases typically take?",
        answer: "Simple disputes may resolve in a few months through negotiation or mediation. More complex litigation can take 1-2 years or longer. We focus on achieving the best outcome as efficiently as possible, and we'll give you realistic timeline expectations from the start.",
      },
      {
        question: "Should I settle or go to trial?",
        answer: "Each case is unique. Settlement can save time and money while providing certainty, but sometimes trial is necessary to achieve a fair result. Attorney Mullick will provide honest, strategic advice based on the specific facts of your case and your goals.",
      },
      {
        question: "What is the discovery process?",
        answer: "Discovery is the pre-trial phase where both parties gather evidence and information. It includes requests for documents, written questions (interrogatories), depositions (sworn testimony), and expert reports. Effective discovery is often the key to building a winning case.",
      },
    ],
  },
];

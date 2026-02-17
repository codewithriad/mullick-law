export interface Testimonial {
  id: number;
  name: string;
  context: string;
  quote: string;
  rating: number;
}

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Maria S.",
    context: "Bankruptcy Client",
    quote:
      "Attorney Mullick helped me through one of the most difficult times in my life. He was honest, compassionate, and truly fought for my best interests. I'm now debt-free and rebuilding my life with confidence.",
    rating: 5,
  },
  {
    id: 2,
    name: "James T.",
    context: "Business Litigation Client",
    quote:
      "When a former business partner tried to take advantage of our company, Attorney Mullick stepped in immediately. His strategic approach and courtroom presence made all the difference. Highly recommended.",
    rating: 5,
  },
  {
    id: 3,
    name: "Roberto & Ana G.",
    context: "Chapter 13 Bankruptcy Clients",
    quote:
      "We were facing foreclosure and didn't know where to turn. Attorney Mullick not only saved our home but created a plan that let us get back on our feet. We're forever grateful for his guidance.",
    rating: 5,
  },
  {
    id: 4,
    name: "Patricia W.",
    context: "Debt Relief Client",
    quote:
      "From the very first consultation, I felt heard and understood. Attorney Mullick took the time to explain every option clearly and never pressured me. The entire process was smooth and professional.",
    rating: 5,
  },
];

export const caseResults = [
  {
    id: 1,
    title: "Medical Debt Discharged",
    description: "Successfully discharged over $180,000 in medical debt through Chapter 7 bankruptcy, giving our client a complete fresh start.",
    area: "Bankruptcy",
  },
  {
    id: 2,
    title: "Home Saved from Foreclosure",
    description: "Prevented foreclosure and restructured mortgage arrears through Chapter 13 plan, allowing family to keep their home.",
    area: "Bankruptcy",
  },
  {
    id: 3,
    title: "Commercial Dispute Resolved",
    description: "Won motion for summary judgment in commercial contract dispute, recovering $250,000 for our client without need for trial.",
    area: "Litigation",
  },
  {
    id: 4,
    title: "Partnership Dispute Settled",
    description: "Negotiated favorable settlement in contentious partnership dissolution, protecting our client's business interests and intellectual property.",
    area: "Litigation",
  },
];

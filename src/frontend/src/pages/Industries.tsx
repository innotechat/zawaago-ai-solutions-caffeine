import { ArrowRight, Zap } from "lucide-react";
import type { Page } from "../App";

interface Props {
  navigate: (page: Page) => void;
}

const industries = [
  {
    name: "Healthcare",
    emoji: "🏥",
    color: "from-red-400 to-pink-500",
    tagline: "AI-powered clinical intelligence",
    solutions: [
      "AI diagnostics & imaging analysis",
      "Patient chatbots & symptom checkers",
      "Medical data analytics & EHR automation",
      "Drug discovery acceleration",
      "Remote patient monitoring",
    ],
    impact: "30% faster diagnosis",
  },
  {
    name: "Retail & E-commerce",
    emoji: "🛍️",
    color: "from-orange-400 to-yellow-500",
    tagline: "Personalized shopping experiences",
    solutions: [
      "AI product recommendations",
      "Dynamic pricing optimization",
      "Inventory demand forecasting",
      "Visual search & AR try-on",
      "Customer churn prediction",
    ],
    impact: "35% revenue increase",
  },
  {
    name: "Finance & Banking",
    emoji: "💳",
    color: "from-emerald-400 to-teal-500",
    tagline: "Intelligent financial operations",
    solutions: [
      "Fraud detection & prevention",
      "Credit risk scoring models",
      "Automated compliance reporting",
      "AI-powered trading algorithms",
      "Customer financial advisory bots",
    ],
    impact: "99.2% fraud detection",
  },
  {
    name: "Education",
    emoji: "🎓",
    color: "from-blue-400 to-indigo-500",
    tagline: "Personalized learning at scale",
    solutions: [
      "Adaptive learning platforms",
      "AI tutoring assistants",
      "Automated grading & assessment",
      "Student performance analytics",
      "Course content generation",
    ],
    impact: "45% learning improvement",
  },
  {
    name: "Manufacturing",
    emoji: "🏭",
    color: "from-violet-400 to-purple-600",
    tagline: "Smart factory transformation",
    solutions: [
      "Predictive maintenance AI",
      "Quality control automation",
      "Supply chain optimization",
      "Energy consumption reduction",
      "Production planning AI",
    ],
    impact: "40% downtime reduction",
  },
  {
    name: "Logistics",
    emoji: "🚛",
    color: "from-cyan-400 to-blue-500",
    tagline: "Intelligent supply chain management",
    solutions: [
      "Route optimization algorithms",
      "Last-mile delivery AI",
      "Warehouse automation",
      "Demand sensing & forecasting",
      "Fleet management AI",
    ],
    impact: "25% fuel cost savings",
  },
  {
    name: "Real Estate",
    emoji: "🏢",
    color: "from-amber-400 to-orange-500",
    tagline: "AI-driven property intelligence",
    solutions: [
      "Property valuation models",
      "AI property search & matching",
      "Tenant screening automation",
      "Market trend prediction",
      "Smart building management",
    ],
    impact: "50% faster transactions",
  },
  {
    name: "Media & Entertainment",
    emoji: "🎬",
    color: "from-pink-400 to-rose-500",
    tagline: "Content intelligence platform",
    solutions: [
      "AI content recommendation engines",
      "Automated video editing & production",
      "Audience analytics & insights",
      "Ad targeting optimization",
      "Content moderation AI",
    ],
    impact: "3x audience engagement",
  },
  {
    name: "Government",
    emoji: "🏛️",
    color: "from-slate-400 to-gray-500",
    tagline: "Smarter public services",
    solutions: [
      "Citizen service chatbots",
      "Document processing automation",
      "Fraud detection in benefits",
      "Predictive policing insights",
      "AI-powered urban planning",
    ],
    impact: "60% service efficiency",
  },
  {
    name: "Startups",
    emoji: "🚀",
    color: "from-lime-400 to-emerald-500",
    tagline: "AI-first from day one",
    solutions: [
      "AI product development acceleration",
      "Automated customer acquisition",
      "Lean operations with AI",
      "Investor reporting automation",
      "Growth hacking with AI analytics",
    ],
    impact: "2x faster growth",
  },
];

export default function Industries({ navigate }: Props) {
  return (
    <div className="pt-20">
      <section className="py-20 section-gradient neural-bg">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
            <Zap className="w-4 h-4" /> Industry Solutions
          </div>
          <h1 className="font-display text-5xl sm:text-6xl font-bold mb-6">
            AI Solutions by <span className="gradient-text">Industry</span>
          </h1>
          <p className="text-xl text-muted-foreground">
            Specialized AI strategies and implementations tailored to the unique
            challenges of your sector.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {industries.map((industry) => (
              <button
                type="button"
                key={industry.name}
                data-ocid={`industries.${industry.name.toLowerCase().replace(/ /g, "_")}.card`}
                onClick={() => navigate("contact")}
                className="glass-card-hover rounded-2xl p-6 text-left group"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div
                    className={`w-12 h-12 rounded-xl bg-gradient-to-br ${industry.color} flex items-center justify-center text-2xl`}
                  >
                    {industry.emoji}
                  </div>
                  <div>
                    <h3 className="font-display text-lg font-bold group-hover:text-accent transition-colors">
                      {industry.name}
                    </h3>
                    <div className="text-xs text-muted-foreground">
                      {industry.tagline}
                    </div>
                  </div>
                </div>
                <ul className="space-y-1.5 mb-5">
                  {industry.solutions.slice(0, 3).map((sol) => (
                    <li
                      key={sol}
                      className="text-xs text-muted-foreground flex items-center gap-2"
                    >
                      <div className="w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
                      {sol}
                    </li>
                  ))}
                </ul>
                <div className="flex items-center justify-between">
                  <span className="px-3 py-1 rounded-full text-xs font-semibold orange-badge">
                    {industry.impact}
                  </span>
                  <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-accent transition-colors" />
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 section-gradient">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="font-display text-4xl font-bold mb-4">
            Your Industry, <span className="gradient-text">Our Expertise</span>
          </h2>
          <p className="text-muted-foreground mb-8">
            Don't see your industry? We build custom AI solutions for any
            sector. Let's discuss your unique challenges.
          </p>
          <button
            type="button"
            data-ocid="industries.contact_us.primary_button"
            onClick={() => navigate("contact")}
            className="px-8 py-4 rounded-xl font-semibold btn-primary text-white"
          >
            Discuss Your Industry
          </button>
        </div>
      </section>
    </div>
  );
}

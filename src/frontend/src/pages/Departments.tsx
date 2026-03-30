import { ArrowRight, Zap } from "lucide-react";
import type { Page } from "../App";

interface Props {
  navigate: (page: Page) => void;
}

const departments = [
  {
    name: "Marketing",
    emoji: "📣",
    color: "from-pink-500 to-rose-600",
    problem: "Low campaign ROI and manual content creation bottlenecks",
    solution: "AI personalization engine + automated content generation",
    impact: "3x conversion rate",
  },
  {
    name: "Sales",
    emoji: "💼",
    color: "from-orange-400 to-amber-500",
    problem: "Lead scoring inefficiency and missed follow-up opportunities",
    solution: "AI lead scoring, predictive sales forecasting, CRM automation",
    impact: "45% more closed deals",
  },
  {
    name: "Customer Support",
    emoji: "🎧",
    color: "from-cyan-400 to-blue-500",
    problem: "High ticket volume, slow resolution, and agent burnout",
    solution: "AI chatbots handling 80% of queries + intelligent routing",
    impact: "80% ticket automation",
  },
  {
    name: "Finance",
    emoji: "💰",
    color: "from-emerald-400 to-teal-500",
    problem: "Manual data entry, slow reporting, and fraud risks",
    solution: "Automated invoice processing + AI fraud detection + forecasting",
    impact: "70% faster reporting",
  },
  {
    name: "HR",
    emoji: "👥",
    color: "from-violet-400 to-purple-600",
    problem: "Slow hiring process and high employee turnover",
    solution: "AI resume screening + retention prediction + onboarding bots",
    impact: "65% faster hiring",
  },
  {
    name: "Operations",
    emoji: "⚙️",
    color: "from-blue-400 to-indigo-500",
    problem: "Inefficient processes, high operational costs, downtime",
    solution: "Process automation + predictive maintenance + scheduling AI",
    impact: "40% cost reduction",
  },
  {
    name: "IT",
    emoji: "💻",
    color: "from-slate-400 to-gray-600",
    problem: "Security threats, alert fatigue, and slow incident response",
    solution: "AI-powered SIEM, automated threat response, IT ops automation",
    impact: "90% faster response",
  },
  {
    name: "Legal",
    emoji: "⚖️",
    color: "from-amber-500 to-yellow-600",
    problem: "Document review bottlenecks and compliance risk",
    solution: "AI contract analysis + compliance monitoring + legal research",
    impact: "75% faster review",
  },
  {
    name: "Product Development",
    emoji: "🔬",
    color: "from-lime-400 to-green-500",
    problem: "Slow feature delivery and unclear user insights",
    solution: "AI user research analysis + automated testing + roadmap AI",
    impact: "2x faster delivery",
  },
  {
    name: "Supply Chain",
    emoji: "🔗",
    color: "from-red-400 to-orange-500",
    problem: "Demand forecasting errors and supply disruptions",
    solution:
      "ML demand forecasting + supplier risk AI + inventory optimization",
    impact: "30% fewer stockouts",
  },
];

export default function Departments({ navigate }: Props) {
  return (
    <div className="pt-20">
      <section className="py-20 section-gradient neural-bg">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
            <Zap className="w-4 h-4" /> Department AI
          </div>
          <h1 className="font-display text-5xl sm:text-6xl font-bold mb-6">
            AI for Every <span className="gradient-text">Department</span>
          </h1>
          <p className="text-xl text-muted-foreground">
            Transform how every team operates with targeted AI solutions that
            solve real business problems.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {departments.map((dept) => (
              <button
                type="button"
                key={dept.name}
                data-ocid={`departments.${dept.name.toLowerCase().replace(/ /g, "_")}.card`}
                onClick={() => navigate("contact")}
                className="glass-card-hover rounded-2xl p-6 text-left group"
              >
                <div className="flex items-center gap-3 mb-5">
                  <div
                    className={`w-12 h-12 rounded-xl bg-gradient-to-br ${dept.color} flex items-center justify-center text-2xl`}
                  >
                    {dept.emoji}
                  </div>
                  <h3 className="font-display text-lg font-bold group-hover:text-accent transition-colors">
                    {dept.name}
                  </h3>
                </div>

                <div className="space-y-3 mb-5">
                  <div>
                    <div className="text-xs font-semibold text-red-400 uppercase tracking-wider mb-1">
                      Problem
                    </div>
                    <p className="text-xs text-muted-foreground">
                      {dept.problem}
                    </p>
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-accent uppercase tracking-wider mb-1">
                      AI Solution
                    </div>
                    <p className="text-xs text-muted-foreground">
                      {dept.solution}
                    </p>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <span className="px-3 py-1 rounded-full text-xs font-bold orange-badge">
                    {dept.impact}
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
            Align AI Across{" "}
            <span className="gradient-text">Your Entire Organization</span>
          </h2>
          <p className="text-muted-foreground mb-8">
            We help you build a cohesive enterprise AI strategy that connects
            every department.
          </p>
          <button
            type="button"
            data-ocid="departments.get_strategy.primary_button"
            onClick={() => navigate("contact")}
            className="px-8 py-4 rounded-xl font-semibold btn-primary text-white"
          >
            Get Your AI Strategy
          </button>
        </div>
      </section>
    </div>
  );
}

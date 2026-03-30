import {
  ArrowRight,
  BarChart3,
  Bot,
  CheckCircle,
  Cog,
  TrendingUp,
  Users,
  Zap,
} from "lucide-react";
import type { Page } from "../App";

interface Props {
  navigate: (page: Page) => void;
}

const solutions = [
  {
    icon: Bot,
    title: "AI Customer Support",
    tagline: "Resolve 70–80% of tickets automatically",
    color: "from-cyan-400 to-blue-500",
    capabilities: [
      "AI Chatbots with NLP understanding",
      "Voice AI Agents for phone support",
      "Helpdesk automation & routing",
      "24/7 multilingual support in 50+ languages",
      "Sentiment analysis & escalation",
    ],
    example:
      "A leading e-commerce company deployed Zawaago's AI bot to handle 80% of customer tickets automatically, reducing support costs by 60% while improving CSAT scores by 35%.",
    metrics: [
      "80% ticket automation",
      "60% cost reduction",
      "35% CSAT improvement",
    ],
  },
  {
    icon: TrendingUp,
    title: "AI Marketing Solutions",
    tagline: "3x conversion with AI personalization",
    color: "from-purple-500 to-pink-500",
    capabilities: [
      "AI campaign generation & optimization",
      "Customer behavior prediction models",
      "Automated ad targeting & optimization",
      "AI content generation at scale",
      "Social media management automation",
    ],
    example:
      "A retail brand used our AI marketing engine to generate personalized email campaigns, achieving 3x conversion rates and 45% reduction in campaign creation time.",
    metrics: ["3x conversion rate", "45% faster campaigns", "2.5x ad ROAS"],
  },
  {
    icon: BarChart3,
    title: "AI Finance Automation",
    tagline: "Intelligent financial operations",
    color: "from-orange-400 to-red-500",
    capabilities: [
      "Automated invoice processing & AP/AR",
      "Financial forecasting with ML models",
      "Real-time fraud detection & alerts",
      "Risk analysis & compliance automation",
      "AI accounting assistants",
    ],
    example:
      "A fintech company implemented our AI finance suite to process invoices 10x faster and detect fraud with 99.2% accuracy, saving $2M annually.",
    metrics: [
      "10x faster processing",
      "99.2% fraud detection",
      "$2M annual savings",
    ],
  },
  {
    icon: Users,
    title: "AI HR & Workforce Intelligence",
    tagline: "Smarter hiring and workforce management",
    color: "from-emerald-400 to-teal-500",
    capabilities: [
      "Intelligent resume screening & ranking",
      "AI hiring assistants & interview bots",
      "Employee analytics & retention prediction",
      "Automated onboarding workflows",
      "HR chatbots for employee self-service",
    ],
    example:
      "A 5,000-employee enterprise reduced time-to-hire by 65% using our AI screening platform, while improving candidate quality scores by 40%.",
    metrics: [
      "65% faster hiring",
      "40% quality improvement",
      "80% HR query automation",
    ],
  },
  {
    icon: Cog,
    title: "AI Operations Automation",
    tagline: "Intelligent end-to-end operations",
    color: "from-violet-500 to-purple-600",
    capabilities: [
      "Supply chain prediction & optimization",
      "Demand forecasting with real-time data",
      "Robotic process automation (RPA+AI)",
      "Intelligent scheduling & resource planning",
      "Quality control & anomaly detection",
    ],
    example:
      "A manufacturer implemented our AI operations platform to reduce downtime by 40% through predictive maintenance and optimize inventory reducing carrying costs by 25%.",
    metrics: [
      "40% downtime reduction",
      "25% inventory savings",
      "3x faster planning",
    ],
  },
];

export default function AISolutions({ navigate }: Props) {
  return (
    <div className="pt-20">
      {/* Header */}
      <section className="py-20 section-gradient neural-bg">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
            <Zap className="w-4 h-4" /> AI Solutions
          </div>
          <h1 className="font-display text-5xl sm:text-6xl font-bold mb-6">
            <span className="gradient-text">AI Solutions</span> for Every
            Business Challenge
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            From customer support to operations, our AI capabilities transform
            every function with measurable, enterprise-grade results.
          </p>
        </div>
      </section>

      {/* Solutions */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          {solutions.map((sol, i) => (
            <div
              key={sol.title}
              className={`flex flex-col ${i % 2 === 1 ? "lg:flex-row-reverse" : "lg:flex-row"} gap-12 items-start`}
            >
              <div className="flex-1 space-y-6">
                <div
                  className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${sol.color} flex items-center justify-center`}
                >
                  <sol.icon className="w-7 h-7 text-white" />
                </div>
                <div>
                  <div className="text-accent text-sm font-medium mb-1">
                    {sol.tagline}
                  </div>
                  <h2 className="font-display text-3xl font-bold mb-4">
                    {sol.title}
                  </h2>
                </div>
                <div className="space-y-2.5">
                  {sol.capabilities.map((cap) => (
                    <div key={cap} className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-accent shrink-0" />
                      <span className="text-muted-foreground">{cap}</span>
                    </div>
                  ))}
                </div>
                <button
                  type="button"
                  data-ocid={`solution.${sol.title.toLowerCase().replace(/ /g, "_")}.primary_button`}
                  onClick={() => navigate("contact")}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl btn-primary text-white font-semibold"
                >
                  Get Started <ArrowRight className="w-4 h-4" />
                </button>
              </div>
              <div className="flex-1">
                <div className="glass-card rounded-3xl p-8">
                  <div className="text-sm font-medium text-accent mb-3 uppercase tracking-wider">
                    Case Example
                  </div>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    {sol.example}
                  </p>
                  <div className="grid grid-cols-3 gap-4">
                    {sol.metrics.map((metric) => (
                      <div
                        key={metric}
                        className="text-center p-3 rounded-xl"
                        style={{ background: "oklch(0.56 0.23 285 / 0.1)" }}
                      >
                        <div className="text-sm font-bold gradient-text-purple-cyan">
                          {metric.split(" ")[0]}
                        </div>
                        <div className="text-xs text-muted-foreground mt-1">
                          {metric.split(" ").slice(1).join(" ")}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="font-display text-4xl font-bold mb-4">
            Ready to Start Your{" "}
            <span className="gradient-text">AI Journey</span>?
          </h2>
          <p className="text-muted-foreground mb-8">
            Schedule a consultation with our AI experts and get a tailored
            strategy for your business.
          </p>
          <button
            type="button"
            data-ocid="solutions.book_consultation.primary_button"
            onClick={() => navigate("contact")}
            className="px-8 py-4 rounded-xl font-semibold btn-primary text-white"
          >
            Book Free Consultation
          </button>
        </div>
      </section>
    </div>
  );
}

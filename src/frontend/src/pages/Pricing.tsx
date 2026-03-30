import { ArrowRight, Building2, CheckCircle, Star, Zap } from "lucide-react";
import type { Page } from "../App";

interface Props {
  navigate: (page: Page) => void;
}

const plans = [
  {
    name: "Starter",
    icon: Zap,
    price: "Custom",
    period: "project-based",
    tagline: "Perfect for SMEs and pilot projects",
    features: [
      "1 AI solution implementation",
      "Up to 3 users/admins",
      "Standard integrations",
      "3-month engagement",
      "Email & chat support",
      "Basic analytics dashboard",
      "Onboarding workshop",
    ],
    cta: "Get Started",
    popular: false,
    color: "from-cyan-400 to-blue-600",
  },
  {
    name: "Growth",
    icon: Star,
    price: "Custom",
    period: "retainer-based",
    tagline: "For scaling companies investing in AI",
    features: [
      "Up to 3 AI solutions",
      "Unlimited team access",
      "Advanced integrations (CRM, ERP, etc.)",
      "6-month engagement",
      "Priority support + dedicated CSM",
      "Advanced analytics & reporting",
      "Quarterly strategy reviews",
      "AI training for your team",
    ],
    cta: "Start Growing",
    popular: true,
    color: "from-violet-500 to-purple-700",
  },
  {
    name: "Enterprise",
    icon: Building2,
    price: "Custom",
    period: "enterprise agreement",
    tagline: "Full-scale AI transformation",
    features: [
      "Unlimited AI solutions",
      "Dedicated AI engineering team",
      "Custom model development",
      "12+ month partnership",
      "24/7 dedicated support",
      "Executive reporting suite",
      "Compliance & security review",
      "On-site training workshops",
      "Co-innovation program",
    ],
    cta: "Contact Sales",
    popular: false,
    color: "from-orange-400 to-pink-500",
  },
];

const engagementModels = [
  {
    title: "AI Consulting",
    desc: "Strategic AI roadmap and advisory services. We assess your organization, identify opportunities, and create a phased transformation plan.",
    deliverables: [
      "AI readiness assessment",
      "Transformation roadmap",
      "Technology selection",
      "ROI modeling",
    ],
  },
  {
    title: "Project Implementation",
    desc: "End-to-end delivery of specific AI initiatives. From requirements to deployment, we own the full project lifecycle.",
    deliverables: [
      "Requirements & design",
      "Development & training",
      "Integration & testing",
      "Launch & knowledge transfer",
    ],
  },
  {
    title: "AI SaaS Platforms",
    desc: "Access our ready-made AI products (Copilot, Smart Chat, Insight Engine) on a subscription basis. Quick deployment, immediate value.",
    deliverables: [
      "Rapid deployment (2-4 weeks)",
      "Ongoing product updates",
      "Configuration & customization",
      "Usage analytics",
    ],
  },
  {
    title: "Enterprise Custom Dev",
    desc: "Bespoke AI platform development for enterprises with unique requirements, compliance needs, or competitive moat strategies.",
    deliverables: [
      "Custom architecture",
      "Proprietary model training",
      "Full IP ownership",
      "Long-term support",
    ],
  },
];

export default function Pricing({ navigate }: Props) {
  return (
    <div className="pt-20">
      <section className="py-20 section-gradient neural-bg">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="font-display text-5xl sm:text-6xl font-bold mb-6">
            Flexible <span className="gradient-text">Engagement Models</span>
          </h1>
          <p className="text-xl text-muted-foreground">
            We price based on impact, not seat counts. Every engagement is
            structured for measurable ROI.
          </p>
        </div>
      </section>

      {/* Plans */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {plans.map((plan) => (
              <div
                key={plan.name}
                className={`rounded-2xl p-8 relative ${
                  plan.popular ? "border-2" : "glass-card"
                }`}
                style={
                  plan.popular
                    ? {
                        background:
                          "linear-gradient(135deg, oklch(0.56 0.23 285 / 0.2), oklch(0.11 0.025 270))",
                        borderColor: "oklch(0.56 0.23 285 / 0.6)",
                      }
                    : {}
                }
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <span className="px-4 py-1.5 rounded-full text-xs font-bold orange-badge">
                      Most Popular
                    </span>
                  </div>
                )}
                <div
                  className={`w-12 h-12 rounded-xl bg-gradient-to-br ${plan.color} flex items-center justify-center mb-5`}
                >
                  <plan.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-display text-2xl font-bold mb-1">
                  {plan.name}
                </h3>
                <div className="text-accent text-sm mb-1">{plan.period}</div>
                <p className="text-muted-foreground text-sm mb-6">
                  {plan.tagline}
                </p>
                <div className="space-y-3 mb-8">
                  {plan.features.map((feature) => (
                    <div key={feature} className="flex items-start gap-2.5">
                      <CheckCircle className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                      <span className="text-sm text-muted-foreground">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>
                <button
                  type="button"
                  data-ocid={`pricing.${plan.name.toLowerCase()}.primary_button`}
                  onClick={() => navigate("contact")}
                  className={`w-full py-3 rounded-xl font-semibold text-sm inline-flex items-center justify-center gap-2 ${
                    plan.popular ? "btn-primary text-white" : "btn-outline-cyan"
                  }`}
                >
                  {plan.cta} <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <div className="glass-card rounded-2xl p-8 max-w-2xl mx-auto">
              <h3 className="font-display text-2xl font-bold mb-3">
                Need a Custom Quote?
              </h3>
              <p className="text-muted-foreground mb-6">
                Every enterprise is unique. Tell us about your challenges and
                we'll design the perfect AI engagement.
              </p>
              <button
                type="button"
                data-ocid="pricing.custom_quote.primary_button"
                onClick={() => navigate("contact")}
                className="px-8 py-4 rounded-xl font-semibold btn-primary text-white"
              >
                Request Custom Quote
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Engagement Models */}
      <section className="py-20 section-gradient">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-4xl font-bold text-center mb-12">
            How We <span className="gradient-text">Work Together</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {engagementModels.map((model, i) => (
              <div key={model.title} className="glass-card rounded-2xl p-6">
                <div className="w-10 h-10 rounded-xl btn-primary flex items-center justify-center text-white font-bold text-sm mb-5">
                  {i + 1}
                </div>
                <h3 className="font-display text-lg font-bold mb-3">
                  {model.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                  {model.desc}
                </p>
                <ul className="space-y-1.5">
                  {model.deliverables.map((d) => (
                    <li
                      key={d}
                      className="text-xs text-muted-foreground flex items-center gap-2"
                    >
                      <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                      {d}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

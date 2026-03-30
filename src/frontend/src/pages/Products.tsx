import {
  ArrowRight,
  BarChart3,
  Brain,
  CheckCircle,
  MessageSquare,
  Star,
  Zap,
} from "lucide-react";
import type { Page } from "../App";

interface Props {
  navigate: (page: Page) => void;
}

const products = [
  {
    icon: Brain,
    name: "Zawaago AI Copilot",
    tagline: "Enterprise AI assistant for teams",
    color: "from-violet-500 to-purple-700",
    description:
      "An intelligent AI assistant that integrates directly into your workflows, helping every team member work smarter, faster, and more accurately.",
    features: [
      "Natural language interface for all business data",
      "Integrates with Slack, Teams, email, and CRMs",
      "Context-aware responses and recommendations",
      "Document summarization and generation",
      "Multi-language support for global teams",
      "Enterprise SSO and role-based access",
    ],
    badge: "Most Popular",
  },
  {
    icon: Zap,
    name: "Zawaago Automation Studio",
    tagline: "No-code AI workflow builder",
    color: "from-cyan-400 to-blue-600",
    description:
      "Drag-and-drop workflow automation with embedded AI capabilities. Build powerful automations without writing a single line of code.",
    features: [
      "Visual drag-and-drop workflow builder",
      "500+ pre-built AI-powered templates",
      "Connect any API or data source",
      "AI decision nodes with custom logic",
      "Real-time monitoring and analytics",
      "Version control and team collaboration",
    ],
    badge: "New",
  },
  {
    icon: BarChart3,
    name: "Zawaago Insight Engine",
    tagline: "Advanced AI analytics platform",
    color: "from-orange-400 to-pink-500",
    description:
      "Transform raw data into actionable intelligence. Our AI analytics platform surfaces the insights that matter most to your business.",
    features: [
      "Natural language data queries",
      "Automated insight discovery and alerts",
      "Predictive forecasting with confidence intervals",
      "Real-time dashboards and reporting",
      "Connects to any data warehouse",
      "Shareable reports with one click",
    ],
    badge: "Enterprise",
  },
  {
    icon: MessageSquare,
    name: "Zawaago Smart Chat",
    tagline: "AI chatbot for websites and apps",
    color: "from-emerald-400 to-teal-600",
    description:
      "Deploy a sophisticated AI chatbot on your website or app in minutes. Handles customer queries, qualifies leads, and books meetings automatically.",
    features: [
      "Deploy in 15 minutes with no-code setup",
      "Trained on your specific business knowledge",
      "Seamless human handoff when needed",
      "Lead capture and CRM integration",
      "Multi-channel: web, mobile, WhatsApp",
      "Conversation analytics and optimization",
    ],
    badge: "Quick Start",
  },
];

export default function Products({ navigate }: Props) {
  return (
    <div className="pt-20">
      <section className="py-20 section-gradient neural-bg">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
            <Star className="w-4 h-4" /> Products & Platforms
          </div>
          <h1 className="font-display text-5xl sm:text-6xl font-bold mb-6">
            AI <span className="gradient-text">Products Built</span> for
            Enterprise
          </h1>
          <p className="text-xl text-muted-foreground">
            Ready-to-deploy AI platforms that integrate with your existing tools
            and scale with your business.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          {products.map((product, i) => (
            <div
              key={product.name}
              className={`flex flex-col ${i % 2 === 1 ? "lg:flex-row-reverse" : "lg:flex-row"} gap-12 items-center`}
            >
              <div className="flex-1">
                <div className="glass-card rounded-3xl p-10 relative">
                  <div
                    className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${product.color} flex items-center justify-center mb-6`}
                  >
                    <product.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="absolute top-6 right-6">
                    <span className="px-3 py-1 rounded-full text-xs font-semibold orange-badge">
                      {product.badge}
                    </span>
                  </div>
                  <h2 className="font-display text-3xl font-bold mb-2">
                    {product.name}
                  </h2>
                  <div className="text-accent text-sm mb-4">
                    {product.tagline}
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    {product.description}
                  </p>
                </div>
              </div>
              <div className="flex-1">
                <h3 className="font-display text-xl font-bold mb-6">
                  Key Features
                </h3>
                <div className="space-y-4">
                  {product.features.map((feature) => (
                    <div key={feature} className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-accent shrink-0" />
                      <span className="text-muted-foreground">{feature}</span>
                    </div>
                  ))}
                </div>
                <button
                  type="button"
                  data-ocid={`products.${product.name.toLowerCase().replace(/ /g, "_")}.primary_button`}
                  onClick={() => navigate("contact")}
                  className="mt-8 inline-flex items-center gap-2 px-6 py-3 rounded-xl btn-primary text-white font-semibold"
                >
                  Request Demo <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

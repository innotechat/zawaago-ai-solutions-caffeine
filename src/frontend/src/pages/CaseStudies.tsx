import { ArrowRight, Award, TrendingUp } from "lucide-react";
import type { Page } from "../App";

interface Props {
  navigate: (page: Page) => void;
}

const cases = [
  {
    industry: "Retail",
    title: "AI Personalization Engine for Global Retail Chain",
    client: "Leading Retail Brand, Southeast Asia",
    challenge:
      "A major retail chain was struggling with generic email campaigns achieving only 1.2% conversion rates. Manual segmentation was costly and slow, missing real-time purchase intent signals.",
    solution:
      "Zawaago deployed an AI personalization engine that analyzed 50+ customer signals in real-time to generate hyper-personalized product recommendations, email content, and dynamic pricing.",
    results: [
      { value: "35%", label: "Revenue Growth" },
      { value: "4.1x", label: "Email ROI" },
      { value: "68%", label: "Faster Campaigns" },
    ],
    technologies: [
      "ML Recommendation Engine",
      "Real-time Personalization",
      "A/B Testing AI",
      "Email Automation",
    ],
    color: "from-orange-400 to-pink-500",
    emoji: "🛍️",
  },
  {
    industry: "SaaS",
    title: "AI Customer Support Automation",
    client: "Series B SaaS Company, 50K+ users",
    challenge:
      "Rapidly growing user base created unsustainable support ticket volume. 12 support agents handling 2,000+ daily tickets with 4-hour average response time, leading to poor CSAT scores.",
    solution:
      "Implemented Zawaago Smart Chat with custom training on product documentation, FAQs, and historical ticket data. AI routes complex issues to human agents with full context.",
    results: [
      { value: "80%", label: "Ticket Automation" },
      { value: "< 30s", label: "Response Time" },
      { value: "4.8/5", label: "CSAT Score" },
    ],
    technologies: [
      "AI Chatbot",
      "NLP Classification",
      "Smart Routing",
      "Sentiment Analysis",
    ],
    color: "from-cyan-400 to-blue-600",
    emoji: "🎧",
  },
  {
    industry: "Manufacturing",
    title: "Predictive Maintenance & Quality Control AI",
    client: "Automotive Parts Manufacturer, Germany",
    challenge:
      "Unexpected machine failures causing $2.5M annual losses from downtime. Manual quality inspection missing 8% of defects, leading to costly recalls.",
    solution:
      "IoT sensors combined with Zawaago's ML anomaly detection predicts failures 72 hours in advance. Computer vision system performs 100% quality inspection at line speed.",
    results: [
      { value: "40%", label: "Downtime Reduction" },
      { value: "99.8%", label: "Defect Detection" },
      { value: "$2.1M", label: "Annual Savings" },
    ],
    technologies: [
      "IoT Integration",
      "Anomaly Detection ML",
      "Computer Vision",
      "Predictive Analytics",
    ],
    color: "from-violet-500 to-purple-700",
    emoji: "🏭",
  },
  {
    industry: "Finance",
    title: "Fraud Detection & Risk Intelligence Platform",
    client: "Regional Bank, 1.2M customers",
    challenge:
      "Legacy rule-based fraud system generating 40% false positives, blocking legitimate transactions and damaging customer trust. Annual fraud losses at $8M.",
    solution:
      "Deployed real-time ML fraud scoring analyzing 200+ behavioral signals per transaction. Adaptive models learn from each fraud case to continuously improve accuracy.",
    results: [
      { value: "99.2%", label: "Detection Rate" },
      { value: "85%", label: "False Positive Reduction" },
      { value: "$6.5M", label: "Fraud Prevented" },
    ],
    technologies: [
      "Real-time ML Scoring",
      "Behavioral Analytics",
      "Graph Neural Networks",
      "Adaptive Learning",
    ],
    color: "from-emerald-400 to-teal-600",
    emoji: "💳",
  },
  {
    industry: "Healthcare",
    title: "AI-Powered Patient Engagement Platform",
    client: "Multi-specialty Hospital Network",
    challenge:
      "High no-show rates (35%) costing $1.8M annually. Overwhelmed staff answering repetitive patient queries. Manual appointment scheduling errors causing patient dissatisfaction.",
    solution:
      "AI chatbot handles appointment booking, reminders, pre-visit instructions, and post-care follow-ups. Predictive no-show model triggers targeted interventions.",
    results: [
      { value: "60%", label: "No-show Reduction" },
      { value: "70%", label: "Admin Time Saved" },
      { value: "$1.2M", label: "Annual Recovery" },
    ],
    technologies: [
      "Healthcare Chatbot",
      "Predictive Modeling",
      "EMR Integration",
      "SMS/WhatsApp",
    ],
    color: "from-red-400 to-pink-500",
    emoji: "🏥",
  },
  {
    industry: "Logistics",
    title: "Intelligent Route Optimization & Fleet AI",
    client: "Last-mile Delivery Company, 800+ vehicles",
    challenge:
      "Inefficient routing causing excessive fuel costs and late deliveries. Manual driver scheduling unable to account for real-time traffic, weather, and demand patterns.",
    solution:
      "AI route optimization engine processes real-time traffic, order volume, and vehicle capacity to generate optimal routes. Demand forecasting enables proactive fleet positioning.",
    results: [
      { value: "25%", label: "Fuel Savings" },
      { value: "98.5%", label: "On-time Delivery" },
      { value: "30%", label: "More Deliveries/Day" },
    ],
    technologies: [
      "Route Optimization ML",
      "Real-time Data Processing",
      "Demand Forecasting",
      "Fleet Management AI",
    ],
    color: "from-amber-400 to-orange-500",
    emoji: "🚛",
  },
];

export default function CaseStudies({ navigate }: Props) {
  return (
    <div className="pt-20">
      <section className="py-20 section-gradient neural-bg">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
            <Award className="w-4 h-4" /> Case Studies
          </div>
          <h1 className="font-display text-5xl sm:text-6xl font-bold mb-6">
            Real Results, <span className="gradient-text">Real Impact</span>
          </h1>
          <p className="text-xl text-muted-foreground">
            Explore how Zawaago has transformed businesses across industries
            with measurable AI outcomes.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          {cases.map((c) => (
            <div
              key={c.title}
              className="glass-card rounded-3xl overflow-hidden"
            >
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-0">
                <div
                  className={`p-8 bg-gradient-to-br ${c.color} bg-opacity-20 flex flex-col justify-between`}
                  style={{
                    background:
                      "linear-gradient(135deg, oklch(0.56 0.23 285 / 0.2), oklch(0.11 0.025 270))",
                  }}
                >
                  <div>
                    <div className="text-4xl mb-3">{c.emoji}</div>
                    <div className="text-accent text-xs font-semibold uppercase tracking-wider mb-2">
                      {c.industry}
                    </div>
                    <h3 className="font-display text-xl font-bold mb-2">
                      {c.title}
                    </h3>
                    <div className="text-xs text-muted-foreground">
                      {c.client}
                    </div>
                  </div>
                  <div className="grid grid-cols-3 gap-3 mt-6">
                    {c.results.map((r) => (
                      <div
                        key={r.label}
                        className="text-center glass-card rounded-xl p-3"
                      >
                        <div className="font-display text-lg font-bold gradient-text">
                          {r.value}
                        </div>
                        <div className="text-xs text-muted-foreground mt-0.5">
                          {r.label}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="lg:col-span-2 p-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <div className="text-xs font-semibold text-red-400 uppercase tracking-wider mb-2">
                        Challenge
                      </div>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {c.challenge}
                      </p>
                    </div>
                    <div>
                      <div className="text-xs font-semibold text-accent uppercase tracking-wider mb-2">
                        Solution
                      </div>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {c.solution}
                      </p>
                    </div>
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">
                      Technologies Used
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {c.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 rounded-full text-xs font-medium"
                          style={{
                            background: "oklch(0.56 0.23 285 / 0.15)",
                            color: "oklch(0.74 0.15 195)",
                          }}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="py-20 section-gradient">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <TrendingUp className="w-12 h-12 text-accent mx-auto mb-6" />
          <h2 className="font-display text-4xl font-bold mb-4">
            Be Our Next <span className="gradient-text">Success Story</span>
          </h2>
          <p className="text-muted-foreground mb-8">
            Join hundreds of enterprises achieving measurable ROI with Zawaago's
            AI solutions.
          </p>
          <button
            type="button"
            data-ocid="case_studies.start_journey.primary_button"
            onClick={() => navigate("contact")}
            className="px-8 py-4 rounded-xl font-semibold btn-primary text-white inline-flex items-center gap-2"
          >
            Start Your Journey <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </section>
    </div>
  );
}

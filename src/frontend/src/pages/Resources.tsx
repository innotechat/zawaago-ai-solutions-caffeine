import {
  ArrowRight,
  BarChart3,
  BookOpen,
  Clock,
  Globe,
  TrendingUp,
  Zap,
} from "lucide-react";
import type { Page } from "../App";

interface Props {
  navigate: (page: Page) => void;
}

const categories = [
  { label: "All", value: "all" },
  { label: "AI Trends", value: "trends" },
  { label: "Automation Guides", value: "automation" },
  { label: "Generative AI", value: "generative" },
  { label: "Business Intelligence", value: "bi" },
  { label: "Digital Transformation", value: "digital" },
];

const articles = [
  {
    title: "The Future of AI in Business: 2025 and Beyond",
    category: "AI Trends",
    readTime: "8 min read",
    date: "Mar 2025",
    excerpt:
      "Explore how large language models, autonomous agents, and multimodal AI are reshaping every industry and what enterprises need to do to stay ahead.",
    icon: TrendingUp,
    featured: true,
    color: "from-violet-500 to-purple-700",
  },
  {
    title: "How AI Can Automate 70% of Your Business Operations",
    category: "Automation Guides",
    readTime: "12 min read",
    date: "Feb 2025",
    excerpt:
      "A practical guide to identifying automation opportunities across every department and building a roadmap for intelligent process automation.",
    icon: Zap,
    featured: true,
    color: "from-cyan-400 to-blue-600",
  },
  {
    title: "AI Agents and Autonomous Workflows: The New Paradigm",
    category: "Generative AI",
    readTime: "10 min read",
    date: "Feb 2025",
    excerpt:
      "Understanding how autonomous AI agents can execute multi-step tasks independently, from research to decision-making and action.",
    icon: Globe,
    featured: true,
    color: "from-orange-400 to-pink-500",
  },
  {
    title: "Building an AI-First Culture in Your Organization",
    category: "Digital Transformation",
    readTime: "7 min read",
    date: "Jan 2025",
    excerpt:
      "A framework for driving AI adoption from the C-suite to front-line employees, overcoming resistance, and accelerating transformation.",
    icon: BookOpen,
    featured: false,
    color: "from-emerald-400 to-teal-500",
  },
  {
    title: "ROI Framework for Enterprise AI Investments",
    category: "Business Intelligence",
    readTime: "9 min read",
    date: "Jan 2025",
    excerpt:
      "How to calculate, track, and communicate the business value of AI initiatives to stakeholders, with real-world benchmarks and templates.",
    icon: BarChart3,
    featured: false,
    color: "from-amber-400 to-orange-500",
  },
  {
    title: "Generative AI for Marketing: The Complete Playbook",
    category: "Generative AI",
    readTime: "15 min read",
    date: "Dec 2024",
    excerpt:
      "Everything you need to know about using GPT-4, Claude, and specialized AI tools to transform your marketing content, campaigns, and strategy.",
    icon: Zap,
    featured: false,
    color: "from-pink-400 to-rose-600",
  },
  {
    title: "The AI-Powered Supply Chain: From Reactive to Predictive",
    category: "Automation Guides",
    readTime: "11 min read",
    date: "Dec 2024",
    excerpt:
      "How leading manufacturers and logistics companies are using AI to predict disruptions, optimize inventory, and build resilient supply chains.",
    icon: TrendingUp,
    featured: false,
    color: "from-blue-400 to-indigo-600",
  },
  {
    title: "Responsible AI: Ethics, Governance, and Compliance",
    category: "AI Trends",
    readTime: "13 min read",
    date: "Nov 2024",
    excerpt:
      "A practical guide to building ethical AI systems, ensuring regulatory compliance, and establishing governance frameworks for enterprise AI.",
    icon: BookOpen,
    featured: false,
    color: "from-slate-400 to-gray-600",
  },
];

export default function Resources({ navigate: _navigate }: Props) {
  return (
    <div className="pt-20">
      <section className="py-20 section-gradient neural-bg">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
            <BookOpen className="w-4 h-4" /> Resources & Insights
          </div>
          <h1 className="font-display text-5xl sm:text-6xl font-bold mb-6">
            AI <span className="gradient-text">Knowledge Hub</span>
          </h1>
          <p className="text-xl text-muted-foreground">
            Stay ahead with expert insights on AI trends, automation strategies,
            and enterprise transformation.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Category Tabs */}
          <div className="flex flex-wrap gap-2 mb-12">
            {categories.map((cat) => (
              <button
                type="button"
                key={cat.value}
                data-ocid={`resources.${cat.value}.tab`}
                className="px-4 py-2 rounded-xl text-sm font-medium glass-card hover:border-accent/40 hover:text-accent transition-all"
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Featured Articles */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-10">
            {articles
              .filter((a) => a.featured)
              .map((article) => (
                <button
                  type="button"
                  key={article.title}
                  data-ocid={`resources.${article.title.toLowerCase().replace(/ /g, "_").slice(0, 30)}.card`}
                  className="glass-card-hover rounded-2xl overflow-hidden text-left group"
                >
                  <div className={`h-2 bg-gradient-to-r ${article.color}`} />
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-4">
                      <span
                        className="px-2.5 py-1 rounded-full text-xs font-medium"
                        style={{
                          background: "oklch(0.56 0.23 285 / 0.2)",
                          color: "oklch(0.74 0.15 195)",
                        }}
                      >
                        {article.category}
                      </span>
                      <span className="text-xs text-muted-foreground flex items-center gap-1">
                        <Clock className="w-3 h-3" /> {article.readTime}
                      </span>
                    </div>
                    <h3 className="font-display text-lg font-bold mb-3 group-hover:text-accent transition-colors leading-tight">
                      {article.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                      {article.excerpt}
                    </p>
                    <div className="flex items-center gap-1 text-xs font-medium text-primary group-hover:text-accent transition-colors">
                      Read Article <ArrowRight className="w-3.5 h-3.5" />
                    </div>
                  </div>
                </button>
              ))}
          </div>

          {/* All Articles Grid */}
          <h2 className="font-display text-2xl font-bold mb-6">
            More Articles
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {articles
              .filter((a) => !a.featured)
              .map((article) => (
                <button
                  type="button"
                  key={article.title}
                  data-ocid={`resources.${article.title.toLowerCase().replace(/ /g, "_").slice(0, 30)}.card`}
                  className="glass-card-hover rounded-xl p-5 text-left flex gap-4 group"
                >
                  <div
                    className={`w-12 h-12 rounded-xl bg-gradient-to-br ${article.color} flex items-center justify-center shrink-0`}
                  >
                    <article.icon className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-1.5">
                      <span className="text-xs text-accent font-medium">
                        {article.category}
                      </span>
                      <span className="text-xs text-muted-foreground">
                        {article.date}
                      </span>
                    </div>
                    <h3 className="font-semibold text-sm mb-1.5 group-hover:text-accent transition-colors leading-snug">
                      {article.title}
                    </h3>
                    <p className="text-xs text-muted-foreground line-clamp-2">
                      {article.excerpt}
                    </p>
                  </div>
                </button>
              ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-20 section-gradient">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="font-display text-4xl font-bold mb-4">
            Stay <span className="gradient-text">AI-Informed</span>
          </h2>
          <p className="text-muted-foreground mb-8">
            Join 10,000+ business leaders receiving our weekly AI insights
            newsletter.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto">
            <input
              data-ocid="newsletter.email.input"
              type="email"
              placeholder="Enter your business email"
              className="flex-1 px-4 py-3 rounded-xl bg-muted border border-border focus:outline-none focus:border-accent text-sm"
            />
            <button
              type="button"
              data-ocid="newsletter.subscribe.primary_button"
              className="px-6 py-3 rounded-xl btn-primary text-white font-semibold text-sm whitespace-nowrap"
            >
              Subscribe Free
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

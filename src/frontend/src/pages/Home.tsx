import {
  Activity,
  ArrowRight,
  BarChart3,
  Bot,
  Brain,
  CheckCircle,
  ChevronRight,
  Cpu,
  Globe,
  Layers,
  Shield,
  Sparkles,
  Star,
  TrendingUp,
  Users,
  Zap,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";
import type { Page } from "../App";

interface HomeProps {
  navigate: (page: Page) => void;
}

const services = [
  {
    icon: Brain,
    title: "AI Consulting",
    desc: "Strategy, AI adoption roadmap, and digital transformation planning tailored to your business.",
    color: "from-purple-500 to-violet-600",
  },
  {
    icon: Zap,
    title: "AI Automation",
    desc: "Workflow automation for operations, HR, finance, and customer support at enterprise scale.",
    color: "from-cyan-400 to-blue-500",
  },
  {
    icon: Sparkles,
    title: "Generative AI",
    desc: "Chatbots, AI copilots, and intelligent content generation for every business function.",
    color: "from-orange-400 to-pink-500",
  },
  {
    icon: BarChart3,
    title: "AI Data Intelligence",
    desc: "Advanced analytics, predictive modeling, and real-time business insights.",
    color: "from-emerald-400 to-cyan-500",
  },
  {
    icon: Cpu,
    title: "AI Platforms Dev",
    desc: "Custom AI tools, SaaS solutions, and enterprise-grade AI platforms built for scale.",
    color: "from-violet-400 to-purple-600",
  },
];

const testimonials = [
  {
    name: "Sarah Chen",
    role: "CTO, TechCorp Asia",
    text: "Zawaago transformed our customer support — 80% ticket automation in just 3 months. Exceptional results.",
    rating: 5,
  },
  {
    name: "Marcus Williams",
    role: "CEO, RetailPlus",
    text: "Their AI personalization engine drove a 35% revenue increase. Best investment we made this year.",
    rating: 5,
  },
  {
    name: "Priya Sharma",
    role: "VP Operations, ManuFab",
    text: "Predictive maintenance AI saved us 40% downtime. The team is brilliant and highly responsive.",
    rating: 5,
  },
];

const industries = [
  "Healthcare",
  "Retail",
  "Finance",
  "Education",
  "Manufacturing",
  "Logistics",
  "Real Estate",
  "Media",
];

export default function Home({ navigate }: HomeProps) {
  const [count, setCount] = useState({
    clients: 0,
    satisfaction: 0,
    cost: 0,
    roi: 0,
  });
  const statsRef = useRef<HTMLDivElement>(null);
  const [statsVisible, setStatsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setStatsVisible(true);
      },
      { threshold: 0.3 },
    );
    if (statsRef.current) observer.observe(statsRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!statsVisible) return;
    const duration = 1500;
    const steps = 60;
    const interval = duration / steps;
    let step = 0;
    const timer = setInterval(() => {
      step++;
      const progress = step / steps;
      setCount({
        clients: Math.floor(500 * progress),
        satisfaction: Math.floor(98 * progress),
        cost: Math.floor(70 * progress),
        roi: Math.min(3, Math.floor(3 * progress * 10) / 10),
      });
      if (step >= steps) clearInterval(timer);
    }, interval);
    return () => clearInterval(timer);
  }, [statsVisible]);

  return (
    <div>
      {/* Hero */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden hero-grid neural-bg">
        {/* Animated orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-primary/20 blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 rounded-full bg-accent/15 blur-3xl animate-float-delay" />
        <div
          className="absolute top-1/2 right-1/3 w-48 h-48 rounded-full"
          style={{ background: "oklch(0.72 0.18 45 / 0.1)" }}
        />

        {/* Neural network visual */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <svg
            className="absolute top-0 right-0 w-1/2 h-full opacity-20"
            viewBox="0 0 600 800"
            fill="none"
            aria-hidden="true"
          >
            <circle
              cx="300"
              cy="150"
              r="60"
              stroke="oklch(0.56 0.23 285)"
              strokeWidth="1"
              className="animate-pulse"
            />
            <circle
              cx="150"
              cy="350"
              r="40"
              stroke="oklch(0.74 0.15 195)"
              strokeWidth="1"
              className="animate-pulse"
              style={{ animationDelay: "0.5s" }}
            />
            <circle
              cx="450"
              cy="350"
              r="40"
              stroke="oklch(0.74 0.15 195)"
              strokeWidth="1"
              className="animate-pulse"
              style={{ animationDelay: "1s" }}
            />
            <circle
              cx="100"
              cy="550"
              r="30"
              stroke="oklch(0.72 0.18 45)"
              strokeWidth="1"
            />
            <circle
              cx="300"
              cy="550"
              r="50"
              stroke="oklch(0.56 0.23 285)"
              strokeWidth="1"
            />
            <circle
              cx="500"
              cy="550"
              r="30"
              stroke="oklch(0.72 0.18 45)"
              strokeWidth="1"
            />
            <line
              x1="300"
              y1="210"
              x2="150"
              y2="310"
              stroke="oklch(0.56 0.23 285)"
              strokeWidth="0.5"
              opacity="0.6"
            />
            <line
              x1="300"
              y1="210"
              x2="450"
              y2="310"
              stroke="oklch(0.74 0.15 195)"
              strokeWidth="0.5"
              opacity="0.6"
            />
            <line
              x1="150"
              y1="390"
              x2="100"
              y2="520"
              stroke="oklch(0.74 0.15 195)"
              strokeWidth="0.5"
              opacity="0.6"
            />
            <line
              x1="150"
              y1="390"
              x2="300"
              y2="500"
              stroke="oklch(0.56 0.23 285)"
              strokeWidth="0.5"
              opacity="0.6"
            />
            <line
              x1="450"
              y1="390"
              x2="300"
              y2="500"
              stroke="oklch(0.56 0.23 285)"
              strokeWidth="0.5"
              opacity="0.6"
            />
            <line
              x1="450"
              y1="390"
              x2="500"
              y2="520"
              stroke="oklch(0.72 0.18 45)"
              strokeWidth="0.5"
              opacity="0.6"
            />
          </svg>
        </div>

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-24">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card border border-primary/30 text-sm text-accent mb-8">
            <Sparkles className="w-4 h-4" />
            <span>Enterprise AI Solutions for Modern Businesses</span>
          </div>

          <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight mb-6">
            Transform Your Business with{" "}
            <span className="gradient-text">Intelligent AI</span> Solutions
          </h1>

          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto mb-10 leading-relaxed">
            Zawaago helps organizations unlock the power of Artificial
            Intelligence to automate operations, improve decisions, and
            accelerate innovation across every business function.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <button
              type="button"
              data-ocid="hero.explore_solutions.primary_button"
              onClick={() => navigate("solutions")}
              className="px-8 py-4 rounded-xl font-semibold text-base btn-primary text-white flex items-center justify-center gap-2"
            >
              Explore Solutions <ArrowRight className="w-5 h-5" />
            </button>
            <button
              type="button"
              data-ocid="hero.book_consultation.secondary_button"
              onClick={() => navigate("contact")}
              className="px-8 py-4 rounded-xl font-semibold text-base btn-outline-cyan flex items-center justify-center gap-2"
            >
              Book Consultation
            </button>
          </div>

          {/* Trust indicators */}
          <div className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
            {[
              "SOC2 Compliant",
              "GDPR Ready",
              "Enterprise Grade",
              "24/7 Support",
            ].map((item) => (
              <div key={item} className="flex items-center gap-1.5">
                <CheckCircle className="w-4 h-4 text-accent" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
          <div className="w-0.5 h-8 bg-gradient-to-b from-transparent to-primary/50 rounded-full" />
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-16 border-y border-border/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-sm font-medium text-muted-foreground mb-8 uppercase tracking-widest">
            Helping startups, SMEs and enterprises across industries
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            {industries.map((industry) => (
              <button
                type="button"
                key={industry}
                onClick={() => navigate("industries")}
                className="px-5 py-2.5 rounded-xl glass-card text-sm font-medium text-muted-foreground hover:text-accent hover:border-accent/40 transition-all"
              >
                {industry}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Core Services */}
      <section className="py-24 section-gradient">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              <Layers className="w-4 h-4" /> Core Services
            </div>
            <h2 className="font-display text-4xl sm:text-5xl font-bold mb-4">
              AI Solutions That{" "}
              <span className="gradient-text-purple-cyan">Drive Results</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              End-to-end AI services from strategy to deployment, built for
              enterprise scale and reliability.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <button
                type="button"
                key={service.title}
                data-ocid={`services.${service.title.toLowerCase().replace(/ /g, "_")}.card`}
                onClick={() => navigate("solutions")}
                className="glass-card-hover rounded-2xl p-6 text-left group"
              >
                <div
                  className={`w-12 h-12 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-5`}
                >
                  <service.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-display text-lg font-bold mb-2 group-hover:text-accent transition-colors">
                  {service.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                  {service.desc}
                </p>
                <div className="flex items-center gap-1 text-xs font-medium text-primary group-hover:text-accent transition-colors">
                  Learn more <ChevronRight className="w-3.5 h-3.5" />
                </div>
              </button>
            ))}
            <button
              type="button"
              data-ocid="services.view_all.secondary_button"
              onClick={() => navigate("solutions")}
              className="glass-card-hover rounded-2xl p-6 text-left flex flex-col justify-center items-center group border-dashed"
            >
              <div className="w-12 h-12 rounded-full border-2 border-dashed border-primary/40 flex items-center justify-center mb-4">
                <ArrowRight className="w-5 h-5 text-primary" />
              </div>
              <span className="font-semibold text-muted-foreground group-hover:text-accent transition-colors">
                View All Solutions
              </span>
            </button>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section ref={statsRef} className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                value: `${count.clients}+`,
                label: "Enterprise Clients",
                icon: Users,
              },
              {
                value: `${count.satisfaction}%`,
                label: "Client Satisfaction",
                icon: Star,
              },
              {
                value: `${count.cost}%`,
                label: "Avg. Cost Reduction",
                icon: TrendingUp,
              },
              {
                value: `${count.roi}x`,
                label: "Avg. ROI Increase",
                icon: Activity,
              },
            ].map((stat) => (
              <div
                key={stat.label}
                className="glass-card rounded-2xl p-6 text-center animate-pulse-glow"
              >
                <stat.icon className="w-6 h-6 text-accent mx-auto mb-3" />
                <div className="font-display text-4xl font-bold gradient-text mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AI Solutions Overview */}
      <section className="py-24 section-gradient">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl sm:text-5xl font-bold mb-4">
              AI for Every{" "}
              <span className="gradient-text">Business Function</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              From customer support to finance, our AI solutions transform how
              every department operates.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {[
              {
                icon: Bot,
                title: "AI Customer Support",
                items: [
                  "AI Chatbots resolving 70–80% of tickets",
                  "Voice AI Agents 24/7",
                  "Multilingual helpdesk automation",
                ],
                color: "text-cyan-400",
              },
              {
                icon: TrendingUp,
                title: "AI Marketing",
                items: [
                  "AI campaign generation & optimization",
                  "Customer behavior prediction",
                  "Personalized ads & email campaigns",
                ],
                color: "text-purple-400",
              },
              {
                icon: BarChart3,
                title: "AI Finance Automation",
                items: [
                  "Automated invoice processing",
                  "Financial forecasting & fraud detection",
                  "AI accounting assistants",
                ],
                color: "text-orange-400",
              },
              {
                icon: Users,
                title: "AI HR & Workforce",
                items: [
                  "Resume screening & AI hiring",
                  "Employee analytics & onboarding",
                  "HR chatbots & automation",
                ],
                color: "text-emerald-400",
              },
            ].map((item) => (
              <button
                type="button"
                key={item.title}
                data-ocid={`solutions.${item.title.toLowerCase().replace(/ /g, "_")}.card`}
                onClick={() => navigate("solutions")}
                className="glass-card-hover rounded-2xl p-8 text-left flex gap-6"
              >
                <div className="shrink-0">
                  <item.icon className={`w-8 h-8 ${item.color}`} />
                </div>
                <div>
                  <h3 className="font-display text-xl font-bold mb-3">
                    {item.title}
                  </h3>
                  <ul className="space-y-2">
                    {item.items.map((bullet) => (
                      <li
                        key={bullet}
                        className="flex items-start gap-2 text-sm text-muted-foreground"
                      >
                        <CheckCircle className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                        {bullet}
                      </li>
                    ))}
                  </ul>
                </div>
              </button>
            ))}
          </div>
          <div className="text-center mt-10">
            <button
              type="button"
              data-ocid="solutions_overview.view_all.primary_button"
              onClick={() => navigate("solutions")}
              className="px-8 py-4 rounded-xl font-semibold btn-primary text-white inline-flex items-center gap-2"
            >
              Explore All Solutions <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl font-bold mb-4">
              What Our{" "}
              <span className="gradient-text-purple-cyan">Clients Say</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <div key={t.name} className="glass-card rounded-2xl p-6">
                <div className="flex gap-1 mb-4">
                  {[1, 2, 3, 4, 5].slice(0, t.rating).map((star) => (
                    <Star
                      key={star}
                      className="w-4 h-4 fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                  "{t.text}"
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full btn-primary flex items-center justify-center text-white font-bold text-sm">
                    {t.name[0]}
                  </div>
                  <div>
                    <div className="font-semibold text-sm">{t.name}</div>
                    <div className="text-xs text-muted-foreground">
                      {t.role}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className="rounded-3xl p-12 text-center"
            style={{
              background:
                "linear-gradient(135deg, oklch(0.56 0.23 285 / 0.3), oklch(0.74 0.15 195 / 0.2))",
              border: "1px solid oklch(0.56 0.23 285 / 0.3)",
            }}
          >
            <Globe className="w-12 h-12 text-accent mx-auto mb-6" />
            <h2 className="font-display text-4xl font-bold mb-4">
              Ready to Embrace{" "}
              <span className="gradient-text">AI Transformation</span>?
            </h2>
            <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
              Join hundreds of enterprises worldwide leveraging Zawaago's AI
              expertise to stay ahead of the competition.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                type="button"
                data-ocid="cta.get_started.primary_button"
                onClick={() => navigate("contact")}
                className="px-8 py-4 rounded-xl font-semibold btn-primary text-white"
              >
                Get Started Today
              </button>
              <button
                type="button"
                data-ocid="cta.view_case_studies.secondary_button"
                onClick={() => navigate("case-studies")}
                className="px-8 py-4 rounded-xl font-semibold btn-outline-cyan"
              >
                View Case Studies
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

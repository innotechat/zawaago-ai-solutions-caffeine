import {
  ArrowRight,
  Award,
  Globe,
  Heart,
  Lightbulb,
  Shield,
  Users,
  Zap,
} from "lucide-react";
import type { Page } from "../App";

interface Props {
  navigate: (page: Page) => void;
}

const team = [
  {
    name: "Amir Hassan",
    role: "CEO & Co-founder",
    bg: "from-violet-500 to-purple-700",
  },
  {
    name: "Priya Nair",
    role: "CTO & AI Architect",
    bg: "from-cyan-400 to-blue-600",
  },
  {
    name: "James Okafor",
    role: "Head of AI Research",
    bg: "from-orange-400 to-pink-500",
  },
  {
    name: "Li Wei",
    role: "VP Engineering",
    bg: "from-emerald-400 to-teal-600",
  },
  {
    name: "Sofia Andrade",
    role: "Head of Customer Success",
    bg: "from-amber-400 to-orange-500",
  },
  {
    name: "Raj Mehta",
    role: "Head of Enterprise Sales",
    bg: "from-pink-400 to-rose-600",
  },
];

const values = [
  {
    icon: Heart,
    title: "Human-Centered AI",
    desc: "We design AI that augments human potential, not replaces it. Every solution puts people first.",
  },
  {
    icon: Shield,
    title: "Responsible Innovation",
    desc: "Ethical AI is non-negotiable. We build with privacy, fairness, and transparency at the core.",
  },
  {
    icon: Lightbulb,
    title: "Continuous Learning",
    desc: "AI evolves fast. We invest heavily in research to keep clients at the frontier of what's possible.",
  },
  {
    icon: Globe,
    title: "Global Impact",
    desc: "From startups to multinationals, we believe every business deserves access to world-class AI.",
  },
];

export default function About({ navigate }: Props) {
  return (
    <div className="pt-20">
      <section className="py-24 section-gradient neural-bg">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
            <Zap className="w-4 h-4" /> Our Story
          </div>
          <h1 className="font-display text-5xl sm:text-6xl font-bold mb-8">
            We're on a Mission to{" "}
            <span className="gradient-text">Democratize AI</span>
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
            Zawaago was born from a simple belief: every business — from a
            5-person startup to a Fortune 500 — deserves access to
            enterprise-grade AI capabilities that were previously only available
            to tech giants.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="font-display text-4xl font-bold mb-6">
                The{" "}
                <span className="gradient-text-purple-cyan">Zawaago Story</span>
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Zawaago was founded by a team of AI researchers, enterprise
                  technologists, and business strategists who saw a massive gap:
                  while AI technology was advancing at unprecedented speed, most
                  organizations lacked the expertise and infrastructure to
                  harness it effectively.
                </p>
                <p>
                  Too many businesses were either intimidated by AI's
                  complexity, burned by failed implementations, or locked into
                  expensive point solutions that didn't integrate. We set out to
                  change that.
                </p>
                <p>
                  Today, Zawaago is a global AI innovation company with a
                  mission to make intelligent automation accessible, practical,
                  and impactful for organizations of every size. We partner with
                  our clients as long-term transformation allies, not just
                  vendors.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { value: "2020", label: "Founded", icon: Zap },
                { value: "500+", label: "Clients Served", icon: Users },
                { value: "50+", label: "AI Experts", icon: Award },
                { value: "30+", label: "Countries", icon: Globe },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="glass-card rounded-2xl p-6 text-center"
                >
                  <stat.icon className="w-6 h-6 text-accent mx-auto mb-3" />
                  <div className="font-display text-3xl font-bold gradient-text mb-1">
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 section-gradient">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="glass-card rounded-3xl p-10">
              <Globe className="w-10 h-10 text-accent mb-6" />
              <div className="text-accent text-xs font-semibold uppercase tracking-widest mb-2">
                Our Mission
              </div>
              <h3 className="font-display text-3xl font-bold mb-4">
                Democratize AI for Businesses Worldwide
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                We make enterprise-grade artificial intelligence accessible to
                every organization, regardless of size, budget, or technical
                expertise. AI should be a superpower for everyone.
              </p>
            </div>
            <div className="glass-card rounded-3xl p-10">
              <Lightbulb className="w-10 h-10 text-primary mb-6" />
              <div className="text-primary text-xs font-semibold uppercase tracking-widest mb-2">
                Our Vision
              </div>
              <h3 className="font-display text-3xl font-bold mb-4">
                Build Intelligent Enterprises Powered by Automation
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                We envision a world where every enterprise operates with
                AI-powered intelligence at its core — making smarter decisions
                faster, automating the mundane, and focusing human talent on
                what matters most.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-4xl font-bold text-center mb-12">
            Our <span className="gradient-text">Core Values</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value) => (
              <div
                key={value.title}
                className="glass-card rounded-2xl p-6 text-center"
              >
                <div className="w-12 h-12 rounded-xl btn-primary flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-display text-lg font-bold mb-3">
                  {value.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {value.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 section-gradient">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-4xl font-bold text-center mb-12">
            Meet the <span className="gradient-text">Leadership Team</span>
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-5">
            {team.map((member) => (
              <div
                key={member.name}
                className="glass-card rounded-2xl p-5 text-center"
              >
                <div
                  className={`w-16 h-16 rounded-full bg-gradient-to-br ${member.bg} flex items-center justify-center text-white font-bold text-xl mx-auto mb-4`}
                >
                  {member.name[0]}
                </div>
                <div className="font-semibold text-sm">{member.name}</div>
                <div className="text-xs text-muted-foreground mt-1">
                  {member.role}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="font-display text-4xl font-bold mb-4">
            Join Our <span className="gradient-text">AI Journey</span>
          </h2>
          <p className="text-muted-foreground mb-8">
            Ready to transform your organization with AI? Let's build something
            remarkable together.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              type="button"
              data-ocid="about.contact_us.primary_button"
              onClick={() => navigate("contact")}
              className="px-8 py-4 rounded-xl font-semibold btn-primary text-white inline-flex items-center gap-2"
            >
              Work with Us <ArrowRight className="w-5 h-5" />
            </button>
            <button
              type="button"
              data-ocid="about.view_solutions.secondary_button"
              onClick={() => navigate("solutions")}
              className="px-8 py-4 rounded-xl font-semibold btn-outline-cyan"
            >
              View Solutions
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

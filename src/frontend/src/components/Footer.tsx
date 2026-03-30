import { Github, Linkedin, Mail, Phone, Twitter, Zap } from "lucide-react";
import type { Page } from "../App";

interface FooterProps {
  navigate: (page: Page) => void;
}

export default function Footer({ navigate }: FooterProps) {
  return (
    <footer className="border-t border-border/50 bg-gradient-to-b from-background to-[oklch(0.05_0.01_270)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Col 1: Brand */}
          <div className="lg:col-span-1">
            <button
              type="button"
              onClick={() => navigate("home")}
              className="flex items-center gap-2 mb-4"
            >
              <div className="w-9 h-9 rounded-xl btn-primary flex items-center justify-center">
                <Zap className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold font-display gradient-text-purple-cyan">
                Zawaago
              </span>
            </button>
            <p className="text-sm text-muted-foreground leading-relaxed mb-6">
              AI solutions for modern businesses. Automation. Intelligence.
              Growth.
            </p>
            <div className="flex gap-3">
              {[
                { Icon: Twitter, href: "https://twitter.com" },
                { Icon: Linkedin, href: "https://linkedin.com" },
                { Icon: Github, href: "https://github.com" },
              ].map(({ Icon, href }) => (
                <a
                  key={href}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  className="w-9 h-9 rounded-lg glass-card flex items-center justify-center text-muted-foreground hover:text-accent transition-colors"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Col 2: Solutions */}
          <div>
            <h4 className="font-semibold text-foreground mb-4 font-display">
              Solutions
            </h4>
            <ul className="space-y-2.5">
              {[
                "AI Automation",
                "AI Chatbots",
                "AI Analytics",
                "AI Consulting",
              ].map((item) => (
                <li key={item}>
                  <button
                    type="button"
                    onClick={() => navigate("solutions")}
                    className="text-sm text-muted-foreground hover:text-accent transition-colors"
                  >
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Industries */}
          <div>
            <h4 className="font-semibold text-foreground mb-4 font-display">
              Industries
            </h4>
            <ul className="space-y-2.5">
              {[
                "Healthcare",
                "Retail",
                "Finance",
                "Manufacturing",
                "Education",
              ].map((item) => (
                <li key={item}>
                  <button
                    type="button"
                    onClick={() => navigate("industries")}
                    className="text-sm text-muted-foreground hover:text-accent transition-colors"
                  >
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Resources */}
          <div>
            <h4 className="font-semibold text-foreground mb-4 font-display">
              Resources
            </h4>
            <ul className="space-y-2.5">
              {[
                { label: "Blog", page: "resources" as Page },
                { label: "AI Guides", page: "resources" as Page },
                { label: "Case Studies", page: "case-studies" as Page },
                { label: "Whitepapers", page: "resources" as Page },
              ].map((item) => (
                <li key={item.label}>
                  <button
                    type="button"
                    onClick={() => navigate(item.page)}
                    className="text-sm text-muted-foreground hover:text-accent transition-colors"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 5: Contact */}
          <div>
            <h4 className="font-semibold text-foreground mb-4 font-display">
              Contact
            </h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-sm text-muted-foreground">
                <Mail className="w-4 h-4 text-accent shrink-0" />
                <a
                  href="mailto:info@zawaago.com"
                  className="hover:text-accent transition-colors"
                >
                  info@zawaago.com
                </a>
              </li>
              <li className="flex items-center gap-2 text-sm text-muted-foreground">
                <Phone className="w-4 h-4 text-accent shrink-0" />
                <a
                  href="tel:+918533899999"
                  className="hover:text-accent transition-colors"
                >
                  +91 85338 99999
                </a>
              </li>
            </ul>
            <button
              type="button"
              onClick={() => navigate("contact")}
              className="mt-6 px-4 py-2 rounded-lg text-sm font-semibold btn-primary text-white w-full"
            >
              Book Consultation
            </button>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border/30 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Zawaago. All rights reserved.
          </p>
          <div className="flex gap-6">
            {["Privacy Policy", "Terms of Service", "Cookie Policy"].map(
              (item) => (
                <button
                  key={item}
                  type="button"
                  className="text-xs text-muted-foreground hover:text-accent transition-colors"
                >
                  {item}
                </button>
              ),
            )}
          </div>
        </div>
      </div>
    </footer>
  );
}

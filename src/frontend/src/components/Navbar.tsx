import { ChevronDown, Menu, X, Zap } from "lucide-react";
import { useEffect, useState } from "react";
import type { Page } from "../App";

interface NavbarProps {
  currentPage: Page;
  navigate: (page: Page) => void;
}

const navItems = [
  {
    label: "Solutions",
    page: "solutions" as Page,
    dropdown: [
      { label: "AI Customer Support", page: "solutions" as Page },
      { label: "AI Marketing", page: "solutions" as Page },
      { label: "AI Finance Automation", page: "solutions" as Page },
      { label: "AI HR & Workforce", page: "solutions" as Page },
      { label: "AI Operations", page: "solutions" as Page },
    ],
  },
  {
    label: "Industries",
    page: "industries" as Page,
    dropdown: [
      { label: "Healthcare", page: "industries" as Page },
      { label: "Retail & E-commerce", page: "industries" as Page },
      { label: "Finance & Banking", page: "industries" as Page },
      { label: "Manufacturing", page: "industries" as Page },
      { label: "Education", page: "industries" as Page },
    ],
  },
  { label: "Departments", page: "departments" as Page },
  {
    label: "Products",
    page: "products" as Page,
    dropdown: [
      { label: "AI Copilot", page: "products" as Page },
      { label: "Automation Studio", page: "products" as Page },
      { label: "Insight Engine", page: "products" as Page },
      { label: "Smart Chat", page: "products" as Page },
    ],
  },
  {
    label: "Resources",
    page: "resources" as Page,
    dropdown: [
      { label: "Case Studies", page: "case-studies" as Page },
      { label: "Blog & Insights", page: "resources" as Page },
      { label: "AI Guides", page: "resources" as Page },
    ],
  },
  { label: "Pricing", page: "pricing" as Page },
  { label: "About", page: "about" as Page },
];

export default function Navbar({ currentPage, navigate }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "glass-card shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <button
            type="button"
            data-ocid="nav.home.link"
            onClick={() => navigate("home")}
            className="flex items-center gap-2 group"
          >
            <div className="w-9 h-9 rounded-xl btn-primary flex items-center justify-center">
              <Zap className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold font-display gradient-text-purple-cyan">
              Zawaago
            </span>
          </button>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() =>
                  item.dropdown && setOpenDropdown(item.label)
                }
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <button
                  type="button"
                  data-ocid={`nav.${item.label.toLowerCase()}.link`}
                  onClick={() => navigate(item.page)}
                  className={`flex items-center gap-1 px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                    currentPage === item.page
                      ? "text-accent bg-accent/10"
                      : "text-muted-foreground hover:text-foreground hover:bg-white/5"
                  }`}
                >
                  {item.label}
                  {item.dropdown && <ChevronDown className="w-3.5 h-3.5" />}
                </button>
                {item.dropdown && openDropdown === item.label && (
                  <div className="absolute top-full left-0 mt-1 w-52 glass-card rounded-xl p-1.5 shadow-xl">
                    {item.dropdown.map((sub) => (
                      <button
                        type="button"
                        key={sub.label}
                        data-ocid={`nav.${sub.label.toLowerCase().replace(/ /g, "_")}.link`}
                        onClick={() => {
                          navigate(sub.page);
                          setOpenDropdown(null);
                        }}
                        className="w-full text-left px-3 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-primary/10 rounded-lg transition-colors"
                      >
                        {sub.label}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <button
              type="button"
              data-ocid="nav.contact.link"
              onClick={() => navigate("contact")}
              className="px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              Contact
            </button>
            <button
              type="button"
              data-ocid="nav.book_consultation.primary_button"
              onClick={() => navigate("contact")}
              className="px-5 py-2.5 rounded-xl text-sm font-semibold btn-primary text-white"
            >
              Book Consultation
            </button>
          </div>

          {/* Mobile menu */}
          <button
            type="button"
            data-ocid="nav.mobile_menu.toggle"
            className="lg:hidden p-2 rounded-lg hover:bg-white/5 transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? (
              <X className="w-5 h-5" />
            ) : (
              <Menu className="w-5 h-5" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile nav */}
      {mobileOpen && (
        <div className="lg:hidden glass-card border-t border-border/50 max-h-[80vh] overflow-y-auto">
          <div className="px-4 py-4 space-y-1">
            {navItems.map((item) => (
              <button
                type="button"
                key={item.label}
                data-ocid={`nav.mobile.${item.label.toLowerCase()}.link`}
                onClick={() => {
                  navigate(item.page);
                  setMobileOpen(false);
                }}
                className="w-full text-left px-4 py-3 rounded-xl text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-white/5 transition-colors"
              >
                {item.label}
              </button>
            ))}
            <button
              type="button"
              data-ocid="nav.mobile.contact.link"
              onClick={() => {
                navigate("contact");
                setMobileOpen(false);
              }}
              className="w-full text-left px-4 py-3 rounded-xl text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-white/5 transition-colors"
            >
              Contact
            </button>
            <button
              type="button"
              data-ocid="nav.mobile.book_consultation.primary_button"
              onClick={() => {
                navigate("contact");
                setMobileOpen(false);
              }}
              className="w-full px-4 py-3 rounded-xl text-sm font-semibold btn-primary text-white"
            >
              Book Consultation
            </button>
          </div>
        </div>
      )}
    </header>
  );
}

import { CheckCircle, Loader2, Mail, MapPin, Phone, Send } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import type { Page } from "../App";
import { useActor } from "../hooks/useActor";

interface Props {
  navigate: (page: Page) => void;
}

export default function Contact({ navigate: _navigate }: Props) {
  const { actor } = useActor();
  const [form, setForm] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    projectDetails: "",
  });
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.projectDetails) {
      toast.error("Please fill in all required fields.");
      return;
    }
    setSubmitting(true);
    try {
      await actor?.submitContactForm(
        form.name,
        form.company,
        form.email,
        form.phone,
        form.projectDetails,
      );
      setSubmitted(true);
      toast.success("Message sent! We'll be in touch within 24 hours.");
    } catch {
      toast.error(
        "Something went wrong. Please try again or email us directly.",
      );
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="pt-20">
      <section className="py-20 section-gradient neural-bg">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="font-display text-5xl sm:text-6xl font-bold mb-6">
            Let's Build <span className="gradient-text">Something Great</span>
          </h1>
          <p className="text-xl text-muted-foreground">
            Tell us about your AI challenge. Our experts will respond within 24
            hours with a tailored approach.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            {/* Contact Info */}
            <div className="lg:col-span-2 space-y-8">
              <div>
                <h2 className="font-display text-2xl font-bold mb-6">
                  Get in Touch
                </h2>
                <div className="space-y-4">
                  {[
                    {
                      icon: Mail,
                      label: "Email Us",
                      value: "info@zawaago.com",
                      href: "mailto:info@zawaago.com",
                    },
                    {
                      icon: Phone,
                      label: "Call / WhatsApp",
                      value: "+91 85338 99999",
                      href: "tel:+918533899999",
                    },
                    {
                      icon: MapPin,
                      label: "Headquarters",
                      value: "Global AI Consulting Company",
                      href: "#",
                    },
                  ].map((item) => (
                    <a
                      key={item.label}
                      href={item.href}
                      className="flex items-start gap-4 glass-card rounded-xl p-4 hover:border-accent/40 transition-all group"
                    >
                      <div className="w-10 h-10 rounded-lg btn-primary flex items-center justify-center shrink-0">
                        <item.icon className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <div className="text-xs text-muted-foreground mb-0.5">
                          {item.label}
                        </div>
                        <div className="font-medium text-sm group-hover:text-accent transition-colors">
                          {item.value}
                        </div>
                      </div>
                    </a>
                  ))}
                </div>
              </div>

              {/* Map placeholder */}
              <div className="glass-card rounded-2xl h-48 flex items-center justify-center overflow-hidden relative">
                <div className="absolute inset-0 hero-grid opacity-30" />
                <div className="text-center z-10">
                  <MapPin className="w-8 h-8 text-accent mx-auto mb-2" />
                  <div className="text-sm font-medium">Global Presence</div>
                  <div className="text-xs text-muted-foreground">
                    Serving clients in 30+ countries
                  </div>
                </div>
              </div>

              <div className="glass-card rounded-2xl p-6">
                <h3 className="font-semibold mb-3">Response Time</h3>
                <div className="space-y-2">
                  {[
                    { label: "General inquiries", time: "< 24 hours" },
                    { label: "Enterprise requests", time: "< 4 hours" },
                    { label: "Technical support", time: "< 2 hours" },
                  ].map((item) => (
                    <div
                      key={item.label}
                      className="flex justify-between text-sm"
                    >
                      <span className="text-muted-foreground">
                        {item.label}
                      </span>
                      <span className="font-medium text-accent">
                        {item.time}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-3">
              <div className="glass-card rounded-3xl p-8">
                {submitted ? (
                  <div
                    data-ocid="contact.success_state"
                    className="text-center py-12"
                  >
                    <div className="w-16 h-16 rounded-full bg-emerald-500/20 flex items-center justify-center mx-auto mb-6">
                      <CheckCircle className="w-8 h-8 text-emerald-400" />
                    </div>
                    <h3 className="font-display text-2xl font-bold mb-3">
                      Message Sent!
                    </h3>
                    <p className="text-muted-foreground mb-6">
                      Thank you for reaching out. Our AI experts will be in
                      touch within 24 hours.
                    </p>
                    <button
                      type="button"
                      onClick={() => setSubmitted(false)}
                      className="px-6 py-2.5 rounded-xl btn-outline-cyan text-sm font-medium"
                    >
                      Send Another Message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <h2 className="font-display text-2xl font-bold mb-6">
                      Start Your AI Journey
                    </h2>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label
                          htmlFor="contact-name"
                          className="block text-sm font-medium mb-2"
                        >
                          Full Name *
                        </label>
                        <input
                          id="contact-name"
                          data-ocid="contact.name.input"
                          type="text"
                          required
                          value={form.name}
                          onChange={(e) =>
                            setForm({ ...form, name: e.target.value })
                          }
                          placeholder="John Smith"
                          className="w-full px-4 py-3 rounded-xl bg-muted border border-border focus:outline-none focus:border-accent text-sm transition-colors"
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="contact-company"
                          className="block text-sm font-medium mb-2"
                        >
                          Company
                        </label>
                        <input
                          id="contact-company"
                          data-ocid="contact.company.input"
                          type="text"
                          value={form.company}
                          onChange={(e) =>
                            setForm({ ...form, company: e.target.value })
                          }
                          placeholder="Acme Corp"
                          className="w-full px-4 py-3 rounded-xl bg-muted border border-border focus:outline-none focus:border-accent text-sm transition-colors"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label
                          htmlFor="contact-email"
                          className="block text-sm font-medium mb-2"
                        >
                          Business Email *
                        </label>
                        <input
                          id="contact-email"
                          data-ocid="contact.email.input"
                          type="email"
                          required
                          value={form.email}
                          onChange={(e) =>
                            setForm({ ...form, email: e.target.value })
                          }
                          placeholder="john@company.com"
                          className="w-full px-4 py-3 rounded-xl bg-muted border border-border focus:outline-none focus:border-accent text-sm transition-colors"
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="contact-phone"
                          className="block text-sm font-medium mb-2"
                        >
                          Phone / WhatsApp
                        </label>
                        <input
                          id="contact-phone"
                          data-ocid="contact.phone.input"
                          type="tel"
                          value={form.phone}
                          onChange={(e) =>
                            setForm({ ...form, phone: e.target.value })
                          }
                          placeholder="+91 85338 99999"
                          className="w-full px-4 py-3 rounded-xl bg-muted border border-border focus:outline-none focus:border-accent text-sm transition-colors"
                        />
                      </div>
                    </div>

                    <div>
                      <label
                        htmlFor="contact-project"
                        className="block text-sm font-medium mb-2"
                      >
                        Project Details *
                      </label>
                      <textarea
                        id="contact-project"
                        data-ocid="contact.project_details.textarea"
                        required
                        value={form.projectDetails}
                        onChange={(e) =>
                          setForm({ ...form, projectDetails: e.target.value })
                        }
                        placeholder="Tell us about your AI challenge, goals, and timeline..."
                        rows={5}
                        className="w-full px-4 py-3 rounded-xl bg-muted border border-border focus:outline-none focus:border-accent text-sm resize-none transition-colors"
                      />
                    </div>

                    <button
                      type="submit"
                      data-ocid="contact.submit.submit_button"
                      disabled={submitting}
                      className="w-full py-4 rounded-xl btn-primary text-white font-semibold flex items-center justify-center gap-2 disabled:opacity-70"
                    >
                      {submitting ? (
                        <>
                          <Loader2 className="w-5 h-5 animate-spin" />{" "}
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send className="w-5 h-5" /> Send Message
                        </>
                      )}
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

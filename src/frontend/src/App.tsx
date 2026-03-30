import { Toaster } from "@/components/ui/sonner";
import { useEffect, useState } from "react";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import AISolutions from "./pages/AISolutions";
import About from "./pages/About";
import CaseStudies from "./pages/CaseStudies";
import Contact from "./pages/Contact";
import Departments from "./pages/Departments";
import Home from "./pages/Home";
import Industries from "./pages/Industries";
import Pricing from "./pages/Pricing";
import Products from "./pages/Products";
import Resources from "./pages/Resources";

export type Page =
  | "home"
  | "solutions"
  | "industries"
  | "departments"
  | "products"
  | "case-studies"
  | "resources"
  | "pricing"
  | "about"
  | "contact";

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>("home");

  const navigate = (page: Page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    document.title =
      "Zawaago – AI Solutions for Business Automation and Intelligence";
    const meta = document.querySelector('meta[name="description"]');
    if (meta) {
      meta.setAttribute(
        "content",
        "Zawaago provides enterprise AI solutions for automation, analytics, chatbots, and generative AI across marketing, HR, finance, and operations.",
      );
    }
  }, []);

  const renderPage = () => {
    switch (currentPage) {
      case "home":
        return <Home navigate={navigate} />;
      case "solutions":
        return <AISolutions navigate={navigate} />;
      case "industries":
        return <Industries navigate={navigate} />;
      case "departments":
        return <Departments navigate={navigate} />;
      case "products":
        return <Products navigate={navigate} />;
      case "case-studies":
        return <CaseStudies navigate={navigate} />;
      case "resources":
        return <Resources navigate={navigate} />;
      case "pricing":
        return <Pricing navigate={navigate} />;
      case "about":
        return <About navigate={navigate} />;
      case "contact":
        return <Contact navigate={navigate} />;
      default:
        return <Home navigate={navigate} />;
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar currentPage={currentPage} navigate={navigate} />
      <main>{renderPage()}</main>
      <Footer navigate={navigate} />
      <Toaster />
    </div>
  );
}

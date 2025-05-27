
import { Hero } from "@/components/Hero";
import { MacbookShowcase } from "@/components/MacbookShowcase";
import { Features } from "@/components/Features";
import { Demo } from "@/components/Demo";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 overflow-x-hidden">
      <Hero />
      <MacbookShowcase />
      <Features />
      <Demo />
      <Footer />
    </div>
  );
};

export default Index;

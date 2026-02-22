import { Navbar } from "@/features/landing/components/Navbar";
import { Hero } from "@/features/landing/components/Hero";
import { Stats } from "@/features/landing/components/Stats";
import { ProblemSolution } from "@/features/landing/components/ProblemSolution";
import { SystemFeatures } from "@/features/landing/components/SystemFeatures";
import { PlanComparison } from "@/features/landing/components/PlanComparison";
import { AboutArchitect } from "@/features/landing/components/AboutArchitect";
import { Products } from "@/features/landing/components/Products";
import { Testimonials } from "@/features/landing/components/Testimonials";
import { QualifyNow } from "@/features/landing/components/QualifyNow";
import { Footer } from "@/features/landing/components/Footer";
import { AIChatWidget } from "@/features/ai-chat/components/AIChatWidget";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <Stats />
      <AboutArchitect />
      <ProblemSolution />
      <SystemFeatures />
      <PlanComparison />
      <Products />
      <Testimonials />
      <QualifyNow />
      <Footer />
      <AIChatWidget />
    </main>
  );
}

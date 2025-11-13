import SiteHeader from "@/components/SiteHeader";
import Hero from "@/components/Hero";
import AreasOfExpertise from "@/components/AreasOfExpertise";
import About from "@/components/About";
import ContactSection from "@/components/ContactSection";
import SiteFooter from "@/components/SiteFooter";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-brand-light text-brand-dark">
      <SiteHeader />
      <Hero />
      <AreasOfExpertise />
      <About />
      <ContactSection />
      <SiteFooter />
    </main>
  );
}


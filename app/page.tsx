import Header from "@/components/Header";
import Hero from "@/components/Hero";
import CoreCssSection from "@/components/CoreCssSection";
import TailwindSection from "@/components/TailwindSection";
import FeaturesBento from "@/components/FeaturesBento";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#030014] text-white selection:bg-indigo-500/30">
      <Header />
      <Hero />
      <CoreCssSection />
      <TailwindSection />
      <FeaturesBento />
      <Footer />

      {/* Anchors for navigation (optional) */}
      <div id="playground" />
      <div id="templates" />
    </main>
  );
}

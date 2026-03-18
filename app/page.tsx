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
      <section className="sr-only">
        <h1>Visual CSS Playground, Tailwind CSS Generator & CSS Effects Library</h1>
        <p>
          Codophile is a visual CSS playground that allows developers to design UI in real-time,
          generate Tailwind CSS classes, and explore cool CSS effects with code. Build responsive
          layouts, experiment with styles, and export production-ready code instantly.
        </p>
      </section>
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

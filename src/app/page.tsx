import FeatureCards from "@/components/Home/FeatureCards";
import HeroSection from "@/components/Home/HeroSection";
import InsititutionSection from "@/components/Home/InsititutionSection";

export default function Home() {
  return (
    <main className="pb-4">
      <HeroSection />
      <InsititutionSection />
      <FeatureCards />
    </main>
  );
}

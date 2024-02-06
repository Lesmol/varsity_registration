import FeatureCards from "@/components/Home/FeatureCards";
import HeroSection from "@/components/Home/HeroSection";
import InsititutionSection from "@/components/Home/InsititutionSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <InsititutionSection />
      <FeatureCards />
      <div className="mb-20"></div>
    </>
  );
}

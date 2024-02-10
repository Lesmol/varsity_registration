import FeatureCards from "@/components/Home/FeatureCards";
import HeroSection from "@/components/Home/HeroSection";
import InsititutionSection from "@/components/Home/InsititutionSection";
import { UserAuth } from "./context/AuthContext";

export default function Home() {
  const user = UserAuth();
  return (
    <main className="pb-4">
      {user}
      <HeroSection />
      <InsititutionSection />
      <FeatureCards />
    </main>
  );
}

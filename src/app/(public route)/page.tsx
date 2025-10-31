import { HeroSection } from "@/components/modules/Home/HeroSection/HeroSection";
import { HowToUseSection } from "@/components/modules/Home/HowToUseSection/HowToUseSection";
import { TopDoctorsSection } from "@/components/modules/Home/TopDoctors/TopDoctors";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <HowToUseSection />
      <TopDoctorsSection />
    </div>
  );
}

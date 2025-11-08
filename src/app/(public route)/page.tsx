import HeroSection from "@/components/sections/Home/HeroSection/HeroSection";
import HowToUseSection from "@/components/sections/Home/HowToUseSection/HowToUseSection";
import PatientReviews from "@/components/sections/Home/reviews/PatientReviews";
import { TopDoctorsSection } from "@/components/sections/Home/TopDoctors/TopDoctors";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <HowToUseSection />
      <TopDoctorsSection />
      <PatientReviews />
    </div>
  );
}

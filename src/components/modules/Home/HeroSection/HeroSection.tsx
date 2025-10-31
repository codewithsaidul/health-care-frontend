import HeroLeft from "./HeroLeft";
import HeroRIght from "./HeroRIght";


export function HeroSection() {
  return (
    <section className="relative bg-linear-to-br from-primary/5 via-background to-accent/5 py-20 md:py-32 overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-accent/50 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/50 rounded-full blur-3xl -z-10" />


      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <HeroLeft />

          {/* Right Visual */}
          <HeroRIght />
        </div>
      </div>
    </section>
  );
}

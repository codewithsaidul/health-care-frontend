import Image from "next/image";

export default function HeroRIght() {
  return (
    <div className="relative hidden lg:block">
      <div className="relative w-full aspect-square">
        {/* Main card */}
        <div className="absolute inset-0 bg-linear-to-br from-primary/20 to-accent/20 rounded-3xl border border-primary/20 backdrop-blur-sm">
          <Image
            src="/doctors/female-doctor-cardiologist.jpg"
            alt="hero image"
            fill
            priority
            unoptimized
            className="rounded-3xl"
          />
        </div>

        {/* Floating cards */}
        <div className="absolute top-2 right-2 bg-card border border-border rounded-2xl p-6 shadow-lg max-w-xs">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center">
              <span className="text-2xl">👨‍⚕️</span>
            </div>
            <div>
              <p className="font-semibold text-foreground text-sm">
                Dr. Sarah Johnson
              </p>
              <p className="text-xs text-muted-foreground">Cardiologist</p>
            </div>
          </div>
          <p className="text-sm text-muted-foreground">
            Available for consultation
          </p>
        </div>

        <div className="absolute bottom-12 left-8 bg-card border border-border rounded-2xl p-6 shadow-lg max-w-xs">
          <div className="flex items-center gap-2 mb-3">
            <span className="text-2xl">⭐</span>
            <p className="font-semibold text-foreground text-sm">
              4.9/5 Rating
            </p>
          </div>
          <p className="text-xs text-muted-foreground">
            Based on 2,500+ reviews
          </p>
        </div>
      </div>
    </div>
  );
}

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowRight, CalendarIcon, Search, ShieldCheckIcon, SparklesIcon } from "lucide-react";
import Link from "next/link";

export function HeroSection() {
  return (
    <section className="relative bg-linear-to-br from-primary/5 via-background to-accent/5 py-20 md:py-32 overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl -z-10" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center space-x-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium">
                <SparklesIcon className="h-4 w-4" />
                <span>AI-Powered Healthcare</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight text-balance">
                Find Your Perfect Doctor With,{" "}
                <span className="text-primary">AI Intelligence</span>
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed max-w-lg">
                Our advanced AI-driven doctor suggestion system analyzes your symptoms, medical history, and preferences to match you with the best-fit healthcare professionals in seconds.
              </p>
            </div>

            {/* Search Bar */}
            <div className="flex flex-col sm:flex-row gap-3 max-w-lg">
              <div className="flex-1 relative">
                <Search
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground"
                  size={20}
                />
                <Input
                  type="text"
                  placeholder="Describe your symptoms..."
                  className="w-full pl-12 pr-4 py-5 bg-card border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 text-foreground placeholder:text-muted-foreground"
                />
              </div>
              <Button className="px-6 py-5">Search</Button>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="gap-2" asChild>
                <Link href="/register" className="flex items-center gap-2">
                  Get Started
                  <ArrowRight size={20} />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="hover:bg-white/70 hover:text-black" asChild>
                <Link href="/doctors">Browse Doctors</Link>
              </Button>
            </div>

            {/* Stats */}
               <div className="grid grid-cols-3 gap-4 pt-4">
              <div className="flex items-center space-x-2">
                <Search className="h-5 w-5 text-primary" />
                <span className="text-sm text-gray-600">Smart Matching</span>
              </div>
              <div className="flex items-center space-x-2">
                <CalendarIcon className="h-5 w-5 text-primary" />
                <span className="text-sm text-gray-600">Instant Booking</span>
              </div>
              <div className="flex items-center space-x-2">
                <ShieldCheckIcon className="h-5 w-5 text-primary" />
                <span className="text-sm text-gray-600">Verified Doctors</span>
              </div>
            </div>
          </div>

          {/* Right Visual */}
          <div className="relative hidden lg:block">
            <div className="relative w-full aspect-square">
              {/* Main card */}
              <div className="absolute inset-0 bg-linear-to-br from-primary/20 to-accent/20 rounded-3xl border border-primary/20 backdrop-blur-sm" />

              {/* Floating cards */}
              <div className="absolute top-8 right-8 bg-card border border-border rounded-2xl p-6 shadow-lg max-w-xs">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center">
                    <span className="text-2xl">👨‍⚕️</span>
                  </div>
                  <div>
                    <p className="font-semibold text-foreground text-sm">
                      Dr. Sarah Johnson
                    </p>
                    <p className="text-xs text-muted-foreground">
                      Cardiologist
                    </p>
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
        </div>
      </div>
    </section>
  );
}

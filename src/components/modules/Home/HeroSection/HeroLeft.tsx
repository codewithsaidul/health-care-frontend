import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  ArrowRight,
  CalendarIcon,
  Search,
  ShieldCheckIcon,
  SparklesIcon,
} from "lucide-react";
import Link from "next/link";

export default function HeroLeft() {
  return (
    <div className="space-y-8 max-lg:flex max-lg:flex-col max-lg:items-center">
      <div className="space-y-4 max-lg:text-center">
        <div className="inline-flex items-center space-x-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium">
          <SparklesIcon className="h-4 w-4" />
          <span>AI-Powered Healthcare</span>
        </div>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight text-balance">
          Find Your Perfect Doctor With,{" "}
          <span className="text-primary">AI Intelligence</span>
        </h1>
        <p className="text-lg text-muted-foreground leading-relaxed max-w-xl mx-auto">
          Our advanced AI-driven doctor suggestion system analyzes your
          symptoms, medical history, and preferences to match you with the
          best-fit healthcare professionals in seconds.
        </p>
      </div>

      {/* Search Bar */}
      <div className="w-full flex flex-col sm:flex-row gap-3 max-w-lg">
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
      <div className="flex flex-row gap-4">
        <Button size="lg" className="gap-2" asChild>
          <Link href="/register" className="flex items-center gap-2">
            Get Started
            <ArrowRight size={20} />
          </Link>
        </Button>
        <Button
          size="lg"
          variant="outline"
          className="hover:bg-white/70 hover:text-black"
          asChild
        >
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
  );
}

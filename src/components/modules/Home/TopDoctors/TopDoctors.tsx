import { Button } from "@/components/ui/button";
import { doctors } from "@/data/doctor.constants";
import Link from "next/link";
import TopDoctor from "./TopDoctor";

export function TopDoctorsSection() {
  return (
    <section id="doctors" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground text-balance">
            Meet Our Top Doctors
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Highly qualified and experienced healthcare professionals ready to
            provide you with the best care.
          </p>
        </div>

        {/* Doctors Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {doctors.map((doctor) => (
            <TopDoctor key={doctor.id} doctor={doctor} />
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <Button
            variant="outline"
            size="lg"
            className="duration-700! hover:bg-primary hover:duration-700! cursor-pointer transform transition-colors"
          >
            <Link href="/doctors">View All Doctors</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}

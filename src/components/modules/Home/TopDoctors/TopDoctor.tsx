import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { IDoctor } from "@/types/doctor.types";
import { Clock, MapPin, Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function TopDoctor({ doctor }: { doctor: IDoctor }) {
  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300 flex flex-col pt-0">
      {/* Doctor Image */}
      <div className="relative aspect-square min-h-[200px] max-h-[400px] bg-muted overflow-hidden">
        <Image
          src={doctor.image || "/placeholder.svg"}
          alt={doctor.name}
          fill
          unoptimized
          className="w-full h-full object-center"
        />
        <div className="absolute top-4 right-4 bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-medium">
          {doctor.specialty}
        </div>
      </div>

      {/* Doctor Info */}
      <div className="p-6 flex flex-col flex-1">
        <h3 className="text-xl font-bold text-foreground mb-2">
          {doctor.name}
        </h3>

        {/* Location */}
        <div className="flex items-center gap-2 text-muted-foreground text-sm mb-4">
          <MapPin size={16} />
          <span>{doctor.location}</span>
        </div>

        {/* Rating */}
        <div className="flex items-center gap-2 mb-4">
          <div className="flex items-center gap-1">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                size={16}
                className={
                  i < Math.floor(doctor.rating)
                    ? "fill-primary text-primIDoctorary"
                    : "text-muted"
                }
              />
            ))}
          </div>
          <span className="text-sm font-medium text-foreground">
            {doctor.rating}
          </span>
          <span className="text-sm text-muted-foreground">
            ({doctor.reviews})
          </span>
        </div>

        {/* Availability */}
        <div className="flex items-center gap-2 text-sm text-accent mb-6 flex-1">
          <Clock size={16} />
          <span>{doctor.availability}</span>
        </div>

        {/* Book Button */}
        <Button className="w-full">
          <Link href={`/book/${doctor.id}`}>Book Appointment</Link>
        </Button>
      </div>
    </Card>
  );
}

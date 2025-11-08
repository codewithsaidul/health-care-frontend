import { Star } from "lucide-react";

export default function StatsCard() {
  return (
    <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 bg-primary/5 rounded-2xl p-8 md:p-12">
      <div className="text-center">
        <p className="text-4xl md:text-5xl font-bold text-primary mb-2">
          4.9/5
        </p>
        <p className="text-muted-foreground">Average Rating</p>
        <div className="flex justify-center gap-1 mt-3">
          {[...Array(5)].map((_, i) => (
            <Star key={i} size={16} className="fill-primary text-primary" />
          ))}
        </div>
      </div>
      <div className="text-center">
        <p className="text-4xl md:text-5xl font-bold text-primary mb-2">50K+</p>
        <p className="text-muted-foreground">Happy Patients</p>
      </div>
      <div className="text-center">
        <p className="text-4xl md:text-5xl font-bold text-primary mb-2">98%</p>
        <p className="text-muted-foreground">Satisfaction Rate</p>
      </div>
    </div>
  );
}

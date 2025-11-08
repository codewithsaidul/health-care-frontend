import { reviews } from "@/data/review.constants";
import ReviewCard from "./ReviewCard";
import StatsCard from "./StatsCard";

export default function PatientReviews() {
  return (
    <section id="reviews" className="w-full py-20 md:py-32 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900">
            What Our Patients Say
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Real experiences from patients who found their perfect healthcare
            match
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {reviews.map((review) => <ReviewCard key={review.id} review={review} />)}
        </div>


        {/* stats card */}
        <StatsCard />
      </div>
    </section>
  );
}

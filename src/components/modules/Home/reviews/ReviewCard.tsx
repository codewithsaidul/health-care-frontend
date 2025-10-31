import { IReviews } from "@/types/reviews.types";
import { QuoteIcon, StarIcon } from "lucide-react";
import Image from "next/image";

export default function ReviewCard({ review }: { review: IReviews }) {
  return (
    <div className="bg-white rounded-xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-shadow">
      <QuoteIcon className="h-8 w-8 text-blue-600 mb-4" />
      <div className="flex items-center mb-4">
        {[...Array(review.rating)].map((_, i) => (
          <StarIcon
            key={i}
            className="h-5 w-5 fill-yellow-400 text-yellow-400"
          />
        ))}
      </div>
      <p className="text-gray-700 mb-6 leading-relaxed">{review.text}</p>
      <div className="flex items-center space-x-4">
        <figure className="w-12 h-12 aspect-square">
          <Image
            src={review.image}
            alt={review.name}
            width={48}
            height={48}
            className="rounded-full w-fll h-full object-cover"
          />
        </figure>
        <div>
          <p className="font-semibold text-gray-900">{review.name}</p>
          <p className="text-sm text-gray-500">{review.date}</p>
        </div>
      </div>
    </div>
  );
}

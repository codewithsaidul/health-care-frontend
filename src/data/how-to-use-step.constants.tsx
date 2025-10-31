import { IStep } from "@/types/how-to-use-step.types";
import { Calendar, FileText, MessageSquare, Search } from "lucide-react";

export const steps: IStep[] = [
  {
    id: 1,
    title: "Create Your Profile",
    description: "Sign up and fill in your health details",
    icon: <FileText className="w-8 h-8" />,
    benefits: ["Get instant matches", "Save time & effort", "Verified professionals"],
    details:
      "Complete your medical history and health preferences to help us match you with the perfect doctor.",
  },
  {
    id: 2,
    title: "Search & Browse",
    description: "Explore doctors by specialty",
    icon: <Search className="w-8 h-8" />,
    benefits: ["Get instant matches", "Save time & effort", "Verified professionals"],
    details:
      "Filter doctors by specialty, location, ratings, and availability to find the best fit for your needs.",
  },
  {
    id: 3,
    title: "Book Appointment",
    description: "Schedule at your convenience",
    icon: <Calendar className="w-8 h-8" />,
    benefits: ["Get instant matches", "Save time & effort", "Verified professionals"],
    details:
      "Choose your preferred date and time slot. Our AI helps match you with available doctors instantly.",
  },
  {
    id: 4,
    title: "Consult & Care",
    description: "Connect with your doctor",
    icon: <MessageSquare className="w-8 h-8" />,
    benefits: ["Get instant matches", "Save time & effort", "Verified professionals"],
    details:
      "Have your consultation via video or in-person, receive prescriptions, and track your health records.",
  },
];

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check, ArrowRight } from "lucide-react";
import { IStep } from "@/types/how-to-use-step.types";
import Link from "next/link";

export function StepContent({
  step,
  isActive,
  onNext,
  isLast,
}: {
  step: IStep;
  isActive: boolean;
  onNext: () => void;
  isLast: boolean;
}) {
  if (!isActive) return null;

  return (
    <Card className="p-8 w-full md:p-12 bg-linear-to-br from-primary/5 to-accent/5 border-primary/20 transition-all duration-500">
      <div className="space-y-6">
        <div className="w-20 h-20 bg-primary/10 rounded-2xl flex items-center justify-center text-primary">
          {step.icon}
        </div>
        <div className="space-y-4">
          <h3 className="text-2xl md:text-3xl font-bold">{step.title}</h3>
          <p className="text-muted-foreground text-base md:text-lg leading-relaxed">
            {step.details}
          </p>
        </div>

        {step.benefits && (
          <div className="space-y-3 pt-4">
            {step.benefits.map((b, i) => (
              <div key={i} className="flex items-center gap-3">
                <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center">
                  <Check size={16} className="text-primary" />
                </div>
                <span className="text-foreground text-sm md:text-base">
                  {b}
                </span>
              </div>
            ))}
          </div>
        )}
      </div>

      <div className="flex gap-4 mt-8">
        <Button className="gap-2 cursor-pointer" asChild>
          <Link href="/auth/register">
            Get Started <ArrowRight size={18} />
          </Link>
        </Button>
        {!isLast && (
          <Button
            variant="outline"
            onClick={onNext}
            className="cursor-pointer duration-500! hover:bg-primary! hover:duration-500! transform transition-colors"
          >
            Next Step
          </Button>
        )}
      </div>
    </Card>
  );
}

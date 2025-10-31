"use client"

import { useState } from "react"
import { StepList } from "./StepList"
import { StepContent } from "./StepContent"
import { StepIndicator } from "./StepIndicator"
import { steps } from "@/data/how-to-use-step.constants"


export function HowToUseSection() {
  const [activeStep, setActiveStep] = useState(1)
  const currentStep = steps.find((s) => s.id === activeStep)!

  return (
    <section className="py-20 md:py-32 bg-secondary/30 relative overflow-hidden">
      <div className="absolute top-0 left-1/4 w-72 h-72 bg-primary/5 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-accent/5 rounded-full blur-3xl -z-10" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <header className="text-center mb-16 space-y-4">
          <span className="px-4 py-2 bg-primary/10 mb-5! text-primary rounded-full text-sm font-semibold">
            Simple & Easy
          </span>
          <h2 className="text-4xl md:text-5xl mt-5 mb-2 font-bold text-foreground">
            How to Use Healthcare Management
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Follow these simple steps to find your perfect doctor and book an appointment in minutes.
          </p>
        </header>

        <div className="grid grid-cols-1 lg:items-center lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-4"><StepList steps={steps} activeStep={activeStep} onSelect={setActiveStep} /></div>
          <div className="lg:col-span-8">
            <StepContent
              step={currentStep}
              isActive
              onNext={() => setActiveStep((prev) => Math.min(prev + 1, steps.length))}
              isLast={activeStep === steps.length}
            />
          </div>
        </div>

        <StepIndicator
          totalSteps={steps.length}
          activeStep={activeStep}
          onSelect={setActiveStep}
        />
      </div>
    </section>
  )
}

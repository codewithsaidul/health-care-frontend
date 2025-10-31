interface StepIndicatorProps {
  totalSteps: number
  activeStep: number
  onSelect: (id: number) => void
}

export function StepIndicator({ totalSteps, activeStep, onSelect }: StepIndicatorProps) {
  return (
    <div className="mt-20 flex justify-center items-center gap-2">
      {Array.from({ length: totalSteps }, (_, i) => i + 1).map((id) => (
        <button
          key={id}
          onClick={() => onSelect(id)}
          className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
            activeStep === id ? "w-8 bg-primary" : "w-2 bg-muted-foreground"
          }`}
          aria-label={`Go to step ${id}`}
        />
      ))}
    </div>
  )
}

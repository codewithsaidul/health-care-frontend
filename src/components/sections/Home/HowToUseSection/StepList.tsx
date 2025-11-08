import StepCard from "./StepCard"


interface Step {
  id: number
  title: string
  description: string
}

export default function StepList({
  steps,
  activeStep,
  onSelect,
}: {
  steps: Step[]
  activeStep: number
  onSelect: (id: number) => void
}) {
  return (
    <div className="space-y-4">
      {steps.map((step) => (
        <StepCard
          key={step.id}
          id={step.id}
          title={step.title}
          description={step.description}
          isActive={activeStep === step.id}
          onClick={() => onSelect(step.id)}
        />
      ))}
    </div>
  )
}

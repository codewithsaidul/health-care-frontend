import { Card } from "@/components/ui/card"

interface StepCardProps {
  id: number
  title: string
  description: string
  isActive: boolean
  onClick: () => void
}

export default function StepCard({ id, title, description, isActive, onClick }: StepCardProps) {
  return (
    <button
      onClick={onClick}
      className={`w-full text-left transition-all duration-300 ${
        isActive ? "scale-105" : "opacity-70 hover:opacity-100"
      }`}
    >
      <Card
        className={`p-6 cursor-pointer border-2 transition-all duration-300 ${
          isActive
            ? "border-primary bg-primary/5 shadow-lg"
            : "border-transparent hover:border-primary/30"
        }`}
      >
        <div className="flex items-start gap-4">
          <div
            className={`w-12 h-12 rounded-full flex items-center justify-center shrink-0 transition-all duration-300 ${
              isActive ? "bg-primary text-primary-foreground" : "bg-secondary text-secondary-foreground"
            }`}
          >
            {id}
          </div>
          <div className="flex-1 min-w-0">
            <h3 className="font-semibold text-foreground text-sm md:text-base truncate">
              {title}
            </h3>
            <p className="text-xs md:text-sm text-muted-foreground mt-1">
              {description}
            </p>
          </div>
        </div>
      </Card>
    </button>
  )
}

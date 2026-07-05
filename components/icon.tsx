import {
  Gem,
  Map,
  UtensilsCrossed,
  Users,
  Clock,
  ScrollText,
  TrainFront,
  Mountain,
  Heart,
  Sparkles,
  type LucideIcon,
} from 'lucide-react'

const map: Record<string, LucideIcon> = {
  gem: Gem,
  map: Map,
  utensils: UtensilsCrossed,
  users: Users,
  clock: Clock,
  scroll: ScrollText,
  train: TrainFront,
  mountain: Mountain,
  heart: Heart,
  sparkles: Sparkles,
}

export function Icon({
  name,
  className,
}: {
  name: string
  className?: string
}) {
  const Cmp = map[name] ?? Sparkles
  return <Cmp className={className} aria-hidden="true" />
}

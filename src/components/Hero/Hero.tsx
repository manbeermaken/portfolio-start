import HeroAnimation from "./HeroAnimation"
import HeroContent from "./HeroContent"

type Props = {}

export default function Hero({ }: Props) {
  return (
    <main className="grid max-lg:grid-cols-1 max-lg:grid-rows-3 lg:grid-cols-3 h-screen items-center">
      <HeroContent />
      <HeroAnimation />
    </main>
  )
}
import { createFileRoute } from '@tanstack/react-router'
import { Hero, Navbar } from '#/components'


export const Route = createFileRoute('/')({
  component: Home,
})

function Home() {
  return (
    <div className="max-w-360 mx-auto px-4 lg:px-0 relative">
      <Navbar />
      <Hero />
    </div>
  )
}

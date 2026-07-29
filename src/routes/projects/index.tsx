import { Projects } from '#/components'
import Navbar from '#/components/Navbar/Navbar'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/projects/')({
    component: RouteComponent,
})

function RouteComponent() {
    return (<div className="max-w-360 mx-auto px-2 lg:px-0 relative">
        <Navbar />
        <Projects />
    </div>
    )
}

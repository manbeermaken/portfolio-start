import { Projects } from '#/components'
import Navbar from '#/components/Navbar/Navbar'
import { createFileRoute } from '@tanstack/react-router'
// import { createServerFn } from '@tanstack/react-start'
// import { db, projectsTable } from '#/db'

// const getProjects = createServerFn({ method: 'GET' }).handler(async () => {
//   return await db.select().from(projectsTable)
// })

export const Route = createFileRoute('/projects/')({
  component: RouteComponent,
  // loader: () => getProjects(),
})

function RouteComponent() {
  // const projects = Route.useLoaderData()
  return (
    <div className="max-w-360 mx-auto px-2 lg:px-0 relative pt-14 lg:pt-15">
      <Navbar />
      <Projects />
    </div>
  )
}
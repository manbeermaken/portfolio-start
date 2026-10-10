import { Projects, Navbar } from '#/components'
import { createFileRoute } from '@tanstack/react-router'
import { projectsQueryOptions } from '#/queries/projects'
import { useSuspenseQuery } from '@tanstack/react-query'


export const Route = createFileRoute('/projects/')({
  component: RouteComponent,
  loader: async ({ context }) => {
    await context.queryClient.fetchQuery(projectsQueryOptions)
  },
  preloadStaleTime: 30_000
})

function RouteComponent() {
  const { data: projects } = useSuspenseQuery(projectsQueryOptions)
  return (
    <div className="max-w-360 mx-auto px-2 lg:px-0 relative pt-14 lg:pt-15">
      <Navbar />
      <Projects projects={projects} />
    </div>
  )
}
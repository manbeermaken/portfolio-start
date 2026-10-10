import { queryOptions } from '@tanstack/react-query'
import { createServerFn } from '@tanstack/react-start'
import { db, projectsTable } from '#/db'

const getProjects = createServerFn({ method: 'GET' }).handler(async () => {
  return await db.select().from(projectsTable)
})

export const projectsQueryOptions = queryOptions({
  queryKey: ['projects'],
  queryFn: () => getProjects(),
  staleTime: 30_000,
})

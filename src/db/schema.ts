import { sql } from 'drizzle-orm'
import { int, sqliteTable, text } from 'drizzle-orm/sqlite-core'

export const projectsTable = sqliteTable('projects', {
  id: int().primaryKey({ autoIncrement: true }),
  name: text().notNull(),
  domain: text().notNull(),
  live_url: text(),
  github_url: text(),
  short_desc: text(),
  long_desc: text(),
  tech_stack: text({ mode: 'json' }).$type<string[]>().default([]),
  bullet_points: text({ mode: 'json' }).$type<string[]>().default([]),
  screenshots: text({ mode: 'json' }).$type<string[]>().default([]),
  created_at: int({ mode: 'timestamp' })
    .notNull()
    .default(sql`(unixepoch())`),
  updated_at: int({ mode: 'timestamp' })
    .notNull()
    .default(sql`(unixepoch())`)
    .$onUpdate(() => new Date()),
})

export type Project = typeof projectsTable.$inferSelect

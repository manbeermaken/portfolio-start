import { createServerFn } from '@tanstack/react-start'
import { getCookie, setCookie } from '@tanstack/react-start/server'

export type Theme = 'light' | 'dark'

export const getThemeServerFn = createServerFn({ method: 'GET' }).handler(
  async () => {
    let theme = (getCookie('theme') as Theme | undefined) ?? 'dark'

    if (!getCookie('theme')) {
      setCookie('theme', theme, {
        path: '/',
        maxAge: 60 * 60 * 24 * 365,
        sameSite: 'lax',
      })
    }
    return theme
  },
)

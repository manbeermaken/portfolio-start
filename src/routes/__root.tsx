import {
  HeadContent,
  Outlet,
  Scripts,
  createRootRouteWithContext,
} from '@tanstack/react-router'
import { TanStackRouterDevtoolsPanel } from '@tanstack/react-router-devtools'
import { TanStackDevtools } from '@tanstack/react-devtools'

import TanStackQueryDevtools from '../integrations/tanstack-query/devtools'

import appCss from '../styles.css?url'

import type { QueryClient } from '@tanstack/react-query'
import { ThemeProvider } from '#/components/ThemeProvider'
import type { Theme } from '#/utils/theme'
import { clsx } from 'clsx'
import { getThemeServerFn } from '#/utils/theme'

interface MyRouterContext {
  queryClient: QueryClient,
}

export const Route = createRootRouteWithContext<MyRouterContext>()({
  head: ({ match }) => ({
    meta: [
      {
        charSet: 'utf-8',
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1',
      },
      {
        title: 'Manbeer Singh',
      },
    ],
    links: [
      {
        rel: 'stylesheet',
        href: appCss,
      },
      {
        rel: 'icon',
        type: "image/svg+xml",
        href: match.context.theme === 'dark' ? 'favicon-dark.svg' : 'favicon.svg',
      }
    ],
  }),
  shellComponent: RootDocument,
  notFoundComponent: () => <div>not found</div>,
  component: RootComponent,
  beforeLoad: async () => {
    let theme: Theme = 'dark'

    if (typeof document !== 'undefined') {
      const match = document.cookie.match(new RegExp('(^| )theme=([^;]+)'))
      theme = (match?.[2] as Theme) ?? 'dark'
    } else {
      theme = await getThemeServerFn()
    }

    return { theme }
  },
})

function RootComponent() {
  const { theme } = Route.useRouteContext()
  return (
    <ThemeProvider defaultTheme={theme}>
      <Outlet />
    </ThemeProvider>
  )
}

function RootDocument({ children }: { children: React.ReactNode }) {
  const { theme } = Route.useRouteContext()
  return (
    <html lang="en" className={clsx({ dark: theme === 'dark' })}>
      <head>
        <HeadContent />
      </head>
      <body className='text-foreground bg-background transition-colors duration-300'>
        {children}
        <TanStackDevtools
          config={{
            position: 'bottom-right',
          }}
          plugins={[
            {
              name: 'Tanstack Router',
              render: <TanStackRouterDevtoolsPanel />,
            },
            TanStackQueryDevtools,
          ]}
        />
        <Scripts />
      </body>
    </html >
  )
}

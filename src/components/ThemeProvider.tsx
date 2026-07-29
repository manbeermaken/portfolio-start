import {
  createContext,
  useContext,
  useEffect,
  useState,
} from "react"
import { type Theme } from "#/utils/theme"


const ThemeContext = createContext<{
  theme: Theme
  setTheme: (theme: Theme) => void
} | null>(null)

function getThemeCookie(): Theme | null {
  const match = document.cookie
    .split("; ")
    .find((c) => c.startsWith("theme="))

  if (!match) return null

  const value = decodeURIComponent(match.split("=")[1])

  return value === "dark" || value === "light" ? value : null
}

function setThemeCookie(theme: Theme) {
  document.cookie = [
    `theme=${encodeURIComponent(theme)}`,
    "Path=/",
    `Max-Age=${60 * 60 * 24 * 365}`,
    "SameSite=Lax",
  ].join("; ")
}

function updateFavicon(theme: Theme) {
  let link = document.querySelector<HTMLLinkElement>('link[rel="icon"]')
  
  if (!link) {
    link = document.createElement("link")
    link.rel = "icon"
    link.type = "image/svg+xml"
    document.head.appendChild(link)
  }

  link.href = theme === "dark" ? "/favicon-dark.svg" : "/favicon.svg"
}

export function ThemeProvider({
  children,
  defaultTheme
}: {
  children: React.ReactNode
  defaultTheme: Theme
}) {
  const [theme, setThemeState] = useState<Theme>(defaultTheme)

  useEffect(() => {
    const cookieTheme = getThemeCookie()

    const resolved =
      cookieTheme ??
      (window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light")

    document.documentElement.classList.toggle(
      "dark",
      resolved === "dark",
    )

    if (!cookieTheme) {
      setThemeCookie(resolved)
    }

    setThemeState(resolved)
    updateFavicon(resolved)
  }, [])

  function setTheme(theme: Theme) {
    document.documentElement.classList.toggle(
      "dark",
      theme === "dark",
    )

    setThemeCookie(theme)
    setThemeState(theme)
    updateFavicon(theme)
  }

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

export function useTheme() {
  const ctx = useContext(ThemeContext)

  if (!ctx) throw new Error("Missing ThemeProvider")

  return ctx
}
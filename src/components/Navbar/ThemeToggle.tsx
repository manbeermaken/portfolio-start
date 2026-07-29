import { useTheme } from '../ThemeProvider'
import { Sun, Moon } from 'lucide-react'

type Props = {}

export default function ThemeToggle({ }: Props) {
    const { theme, setTheme } = useTheme();
    const isDark = theme === 'dark'
    const toggleTheme = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault()
        setTheme(isDark ? 'light' : 'dark')
    }
    return (
        <button onClick={toggleTheme}
            className='hover:scale-105 hover:border-primary lg:border-2 border-background transition-transform duration-300 cursor-pointer flex justify-center items-center px-4 lg:px-6 py-2 rounded-full bg-background-secondary outline-0'
        >
            {isDark ? <Sun className='text-white size-5' /> : <Moon className='text-white size-5' />}
        </button>
    )
}
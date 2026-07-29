import { Database, Monitor, Bot } from "lucide-react"
import type { Domain } from "./Projects"
import clsx from "clsx"

interface Props {
    domain: string
    setDomain: React.Dispatch<React.SetStateAction<Domain>>
}


export default function SelectionButtons({ domain, setDomain }: Props) {
    const handleBackendClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        const id = e.currentTarget.id as Domain
        console.log(id)
        setDomain(id)
    }
    return (
        <div className="mt-10 flex gap-4">
            <button id="backend"
                onClick={handleBackendClick} disabled={domain === 'backend'}
                className={clsx(`flex items-center justify-center gap-1 border-5 border-primary/30 text-primary w-40 py-3 rounded-2xl outline-none bg-clip-padding transition-all duration-300 ease-in-out`,
                    domain === 'backend'
                        ? "bg-primary/30 scale-105 cursor-default"
                        : "cursor-pointer hover:bg-primary/30 hover:scale-105 active:scale-95"
                )}
            >
                <Database className="size-5" />
                <span className="text-xl font-bold">
                    Backend
                </span>
            </button>
            <button id="frontend"
                onClick={handleBackendClick} disabled={domain === 'frontend'}
                className={clsx(`flex items-center justify-center gap-1 border-5 border-accent-1/30 text-accent-1 w-40 py-3 rounded-2xl outline-none bg-clip-padding transition-all duration-300 ease-in-out`,
                    domain === 'frontend'
                        ? "bg-accent-1/30 scale-105 cursor-default"
                        : "cursor-pointer hover:bg-accent-1/30 hover:scale-105 active:scale-95"
                )}
            >
                <Monitor className="size-5" />
                <span className="text-xl font-bold">
                    Frontend
                </span>
            </button>
            <button id="ai-ml"
                onClick={handleBackendClick} disabled={domain === 'ai-ml'}
                className={clsx(`flex items-center justify-center gap-1 border-5 border-accent-2/30 text-accent-2 w-40 py-3 rounded-2xl outline-none bg-clip-padding transition-all duration-300 ease-in-out`,
                    domain === 'ai-ml'
                        ? "bg-accent-2/30 scale-105 cursor-default"
                        : "cursor-pointer hover:bg-accent-2/30 hover:scale-105 active:scale-95"
                )}
            >
                <Bot className="size-5" />
                <span className="text-xl font-bold">
                    AI/ML
                </span>
            </button>
        </div>
    )
}
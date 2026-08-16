import { Database, Monitor, Bot } from "lucide-react"
import type { Domain } from "./Projects"
import clsx from "clsx"

interface Props {
    domains: Domain[]
    onToggle: (domain: Domain) => void
}

const baseClass = clsx(`flex items-center justify-center gap-1 border-5 lg:w-38 py-2 lg:py-3 px-2 cursor-pointer
        hover:scale-105 active:scale-95 rounded-2xl outline-none bg-clip-padding
        transition-all duration-300 active:duration-100 ease-in-out`)

export default function SelectionButtons({ domains, onToggle }: Props) {
    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        onToggle(e.currentTarget.id as Domain)
    }
    return (
        <div className="mt-4 lg:mt-2 flex gap-4" aria-label="Filter projects by domain">
            <button id="backend"
                onClick={handleClick}
                className={clsx(baseClass, `border-primary/30 text-primary`,
                    {
                        'bg-primary/30': domains.includes('backend')
                    },
                )}>
                <Database className="size-4 lg:size-5" />
                <span className="text-[16px] lg:text-xl font-bold">
                    Backend
                </span>
            </button>
            <button id="frontend"
                onClick={handleClick}
                className={clsx(baseClass, `border-accent-1/30 text-accent-1`,
                    {
                        'bg-accent-1/30': domains.includes('frontend')
                    },
                )}
            >
                <Monitor className="size-4 lg:size-5" />
                <span className="text-[16px] lg:text-xl font-bold">
                    Frontend
                </span>
            </button>
            <button id="ai-ml"
                onClick={handleClick}
                className={clsx(baseClass, `border-accent-2/30 text-accent-2`,
                    {
                        'bg-accent-2/30': domains.includes('ai-ml')
                    },
                )}
            >
                <Bot className="size-4 lg:size-5" />
                <span className="text-[16px] lg:text-xl font-bold">
                    AI/ML
                </span>
            </button>
        </div>
    )
}
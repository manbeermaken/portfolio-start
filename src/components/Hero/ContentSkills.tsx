import { Link } from "@tanstack/react-router"
import { icons } from "../icons/icons"
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { useRef } from 'react'

if (typeof window !== "undefined") {
    gsap.registerPlugin(useGSAP)
}

type Props = {}

export default function ContentSkills({ }: Props) {
    const containerRef = useRef<HTMLDivElement>(null)
    useGSAP(() => {
        gsap.to(containerRef.current, { delay: 7, opacity: 1, ease: "power2.inOut", duration: 2 })
    }, { scope: containerRef })
    return (
        <div ref={containerRef} className="opacity-0 flex flex-col gap-4 mt-10">
            <div className="flex align-center gap-2">
                <span className="text-2xl lg:text-4xl font-extrabold">Skills</span>
                <svg className="inline size-8 lg:size-9 stroke-foreground" viewBox="0 0 52 52" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path stroke="currentColor" d="M38.9999 34.6667L47.6666 26L38.9999 17.3334M12.9999 17.3334L4.33325 26L12.9999 34.6667M31.4166 8.66669L20.5833 43.3334" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            </div>
            <div className="grid grid-cols-3 max-w-[80%] lg:max-w-[40%] gap-y-6">
                {icons.map(({ name, tooltip, Icon }) => (
                    <Link to="/projects" search={() => ({ s: name })} key={name}
                        className="w-fit hover:scale-105 transition-transform duration-300">
                        <Icon key={tooltip} className="size-8 lg:size-10" />
                    </Link>
                ))}
            </div>
        </div>
    )
}

import { Link } from "@tanstack/react-router"
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { useRef } from 'react'
import { MorphSVGPlugin } from 'gsap/MorphSVGPlugin'

if (typeof window !== "undefined") {
    gsap.registerPlugin(useGSAP, MorphSVGPlugin)
}

type Props = {}

export default function ContentProjects({ }: Props) {
    const containerRef = useRef<HTMLDivElement>(null)
    const { contextSafe } = useGSAP(() => {
        gsap.to(containerRef.current, { delay: 6, opacity: 1, ease: "power2.inOut", duration: 1 })
    }, { scope: containerRef })

    const handleMouseEnter = contextSafe(() => {
        gsap.to("#dot", {
            morphSVG: { shape: "#terminal-projects" },
            stroke: "currentColor",
            fill: "rgba(0,0,0,0)",
            strokeWidth: 2,
            duration: 0.5,
            ease: "expo.inOut"
        })
    })
    const handleMouseLeave = contextSafe(() => {
        gsap.to("#dot", {
            morphSVG: { shape: "#dot-mask" },
            fill: "green",
            strokeWidth: 0,
            duration: 0.5,
            ease: "expo.inOut"
        })
    })
    return (
        <div id="projects" className="opacity-0 flex items-center gap-2 mb-5 w-fit" ref={containerRef} >
            <span className="self-end text-xl lg:text-3xl font-semibold text-background-secondary">Checkout some of my</span>
            <div className="group flex gap-2 items-center cursor-pointer" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                <Link to="/projects" className="text-2xl lg:text-4xl font-bold group-hover:scale-105 transition-transform duration-500">Projects</Link>
                <svg className="w-8 lg:w-10" width="40" height="32" viewBox="0 0 40 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g>
                        <path className="invisible" id="terminal-projects" d="M16.2222 14.4444L19.3333 11.3333L16.2222 8.22222M22.4444 17.5556H28.6667M13.1111 2H34.8889C36.6071 2 38 3.39289 38 5.11111V26.8889C38 28.6071 36.6071 30 34.8889 30H13.1111C11.3929 30 10 28.6071 10 26.8889V5.11111C10 3.39289 11.3929 2 13.1111 2Z" stroke="black" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
                        <path id="dot" strokeWidth='0' d="M20 16C20 21.5228 15.5228 26 10 26C4.47715 26 0 21.5228 0 16C0 10.4772 4.47715 6 10 6C15.5228 6 20 10.4772 20 16Z" fill="#34C759" />
                        <path className="invisible" id="dot-mask" strokeWidth='0' d="M20 16C20 21.5228 15.5228 26 10 26C4.47715 26 0 21.5228 0 16C0 10.4772 4.47715 6 10 6C15.5228 6 20 10.4772 20 16Z" fill="#34C759" />
                    </g>
                </svg>
            </div>
        </div>
    )
}

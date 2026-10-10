import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { useRef } from 'react'
import { DrawSVGPlugin } from 'gsap/DrawSVGPlugin'
import { TitleSvg } from './TitleSvg'

if (typeof window !== "undefined") {
    gsap.registerPlugin(useGSAP, DrawSVGPlugin)
}

type Props = {}

export default function ContentHeading({ }: Props) {
    const containerRef = useRef<HTMLDivElement>(null)

    useGSAP(() => {
        gsap.set(".trace-path", { drawSVG: "0%", visibility: "visible" });

        const tl = gsap.timeline();
        tl.to('h2', { opacity: 1, ease: "power2.inOut", duration: 1 })
        const duration=5
        const paths = document.querySelectorAll<SVGPathElement>('.trace-path')
        let distance = 0
        paths.forEach((segment) => (distance += segment.getTotalLength()));
        paths.forEach((segment) => {
            tl.to(segment, {
                drawSVG: "100%",
                ease: "power2.inOut",
                duration: duration * (segment.getTotalLength() / distance)
            });
        });
    }, { scope: containerRef })

    return (
        <div ref={containerRef} className="flex flex-col gap-2 mb-8">
            <h2 className="opacity-0 text-2xl lg:text-4xl font-semibold text-background-secondary">Manbeer Singh Maken</h2>
            <div className='w-full relative -translate-x-1 lg:-translate-x-3'>
                <TitleSvg className='w-full lg:w-[80%] h-auto' />
            </div>
        </div>
    )
}

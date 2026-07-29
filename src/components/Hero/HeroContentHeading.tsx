import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { useRef } from 'react'
import { DrawSVGPlugin } from 'gsap/DrawSVGPlugin'
import { MotionPathPlugin } from 'gsap/MotionPathPlugin'
import { MainHeading } from './HeroContentTitle'

if (typeof window !== "undefined") {
    gsap.registerPlugin(useGSAP, DrawSVGPlugin, MotionPathPlugin)
}

type Props = {}

export default function HeroContentHeading({ }: Props) {
    const containerRef = useRef<HTMLDivElement>(null)

    useGSAP(() => {
        gsap.set(".trace-path", { drawSVG: "0%", visibility: "visible" });
        const tl = gsap.timeline();
        tl.to('h2', { opacity: 1, ease: "power2.inOut", duration: 1 })
        let paths = splitPaths(".trace-path");
        const duration = 5
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
            <h2 className="opacity-0 text-2xl lg:text-4xl font-semibold text-background-secondary">Manbeer Singh</h2>
            <div className='w-full relative -translate-x-1 lg:-translate-x-3'>
                <MainHeading className='w-full lg:w-[80%] h-auto' />
            </div>
        </div>
    )
}

type PathSegment = number[] & { closed?: boolean };

export function splitPaths(paths: gsap.DOMTarget): SVGPathElement[] {
    // Cast the generic elements to SVGPathElement array
    let toSplit = gsap.utils.toArray(paths) as SVGPathElement[],
        newPaths: SVGPathElement[] = [];

    if (toSplit.length > 1) {
        toSplit.forEach((path) => newPaths.push(...splitPaths(path)));
    } else if (toSplit.length === 1) {
        let path = toSplit[0],
            // Cast getRawPath to our custom PathSegment array type
            rawPath = MotionPathPlugin.getRawPath(path) as PathSegment[],
            parent = path.parentNode,
            attributes = Array.from(path.attributes); // Cleaner than [].slice.call()

        // Strict null check for parentNode
        if (!parent) return newPaths;

        newPaths = rawPath.map((segment) => {
            let newPath = document.createElementNS(
                "http://www.w3.org/2000/svg",
                "path"
            ) as SVGPathElement;

            let i = attributes.length;

            while (i--) {
                newPath.setAttributeNS(
                    null,
                    attributes[i].nodeName,
                    attributes[i].nodeValue || "" // Ensure it's always a string
                );
            }

            newPath.setAttributeNS(
                null,
                "d",
                "M" +
                segment[0] +
                "," +
                segment[1] +
                "C" +
                segment.slice(2).join(",") +
                (segment.closed ? "z" : "")
            );

            parent!.insertBefore(newPath, path);
            return newPath;
        });

        parent.removeChild(path);
    }

    return newPaths;
}


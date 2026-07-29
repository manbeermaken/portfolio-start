import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { useRef } from 'react'
import { MorphSVGPlugin } from 'gsap/MorphSVGPlugin'

if (typeof window !== "undefined") {
  gsap.registerPlugin(useGSAP, MorphSVGPlugin)
}


type Props = {}

export default function HeroAnimation({ }: Props) {
  const containerRef = useRef<HTMLDivElement>(null)

  useGSAP(() => {
    let tl = gsap.timeline({ repeat: -1, delay: 5 });
    tl
      .to("#laptop", {
        morphSVG: { shape: "#terminal", shapeIndex: 18 },
        duration: 2,
        ease: "expo.inOut",
      })
      .to("#laptop", {
        morphSVG: { shape: "#database", shapeIndex: 1 },
        duration: 2,
        ease: "expo.inOut",
      })
      .to("#laptop", {
        morphSVG: { shape: "#laptop-mask", shapeIndex: 0 },
        duration: 2,
        ease: "expo.inOut",
      });
  }, { scope: containerRef })

  return (
    <div className="flex justify-center max-lg:order-1 max-lg:mt-20" ref={containerRef}>
      <svg className="size-50 lg:size-100 stroke-background-secondary" viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g id="HeroAnimation">
          <path id="laptop" d="M334.233 266.45H65.7667M300 83.3333C308.841 83.3333 317.319 86.8452 323.57 93.0964C329.821 99.3477 333.333 107.826 333.333 116.667V258.767C333.331 263.957 334.541 269.076 336.867 273.717L354.667 309.167C355.952 311.716 356.56 314.554 356.433 317.406C356.307 320.258 355.45 323.031 353.944 325.456C352.438 327.882 350.334 329.881 347.834 331.26C345.334 332.639 342.522 333.353 339.667 333.333H60.3334C57.4782 333.353 54.6658 332.639 52.1658 331.26C49.6658 329.881 47.562 327.882 46.0563 325.456C44.5505 323.031 43.6933 320.258 43.5667 317.406C43.4401 314.554 44.0484 311.716 45.3334 309.167L63.1334 273.717C65.459 269.076 66.6689 263.957 66.6667 258.767V116.667C66.6667 107.826 70.1786 99.3477 76.4298 93.0964C82.681 86.8452 91.1595 83.3333 100 83.3333H300Z" strokeWidth="10" strokeLinecap="round" strokeLinejoin="round" />
          <path className="invisible" id="laptop-mask" d="M334.233 266.45H65.7667M300 83.3333C308.841 83.3333 317.319 86.8452 323.57 93.0964C329.821 99.3477 333.333 107.826 333.333 116.667V258.767C333.331 263.957 334.541 269.076 336.867 273.717L354.667 309.167C355.952 311.716 356.56 314.554 356.433 317.406C356.307 320.258 355.45 323.031 353.944 325.456C352.438 327.882 350.334 329.881 347.834 331.26C345.334 332.639 342.522 333.353 339.667 333.333H60.3334C57.4782 333.353 54.6658 332.639 52.1658 331.26C49.6658 329.881 47.562 327.882 46.0563 325.456C44.5505 323.031 43.6933 320.258 43.5667 317.406C43.4401 314.554 44.0484 311.716 45.3334 309.167L63.1334 273.717C65.459 269.076 66.6689 263.957 66.6667 258.767V116.667C66.6667 107.826 70.1786 99.3477 76.4298 93.0964C82.681 86.8452 91.1595 83.3333 100 83.3333H300Z" strokeWidth="10" strokeLinecap="round" strokeLinejoin="round" />
          <path className="invisible" id="terminal" d="M116.667 183.333L150 150L116.667 116.667M183.333 216.667H250M83.3333 50H316.667C335.076 50 350 64.9238 350 83.3333V316.667C350 335.076 335.076 350 316.667 350H83.3333C64.9238 350 50 335.076 50 316.667V83.3333C50 64.9238 64.9238 50 83.3333 50Z" strokeWidth="10" strokeLinecap="round" strokeLinejoin="round" />
          <path className="invisible" id="database" d="M350 83.3333C350 110.948 282.843 133.333 200 133.333C117.157 133.333 50 110.948 50 83.3333M350 83.3333C350 55.7191 282.843 33.3333 200 33.3333C117.157 33.3333 50 55.7191 50 83.3333M350 83.3333V316.667C350 329.928 334.196 342.645 306.066 352.022C277.936 361.399 239.782 366.667 200 366.667C160.218 366.667 122.064 361.399 93.934 352.022C65.8035 342.645 50 329.928 50 316.667V83.3333M50 200C50 213.261 65.8035 225.979 93.934 235.355C122.064 244.732 160.218 250 200 250C239.782 250 277.936 244.732 306.066 235.355C334.196 225.979 350 213.261 350 200" strokeWidth="10" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      </svg>
    </div>
  )
}
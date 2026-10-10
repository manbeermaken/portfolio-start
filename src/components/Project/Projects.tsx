import { useRef, useState } from "react"
import SelectionButtons from "./SelectionButtons"
import type { Project } from "#/db"
import clsx from "clsx"
import { ExternalLink, MousePointerClick } from "lucide-react"
import { useGSAP } from "@gsap/react"
import { gsap } from 'gsap'
import { Flip } from 'gsap/Flip'
import { icons, GithubIcon } from "../icons"

type FlipState = ReturnType<typeof Flip.getState>

gsap.registerPlugin(Flip)

type Props = {
  projects: Project[]
}

export type Domain = 'backend' | 'frontend' | 'ai-ml'

export default function Projects({projects }: Props) {
  const [domains, setDomains] = useState<Domain[]>(['backend', 'frontend'])
  const containerRef = useRef<HTMLDivElement | null>(null)
  const flipState = useRef<FlipState | null>(null)

  const toggleDomain = (domain: Domain) => {
    flipState.current = Flip.getState('.projects')
    setDomains((prev) =>
      prev.includes(domain) ? prev.filter((d) => d !== domain) : [...prev, domain]
    )
  }

  useGSAP(() => {
    const state = flipState.current
    flipState.current = null
    if (!state) return

    Flip.from(state, {
      duration: 0.5,
      ease: 'power1.inOut',
      absolute: true,
      onEnter: elements => gsap.fromTo(elements, { opacity: 0, scale: 0 }, { opacity: 1, scale: 1, duration: 0.8 }),
      onLeave: elements => gsap.to(elements, { opacity: 0, scale: 0, duration: 0.5 })
    })
  }, { scope: containerRef, dependencies: [domains] })

  useGSAP(() => {
    gsap.from('.projects', { delay: 0.25, opacity: 0, y: "-20px", stagger: 0.25, ease: "power1.inOut", duration: 0.5 })
  }, { scope: containerRef })

  return (
    <div ref={containerRef} className="flex flex-col gap-10">
      <SelectionButtons domains={domains} onToggle={toggleDomain} />
      <div className="grid lg:grid-cols-3 lg:gap-x-6 gap-y-10 justify-items-center">
        {projects.map((project) => (
          <div key={project.id} className={clsx('projects',
            // "has-[.trigger:hover]:scale-105 transition-transform duration-300",
            { 'hidden': !domains.includes(project.domain as Domain) })}>
            <div data-flip-id={`_${project.id}`} className={clsx("lg:max-w-90 min-h-75 border-6 rounded-3xl px-4 py-8 flex flex-col justify-between",
              {
                'border-primary': project.domain === 'backend',
                'border-accent-1': project.domain === 'frontend',
                'border-accent-2': project.domain === 'ai-ml',
              }
            )}>
              <div className="flex justify-between">
                <h2 className="text-2xl font-extrabold">{project.name}</h2>
                <div className="flex gap-2">
                  <a href={project.live_url || '#'} target="_blank">
                    <ExternalLink className={clsx(
                      'size-6',
                      project.live_url?.length === 0 && 'text-gray-400 cursor-default'
                    )} />
                  </a>
                  <a href={project.github_url || '#'} target="_blank"
                    className="">
                    <GithubIcon className="size-6" />
                  </a>
                </div>
              </div>
              <p className="text-lg trigger cursor-pointer">{project.short_desc}</p>
              <div className="flex gap-2 items-center mx-auto">
                {icons.filter(icon => project.tech_stack?.includes(icon.name)).map(({ name, tooltip, Icon }) => {
                  return (
                    <div key={name} title={tooltip}>
                      <Icon className="size-6 cursor-pointer fill-foreground" />
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        ))}
      </div>
      {domains.length === 0 &&
        <div className="flex flex-col items-center">
          <MousePointerClick />
          <h2 className="font-semibold text-xl">Select Something</h2>
        </div>}
    </div>
  )
}
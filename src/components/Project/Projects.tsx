import { useState } from "react"
import SelectionButtons from "./SelectionButtons"

type Props = {}

export type Domain = 'backend' | 'frontend' | 'ai-ml'

export default function Projects({ }: Props) {
  const [domain, setDomain] = useState<Domain>('backend')
  return (
    <div>
      <SelectionButtons domain={domain} setDomain={setDomain} />
    </div>
  )
}
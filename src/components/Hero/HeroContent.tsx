import HeroContentHeading from "./HeroContentHeading"
import HeroContentProjects from "./HeroContentProjects"
import HeroContentSkills from "./HeroContentSkills"

type Props = {}

export default function HeroContent({ }: Props) {
    return (
        <div className="max-lg:row-span-2 max-lg:order-2 lg:col-span-2">
            <HeroContentHeading />
            <HeroContentProjects />
            <HeroContentSkills />
        </div>
    )
}
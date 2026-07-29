import ContentHeading from "./ContentHeading"
import ContentProjects from "./ContentProjects"
import ContentSkills from "./ContentSkills"

type Props = {}

export default function HeroContent({ }: Props) {
    return (
        <div className="max-lg:row-span-2 max-lg:order-2 lg:col-span-2">
            <ContentHeading />
            <ContentProjects />
            <ContentSkills />
        </div>
    )
}
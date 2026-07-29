import GithubLink from "./GithubLink";
import ResumeLink from "./ResumeLink";
import ThemeToggle from "./ThemeToggle";

type Props = {}

export default function Navbar({ }: Props) {

    return (
        <div className="flex gap-4 items-center mt-2 absolute right-2 top-2">
            <ThemeToggle />
            <GithubLink />
            <ResumeLink />
        </div>
    );
};
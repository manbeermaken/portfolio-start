import { Link } from "@tanstack/react-router";
import GithubLink from "./GithubLink";
import ResumeLink from "./ResumeLink";
import ThemeToggle from "./ThemeToggle";
import { Target } from "lucide-react";

type Props = {}

export default function Navbar({ }: Props) {

    return (
        <div className="absolute w-full flex justify-between items-center mt-2 right-2 top-2">
            <Link to="/">
                <Target className="ml-4 stroke-background-secondary size-8 lg:size-9"/>
            </Link>
            <div className="flex gap-4 items-center">
                <ThemeToggle />
                <GithubLink />
                <ResumeLink />
            </div>
        </div>
    );
};

type Props = {
    className?: string
}

export default function Fastapi({ className }: Props) {
    return (
        <svg className={className} viewBox="0 0 24 24">
            <path d="M12 0a12 12 0 1 0 0 24 12 12 0 0 0 0-24m-.62 21.62v-7.53H7.19L13.2 2.38v7.53h4.03z" />
        </svg>

    )
}
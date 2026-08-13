
type Props = {
    className?:string
}

export default function MongodbIcon({ className}: Props) {
    return (
        <svg className={className} viewBox="0 0 48 48">
            <path fill="currentColor" d="M23.73 34.78s0-15.54.52-15.54c.4 0 .92 20.04.92 20.04-.72-.08-1.44-3.3-1.44-4.5m10-15.36a30.3 30.3 0 0 0-8.56-15.2V4.2a15 15 0 0 1-1.35-2.6l-.04-.1v.1c0 .85-.38 1.6-.97 2.11a25 25 0 0 0-8.9 18.77v.32c0 7.45 3.58 14.04 9.11 18.18l.06.04.13.1q.36 2.67.62 5.36h.9c.25-2.23.58-4.2 1.02-6.11l-.07.36q.89-.62 1.6-1.3c4.2-3.9 6.82-9.45 6.82-15.6v-.28.01q0-2.2-.4-4.3z" />
        </svg>


    )
}
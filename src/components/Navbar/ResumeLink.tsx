
type Props = {
}

export default function ResumeLink({ }: Props) {
    const className = "group-hover:stroke-primary transition-all duration-300"
    return (
        <a href="#" className="hover:scale-110 transition-transform duration-300 group">
            <svg
                className="size-7 lg:size-8"
                viewBox="0 0 40 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <g clipPath="url(#clip0_29_171)">
                    <path
                        className={className}
                        d="M23.3337 1.33333V1.3343C24.1239 1.33349 24.9065 1.4879 25.6365 1.79036C26.3676 2.09328 27.032 2.53738 27.5906 3.09798L27.5896 3.09895L33.5681 9.07552H33.5671C34.1273 9.63339 34.5716 10.2965 34.8748 11.0267C35.1781 11.7577 35.3346 12.5419 35.3337 13.3333V33.3333C35.3337 34.7478 34.7714 36.1046 33.7712 37.1048C32.7711 38.1049 31.4142 38.6663 29.9998 38.6663H9.99976C8.58554 38.6662 7.22933 38.1047 6.22925 37.1048C5.22905 36.1046 4.66675 34.7478 4.66675 33.3333V6.66634C4.66684 5.25197 5.22913 3.89594 6.22925 2.89583C7.22937 1.89571 8.58539 1.33341 9.99976 1.33333H23.3337Z"
                        stroke="#45556C"
                        strokeWidth="4"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <path
                        className={className}
                        d="M23.3333 3.33333V11.6667C23.3333 12.1087 23.5088 12.5326 23.8214 12.8452C24.134 13.1577 24.5579 13.3333 24.9999 13.3333H33.3333"
                        stroke="#45556C"
                        strokeWidth="4"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <path
                        className={className}
                        d="M16.6666 15H13.3333"
                        stroke="#45556C"
                        strokeWidth="4"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <path
                        className={className}
                        d="M26.6666 21.6667H13.3333"
                        stroke="#45556C"
                        strokeWidth="4"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    <path
                        className={className}
                        d="M26.6666 28.3333H13.3333"
                        stroke="#45556C"
                        strokeWidth="4"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </g>
                <defs>
                    <clipPath id="clip0_29_171">
                        <rect width="40" height="40" fill="white" />
                    </clipPath>
                </defs>
            </svg>
        </a>

    )
}
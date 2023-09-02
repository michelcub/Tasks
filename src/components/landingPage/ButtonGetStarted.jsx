'use client'

import Link from "next/link"

const ButtonGetStarted = ({route, text}) => {
    return (
        <Link href={route} className="btn btn-primary">{text}</Link>
    )
}

export default ButtonGetStarted;
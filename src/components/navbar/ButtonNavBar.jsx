'use client'

import Link from "next/link"


const ButtonNavBar = ({route, text, children}) => {
    return (
        <Link href={route} className="text-2xl flex gap-4">
            {children}
            <p className="hidden md:block">{text}</p>
        </Link>
    )
}

export default ButtonNavBar
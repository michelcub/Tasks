'use client'

import Link from "next/link"
import { usePathname } from "next/navigation"

const ButtonHeaderLanding = ({route, text}) => {
    const pathname = usePathname()

    return (
        <li className="button-header-landing">
            <Link href={route} className={` ${pathname===route?'border-b-4 border-primary p-2':''}`}>{text}</Link>
        </li>
    )
}

export default ButtonHeaderLanding;
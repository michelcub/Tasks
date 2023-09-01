'use client'
import { usePathname  } from "next/navigation"
import Link from "next/link"



const ButtonNavBar = ({route, text, children}) => {
    const pathName = usePathname()
    
    return (
        <Link href={route} className={`text-2xl flex gap-4 hover:bg-slate-300 items-center justify-center md:justify-start rounded-lg p-2 ${pathName == route? 'bg-primary/75 text-white':''}`}>
            {children}
            <p className="hidden md:block">{text}</p>
        </Link>
    )
}

export default ButtonNavBar
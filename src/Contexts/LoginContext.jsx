'use client'

import { SessionProvider } from "next-auth/react"


export const LoginProvider = ({ children }) => {

    return (
        <SessionProvider >
            {children}
        </SessionProvider>
    )
}
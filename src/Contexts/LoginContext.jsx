'use client'

import { createContext, useContext } from "react";
import { useEffect, useState } from "react";

const LoginContext = createContext()


export const LoginProvider = ({ children }) => {

    const [isLogged, setIsLogged] = useState(false)
    const [user, setUser] = useState({})
    const [token, setToken] = useState("")
    const [error, setError] = useState("")
    const [loading, setLoading] = useState(false)
    



    const store = {}

    const actions = {}

    return (
        <LoginContext.Provider value={{store, actions}}>
            {children}
        </LoginContext.Provider>
    )
}
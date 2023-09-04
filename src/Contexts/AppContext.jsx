'use client'


import { useContext, createContext } from "react";
import { useEffect, useState } from "react";

import toast from "react-hot-toast";
const AppContext = createContext()


export const AppProvider = ({ children }) => {

    const [dataUser, setDataUser] = useState(null)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)
    const [isAuth, setIsAuth] = useState(false)
    const [user, setUser] = useState(null)

    console.log(dataUser)

    const checkIsUserIsRegistred = async () => {
        try{
            const response = await fetch('http://localhost:3000/api/auth/verify-sign-up', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({dataUser}),
            })
            console.log(response)
            const data = await response.json()
            console.log(data)
            setUser(data)
        }catch(error){
            console.log(error)
        }
        
        
    }
    
    
    console.log(user)

    useEffect(() => {
        if(error){
            toast.error(error)
        }
        if(loading){
            toast.loading('Loading...')
        }
        if(isAuth === true){
            toast.success('Welcome')
        }
        if(isAuth === false){
            toast.error('Unauthorized')
        }
        if(isAuth !== false && dataUser !== null){
            console.log(dataUser)
            const user = checkIsUserIsRegistred()
            setUser(user)
        }

    }, [error, loading, isAuth])

    
    const store = {
        dataUser,
        loading,
        error,
        isAuth
    }

    const actions = {
        setDataUser,
        setLoading,
        setError,
        setIsAuth
    }

    return (
        <AppContext.Provider value={{store, actions}}>
            {children}
        </AppContext.Provider>
    )
}

const useAppContext = () => useContext(AppContext)
export default useAppContext
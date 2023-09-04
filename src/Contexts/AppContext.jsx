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
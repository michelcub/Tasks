'use client'
import { useContext, createContext } from "react";


const AppContext = createContext()


export const AppProvider = ({ children }) => {


    const store = {}

    const actions = {}

    return (
        <AppContext.Provider value={{store, actions}}>
            {children}
        </AppContext.Provider>
    )
}

const useAppContext = () => useContext(AppContext)
export default useAppContext
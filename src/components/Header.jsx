'use client'

import { signOut } from "next-auth/react"
import useAppContext from '@/Contexts/AppContext'
import { useState, useEffect } from 'react'

const Header = () => {


  const [dataUser, setDataUser] = useState(null)
  const {store, actions} = useAppContext()
  useEffect(() => {
    if(store.dataUser!==null || store.dataUser!==undefined){
      setDataUser(store.dataUser)
      return
    }
  }, [store.dataUser])
 
    
    console.log(dataUser)

    return (
        <div className='flex justify-between w-full p-2 items-center'>
              <button className='hidden md:block'><i className="bi bi-arrow-bar-left"></i></button>

              <div className='flex space-x-4 items-cente text-xl ms-auto'>
                <button><i className="bi bi-search"></i></button>
                <button><i className="bi bi-chat"></i></button>
                <button><i className="bi bi-bell"></i></button>

                <div className='flex items-center'>
                  <div className='w-8 h-8 rounded-full'>
                    <img className='rounded-full' src={dataUser?.image?`${dataUser.image}`:"https://avatars.githubusercontent.com/u/47259804?v=4"} alt="profile" />
                  </div>
                  <div className="dropdown dropdown-end">
                    <label tabIndex={0} className="btn m-1"><i className="bi bi-caret-down"></i></label>
                      <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52 text-lg">
                        <li><button onClick={()=> signOut()} className="w-full h-full"><i className="bi bi-box-arrow-right">Logout</i></button> </li>
                        <li><a>Item 2</a></li>
                      </ul>
                  </div>
                  
                  
                </div>

              </div>
            </div>
    )
}

export default Header
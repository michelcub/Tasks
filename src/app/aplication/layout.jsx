'use client'

import Navbar from "@/components/navbar/NavBar"
import Header from "@/components/Header"

import { useRouter } from "next/navigation"
import { useSession } from "next-auth/react"
import { useState, useEffect } from "react"



export const metadata = {
  title: 'Task',
  description: 'Task Aplication',
}

const AplicationLayout = ({ children }) => {

    const { data: session, status } = useSession()
    const router = useRouter()

    useEffect(() => {
      if (status === 'loading') {
        return
      }
      if (!session) {
        router.push('/auth/login')
      }
      if(status === 'authenticated'){
        router.push('/aplication/dashboard')
      }
    }, [session, status])

    return(
      <div lang="en">
      <div className='h-screen w-screen overflow-hidden flex' >
              <Navbar/>
              <section className='w-[85%] md:w-[70%] lg:w-[80%] xl:w-[85%]'>
                <Header/>
                {children}
              </section>
        </div>
      </div>
    )
}

export default AplicationLayout
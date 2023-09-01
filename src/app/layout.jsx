
import './globals.css'
import { Inter } from 'next/font/google'
import Link from 'next/link'
import LoadingHome from './loading'
import Navbar from '@/components/navbar/NavBar'
import { Suspense, lazy } from 'react'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Task',
  description: 'Task Aplication',
}

const MyNavbar = lazy(() => import('@/components/navbar/NavBar'))

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.className}>
      <head>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.5/font/bootstrap-icons.css"/>
      </head>
      <body className='h-screen overflow-hidden flex' >

          
          <Navbar/>
          <section className='w-[85%] md:w-[70%] lg:w-[80%]'>

            <header className='flex justify-between w-full p-2 items-center'>
              <button className='hidden md:block'><i class="bi bi-arrow-bar-left"></i></button>

              <div className='flex space-x-4 items-cente text-xl ms-auto'>
                <button><i class="bi bi-search"></i></button>
                <button><i class="bi bi-chat"></i></button>
                <button><i class="bi bi-bell"></i></button>

                <div className='flex'>
                  <div className='w-8 h-8 rounded-full'>
                    <img className='rounded-full' src="https://avatars.githubusercontent.com/u/47259804?v=4" alt="profile" />
                  </div>

                  <button><i class="bi bi-caret-down"></i></button>
                </div>

              </div>
            </header>
            
            {children}
            

          </section>

        
        </body>
    </html>
  )
}

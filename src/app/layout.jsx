
import './globals.css'
import { Inter } from 'next/font/google'
import Link from 'next/link'
import LoadingHome from './loading'
import Navbar from '@/components/navbar/NavBar'
import { Suspense, lazy } from 'react'
import Header from '@/components/Header'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Task',
  description: 'Task Aplication',
}

const MyNavbar = lazy(() => import('@/components/navbar/NavBar'))

export default function RootLayout({ children }) {


  return (
    <html lang="en" className={inter.className} data-theme="dark">
      <head>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.5/font/bootstrap-icons.css"/>
      </head>
      <body className='h-screen overflow-hidden flex' >

          <Navbar/>
          <section className='w-[85%] md:w-[70%] lg:w-[80%]'>
            <Header/>
            {children}
          </section>

        </body>
    </html>
  )
}

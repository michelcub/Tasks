import { LoginProvider } from '../Contexts/LoginContext'
import { AppProvider } from '../Contexts/AppContext'
import './globals.css'
import { Inter } from 'next/font/google'


const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Task',
  description: 'Task Aplication',
}

export default function RootLayout({ children }) {


  return (
    <html lang="en" className={inter.className} data-theme="dark">
      <head>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.5/font/bootstrap-icons.css"/>
      </head>
      <body className='h-screen overflow-hidden flex' >
          <LoginProvider>
              <AppProvider>
                {children}
            </AppProvider>
          </LoginProvider>
        </body>
    </html>
  )
}

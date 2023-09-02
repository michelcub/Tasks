import Navbar from "@/components/navbar/NavBar"
import Header from "@/components/Header"


const AplicationLayout = ({ children }) => {
    return(
      <html lang="en" data-theme="dark">
      <body className='h-screen overflow-hidden flex' >
              <Navbar/>
              <section className='w-[85%] md:w-[70%] lg:w-[80%] xl:w-[85%]'>
                <Header/>
                {children}
              </section>
        </body>
    </html>
    )
}

export default AplicationLayout
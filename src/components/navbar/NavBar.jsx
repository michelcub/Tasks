'use client'
import  Link  from 'next/link'
import ButtonNavBar from './ButtonNavBar'
const Navbar = () => {
    return (
        <nav className='h-screen border-e  w-[15%] md:w-[30%] lg:w-[20%] flex flex-col p-1 md:p-3'>

            <div className='flex justify-center items-center p-4'>
              <span>logo</span>
              <h1 className='hidden md:block'>Task</h1>
            </div>

            <div className='mt-[4rem] flex flex-col space-y-6'>
              
                <ButtonNavBar route='/' text='Dashboard'>
                  <i class="bi bi-grid"></i>
                </ButtonNavBar>
             
                <ButtonNavBar route={'/members'} text='Members'>
                  <i class="bi bi-people"></i>
                </ButtonNavBar>

                <ButtonNavBar route={'/messages'} text='Messages'>
                  <i class="bi bi-chat"></i>
                </ButtonNavBar>
                
                <ButtonNavBar route={'/notification'} text='Notification'>
                  <i class="bi bi-bell"></i>
                </ButtonNavBar>
              
                
                <ButtonNavBar route={'/workspace'} text='Workspace'>
                  <i class="bi bi-briefcase"></i>
                </ButtonNavBar>
              
                <ButtonNavBar route={'/settings'} text='Settings'>
                  <i class="bi bi-gear"></i>
                </ButtonNavBar>
                
             
            </div>
          </nav>
    )
}

export default Navbar
import  Link  from 'next/link'

const Navbar = () => {
    return (
        <nav className='h-screen border  sm:w-[100%] flex flex-col p-3'>

            <div className='flex justify-center items-center p-4'>
              <span>logo</span>
              <h1>Task</h1>
            </div>

            <ul className='mt-[4rem] flex flex-col space-y-6'>
              <li>
                <i class="bi bi-grid"></i>
                <p>Dashboard</p>
              </li>
              <li>
                <i class="bi bi-people"></i>
                <p>Member</p>
              </li>
              <li>
                <i class="bi bi-chat"></i>
                <p>Message</p>
              </li>
              <li>
                <i class="bi bi-bell"></i>
                <p>Notification</p>
              </li>
              <li>
                <i class="bi bi-briefcase"></i>
                <p>Workspace</p>
              </li>
              <li>
                
                <Link href="/"><i class="bi bi-gear"></i>
                <p>Settings</p></Link>
              </li>
            </ul>
          </nav>
    )
}

export default Navbar
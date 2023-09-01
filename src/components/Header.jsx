const Header = () => {
    return (
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
    )
}

export default Header
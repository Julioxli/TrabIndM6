import { Link } from 'react-router-dom';
import { useState } from 'react';



//icons
import { FiMenu } from 'react-icons/fi'




const Navbar = () => {

        const [open, setOpen] = useState(false);
        
        return(
                <header className='border-b-2 bg-purple-800 py-2'>
                        <div className='flex  text-purple-300 items-center justify-between xl:max-w-7xl mx-auto max-w-full px-[8%] flex-wrap w-full'>
                                <img src=""  alt='Nossa logo'   width={50} height={55}/>
                                <h1 className='font-serif'></h1>

                                <FiMenu  className='lg:hidden block h-6 w-6 cursor-pointer hover:text-black' onClick={() => setOpen(!open)}/>
                                
                                <nav className={`${open ? "block" : "hidden"}
                                 w-full lg:flex lg:items-center lg:w-auto`}>

                                        <ul className='text-base text-purple-300 lg:flex lg:justify-between'>
                                                <li>
                                                <Link to={`/`} className='lg:px-5 py-2 block text-purple-300 hover:text-black font-semibold' onClick={() => setOpen(!open)}>Home </Link>
                                                </li>

                                                <li>
                                                <Link to={`/Singin`} className='lg:px-5 py-2 block text-purple-300 hover:text-black font-semibold' onClick={() => setOpen(!open)}> Login </Link>
                                                </li>

                                                <li>
                                                <Link to={`/Singnup`} className='lg:px-5 py-2 block text-purple-300 hover:text-black font-semibold' onClick={() => setOpen(!open)}> Cadastro </Link>
                                                </li>
                                        </ul>
                                </nav>
                        </div>
                </header>
        )
}

export default Navbar

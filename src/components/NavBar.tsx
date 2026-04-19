import { useState } from "react";
import { GiCctvCamera } from "react-icons/gi";
function NavBar() {
    const [showMenu, setShowMenu] = useState(false);
    return (
        <nav className=" border-gray-200 sticky top-0 z-10 bg-slate-100 shadow-md mb-10">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
                    {/* <img src="https://flowbite.com/docs/images/logo.svg" className="h-8" alt="Flowbite Logo" /> */}
                    <GiCctvCamera size={window.screen.width < 768 ? 50 : 75} />
                    <span className="self-center lg:text-2xl text-lg font-semibold whitespace-nowrap ">R.R.Telecommunication</span>
                </a>
                <div className="hidden w-full md:block md:w-auto">
                    <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0  ">
                        <li>
                            <a href="/" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0   ">Home</a>
                        </li>
                        <li>
                            <a href="/about" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0   ">About Us</a>
                        </li>
                        <li>
                            <a href="/products" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0   ">Our Products</a>
                        </li>
                        <li>
                            <a href="#contact" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0   ">Contact Us</a>
                        </li>
                    </ul>
                </div>

                <div className="flex md:hidden">
                    <button className="flex items-center p-4 focus:outline-none" onClick={() => {
                        setShowMenu(!showMenu);
                    }}>
                        <svg className="w-6 h-6 text-gray-500" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                            <path d="M4 6h16M4 12h16m-7 6h7"></path>
                        </svg>
                    </button>

                    {
                        showMenu &&
                        <div className="absolute right-0 z-10 mt-16 mr-5 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="menu-button">
                            <div className="py-1" role="none">
                                <a href="/" className="text-gray-700 block px-4 py-2 text-sm" role="menuitem" id="menu-item-0">Home</a>
                                <a href="/about" className="text-gray-700 block px-4 py-2 text-sm" role="menuitem" id="menu-item-2">About Us</a>
                                <a href="/products" className="text-gray-700 block px-4 py-2 text-sm" role="menuitem" id="menu-item-1">Our Products</a>
                                <a href="#contact" className="text-gray-700 block px-4 py-2 text-sm" role="menuitem" id="menu-item-3">Contact Us</a>
                            </div>
                        </div>
                    }
                </div>


            </div>
        </nav >

    )
}

export default NavBar
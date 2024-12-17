import { useState } from 'react';
import openMenuImage from "/src/public/images/menuOpen.png";
import menuImage from "/src/public/images/menu.png";


export function Navbar() {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const handleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };


    return (
        <nav className=" p-4 ">
            <div className="flex justify-end  text-2xl  dark:text-white">
                <div className="fixed top-3 right-4 p-2 mr-10 select-none z-50 ">
                    {isDropdownOpen ? (<img 
                        src={openMenuImage} 
                        className='w-8 dark:invert z-max' 
                        alt="image menuOpen"
                        onClick={handleDropdown}
                        />): (<img 
                            src={menuImage} 
                            className='w-8 transition-transform hover:scale-110 dark:invert z-max' 
                            alt="image menu"
                            onClick={handleDropdown}
                            />)}
                </div>
                <div >
                    {isDropdownOpen && (
                        <div className="fixed  p-2 z-50 top-16 right-5 bg-white dark:bg-gray-700 rounded shadow-lg">
                            <a href="/#skills" onClick={handleDropdown} className="block px-4 py-2 text-black dark:text-white hover:bg-slate-100 dark:hover:bg-gray-600 transition-transform hover:scale-105">Skills</a>
                            <a href="/#studies" onClick={handleDropdown} className="block px-4 py-2 text-black dark:text-white hover:bg-slate-100 dark:hover:bg-gray-600 transition-transform hover:scale-105">Studies</a>
                            <a href="/#experiences" onClick={handleDropdown} className="block px-4 py-2 text-black dark:text-white hover:bg-slate-100 dark:hover:bg-gray-600 transition-transform hover:scale-105">Experiences</a>
                            <a href="/#langages" onClick={handleDropdown} className="block px-4 py-2 text-black dark:text-white hover:bg-slate-100 dark:hover:bg-gray-600 transition-transform hover:scale-105">Langages</a>

                        </div>
                    )}
                </div>
            </div>
        </nav>
    );
}
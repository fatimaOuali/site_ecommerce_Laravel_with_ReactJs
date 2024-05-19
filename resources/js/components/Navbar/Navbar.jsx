import React, { useState } from 'react';
// import Logo from "../../assets/logo.png";
import { IoMdSearch } from "react-icons/io";
import { FaCartShopping } from "react-icons/fa6";
import { FaCaretDown } from "react-icons/fa";
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';


const Menu = [
  {
    id: 1,
    name: "Accueil",
    link: "/#",
  },
  {
    id: 2,
    name: "Catégories",
    link: "/#services",
  },
  {
    id: 3,
    name: "SERVICES",
    link: "/#",
  },
  {
    id: 3,
    name: "Mens Wear",
    link: "/#",
  },
  {
    id: 3,
    name: "Electronics",
    link: "/#",
  },
];

const DropdownLinks = [
  {
    id: 1,
    name: "Trending Products",
    link: "/#",
  },
  {
    id: 2,
    name: "Best Selling",
    link: "/#",
  },
  {
    id: 3,
    name: "Top Rated",
    link: "/#",
  },
];

const Navbar = ({ handleOrderPopup }) =>
  {
      // State to manage the navbar's visibility
      const [nav, setNav] = useState(false);
    
      // Toggle function to handle the navbar's display
      const handleNav = () => {
        setNav(!nav);
      };

  return (
    <div className="shadow-md bg-white dark:bg-gray-900 dark:text-white duration-200 relative z-40">
      {/* upper Navbar */}
      <div className='text-center py-2 text-2xl font-bold bg-red-600'>
        <p>
        ✨PROMOS INÉGALÉES JUSQU'À -50% ✨🎉
        <button
                  className="bg-primary hover:scale-105 duration-100 text-white py-1 px-4 rounded  group-hover:bg-white group-hover:text-primary"
                  onClick={handleOrderPopup}
                >
                   DECOUVRIR
        </button>
        </p>
        
      </div>
      <div className="bg-primary/40 py-2">
        <div className="container flex justify-between items-center">
          <div>
            <a href="#" className="font-bold text-2xl sm:text-3xl flex gap-2">
              
              Tigmi
            </a>
          </div>

          {/* search bar */}
          <div className="flex justify-between items-center gap-4">
            <div className="relative group hidden sm:block">
              <input
                type="text"
                placeholder="search"
                className="w-[200px] sm:w-[200px] group-hover:w-[300px] transition-all duration-300 rounded-full border border-gray-300 px-2 py-1 focus:outline-none focus:border-1 focus:border-primary dark:border-gray-500 dark:bg-gray-800  "
              />
              <IoMdSearch className="text-gray-500 group-hover:text-primary absolute top-1/2 -translate-y-1/2 right-3" />
            </div>

            {/* order button */}
            <button
              onClick={() => handleOrderPopup()}
              className="bg-gradient-to-r from-primary to-secondary transition-all duration-200 text-white  py-1 px-4 rounded-full flex items-center gap-3 group"
            >
              <span className="group-hover:block hidden transition-all duration-200">
                Order
              </span>
              <FaCartShopping className="text-xl text-white drop-shadow-sm cursor-pointer" />
            </button>

        
          </div>
        </div>
      </div>
      {/* lower Navbar */}
      <div data-aos="zoom-in" className="flex justify-center">
        <ul className="sm:flex hidden items-center gap-4">
          {Menu.map((data) => (
            <li key={data.id}>
              <a
                href={data.link}
                className="inline-block px-4 hover:text-primary duration-200"
              >
                {data.name}
              </a>
            </li>
          ))}
          {/* Simple Dropdown and Links */}
          <li className="group relative cursor-pointer">
            <a href="#" className="flex items-center gap-[2px] py-2">
              Trending Products
              <span>
                <FaCaretDown className="transition-all duration-200 group-hover:rotate-180" />
              </span>
            </a>
            <div className="absolute z-[9999] hidden group-hover:block w-[200px] rounded-md bg-white p-2 text-black shadow-md">
              <ul>
                {DropdownLinks.map((data) => (
                  <li key={data.id}>
                    <a
                      href={data.link}
                      className="inline-block w-full rounded-md p-2 hover:bg-primary/20 "
                    >
                      {data.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </li>
        </ul>
      </div>
       {/* Mobile Navigation Icon */}
       <div onClick={handleNav} className='block z-index-1 md:hidden ' style={{ marginLeft: "93%"  }}>
        {nav ? <AiOutlineClose size={30} /> : <AiOutlineMenu size={30} />}
      </div>

      {/* Mobile Navigation Menu */}
      <ul
        className={
          nav
            ? 'fixed md:hidden left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500'
            : 'ease-in-out w-[60%] duration-500  fixed top-0 bottom-0 left-[-100%]'
        } style={{zIndex: 100}}
      >
        {/* Mobile Logo */}
        <h1 className='w-full text-3xl font-bold text-white m-4'>Shopsy</h1>

        {/* Mobile Navigation Items */}
        {Menu.map(item => (
          <li
            key={item.id}
            className='p-4 border-b rounded-xl hover:bg-[#ed8900] duration-300 hover:text-black cursor-pointer border-gray-600'
          >
            <a
                href={item.link}
                className="inline-block px-4 hover:text-primary duration-200"
              >
            {item.name}
            </a>
          </li>
        ))}
        {/* Simple Dropdown and Links */}
        <li className="p-4 border-b rounded-xl hover:bg-[#ed8900] duration-300 hover:text-black cursor-pointer border-gray-600 group relative cursor-pointer">
            <a href="#" className="inline-block px-4  duration-200 flex items-center gap-[2px] py-2">
              Trending Products
              <span>
                <FaCaretDown className="transition-all duration-200 group-hover:rotate-180" />
              </span>
            </a>
            <div className="absolute z-[9999] hidden group-hover:block w-[200px] rounded-md bg-white p-2 text-black shadow-md">
              <ul>
                {DropdownLinks.map((data) => (
                  <li key={data.id}>
                    <a
                      href={data.link}
                      className="inline-block w-full rounded-md p-2 hover:bg-primary/20 "
                    >
                      {data.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </li>
      </ul>
    </div>
  );
};

export default Navbar;

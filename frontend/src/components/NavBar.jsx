import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
const NavBar = () => {
  const [nav, setNav] = useState(false);
  const navigate = useNavigate();

  const handleClick = (endpoint) => {
    navigate(endpoint);
  };

  const links = [
    {
      id: 1,
      link: "home",
      endpoint:"/home"
    },
    {
      id:2,
      link:"resume",
      endpoint:"/resumemaker"
    },
    {
      id:2,
      link:"login",
      endpoint:"/"
    }
  ];

  return (
    <>
      <div className="flex justify-between items-center w-full h-16 px-4 text-white bg-black">
        <div>
          <h1 className="text-2xl md:text-3xl font-signature ml-2">Placement Planner</h1>
        </div>

        <ul className="hidden md:flex">
          {links.map(({ id, link,endpoint }) => (
            <li
              key={id}
              className="px-4 cursor-pointer capitalize font-medium text-white hover:scale-105 duration-200 hover:text-green-300"
              onClick={() => handleClick(endpoint)}
            >
              {link}
            </li>
          ))}
        </ul>

        <div
          onClick={() => setNav(!nav)}
          className="cursor-pointer pr-4 z-10 text-gray-500 md:hidden"
        >
          {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
        </div>

        {nav && (
          <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-gray-500">
            {links.map(({ id, link,endpoint }) => (
              <li
                key={id}
                className="px-4 cursor-pointer capitalize py-6 text-4xl"
                onClick={() => handleClick(endpoint)}
              >
                {link}
              </li>
            ))}
          </ul>
        )}
      </div>
    </>
  );
};

export default NavBar;
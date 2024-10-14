import React from "react";
import { navbarFont } from "@/styles/fonts";

const Navbar = () => {
  return (
    <ul className="flex max-w-[220px] justify-between ml-auto mr-0 mt-6">
      <li className={`${navbarFont.className} cursor-pointer text-base hover:underline transition duration-300`}>
        <a href="#about">About</a>
      </li>
      <li className={`${navbarFont.className} cursor-pointer text-base hover:underline transition duration-300`}>
        <a href="#socials">Socials</a>
      </li>
      <li className={`${navbarFont.className} cursor-pointer text-base hover:underline transition duration-300`}>
        <a href="#projects">Projects</a>
      </li>
    </ul>
  );
};

export default Navbar;

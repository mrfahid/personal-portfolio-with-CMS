"use client"

import React, { useState } from "react";
import { HiMenuAlt4, HiX } from "react-icons/hi";
import { motion } from "framer-motion";
import "./Navbar.scss";
import { ModeToggle } from "../ModeToggle";
import Link from "next/link";

interface BlogLinkProps {
  title: string;
  url: string;
}

const Navbar = () => {
  const [toggle, setToggle] = useState(false);


  return (
    <nav className="app__navbar">
      <div className="app__navbar-logo">
        <h2>
          Shah <span>Fahid</span>
        </h2>
      </div>
      <ul className="app__navbar-links dark:text-gray-800">
        {["home", "about", "work", "skills", "contact"].map((item) => (

          <li key={item} className="app__flex p-text">
            <div />
            <a href={`#${item}`}>{item}</a>

          </li>

        ))}
          <li>
            <Link href={`https://blogs-site-vert.vercel.app/`} target="_blank" className="dark:text-gray-800 mt-8">Blog</Link> 
          </li>
          
      </ul>

      <div className="app__navbar-menu dark:text-gray-800">
        <HiMenuAlt4 onClick={() => setToggle(true)} />

        {toggle && (
          
          <motion.div
            whileInView={{ x: [300, 0] }}
            transition={{ duration: 0.85, ease: "easeOut" }}
          >
            <HiX onClick={() => setToggle(false)} />
            <ul className="dark:text-gray-800">
              {["home", "about", "work", "skills", "contact"].map((item) => (
                <li key={item}>
                  <a href={`#${item}`} onClick={() => setToggle(false)}>
                    {item}
                  </a>
                </li>
              ))}
              <li>
                <ModeToggle />
              </li>
            </ul>
          </motion.div>
           
        )}
      </div>
      <div className="toggle">
      <ModeToggle />
      </div>
    </nav>
  );
};


export default Navbar;

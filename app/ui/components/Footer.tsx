"use client"
import { useState } from "react";
import Links from "./Links";
import { Typewriter } from "react-simple-typewriter";


const Footer = () => {
  const [fotter] = useState(['MY BLOG'])
    return ( 
 <footer className="footer footer-center p-10 bg-base-200 text-base-content rounded">
  <nav className="grid grid-flow-col gap-4">
    <Links/>
  </nav> 
  <nav>
    <div className="grid grid-flow-col gap-4">
      <p className="text-bold text-xl">
        <Typewriter words={fotter} loop={false}/>
      </p>
    </div>
  </nav> 
  <aside>
    <p>Copyright © 2024</p>
  </aside>
</footer>
     );
}
 
export default Footer;
"use client"

import Links from "./Links";
import Profile from "./Profile";


const Header = () => {
    return ( 
<div className="navbar border-b border-b-base-200 shadow">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 rounded-box">
        <Links/>
      </ul>
    </div>
  </div>
  <div className="navbar-end">
    <Profile/>
  </div>
</div>
     );
}
export default Header;
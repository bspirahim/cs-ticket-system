import React from "react";
import plusIcon from "../assets/ic_outline-plus.png";

const Navbar = () => {
  return (
    <div className="bg-base-100 shadow-sm">
      <div className="navbar max-w-[1440px] mx-auto px-4">

        {/* Left Section */}
        <div className="flex-1">
          
          {/* Mobile Menu */}
          <div className="dropdown lg:hidden mr-2">
            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </div>

            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li><a>Home</a></li>
              <li><a>FAQ</a></li>
              <li><a>Changelog</a></li>
              <li><a>Blog</a></li>
              <li><a>Download</a></li>
              <li><a>Contact</a></li>
            </ul>
          </div>

          {/* Logo */}
          <a className="text-xl font-semibold text-[#130B2D]">
            CS — Ticket System
          </a>
        </div>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center gap-4">
          <ul className="menu menu-horizontal px-1">
            <li><a>Home</a></li>
            <li><a>FAQ</a></li>
            <li><a>Changelog</a></li>
            <li><a>Blog</a></li>
            <li><a>Download</a></li>
            <li><a>Contact</a></li>
          </ul>

          <button className="btn bg-[#422AD5] text-white border-none flex items-center gap-2">
            <img src={plusIcon} alt="plus" className="w-4 h-4" />
            New Ticket
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
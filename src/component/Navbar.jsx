import React from "react";
import plusIcon from '../assets/ic_outline-plus.png'

const Navbar = () => {
  return (
    <div className="bg-base-100 shadow-sm">
      <div className="navbar max-w-[1440px] mx-auto">
        <div className="flex-1">
          <a className="btn btn-ghost text-xl text-[#130B2D]">
            CS — Ticket System
          </a>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1">
            <li>
              <a>Home</a>
            </li>
            <li>
              <a>FAQ</a>
            </li>
            <li>
              <a>Changelog</a>
            </li>
            <li>
              <a>Blog</a>
            </li>
            <li>
              <a>Download</a>
            </li>
            <li>
              <a>Contact</a>
            </li>
          </ul>
          <button className="btn bg-[#422AD5] text-white">
            <img src={plusIcon} alt="" />
            New Ticket
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

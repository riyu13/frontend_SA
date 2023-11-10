import React from "react";
import { BiBell, BiDoorOpen } from "react-icons/bi";
import Sidebar from "./sidebar";
import Link from "next/link";

const Navbar2 = () => {
  return (
    <div className="navbar h-16 bg-slate-600">
      <div className="navbar-start">
        <Sidebar/>
      </div>
      <div className="navbar-center">
        <a className="btn btn-ghost normal-case text-sm text-white">
          Dashboard
        </a>
      </div>
      <div className="navbar-end">
        <div className="text-white text-xl btn btn-ghost">
          <BiBell />
          <span className="badge">1</span>
        </div>
        <Link href="/login" className="text-white text-xl btn btn-ghost hover:text-white hover:bg-slate-800">
          <BiDoorOpen />
        </Link>
      </div>
    </div>
  );
};

export default Navbar2;

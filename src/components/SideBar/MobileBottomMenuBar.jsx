import React from "react";
import { AiFillHome } from "react-icons/ai";
import { MdOutlineVideoLibrary } from "react-icons/md";
import {TbLanguageHiragana} from 'react-icons/tb'
import { NavLink } from "react-router-dom";

const MobileBottomMenuBar = () => {
  return (
    <div className="block lg:hidden w-full h-[60px] fixed -bottom-1 bg-[#111111] opacity-95 text-neutral-400 z-[1010]">
      <div className="flex justify-around items-center h-full">
        <NavLink
          to={"/"}
          className="w-[30%] flex flex-col justify-center items-center"
        >
          <AiFillHome className="text-2xl " />
          <p className="text-xs">Home</p>
        </NavLink>
        <NavLink to={'/latest'} className="w-[30%] flex flex-col justify-center items-center">
          <MdOutlineVideoLibrary className="text-2xl font-light" />
          <p className="text-xs">New & Hot</p>
        </NavLink>
        <NavLink to={'/browse-by-language'} className="w-[30%] flex flex-col justify-center items-center">
          <TbLanguageHiragana className="text-2xl font-light" />
          <p className="text-xs">Languages</p>
        </NavLink>
        <NavLink to={'/my-netflix'} className="w-[30%] flex flex-col justify-center items-center">
          <img
            className="rounded w-7"
            src="https://occ-0-395-325.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABfNXUMVXGhnCZwPI1SghnGpmUgqS_J-owMff-jig42xPF7vozQS1ge5xTgPTzH7ttfNYQXnsYs4vrMBaadh4E6RTJMVepojWqOXx.png?r=1d4"
            alt=""
          />
          <p className="text-xs text-neutral-400">My Netflix</p>
        </NavLink>
      </div>
    </div>
  );
};

export default MobileBottomMenuBar;

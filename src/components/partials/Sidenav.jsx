import React, { useState } from "react";
import { Link } from "react-router-dom";

const Sidenav = () => {

    
    return (
        <>
       
        <div className={`hidden md:block md:w-[20%] relative  h-full border-r-2 border-zinc-400 p-10  transition-all`}>
                  <i class="md:hidden sm:block ri-menu-2-line "></i>
            <h1 className="text-2xl text-white font-bold flex items-center">
                <i className="text-[#6556CD] ri-tv-fill mr-2"></i>
                <span className="text-2xl ">Movie Magnet</span>
          
            </h1>
            <nav className="flex flex-col text-zinc-400 text-xl gap-3">
                <h1 className="text-white font-semibold text-xl mt-5 mb-2">
                    New Feeds
                </h1>
                <Link
                    to="/trending"
                    className="hover:bg-[#6556CD] hover:text-white duration-300 rounded-lg p-3"
                >
                    <i className="ri-fire-fill"></i> Trending
                </Link>
                <Link
                    to="/popular"
                    className="hover:bg-[#6556CD] hover:text-white duration-300 rounded-lg p-3"
                >
                    <i className="mr-2 ri-bard-fill"></i>
                    Popular
                </Link>
                <Link
                    to="/movie"
                    className="hover:bg-[#6556CD] hover:text-white duration-300 rounded-lg p-3"
                >
                    <i className="mr-2 ri-movie-2-fill"></i>
                    Movies
                </Link>
                <Link
                    to="/tv"
                    className="hover:bg-[#6556CD] hover:text-white duration-300 rounded-lg p-3"
                >
                    <i className="mr-2 ri-tv-2-fill"></i>
                    Tv Shows
                </Link>
                <Link
                    to="/person"
                    className="hover:bg-[#6556CD] hover:text-white duration-300 rounded-lg p-3 mb-2"
                >
                    <i className="mr-2 ri-team-fill"></i>
                    People
                </Link>
            </nav>
            <hr className="border-none h-[1px] bg-zinc-400" />
            <nav className="flex flex-col text-zinc-400 text-xl gap-3">
                <h1 className="text-white font-semibold text-xl mt-5 ">
                    Website Information
                </h1>
                <Link  to="/#" className="hover:bg-[#6556CD] hover:text-white duration-300 rounded-lg  text-nowrap p-3 ">
                    <i className="mr-2 ri-information-fill"></i> About SCSDB
                </Link>
                <Link className="hover:bg-[#6556CD] hover:text-white duration-300 rounded-lg p-3">
                    <i className="mr-2 ri-phone-fill"></i>
                    Contact Us
                </Link>
            </nav>
            {/* <div className="absolute top-[50%] right-[2%]">
            
                <button onClick={toggleSidebar} className="text-white text-3xl bg-red-900">
                    {showSidebar ? <i className="ri-arrow-right-wide-line"></i> : <i className="ri-arrow-left-wide-fill"></i>}
                </button>
            </div> */}
        </div>
     
        </>
    );
};

export default Sidenav;

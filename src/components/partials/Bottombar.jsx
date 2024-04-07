import React from "react";
import { Link } from "react-router-dom";

const Bottombar = () => {
  return (
    <>
      <div
        className={` relative  w-full  items-center justify-center border-r-2 border-zinc-400 px-1 pb-5  transition-all  `}
      >
        <nav className="flex items-center justify-between text-zinc-400 text-xl ">
          <Link
            to="/trending"
            className="hover:bg-[#6556CD] flex flex-col items-center justify-center hover:text-white duration-300 rounded-lg p-2 "
          >
            <i className="ri-fire-fill"></i> Trending
          </Link>
          <Link
            to="/popular"
            className="hover:bg-[#6556CD] flex flex-col items-center justify-center  hover:text-white duration-300 rounded-lg p-2"
          >
            <i className=" ri-bard-fill"></i>
            Popular
          </Link>
          <Link
            to="/movie"
            className="hover:bg-[#6556CD] flex flex-col items-center justify-center  hover:text-white duration-300 rounded-lg p-2"
          >
            <i className=" ri-movie-2-fill"></i>
            Movies
          </Link>
          <Link
            to="/tv"
            className="hover:bg-[#6556CD] flex flex-col items-center justify-center  hover:text-white duration-300 rounded-lg p-2"
          >
            <i className=" ri-tv-2-fill"></i>
            TvShows
          </Link>
          <Link
            to="/person"
            className="hover:bg-[#6556CD] flex flex-col items-center justify-center  hover:text-white duration-300 rounded-lg p-2 "
          >
            <i className="ri-team-fill"></i>
            People
          </Link>
        </nav>
        {/* <hr className="border-none h-[1px] bg-zinc-400" />
            <nav className="flex flex-col text-zinc-400 text-xl gap-3">
                <h1 className="text-white font-semibold text-xl mt-10 mb-5 ">
                    Website Information
                </h1>
                <Link  to="/#" className="hover:bg-[#6556CD] hover:text-white duration-300 rounded-lg  text-nowrap p-3 ">
                    <i className="mr-2 ri-information-fill"></i> About SCSDB
                </Link>
                <Link className="hover:bg-[#6556CD] hover:text-white duration-300 rounded-lg p-3">
                    <i className="mr-2 ri-phone-fill"></i>
                    Contact Us
                </Link>
            </nav> */}
      </div>
    </>
  );
};

export default Bottombar;

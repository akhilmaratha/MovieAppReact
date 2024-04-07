import React from "react";
import { Link } from "react-router-dom";
import noimage from "/noimage.jpeg";

const Cards = ({ data, title }) => {
    return (
        <div className="flex flex-wrap w-full h-full  items-center justify-center bg-[#1F1E24]">
            <Link
                onClick={() => {
                    window.scrollTo({
                        top: 0,
                        behavior: "smooth",
                    });
                }}
                className="fixed bottom-[5%] right-[5%] flex justify-center items-center w-[6vh] h-[6vh] bg-[#6556cd] rounded-lg"
            >
                <i className="text-white ri-arrow-up-line text-xl"></i>
            </Link>
            {data.map((c, i) => (
                <Link
                    to={`/${c.media_type || title}/details/${c.id}`}
                    className="relative w-[45vh] px-7 py-5"
                    key={i}
                >
                    <div className="h-[50vh] w-[39vh] overflow-hidden" >
                      <img
                        className="shadow-[8px_17px_38px_2px_rgba(0,0,0,.5)] h-full w-full object-cover"
                        src={
                            c.poster_path || c.backdrop_path || c.profile_path
                                ? `https://image.tmdb.org/t/p/original/${
                                      c.poster_path ||
                                      c.backdrop_path ||
                                      c.profile_path
                                  }`
                                : noimage
                        }
                        alt=""
                    />   
                    </div>
                   
                    <h1 className="text-2xl text-zinc-300 mt-3 font-semibold ">
                        {c.name ||
                            c.title ||
                            c.original_name ||
                            c.original_title}
                    </h1>

                    {c.vote_average && (
                        <div className="hidden absolute right-[-10%] bottom-[40%] rounded-full text-xl font-semibold bg-yellow-600 text-white w-[7vh] h-[7vh] justify-center items-center">
                            {(c.vote_average * 10).toFixed()} <sup>%</sup>
                        </div>
                    )}
                </Link>
            ))}
        </div>
    );
};

export default Cards;

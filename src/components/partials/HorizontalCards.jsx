import React from "react";
import { Link } from "react-router-dom";
import noimage from "/noimage.jpeg";

const HorizontalCards = ({ data, title }) => {
  return (
    <div className="w-full p-5 ">
      <div className="w-[100%] flex overflow-x-scroll overflow-y-hidden mb-5">
        {data.length > 0 ? (
          data.map((d, i) => (
            <Link
              to={`/${d.media_type || title}/details/${d.id}`}
              key={i}
              className="sm:min-w-[35%] h-[40%] w-[50%]  min-w-[70%] mr-3 bg-zinc-900 mb-5 relative rounded-lg hover:scale-105 duration-200 cursor-pointer"
              // Adjusted the width for small devices here ^
            >
              <img
                className="w-full h-full object-cover"
                src={
                  d.backdrop_path || d.poster_path
                    ? `https://image.tmdb.org/t/p/original${
                        d.backdrop_path || d.poster_path
                      }`
                    : noimage
                }
                alt=""
              />
              <div className="absolute left-0 bottom-2 text-white p-2 h-[50%]">
                <h1 className="text-2xl font-semibold">
                  {d.name || d.title || d.original_name || d.original_title}
                </h1>
              </div>
            </Link>
          ))
        ) : (
          <h1 className="text-3xl mt-5 text-white font-black text-center">
            Nothing to show
          </h1>
        )}
      </div>
    </div>
  );
};

export default HorizontalCards;

import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { asyncloadmovie, removemovie } from "../store/actions/movieActions";
import {
  Link,
  Outlet,
  useLocation,
  useNavigate,
  useParams,
} from "react-router-dom";
import HorizontalCards from "./partials/HorizontalCards";
import Loading from "./Loading";

const Moviedetails = () => {
  document.title = "SCSDB | Movie Details";

  const { pathname } = useLocation();
  const navigate = useNavigate();
  const { id } = useParams();
  const { info } = useSelector((state) => state.movie);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(asyncloadmovie(id));
    return () => {
      dispatch(removemovie());
    };
  }, [id]);
  return info ? (
    <div
      style={{
        background: `linear-gradient(rgba(0,0,0,.2),rgba(0,0,0,.5), rgba(0,0,0,.8)), url(https://image.tmdb.org/t/p/original/${info.detail.backdrop_path})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
      className="relative w-screen h-fit px-[5%] overflow-x-hidden"
    >
      {/* Part 1 navigation */}
      <nav className="h-[10vh] w-full text-zinc-100 flex items-center justify-between gap-10 text-2xl ">
        <div className="row ">
          <Link
            onClick={() => navigate(-1)}
            className="hover:text-[#6556CD] ri-arrow-left-line px-4 py-2 mx-1"
          ></Link>
          <a target="_blank" href={info.detail.homepage}>
            <i className="ri-external-link-fill px-4 py-2 "></i>
          </a>
        </div>
        <div className="row ">
          <a
            target="_blank"
            href={`https://www.wikidata.org/wiki/${info.externalid.wikidata_id}`}
          >
            <i className="ri-earth-fill px-4 py-2 mx-2"></i>
          </a>

          <a
            target="_blank"
            href={`https://www.imdb.com/title/${info.externalid.imdb_id}/`}
          >
            IMDb
          </a>
        </div>
      </nav>

      {/* Part 2 Poster and details */}
      <div className="w-full  flex flex-col lg:flex-row  select-none items-center gap-5 px-[6%] py-5">
        <img
          className="shadow-[8px_17px_38px_2px_rgba(0,0,0,.5)] h-[50vh]  sm:h-[80vh] object-cover"
          src={`https://image.tmdb.org/t/p/original/${
            info.detail.poster_path || info.detail.backdrop_path
          }`}
          alt=""
        />

        <div className="content text-white sm:flex-row items-center justify-center ">
          <div className=" sm:hidden my-7 text-center">
            <Link
              className="px-5 py-4 bg-[#6556CD] rounded-lg "
              to={`${pathname}/trailer`}
            >
              <i className="text-xl ri-play-fill mr-3"></i>
              Play Trailer
            </Link>
          </div>

          <h1 className="text-4xl sm:text-5xl  font-black ">
            {info.detail.name ||
              info.detail.title ||
              info.detail.original_name ||
              info.detail.original_title}
            <br />
            <small className="text-2xl font-bold text-zinc-200">
              ({info.detail.release_date.split("-")[0]})
            </small>
          </h1>

          <div className="mt-2 mb-5 flex-col lg:flex-row  items-center gap-x-3">
            <div className="row flex gap-5 mb-4">
              <span className="rounded-full text-xl font-semibold bg-yellow-600 text-white w-[6vh] h-[6vh] flex-shrink-0 flex justify-center items-center ">
                {(info.detail.vote_average * 10).toFixed()} <sup>%</sup>
              </span>
              <h1 className="w-[60px] font-semibold text-2xl leading-6">
                User Score
              </h1>
            </div>

            <h1>{info.detail.release_date}</h1>
            <br />
            <div className="row flex gap-5 text-xl sm:text-2xl">
              <h1>{info.detail.runtime}min</h1> | 
              <h1>{info.detail.genres.map((g) => g.name).join(",")}</h1>
            </div>
          </div>

          <h1 className="text-xl font-bold italic text-zinc-200">
            {info.detail.tagline}
          </h1>

          <h1 className="text-3xl mb-3  mt-5">Overview</h1>
          <p>{info.detail.overview}</p>
          {/* 
                    <h1 className="text-2xl mb-3  mt-5">Movie Translated</h1>
                    <p className="mb-10">{info.translations.join(", ")}</p> 
*/}
          <div className="hidden sm:block mt-10">
            <Link
              className="px-5 py-4 bg-[#6556CD] rounded-lg "
              to={`${pathname}/trailer`}
            >
              <i className="text-xl ri-play-fill mr-3"></i>
              Play Trailer
            </Link>
          </div>
        </div>
      </div>

      {/* Part 3 Available on Platform */}
      <div className="w-[80%] flex flex-col gap-y-5 mt-10">
        {info.watchproviders && info.watchproviders.flatrate && (
          <div className="flex gap-x-10 items-center text-white">
            <h1>Available on Platfotms</h1>
            {info.watchproviders.flatrate.map((w, i) => (
              <img
                key={i}
                title={w.provider_name}
                className="w-[5vh] h-[5vh] object-cover rounded-md"
                src={`https://image.tmdb.org/t/p/original/${w.logo_path}`}
                alt=""
              />
            ))}
          </div>
        )}

        {info.watchproviders && info.watchproviders.rent && (
          <div className="flex gap-x-10 items-center text-white">
            <h1>Available on Rent</h1>
            {info.watchproviders.rent.map((w, i) => (
              <img
                key={i}
                title={w.provider_name}
                className="w-[5vh] h-[5vh] object-cover rounded-md"
                src={`https://image.tmdb.org/t/p/original/${w.logo_path}`}
                alt=""
              />
            ))}
          </div>
        )}

        {info.watchproviders && info.watchproviders.buy && (
          <div className="flex gap-x-10 items-center text-white">
            <h1>Available to Buy</h1>
            {info.watchproviders.buy.map((w, i) => (
              <img
                key={i}
                title={w.provider_name}
                className="w-[5vh] h-[5vh] object-cover rounded-md"
                src={`https://image.tmdb.org/t/p/original/${w.logo_path}`}
                alt=""
              />
            ))}
          </div>
        )}
      </div>

      {/* Part 4 Recommendations and Similar Stuff */}
      <hr className="mt-10 mb-5 border-none h-[2px] bg-zinc-500" />
      <h1 className=" sm:text-3xl text-2xl w-[70%] font-bold text-white text-wrap">
        Recommendations  & Similar stuff
      </h1>
      <HorizontalCards
        title="movie"
        data={
          info.recommendations.length > 0 ? info.recommendations : info.similar
        }
      />
      <Outlet />
    </div>
  ) : (
    <Loading />
  );
};

export default Moviedetails;

import axios from "../utils/axios";
import { useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { useNavigate } from "react-router-dom";
import Loading from "./Loading";

import Dropdown from "./partials/Dropdown";
import Cards from "./partials/Cards";
import Bottombar from "./partials/Bottombar";
const Tvshows = () => {
  document.title = "SCSDB | Tv Shows";

  const navigate = useNavigate();
  const [category, setcategory] = useState("airing_today");
  const [tv, settv] = useState([]);
  const [page, setpage] = useState(1);
  const [hasMore, sethasMore] = useState(true);

  const GetTv = async () => {
    try {
      const { data } = await axios.get(`/tv/${category}?page=${page}`);
      if (data.results.length > 0) {
        settv((prevState) => [...prevState, ...data.results]);
        setpage(page + 1);
      } else {
        sethasMore(false);
      }
    } catch (error) {
      console.log("Error: ", error);
    }
  };

  const refershHandler = () => {
    if (tv.length === 0) {
      GetTv();
    } else {
      setpage(1);
      settv([]);
      GetTv();
    }
  };

  useEffect(() => {
    refershHandler();
  }, [category]);

  return tv.length > 0 ? (
    <div className="w-screen h-screen ">
      <div className="p-[5%]  w-full flex items-center justify-between ">
        <h1 className=" text-3xl font-semibold text-zinc-400">
          <i
            onClick={() => navigate(-1)}
            className="hover:text-[#6556CD] ri-arrow-left-line"
          ></i>{" "}
          Tv Shows
          {/* <small className="ml-2 text-sm text-zinc-600">
                        ({category})
                    </small> */}
        </h1>
        <div className="flex items-center w-[40%] text-sm">
          <Dropdown
            title="Airing Today"
            options={["on_the_air", "popular", "top_rated", "airing_today"]}
            func={(e) => setcategory(e.target.value)}
          />
          <div className="w-[2%]"></div>
        </div>
      </div>

      <InfiniteScroll
        dataLength={tv.length}
        next={GetTv}
        hasMore={hasMore}
        loader={<h1>Loading...</h1>}
      >
        <Cards data={tv} title="tv" />
      </InfiniteScroll>
      <div className="sm:hidden fixed bottom-5 left-0 w-full bg-[#1F1E24] z-50">
        <Bottombar />
      </div>
    </div>
  ) : (
    <Loading />
  );
};

export default Tvshows;

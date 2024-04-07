import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Topnav from "./partials/Topnav";
import Dropdown from "./partials/Dropdown";
import axios from "../utils/axios";
import Cards from "./partials/Cards";
import Loading from "./Loading";
import InfiniteScroll from "react-infinite-scroll-component";
import Bottombar from "./partials/Bottombar";
const Trending = () => {
  document.title = "SCSDB | Trending";
  const navigate = useNavigate();
  const [category, setcategory] = useState("all");
  const [duration, setduration] = useState("day");
  const [trending, settrending] = useState([]);
  const [page, setpage] = useState(1);
  const [hasMore, sethasMore] = useState(true);

  const GetTrending = async () => {
    try {
      const { data } = await axios.get(
        `/trending/${category}/${duration}?page=${page}`
      );

      if (data.results.length > 0) {
        settrending((prevState) => [...prevState, ...data.results]);
        setpage(page + 1);
      } else {
        sethasMore(false);
      }
    } catch (error) {
      console.log("Error: ", error);
    }
  };

  const refershHandler = () => {
    if (trending.length === 0) {
      GetTrending();
    } else {
      setpage(1);
      settrending([]);
      GetTrending();
    }
  };

  useEffect(() => {
    refershHandler();
  }, [category, duration]);

  return trending.length > 0 ? (
    <div className="w-screen h-screen overflow-x-hidden relative">
      <div className="sm:px-[2%] px-1  w-full flex items-start  justify-between  ">
        <div className="flex  justify-center gap-2 text-zinc-500 font-semibold py-5">
          <i
            onClick={() => navigate(-1)}
            className="hover:text-[#6556CD] ri-arrow-left-line text-3xl"
          ></i>
          <h1 className=" text-2xl">Trending</h1>
        </div>
        <div className=" sm:flex-col flex items-center pt-3   w-[60%] gap-5 text-white  mb-5">
          <Dropdown
            title="All"
            options={["movie", "tv", "all"]}
            func={(e) => setcategory(e.target.value)}
          />

          <Dropdown
            title="Week"
            options={["week", "day"]}
            func={(e) => setduration(e.target.value)}
          />
          <div className="w-[2%]"></div>
        </div>
      </div>

      <InfiniteScroll
        dataLength={trending.length}
        next={GetTrending}
        hasMore={hasMore}
        loader={<h1>Loading...</h1>}
      >
        <Cards data={trending} title={category} />
      </InfiniteScroll>

      <div className="sm:hidden fixed bottom-5 left-0 w-full bg-[#1F1E24] z-50">
        <Bottombar />
      </div>
    </div>
  ) : (
    <Loading />
  );
};

export default Trending;

import React, { useState ,useEffect} from "react";
import Sidenav from "./partials/Sidenav";
import Topnav from "./partials/Topnav";
import axios from "../utils/axios";
import Header from "./partials/Header";
import HorizontalCards from "./partials/HorizontalCards";
import Dropdown from "./partials/Dropdown";
import Loading from "./Loading";
import Bottombar from "./partials/Bottombar"

const Home = () => {
    document.title = "SCSDB | Homepage";
    const [wallpaper, setwallpaper] = useState(null);
    const [trending, settrending] = useState(null);
    const [category, setcategory] = useState("all");

    const GetHeaderWallpaper = async () => {
        try {
            const { data } = await axios.get(`/trending/all/day`);
            let randomdata =
                data.results[(Math.random() * data.results.length).toFixed()];
            setwallpaper(randomdata);
        } catch (error) {
            console.log("Error: ", error);
        }
    };

    const GetTrending = async () => {
        try {
            const { data } = await axios.get(`/trending/${category}/day`);
            settrending(data.results);
        } catch (error) {
            console.log("Error: ", error);
        }
    };

    useEffect(() => {
        GetTrending();
        !wallpaper && GetHeaderWallpaper();
    }, [category]);

    return wallpaper && trending ? (
        <>
             <Sidenav  />
             <div className="sm:w-[100%] w-full h-full overflow-x-hidden overflow-auto ">
                <Topnav />
                <Header data={wallpaper} />
                <div className="flex items-center  justify-between p-5">
                    <h1 className="sm:text-4xl text-2xl font-semibold text-zinc-400 pr-10">
                        Trending
                    </h1>
                    <Dropdown
                        title="Filter"
                        options={["tv", "movie", "all"]}
                        func={(e) => setcategory(e.target.value)}
                    />
                </div>
                <div className="mb-[20%] sm:mb-0">
                   <HorizontalCards data={trending} />   
                </div>
              
                <div className="sm:hidden z-[9] fixed bottom-5 left-0 bg-[#1F1E24]">
                   <Bottombar/> 
                </div>
                
            </div>
        </>
    ) : (
        <Loading />
    );
};

export default Home;

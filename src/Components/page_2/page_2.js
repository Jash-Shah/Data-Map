import axios from "axios";
import React, { useEffect, useState } from "react";

import { img_500 } from "../../config/config";
import { searchText } from "../Search bar/Search";
import { useSearchParams } from "react-router-dom";
import "./page_2.css";

const Page2 = () => {
  const [content, setContent] = useState({});
  const [searchParams, setSearchParams] = useSearchParams();

  const q = searchParams.get("q");
  const fetchMovies = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/search/movie?api_key=0fcbf8981eaf96f3de0fc2c4a94cf6f7&language=en-US&query=${q}&page=1&include_adult=false`
    );
     console.log(data.results[0]);
    setContent(data.results[0]);
  };
  const fetchVideo = async () => {
    const { video } = await axios.get(
      `https://api.themoviedb.org/3/movie/49021/videos?api_key=0fcbf8981eaf96f3de0fc2c4a94cf6f7&language=en-US`
    );
    console.log(video);
  };
  useEffect(() => {
    window.scroll(0, 0);
    fetchMovies();
    // eslint-disable-next-line
  }, []);

  return (
    <div className="second">
      <h1>"</h1>
      <div className="left">
        <h1>{content.original_title}({(
                      content.first_air_date ||
                      content.release_date ||
                      "-----"
                    ).substring(0, 4)}
                    )</h1>
        <img src={`${img_500}/${content.backdrop_path}`} />
        <button>
          {" "}
          <a
            id="page2"
            href="https://www.youtube.com/watch?v=8YjFbMbfXaQ"
            target="_blank"
          >
            <p>Watch Trailer</p>
          </a>
        </button>
        <br></br>
        <p id="overview">{content.overview.substring(0,300)}...</p>
      </div>
    </div>
  );
};

export default Page2;
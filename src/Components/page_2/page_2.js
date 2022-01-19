import axios from "axios";
import React, { useEffect, useState } from "react";
import { img_500 } from "../../config/config";
import { useSearchParams, useNavigate } from "react-router-dom";
import Map from "../Map/Map";
import Map_bg from "../video/Map_bg.mp4";

import "./page_2.css";
const Page2 = () => {
  const [content, setContent] = useState({});
  const [video, setVideo] = useState({});
  const [searchParams, setSearchParams] = useSearchParams();
  const q = searchParams.get("movie");
  const navigate = useNavigate();
  const checkError = async() => {
    console.log("Q =", q)
    var error = await axios.get(
        `https://data-map-api.herokuapp.com/is_in/${q}`
    );
    console.log("IS ERROR = ", error.data);
    if (error === 1)
    {
        navigate("/404")
    }
    else{
      fetchMovies();
        }
};

  const fetchMovies = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/search/movie?api_key=0fcbf8981eaf96f3de0fc2c4a94cf6f7&language=en-US&query=${q}&page=1&include_adult=false`
    );
    console.log(data.results[0]);
    setContent(data.results[0]);
  };


  const fetchVideo = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/search/movie?api_key=0fcbf8981eaf96f3de0fc2c4a94cf6f7&language=en-US&query=${q}&page=1&include_adult=false`
    );
    var id=data.results[0].id
    console.log(id)
    var lang=data.results[0].original_language
    console.log(lang)

    const video = await axios.get(
      `https://api.themoviedb.org/3/movie/${id}/videos?api_key=0fcbf8981eaf96f3de0fc2c4a94cf6f7&language=${lang}`
    );
    setVideo(video.data.results[0])
  };
  
  useEffect(() => {
    window.scroll(0, 0);
    checkError();
    fetchVideo();
    // eslint-disable-next-line
  }, []);

  return (
    <div className="second">
      {
        (content.original_title !== null)? 

      <div className="top" >
      <video className="video" autoPlay loop muted>
      <source src={Map_bg} type="video/mp4" />
      </video>
      <div className="left">
        <h1>{content.original_title}({(
                      content.first_air_date ||
                      content.release_date ||
                      "-----"
                    ).substring(0, 4)}
                    )</h1>
        <img src={`${img_500}/${content.backdrop_path}`} alt="poster" />
        <button>
          {" "}
          <a
            id="page2"
            href={`https://www.youtube.com/watch?v=${video.key}`}
            target="_blank"
            alt="trailer"
            rel="noreferrer" 
          >
            <p>Watch Trailer</p>
          </a>
        </button>
        <br></br>
        <p id="overview">{content.overview}...</p>
      </div>
    <div className="map">
      <video class="video" autoplay loop muted poster="Map_bg.png">
      <source src="Map_bg.mp4" type="video/mp4"></source>
      </video>
      <Map />
      </div> 
    </div> 
       : <div></div> }
    </div> 
  );
};

export default Page2;
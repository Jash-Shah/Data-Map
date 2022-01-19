import "./Footer.css";
import React, { useEffect, useState } from "react";
import axios from "axios";

const Footer = () => {
  const [content, setContent] = useState([]);
  const [video1, setVideo1] = useState();
  const [video2, setVideo2] = useState();
  const [video3, setVideo3] = useState();
  const [video4, setVideo4] = useState();
  const api_key = "0fcbf8981eaf96f3de0fc2c4a94cf6f7";

  const fetchMovies = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/trending/movie/day?api_key=${api_key}`
    );
    const newArray = [];
    for (let i = 0; i < 4; i++) {
      newArray[i] = data.results[i].title;
    }
    setContent(newArray);
  };

  const fetchVideo = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/trending/movie/day?api_key=${api_key}`
    );

    const idArray = [];
    for (let i = 0; i < 4; i++) {
      idArray[i] = data.results[i].id;
    }

    const video1 = await axios.get(
      `https://api.themoviedb.org/3/movie/${idArray[0]}/videos?api_key=0fcbf8981eaf96f3de0fc2c4a94cf6f7&language=en`
    );
    setVideo1(video1.data.results[0].key);

    const video2 = await axios.get(
      `https://api.themoviedb.org/3/movie/${idArray[1]}/videos?api_key=0fcbf8981eaf96f3de0fc2c4a94cf6f7&language=en`
    );
    setVideo2(video2.data.results[0].key);

    const video3 = await axios.get(
      `https://api.themoviedb.org/3/movie/${idArray[2]}/videos?api_key=0fcbf8981eaf96f3de0fc2c4a94cf6f7&language=en`
    );
    setVideo3(video3.data.results[0].key);

    const video4 = await axios.get(
      `https://api.themoviedb.org/3/movie/${idArray[3]}/videos?api_key=0fcbf8981eaf96f3de0fc2c4a94cf6f7&language=en`
    );
    setVideo4(video4.data.results[0].key);
  };

  useEffect(() => {
    window.scroll(0, 0);
    fetchMovies();
    fetchVideo();
    // eslint-disable-next-line
  }, []);

  return (
    <div className="footer">
      <h2>Trending Movies</h2>
      <div className="movies">
        <div className="movie-name">
          <a
            href={`https://www.youtube.com/watch?v=${video1}`}
            target="_blank"
            rel="noreferrer"
            style={{ color: "white" }}
          >
            {content[0]}
          </a>
        </div>
        <div className="movie-name">
          <a
            href={`https://www.youtube.com/watch?v=${video2}`}
            target="_blank"
            rel="noreferrer"
            style={{ color: "white" }}
          >
            {content[1]}
          </a>
        </div>
        <div className="movie-name">
          <a
            href={`https://www.youtube.com/watch?v=${video3}`}
            target="_blank"
            rel="noreferrer"
            style={{ color: "white" }}
          >
            {content[2]}
          </a>
        </div>
        <div className="movie-name">
          <a
            href={`https://www.youtube.com/watch?v=${video4}`}
            target="_blank"
            rel="noreferrer"
            style={{ color: "white" }}
          >
            {content[3]}
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
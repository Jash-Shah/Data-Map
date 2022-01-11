import "./Footer.css";
import React, { useEffect, useState } from "react";
import axios from "axios";
const Footer = () => {
  const [content, setContent] = useState([]);
  const api_key='0fcbf8981eaf96f3de0fc2c4a94cf6f7'
   // console.log(selectedGenres);
   const fetchMovies = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/trending/movie/day?api_key=${api_key}`
    );
    // console.log(data.results[0].title)
    const newArray = [];
    for (let i = 0; i < 4; i++) {
      newArray[i]=data.results[i].title;    
    }
    console.log(newArray)
    setContent(newArray)
  };
  useEffect(() => {
    window.scroll(0, 0);
    fetchMovies();
    // eslint-disable-next-line
  }, [])
  return (
    <div className="footer">
    <h2>Trending Movies</h2>

      <div className="movies">
        <div>
            {/* <a
              href="https://www.youtube.com/watch?v=pWdKf3MneyI"
              target="_blank"
              rel="noreferrer"
              style={{color: 'white'}}
            > */}
              <div>
              {content && content.map((c)=>{
                return <div className="movie-name"> {c}</div>
             })}
             </div> 
            {/* </a> */}
        </div>
      </div>
    </div>
  );
};

export default Footer;

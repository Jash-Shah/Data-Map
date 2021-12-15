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
    for (let i = 0; i < 5; i++) {
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
        <ul>
          <p  style={{paddingLeft:"50px"}}>
            <a
              href="https://www.youtube.com/watch?v=pWdKf3MneyI"
              target="_blank"
              rel="noreferrer"
            >
              {content && content.map((c)=>{
                <p>c.join('     ')</p> 
               return c
             })}
            </a>
            </p>
        </ul>
      </div>
    </div>
  );
};

export default Footer;

import axios from "axios";
import React, { useEffect, useState } from "react";
import SingleContent from "../Movie/SingleContent/SingleContent"
const Page2 = () => {
  const [content, setContent] = useState([]);
  const api_key = "0fcbf8981eaf96f3de0fc2c4a94cf6f7";
  const fetchMovies = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/discover/movie?api_key=${api_key}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false`
    );
    // console.log(data.results)
    setContent(data.results);
  };
  useEffect(() => {
    window.scroll(0, 0);
    fetchMovies();
    // eslint-disable-next-line
  }, []);
  return (
    <div className="trending">
      {content && content.map((c) => <SingleContent key={c.id} id={c.id} />)}
    </div>
  );
};

export default Page2;

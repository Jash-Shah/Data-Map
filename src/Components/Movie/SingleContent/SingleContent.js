import React, { useState,useEffect } from 'react';
import './SingleContent.css'
import { Button } from "@material-ui/core";
import YouTubeIcon from "@material-ui/icons/YouTube";
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import axios from 'axios';
import {
  img_500,
  unavailableLandscape,
} from "../../../config/config.js"
const SingleContent = ({
  id
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [content, setContent] = useState();
  const [video, setVideo] = useState();
  const api_key='0fcbf8981eaf96f3de0fc2c4a94cf6f7'
  const togglePopup = () => {
    setIsOpen(!isOpen);
  }
  const fetchData = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/movie/${id}?api_key=${api_key}&language=en-US`
    );

    setContent(data);
    // console.log(data);
  };

  const fetchVideo = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/movie/${id}/videos?api_key=${api_key}&language=en-US`
    );

    setVideo(data.results[0]?.key);
  };

  useEffect(() => {
    fetchData();
    fetchVideo();
    // eslint-disable-next-line
  }, []);
  return(
  <Popup
    trigger={
      <img
      className="poster"
      alt="img"
      // src={
      //   content.backdrop_path
      //     ? `${img_500}/${content.backdrop_path}`
      //     : unavailableLandscape
      // }
      // alt={(content.name || content.title).substring(0, 2)}
      onClick={togglePopup}
    />
    }
    modal
    nested
  >
    {close => (
      <div className="modal">
        <button className="close" onClick={close}>
          &times;
        </button>
        <div className="header"> 
        {content.name || content.title} (
                    {(
                      content.first_air_date ||
                      content.release_date ||
                      "-----"
                    ).substring(0, 4)}
                    )
        </div>
        <div className="content">
          {' '}
          {content.overview}
        </div>
        <div className="actions">
        <Button
                    variant="contained"
                    startIcon={<YouTubeIcon />}
                    color="secondary"
                    fullWidth
                    target="__blank"
                    href={`https://www.youtube.com/watch?v=${video}`}
                  >
                    Watch the Trailer
                  </Button>
        </div>
      </div>
    )}
  </Popup>
);
          }
export default SingleContent;
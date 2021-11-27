// import "./Page2.css"
// const Page2 = () => {
//   return (
//     <div className="second">
//       <h1>Page 2</h1>
//       <div className="left">
//         <h1>hi this is left </h1>
//         <img
//           src="https://images4.alphacoders.com/116/thumbbig-1168133.webp"
//           alt="movie_poster"
//         ></img>
//         <button>
//           <a
//             id="page2"
//             href="https://www.youtube.com/watch?v=8YjFbMbfXaQ"
//             target="_blank"
//             rel="noreferrer"
//           >
//             watch trailer
//           </a>
//         </button>
//         <p>
//           Martial-arts master Shang-Chi confronts the past he thought he left
//           behind when he's drawn into the web of the mysterious Ten Rings
//           organization. Release date: 2 September 2021 (India) Show: Marvel
//           Studios LEGENDS Director: Destin Daniel Cretton Box office: $431.3
//           million Music by: Joel P. West Produced by: Kevin Feige; Jonathan
//           Schwartz
//         </p>
//       </div>
//     </div>
//   );
// };

// export default Page2;
import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
// import axios from "axios";
// import {
//   img_500,
//   unavailableLandscape,
// } from "../../config/config";
import "./Page2.css";
import { Button } from "@material-ui/core";
import YouTubeIcon from "@material-ui/icons/YouTube";

const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  paper: {
    width: "90%",
    height: "80%",
    backgroundColor: "#39445a",
    border: "1px solid #282c34",
    borderRadius: 10,
    color: "white",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(1, 1, 3)
  },
}));

export default function TransitionsModal({ children, media_type, id }) {
  const classes = useStyles();
  const [content, setContent] = useState();
//   const [video, setVideo] = useState();


  const fetchData = async () => {
    // const { data } = await axios.get(
    //   `https://api.themoviedb.org/3/${media_type}/${id}?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`
    // );

    // setContent(data);
    // console.log(data);
  };

  const fetchVideo = async () => {
    // const { data } = await axios.get(
    //   `https://api.themoviedb.org/3/${media_type}/${id}/videos?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`
    // );

    // setVideo(data.results[0]?.key);
  };

  useEffect(() => {
    fetchData();
    fetchVideo();
    // eslint-disable-next-line
  }, []);

  return (
    <>
      <div
        className="media"
        style={{ cursor: "pointer" }}
        color="inherit"
      >
        {children}
      </div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade>
          {content && (
            <div className={classes.paper}>
              <div className="ContentModal">
                <img
                  src={
                      ""
                    // content.backdrop_path
                    //   ? `${img_500}/${content.backdrop_path}`
                    //   : unavailableLandscape
                  }
                  alt={(content.name || content.title).substring(0, 2)}
                  className="ContentModal__landscape"
                />
                <div className="ContentModal__about">
                  <span className="ContentModal__title">
                    {content.name || content.title} (
                    {(
                      content.first_air_date ||
                      content.release_date ||
                      "-----"
                    ).substring(0, 4)}
                    )
                  </span>
                  {content.tagline && (
                    <i className="tagline">{content.tagline}</i>
                  )}

                  <span className="ContentModal__description">
                    {content.overview}
                  </span>

                  <Button
                    variant="contained"
                    startIcon={<YouTubeIcon />}
                    color="secondary"
                    target="__blank"
                    // href={`https://www.youtube.com/watch?v=${video}`}
                  >
                    Watch the Trailer
                  </Button>
                </div>
              </div>
            </div>
          )}
        </Fade>
      </Modal>
    </>
  );
}
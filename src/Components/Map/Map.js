import ForceGraph2D from "react-force-graph-2d"; //importing react force graph module for our custom 2d graph
import React, { useEffect, useState } from "react"; //importing hooks
import axios from "axios";
import { useNavigate, useSearchParams } from "react-router-dom";

const Map = () => {
  const [graph, setGraph] = useState({ nodes: [], links: [] }); //useState hook sets the nodes and links
  const [movieName, setmovieName] = useState(); //useState hook sets the movies
  const [searchParams, setSearchParams] = useSearchParams(); //for decoding the query argument
  let q = searchParams.get("movie");
  let navigate = useNavigate(); //variable for navigating between pages
  const fetchLink = async () => {
    //for fetching API from the ML model trained to give similar movies
    console.log("Q =", q);
    var movie = await axios.get(
      `http://127.0.0.1:5000/similar_to/${q}` //q is the moviename passed in the link for getting specific nodes and links for the movie specified
    );
    console.log("MOVIE = ", movie.data);
    if (movie.data.status !== undefined && movie.data.status === "error404") {
      //for checking if the movie is absent in the database
      navigate("/404");
    }
    setGraph(movie.data);
  };

  const handleClick = (node) => {
    //for handling the action of clicking on the secondary nodes which redirects to their corresponding maps
    console.log("NODE = ", node.id);
    // q = node.id;
    setmovieName(node.id);
    try {
      let s = "/map?movie=" + node.id;
      navigate(s.toLowerCase(), { replace: true });
      window.location.reload(); //to reload the entire info so that the info part on left also gets reloaded with the map
    } catch (error) {
      console.error(error); //catches the error
    }
  };

  useEffect(() => {
    //useEffect is used to render the changes
    // setGraph()
    fetchLink();
    // eslint-disable-next-line
  }, [movieName]);

  return (
    <ForceGraph2D
      graphData={graph}
      //sets the graph as a Force2d graph
      // linkColor={(link) => "#9ef0d0"}
      minZoom={4} //minimim zoom of canvas
      maxZoom={7} //maximum zoom of canvas
      // linkDirectionalArrowLength = { link => link.value }
      linkDirectionalArrowLength={4} //arrow size depending upon the closeness
      linkDirectionalArrowRelPos={(link) => link.value * 0.0085}
      // arrow position depending upon the closeness
      linkColor={(link) =>
        "rgba(" + link.value.toString() + ",0," + link.value.toString() + ",1)"
      }
      // colors of nodes depending upon closeness in database done by passing a variable link.value
      linkWidth={(link) => link.value * 0.01}
      onNodeClick={handleClick}
      nodeVal={(node) => node.val}
      nodeCanvasObject={(node, ctx, globalScale) => {
        if (node.id === graph.nodes[9].id) {
          node.color = "white"; //root node colored white
          node.val = 0.95;
        }
        for (let i = 0; i < 15; i++) {
          if (node.id === graph.nodes[i].id) {
            node.val = Math.pow(1.2, Math.sqrt(i)); //custom function for node size
            node.color = "#d083f9";
            break;
          }
        }
        const label = node.id;
        const fontSize = ((1 / node.val) * 22) / globalScale; //custom function for node text fontsize
        ctx.font = `${fontSize}px Ubuntu`;
        const textWidth = ctx.measureText(label).width * node.val;
        const bckgDimensions = [textWidth, fontSize].map(
          (n) => n + fontSize * 0.2
        ); // some padding
        ctx.fillStyle = "rgba(10,0,10, 0.8)"; //coloring the canvas object
        ctx.fillRect(
          node.x - bckgDimensions[0] / 2,
          node.y - bckgDimensions[1] / 2,
          bckgDimensions[0],
          bckgDimensions[1]
        );
        ctx.textAlign = "center";
        // aligning the text in centre
        ctx.textBaseline = "middle";
        ctx.fillStyle = node.color;
        ctx.fillText(label, node.x, node.y);

        node.__bckgDimensions = bckgDimensions; // to re-use in nodePointerAreaPaint
      }}
      nodePointerAreaPaint={(node, color, ctx) => {
        ctx.fillStyle = color;
        const bckgDimensions = node.__bckgDimensions;
        bckgDimensions &&
          ctx.fillRect(
            node.x - bckgDimensions[0] / 2,
            node.y - bckgDimensions[1] / 2,
            ...bckgDimensions
          );
      }}
    />
  );
};

export default Map;
// export the map
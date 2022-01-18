import ForceGraph2D from "react-force-graph-2d";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useSearchParams } from "react-router-dom";

const Map = () => {
    const [graph, setGraph] = useState({ nodes: [], links: [] });
    const [searchParams, setSearchParams] = useSearchParams();
    const q = searchParams.get("q");
    const fetchLink = async() => {
        const movie = await axios.get(
            `https://data-map-api.herokuapp.com/similar_to/${q}`
        );
        console.log(movie.data);
        setGraph(movie.data);
    };

    useEffect(() => {
        fetchLink();

        // eslint-disable-next-line
    }, []);

    return ( <
        ForceGraph2D graphData = { graph }
        linkColor = { link => "blue" }
        minZoom = { 4 }
        maxZoom = { 7 }
        linkDirectionalArrowLength = { 2.5 }
        linkDirectionalArrowRelPos = { 3 }
        // onNodeClick = {
        //     handleClick
        // }
        nodeCanvasObject = {
            (node, ctx, globalScale) => {
                const label = node.id;
                const fontSize = 20 / globalScale;
                ctx.font = `${fontSize}px Sans-Serif`;
                const textWidth = ctx.measureText(label).width;
                const bckgDimensions = [textWidth, fontSize].map(
                    (n) => n + fontSize * 0.2
                ); // some padding

                ctx.fillStyle = "rgba(0,0,0, 0.8)";
                // ctx.fillRect(
                //     node.x - bckgDimensions[0] / 2,
                //     node.y - bckgDimensions[1] / 2,
                //     ...bckgDimensions
                // );
                ctx.textAlign = "center";
                ctx.textBaseline = "middle";
                ctx.fillStyle = node.color;
                ctx.fillText(label, node.x, node.y);

                node.__bckgDimensions = bckgDimensions; // to re-use in nodePointerAreaPaint
            }
        }
        nodePointerAreaPaint = {
            (node, color, ctx) => {
                ctx.fillStyle = color;
                const bckgDimensions = node.__bckgDimensions;
                bckgDimensions &&
                    ctx.fillRect(
                        node.x - bckgDimensions[0] / 2,
                        node.y - bckgDimensions[1] / 2,
                        ...bckgDimensions
                    );
            }
        }
        />
    );
};

export default Map;
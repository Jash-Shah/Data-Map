import ForceGraph2D from "react-force-graph-2d";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useSearchParams, Link } from "react-router-dom";
import PageNotFound from "../Error_Page/PageNotFound";

const Map = () => {
    const [graph, setGraph] = useState({ nodes: [], links: [] });
    const [movieName, setmovieName] = useState();
    const [searchParams, setSearchParams] = useSearchParams();
    let q = searchParams.get("movie");
    let flag = true;
    let navigate = useNavigate();
    const fetchLink = async() => {
        console.log("Q =", q)
        var movie = await axios.get(
            `https://data-map-api.herokuapp.com/similar_to/${q}`
        );
        console.log("MOVIE = ", movie.data);
        if (movie.data.status !== undefined && movie.data.status === "error404")
        {
            navigate("/404")
        }
        setGraph(movie.data);
    };


    const handleClick = (node) => {
        console.log("NODE = ", node.id)
            // q = node.id;
        setmovieName(node.id);
        try {
            let s = '/map?q=' + node.id;
            navigate(s.toLowerCase(), { replace: true });
            window.location.reload();


        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        // setGraph()
        fetchLink();
        // eslint-disable-next-line
    }, [movieName]);

    const data = {
        nodes: [
            { id: "A", color: "#9ef0d0" },
            { id: "B", color: "white" },
            { id: "C", color: "white" },
            { id: "D", color: "white" },
            { id: "E", color: "white" },
            { id: "F", color: "white" },
            { id: "G", color: "white" },
            { id: "H", color: "white" },
            { id: "I", color: "white" },
            { id: "J", color: "white" },
        ],
        links: [
            { source: "A", target: "B", value: 3 },
            { source: "A", target: "C", value: 5 },
            { source: "A", target: "D", value: 10 },
            { source: "A", target: "E", value: 15 },
            { source: "A", target: "F", value: 20 },
            { source: "A", target: "G", value: 25 },
            { source: "A", target: "H", value: 30 },
            { source: "A", target: "I", value: 35 },
            { source: "A", target: "J", value: 40 },
        ]
    }


    return ( <
        ForceGraph2D graphData = { graph }
        linkColor = { link => "#9ef0d0" }
        minZoom = { 4 }
        maxZoom = { 7 }
        // linkDirectionalArrowLength = { link => link.value }
        linkDirectionalArrowLength = { 4 }
        linkDirectionalArrowRelPos = { link => link.value * 0.0085 }
        linkColor = {
            link => "rgba(" + (link.value).toString() + ",0," + (link.value).toString() + ",1)"
        }
        linkWidth = { link => link.value * 0.01 }
        // backgroundColor="yellow"
        onNodeClick = {
            handleClick
        }
        nodeVal = { node => node.val }
        nodeCanvasObject = {
            (node, ctx, globalScale) => {
                if (node.id === graph.nodes[14].id) {
                    node.color = "white"
                    node.val = 0.95
                }
                for (let i = 0; i < 14; i++) {
                    if (node.id === graph.nodes[i].id) {
                        node.val = Math.pow(1.2, Math.sqrt(i));
                        node.color = "#d083f9"
                        break;
                    }
                }
                const label = node.id;
                const fontSize = (1 / node.val) * 22 / globalScale;
                ctx.font = `${fontSize}px Ubuntu`;
                const textWidth = ctx.measureText(label).width * node.val;
                const bckgDimensions = [textWidth, fontSize].map(
                    (n) => n + fontSize * 0.2
                ); // some padding
                ctx.fillStyle = "rgba(10,0,10, 0.8)";
                ctx.fillRect(
                    node.x - bckgDimensions[0] / 2,
                    node.y - bckgDimensions[1] / 2,
                    bckgDimensions[0],
                    bckgDimensions[1]
                );
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
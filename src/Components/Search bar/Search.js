import React, { useState, useEffect } from "react";
import { Button, TextField, ThemeProvider } from "@material-ui/core";
import { createTheme } from "@material-ui/core/styles";
import "./Search.css";
import SearchIcon from "@material-ui/icons/Search";
 import axios from "axios";
 import Page2 from "../page_2/page_2";
 import { useNavigate } from "react-router-dom";
  
const Search = () => {
  let navigate = useNavigate();
    const [type, setType] = useState(0);
    const [searchText, setSearchText] = useState("");
    const [page,setPage]=useState();
    const api_key='0fcbf8981eaf96f3de0fc2c4a94cf6f7'
  const darkTheme = createTheme({
    palette: {
      type: "dark",
      primary: {
        main: "#fff",
      },
    },
  });
    const fetchSearch = async () => {
      try {
        // const { data } = await axios.get(
        //   `https://api.themoviedb.org/3/search/movie}?api_key=${
        //    api_key
        //   }&language=en-US&query=${searchText}&page=${page}&include_adult=false`
        // );
        navigate(`/p?q=${ searchText }`);
        // console.log(data);
      } catch (error) {
        console.error(error);
      }
    };

    useEffect(() => {
      window.scroll(0, 0);
      // fetchSearch();
      // eslint-disable-next-line
    }, [type, page]);

  return (
    <div>
      <ThemeProvider theme={darkTheme}>
        <div className="search">
          <TextField
            style={{
              flex: 1,
              paddingLeft:'10px',
              paddingTop:'4px',
              paddingBottom:'4px',
              color:'black',
              textTransform:"uppercase",
              overflow:'hidden'
            }}
            className="searchBox"
            placeholder="Search"
            variant="standard"
            InputProps={{
              disableUnderline: true,
            }}
            inputProps={{ style: { fontSize:25} }}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <Button
            onClick={fetchSearch}
            variant="contained"
            style={{ marginLeft: -70,backgroundColor:'transparent',color:'white' }}
          >
            <SearchIcon fontSize="large" />
          </Button>
        </div>
      </ThemeProvider>
    </div>
  );
};

export default Search;

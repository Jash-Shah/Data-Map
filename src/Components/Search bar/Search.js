// import React, { useState, useEffect } from "react";
import React from "react";
import { Button, TextField, ThemeProvider } from "@material-ui/core";
import { createTheme } from "@material-ui/core/styles";
import "./Search.css";
import SearchIcon from "@material-ui/icons/Search";
//  import axios from "axios";
  
const Search = () => {
  //   const [type, setType] = useState(0);
  //   const [searchText, setSearchText] = useState("");
  const darkTheme = createTheme({
    palette: {
      type: "dark",
      primary: {
        main: "#fff",
      },
    },
  });
  const fetchSearch = async () => {};
  //   const fetchSearch = async () => {
  //     try {
  //       const { data } = await axios.get(
  //         `https://api.themoviedb.org/3/search/${type ? "tv" : "movie"}?api_key=${
  //           process.env.REACT_APP_API_KEY
  //         }&language=en-US&query=${searchText}&page=${page}&include_adult=false`
  //       );
  //       // console.log(data);
  //     } catch (error) {
  //       console.error(error);
  //     }
  //   };

  //   useEffect(() => {
  //     window.scroll(0, 0);
  //     fetchSearch();
  //     // eslint-disable-next-line
  //   }, [type, page]);

  return (
    <div>
      <ThemeProvider theme={darkTheme}>
        <div className="search">
          <TextField
            style={{
              flex: 1,
              width:'50%'
            }}
            className="searchBox"
            label="Search"
            
            variant="standard"
            InputProps={{
              disableUnderline: true,
            }}
            // onChange={(e) => setSearchText(e.target.value)}
          />
          <Button
            onClick={fetchSearch}
            variant="contained"
            style={{ marginLeft: 10 }}
          >
            <SearchIcon fontSize="large" />
          </Button>
        </div>
      </ThemeProvider>
    </div>
  );
};

export default Search;

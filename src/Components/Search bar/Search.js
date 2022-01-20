import React, { useState, useEffect } from "react";
import { Button, TextField, ThemeProvider } from "@material-ui/core";
import { createTheme } from "@material-ui/core/styles";
import "./Search.css";
import SearchIcon from "@material-ui/icons/Search";
 import { useNavigate } from "react-router-dom";

  
const Search = () => {
  // used to navigate among pages
  let navigate = useNavigate();
    const [type, setType] = useState(0);
    // created a parameter for storing searched text
    const [searchText, setSearchText] = useState("");
    const [page,setPage]=useState();
  const darkTheme = createTheme({
    palette: {
      type: "dark",
      primary: {
        main: "#fff",
      },
    },
  });
// function used to fetch the search data
  const fetchSearch = async () => {
    try {
      navigate(`/map?movie=${ searchText }`);
    } catch (error) {
      console.error(error);
    }
  };

    useEffect(() => {
      //useEffect is used to render the changes
      window.scroll(0, 0);
      // eslint-disable-next-line
    }, [type, page]);


    const handleKeyDown = (event) => {
      
      if (event.key === 'Enter') {
        console.log('hi')
        fetchSearch();
      }
    }

  return (
    <div>
      {/* creating class to make search button and providing styling  to button */}
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
            onKeyPress={handleKeyDown}
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
import Footer from "./Components/Footer/Footer";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; 
//importing react components from react-router-dom
import Navbar from "./Components/Navbar/Navbar";
import "./App.css";
import Search from "./Components/Search bar/Search";
import About from "./Components/About/about";
import Page2 from "./Components/page_2/page_2";
import PageNotFound from "./Components/Error_Page/PageNotFound";
function App() {
  return (
    <>
      <Router>
        {/* 
        enable us  to navigate among  various components in a React Application
        */}
        <div className="App">
          <Navbar />
          <Routes> 
             {/*
             Route is used to show that page with which path of url matches.
             */}
            <Route path="/" element={<Search />} />
            <Route exact path="/map" element={<Page2 />} />
            <Route exact path="/about" element={<About />} />
            <Route exact path ="/*" element = {<PageNotFound/>} />
          </Routes>
        </div>
      </Router>
      <Footer />
      {/* footer is the component created for displaying footer of the page/trending movie page */}
      <div></div>
    </>
  );
}

export default App;

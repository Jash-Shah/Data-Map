import Footer from "./Components/Footer/Footer";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";import Navbar from "./Components/Navbar/Navbar";
import './App.css'
import Search from "./Components/Search bar/Search"
import About from "./Components/About/about";
import Page2 from "./Components/page_2/page_2";
function App() {
  return (
    <>
      <Router>
        <div className="App">
          <Navbar />
          <Routes>
          <Route path="/" element={<Search/>}/>
            <Route exact path="/p" element={<Page2 />} />
            <Route exact path="/about" element={<About/>}/>
          </Routes>
        </div>
      </Router>
      <Footer/>
       <div>
      </div>
    </>
  );
}

export default App;

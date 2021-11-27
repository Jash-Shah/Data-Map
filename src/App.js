import Footer from "./Components/Footer/Footer";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";import Navbar from "./Components/Navbar/Navbar";
import Search from "./Components/Search bar/Search";
import './App.css'
import Page2 from "./Components/Page2";
function App() {
  return (
    <>
      <Router>
        <div className="App">
          <Navbar />
          <div className="down">
            <Footer />
          </div>
          <Routes>
          <Route exact path="/" element={<Search />} />
            <Route exact path="/page2" element={<Page2 />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;

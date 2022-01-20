import "./about.css";
import React from "react";

const About = () => {
  return(
<div id="portfolio" class="our-portfolio section">
  {/* portfolio of creators */}
    <div class="container">
          <div class="section-heading">
            <h2>Developers</h2>
      </div>
      <div class="row">
        <div class="col-lg-3 col-sm-6 px-4">
            <div class="item">
              <div class="hidden-content">
                <h4>Pratiksha Sankhe</h4>
                {/* contributors info */}
              </div>
              <div class="showed-content">
                <img src="https://lh3.googleusercontent.com/nvL_RG4esZpDg1Bcxsp4vyqbPtyJCSA3M_HWaHajYVpUHOyn_blFihC3AchFG5nKcuu8WUBFYBcW89-owWE2KM1EOzwg4DGw7U41P12BxXa1dWveGz3JJ2oeQTsnOUzPxTJ9iYy99Q=w2400" alt=""></img>
              {/* image source */}
              </div>
            </div>
            <div className="github">
                <a href="https://github.com/psankhe28" target="_blank" rel="noopener noreferrer"><i class="fab fa-github"></i></a>
              {/* github link of contributer*/}
              </div>
        </div>
        <div class="col-lg-3 col-sm-6 px-4">
            <div class="item">
              <div class="hidden-content">
                <h4>Jash Shah</h4>
              </div>
              <div class="showed-content">
                <img src="https://lh3.googleusercontent.com/nvL_RG4esZpDg1Bcxsp4vyqbPtyJCSA3M_HWaHajYVpUHOyn_blFihC3AchFG5nKcuu8WUBFYBcW89-owWE2KM1EOzwg4DGw7U41P12BxXa1dWveGz3JJ2oeQTsnOUzPxTJ9iYy99Q=w2400" alt=""></img>
              </div>
            </div>
            <div className="github">
                <a href="https://github.com/Jash-Shah" target="_blank" rel="noopener noreferrer"><i class="fab fa-github"></i></a>
              </div>
        </div>
        <div class="col-lg-3 col-sm-6 px-4">
            <div class="item">
              <div class="hidden-content">
                <h4>Dushant Harinkhede</h4>
              </div>
              <div class="showed-content">
                <img src="https://lh3.googleusercontent.com/nvL_RG4esZpDg1Bcxsp4vyqbPtyJCSA3M_HWaHajYVpUHOyn_blFihC3AchFG5nKcuu8WUBFYBcW89-owWE2KM1EOzwg4DGw7U41P12BxXa1dWveGz3JJ2oeQTsnOUzPxTJ9iYy99Q=w2400" alt=""></img>
              </div>
            </div>
            <div className="github">
                <a href="https://github.com/Dushant12" target="_blank" rel="noopener noreferrer"><i class="fab fa-github"></i></a>
              </div>
        </div>
        <div class="col-lg-3 col-sm-6 px-4">
            <div class="item">
              <div class="hidden-content">
                <h4>Naman Kothari</h4>
              </div>
              <div class="showed-content">
                <img src="https://lh3.googleusercontent.com/nvL_RG4esZpDg1Bcxsp4vyqbPtyJCSA3M_HWaHajYVpUHOyn_blFihC3AchFG5nKcuu8WUBFYBcW89-owWE2KM1EOzwg4DGw7U41P12BxXa1dWveGz3JJ2oeQTsnOUzPxTJ9iYy99Q=w2400" alt=""></img>
              </div>
            </div>
            <div className="github">
                <a href="https://github.com/NamanKothari5" target="_blank" rel="noopener noreferrer"><i class="fab fa-github"></i></a>
              </div>
        </div>
      </div>
    </div>
  </div>

  );
};

export default About;
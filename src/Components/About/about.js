import "./about.css";
const About = () => {
  return (
    <div className="about">
      <div className="about-section">
        <h1>About Us Page</h1>
        <p>
          Data Map will take a input of a music,movie or book and give a map of
          other media which are in the same genre as the one inputted by the
          user.The map will be such that the distance between two movie or music
          names will represent their closeness in genre types. For example:if
          user inputs 3 idiot as movie name then it will give tare zameen par
          and similar movies as closest recommendation in the map and as you
          move away from the centre ,the overlapping of the genre typing of the
          two movies will decrease.
        </p>
      </div>
      <h2 id="1">Our team</h2>
      <div className="row">
        <div className="column">
          <div className="card">
            <img
              src="https://media-exp1.licdn.com/dms/image/C4D03AQHl_n-1wT1V8A/profile-displayphoto-shrink_200_200/0/1618750931333?e=1643846400&v=beta&t=YtafKTe6xAwdQj3FqquBhalf9nmJWf0euP_IVmMCbVM"
              alt="img"
            ></img>
            <div className="container">
              <h4>Dushant Harinkhede</h4>
              <p>GITHUB Link :</p>
              <p>email address:</p>
              <p>
                <button className="button">Contact</button>
              </p>
            </div>
          </div>
        </div>

        <div className="column">
          <div className="card">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRPRdxQM6AqhoW22B0NSKfIvq49GUiRxedWA&usqp=CAU"
              alt="img"
            ></img>
            <div className="container">
              <h3>Pratiksha Sankhe</h3>
              <p>GITHUB Link :</p>
              <p>email address:</p>
              <p>
                <button className="button">Contact</button>
              </p>
            </div>
          </div>
        </div>

        <div className="column">
          <div className="card">
            <img
              src="https://media.istockphoto.com/photos/woman-using-covid19-lockdown-to-finally-finish-coding-for-a-new-picture-id1280720394?b=1&k=20&m=1280720394&s=170667a&w=0&h=eRUffvpLTljTivBkS6YMa_5RIJjOoijyEcL6KbgCp8A="
              alt="img"
            ></img>
            <div className="container">
              <h3>Jash Shah</h3>
              <p>GITHUB Link :</p>
              <p>email address:</p>
              <p>
                <button className="button">Contact</button>
              </p>
            </div>
          </div>
        </div>

        <div className="column">
          <div className="card">
            <img
              src="https://media.istockphoto.com/photos/woman-using-covid19-lockdown-to-finally-finish-coding-for-a-new-picture-id1280720394?b=1&k=20&m=1280720394&s=170667a&w=0&h=eRUffvpLTljTivBkS6YMa_5RIJjOoijyEcL6KbgCp8A="
              alt="img"
            ></img>
            <div className="container">
              <h3>Naman Kothari</h3>
              <p>GITHUB Link :</p>
              <p>email address:</p>
              <p>
                <button className="button">Contact</button>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

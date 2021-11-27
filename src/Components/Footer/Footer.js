import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <h2>Trending Movies</h2>
      <div className="movies">
        <ul>
          <li>
            <a
              href="https://www.youtube.com/watch?v=pWdKf3MneyI"
              target="_blank"
              rel="noreferrer"
            >
              Antman
            </a>
          </li>
          <li>
            <a
              href="https://www.youtube.com/watch?v=8YjFbMbfXaQ"
              target="_blank"
              rel="noreferrer"
            >
              Shang-chi
            </a>
          </li>
          <li>
            <a
              href="https://www.youtube.com/watch?v=x_me3xsvDgk"
              target="_blank"
              rel="noreferrer"
            >
              Eternals
            </a>
          </li>
          <li>
            <a
              href="https://www.youtube.com/watch?v=nnXpbTFrqXA"
              target="_blank"
              rel="noreferrer"
            >
              Jai Bhim
            </a>
          </li>
          <li>
            <a
              href="https://www.youtube.com/watch?v=X2m-08cOAbc"
              target="_blank"
              rel="noreferrer"
            >
              Free Guy
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;

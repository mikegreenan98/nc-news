import { Link } from "react-router-dom";

const Header = ({setZoomInArticle}) => {
  return (
    <div className="header">
      <h1>NC NEWS</h1>
      <nav>
        <Link to="/articles" onClick={() => {setZoomInArticle(0)}}>Articles...         </Link>
        <Link to="/topics">....Topics </Link>
      </nav>
    </div>
  );
};


export default Header;
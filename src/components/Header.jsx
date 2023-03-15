import { Link } from "react-router-dom";

const Header = ({setZoomInArticle}) => {
  return (
    <div className="header">
      <h1>NC NEWS</h1>
      <p id="currentUserText">Current user_id</p>
      <p id="currentUserName"><b>jessjelly</b></p>
      <nav>
        <Link to="/articles">Articles...         </Link>
        <Link to="/topics">....Topics </Link>
      </nav>
    </div>
  );
};


export default Header;
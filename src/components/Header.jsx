import { Link } from "react-router-dom";

const Header = ({setZoomInArticle}) => {

  const linkStyle = {
    margin: "1rem",
    // color: "black",
    // background: "#D0C5C5",
    // border: "0.5rem solid #D0C5C5",
    // 'border-radius': "12%",

  }


  return (
    <div className="header">
      <h1 className="headerText"><b>NC NEWS</b></h1>
      <div id="navAndID">
        <Link to="/articles" className="navLink" style={linkStyle}>
          <button className="buttonAtHeader">Articles</button>
        </Link>
        <Link to="/topics" className="navLink" style={linkStyle}>
          <button className="buttonAtHeader">Topics</button>
          </Link>
        <p id="currentUserText">user:<br></br><b>jessjelly</b></p>
      </div>
    </div>
  );
};


export default Header;
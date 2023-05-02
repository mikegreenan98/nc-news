import { Link } from "react-router-dom";
import { useContext} from "react";
import { UserContext } from "../contexts/user";
import { AvatarContext } from "../contexts/avatar";

const Header = ({setZoomInArticle}) => {

  const linkStyle = {
    margin: "1rem",
    // color: "black",
    // background: "#D0C5C5",
    // border: "0.5rem solid #D0C5C5",
    // 'border-radius': "12%",

  }

  const {user} = useContext(UserContext);
  const {avatar} = useContext(AvatarContext);

  return (
    <div className="header">
      <h1 className="headerText"><b>NC NEWS</b></h1>
        {/* <br></br> */}
      <div id="navAndID">
        <Link to="/articles" className="navLink" style={linkStyle}>
          <button className="buttonAtHeader">All articles</button>
        </Link>
        <Link to="/users" className="navLink" style={linkStyle}>
          <button className="buttonAtHeader">User login</button>
        </Link>
        <Link to="/topics" className="navLink" style={linkStyle}>
          <button className="buttonAtHeader">Topic selection</button>
        </Link>
        <div className="avatarAtHeader">
        <p id="currentUserText">logged in as:<br></br></p>
          <img key={avatar} className="avatarImage" src={avatar} alt=""></img>
        <p id="currentUserText"><b>{user}</b></p>
        </div>
      </div>
        <br></br>
    </div>
  );
};


export default Header;
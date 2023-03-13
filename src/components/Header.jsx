import { Link } from "react-router-dom";

const Header = () => {
    console.log('HERE In Header');
  return (
    <div className="header">
      <h1>NC NEWS</h1>
      <nav>
        <Link to="/articles">Articles...         </Link>
        <Link to="/topics">....Topics </Link>
      </nav>
    </div>
  );
};


export default Header;
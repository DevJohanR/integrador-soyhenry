import PATHROUTES from "../../helpers/PathRoutes.helpers";
import SearchBar from "../SearchBar/SearchBar";
import { Link } from "react-router-dom"; 

function Navbar({ onSearch }) {
  return (
    <div>
      <Link to={PATHROUTES.HOME}>Home</Link>
      <Link to={PATHROUTES.ABOUT}>About </Link>
      <SearchBar onSearch={onSearch} />
    </div>
  );
}

export default Navbar;

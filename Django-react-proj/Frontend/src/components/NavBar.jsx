import homeImage from "../img/home1.png";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="flex bg-slate-600 py-7 h-20 space-x-6 border border-transparent rounded-b-lg drop-shadow-2xl">
      <div className="flex ml-6 space-x-2">
        <img className="" src={homeImage} alt="" />
        <Link to="/">
          <h1 className="font-mono text-base italic text-white">StudensApp</h1>
        </Link>
      </div>
      <div>
        <Link to="/">
          <h1 className="font-mono text-base italic text-white">List</h1>
        </Link>
      </div>
      <div>
        <Link to="create">
          <h1 className="font-mono text-base italic text-white">Create</h1>
        </Link>
      </div>
    </nav>
  );
};

export default NavBar;

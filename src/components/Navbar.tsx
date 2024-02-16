import { navbarData } from "../data/nav-data";
import { Link } from "react-router-dom";
import { HiMiniGlobeAlt } from "react-icons/hi2";
const Navbar = () => {
  return (
    <nav className="flex justify-between h-10 items-center">
      <div>
        <HiMiniGlobeAlt size={30} />
      </div>
      <ul className="flex w-[50%] justify-between">
        {navbarData.map((label) => (
          <Link key={label.path} to={label.path}>
            <li>{label.label}</li>
          </Link>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;

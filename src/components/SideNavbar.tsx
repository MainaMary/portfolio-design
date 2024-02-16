import { AiOutlineHome } from "react-icons/ai";
import { Link } from "react-router-dom";
import { BsPerson } from "react-icons/bs";
import { GoProject } from "react-icons/go";
import Profile from "../assets/profile.jpeg";

const sideNav = [
  {
    label: "Homepage",
    path: "/",
    icon: <AiOutlineHome />,
  },
  {
    label: "Projects",
    path: "/about",
    icon: <GoProject />,
  },
  {
    label: "About",
    path: "/about",
    icon: <BsPerson />,
  },
];
const SideNavbar = () => {
  return (
    <nav className="w-[20%] py-6 px-10">
      <div className="text-center">
        <img src={Profile} className="w-[50px] h-[50px] text-center m-auto" />
        <h2 className="text-base">Ola Ategun</h2>
        <h3 className=" text-slate text-md ">Product designer</h3>
      </div>
      {sideNav.map((label) => (
        <ul key={label.label}>
          <Link to={label.path} className="flex gap-3 h-auto items-center my-2">
            <div>{label.icon}</div>
            <li>{label.label}</li>
          </Link>
        </ul>
      ))}
    </nav>
  );
};

export default SideNavbar;

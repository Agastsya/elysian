import { NavLink } from "react-router-dom";
import mainlogo from "../assets/stumbleupon.png";

const Header = () => {
  return (
    <>
      <header className="flex justify-between bg-transparent py-4  ">
        <img src={mainlogo} alt="" className="h-10" />
        <ul className="flex gap-6 pr-5 content-start pt-2 text-lg font-semi-bold font-Roboto ">
          <li className=" p-2s  rounded-lg h-10 justify-center flex items-center w-24 text-center shadow-lg space-y-3">
            <NavLink to="/">Home</NavLink>
          </li>
          <li className=" p-2s  rounded-lg h-10 justify-center flex items-center w-24 text-center shadow-lg space-y-3">
            <NavLink to="/services">Services</NavLink>
          </li>
          <li className=" p-2s  rounded-lg h-10 justify-center flex items-center w-24 text-center shadow-lg space-y-3">
            <NavLink to="/about">About</NavLink>
          </li>
          <li className=" p-2s  rounded-lg h-10 justify-center flex items-center w-24 text-center shadow-lg space-y-3">
            <NavLink to="/contact">Contact</NavLink>
          </li>
        </ul>
      </header>
    </>
  );
};

export default Header;

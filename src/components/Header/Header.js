import "./Header.scss";
import { Link, NavLink } from "react-router-dom";

export default function Header() {

  const setActiveStyles = ({isActive}) => {
    return isActive ? {color: '#9F0013'}: undefined;
  };

  return (
    <header className="Header">
      <h1 className="Header-Title">
        <Link to="/">
          <span>Marvel </span>
          information portal
        </Link>
      </h1>
      <nav className="Header-Menu">
        <ul>
          <li>
            <NavLink
              end 
              to="/" 
              style={setActiveStyles}
            >Characters</NavLink>
          </li>
          /
          <li>
            <NavLink 
              end
              to="comics" 
              style={setActiveStyles}
            >Comics</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

import "./Header.scss";

export default function Header() {
  return (
    <header className="Header">
      <h1 className="Header-Title">
        <a href="#">
          <span>Marvel </span>
          information portal
        </a>
      </h1>
      <nav className="Header-Menu">
        <ul>
          <li>
            <a href="#">Characters</a>
          </li>
          /
          <li>
            <a href="#">Comics</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

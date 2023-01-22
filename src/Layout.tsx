import { Outlet, Link } from "react-router-dom";

import "./layout.css";

export function Layout(): JSX.Element {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/table">Table</Link>
          </li>
          <li>
            <Link to="/algorithm">Algorithm</Link>
          </li>
          <li>
            <Link to="/grid">Grid</Link>
          </li>
        </ul>
      </nav>

      <hr />
      <Outlet />
    </div>
  );
}

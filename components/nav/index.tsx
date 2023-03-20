import { NavLink } from "components/nav-link";
import * as React from "react";

export function Nav() {
  const [user, setUser] = React.useState(null);

  // only show nav when logged in
  if (!user) return null;

  return (
    <nav className="navbar navbar-expand navbar-dark bg-dark">
      <div className="navbar-nav">
        <NavLink href="/" exact className="nav-item nav-link">
          Home
        </NavLink>
        <a className="nav-item nav-link">Logout</a>
      </div>
    </nav>
  );
}

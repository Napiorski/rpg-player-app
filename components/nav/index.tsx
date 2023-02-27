import { NavLink } from "components/nav-link";
import * as React from "react";
import { userService } from "services";

export function Nav() {
  const [user, setUser] = React.useState(null);

  React.useEffect(() => {
    const subscription = userService.user.subscribe(
      (x: React.SetStateAction<null>) => setUser(x)
    );

    // the following is known as a destructor (tear down phase)
    return () => subscription.unsubscribe();
  }, []);

  function logout() {
    userService.logout();
  }

  // only show nav when logged in
  if (!user) return null;

  return (
    <nav className="navbar navbar-expand navbar-dark bg-dark">
      <div className="navbar-nav">
        <NavLink href="/" exact className="nav-item nav-link">
          Home
        </NavLink>
        <a onClick={logout} className="nav-item nav-link">
          Logout
        </a>
      </div>
    </nav>
  );
}

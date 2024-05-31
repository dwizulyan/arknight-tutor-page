import { NavLink } from "react-router-dom";

const Navbar: React.FC = () => {
  return (
    <div className="navbar bg-base-100 fixed top-0 left-0 px-10 z-[99999]">
      <div className="flex-1">
        <a className="text-xl fira font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
          arknight-tutor-page
        </a>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          <li>
            <NavLink
              to="/"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-primary" : ""
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <details>
              <summary>Guide</summary>
              <ul className="p-2 bg-base-100 rounded-t-none">
                <li>
                  <NavLink
                    to="/guide/stages"
                    className={({ isActive, isPending }) =>
                      isPending ? "pending" : isActive ? "text-primary" : ""
                    }
                  >
                    Stages
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/guide/operator"
                    className={({ isActive, isPending }) =>
                      isPending ? "pending" : isActive ? "text-primary" : ""
                    }
                  >
                    Operator
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/guide/Squad"
                    className={({ isActive, isPending }) =>
                      isPending ? "pending" : isActive ? "text-primary" : ""
                    }
                  >
                    Messages
                  </NavLink>
                </li>
              </ul>
            </details>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default Navbar;

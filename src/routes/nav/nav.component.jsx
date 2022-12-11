import { Fragment } from "react";
import { Outlet, Link } from "react-router-dom";
import "./nav.styles.scss";
import { ReactComponent as CrwnLogo } from "../../assets/crown.svg";
//for nav bar
const Nav = () => {
  return (
    <Fragment>
      <div className="navigation">
        <div>
          <Link className="logo-container" to="/">
            <CrwnLogo className="logo" />
          </Link>
        </div>
        <div className=".nav-links-container">
          <Link className="nav-link" to="/shop">
            Shop
          </Link>
        </div>
      </div>
      <Outlet />
    </Fragment>
  );
};

export default Nav;

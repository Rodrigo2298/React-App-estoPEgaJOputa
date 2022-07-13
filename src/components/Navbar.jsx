import { Fragment } from "react";

const Navbar = () => {
  return (
    <Fragment>
      <nav className="navbar py-2 navbar bg-primary">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
          <img className="mx-2" src="https://via.placeholder.com/32x32" alt=""/>
            Does a 32 Hit?
          </a>
        </div>
      </nav>
    </Fragment>
  );
};

export default Navbar;

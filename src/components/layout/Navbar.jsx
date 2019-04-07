import React from "react";
import { Link } from "react-router-dom";
export const Navbar = function() {
  const userMenu = (
    <ul className="navbar-nav ml-auto">
      <li className="nav-item">
        <a className="nav-link" href="javascript:void(0)">
          <img
            className="rounded-circle"
            src="image/user.png"
            alt="user image"
            title="user image"
            style={{ width: "60px", marginRight: "5px" }}
          />
        </a>
      </li>
      <li className="nav-item">
        <Link className="nav-link btn btn-primary tweet-btn" to="/timeline">
          Tweet
        </Link>
      </li>
    </ul>
  );

  return (
    <nav
      className="navbar navbar-expand-sm navbar-light"
      style={{ backgroundColor: "#3B94D9" }}
    >
      <div className="container">
        <Link className="navbar-brand" to="/timeline">
          <img
            className="rounded-circle"
            src="image/twitter.png"
            alt={null}
            title="You must have a Gravatar connected to your email to display an image."
            style={{ width: "60px", marginRight: "5px" }}
          />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#mobile-nav"
        >
          <span className="navbar-toggler-icon" />
        </button>

        <div className="collapse navbar-collapse" id="mobile-nav">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              {/* <Link className="nav-link" to="profiles">
                Profile
              </Link> */}
            </li>
          </ul>
          {userMenu}
        </div>
      </div>
    </nav>
  );
};

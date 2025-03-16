// Navbar.js

import React from "react";
import Link from "next/link";
import "bootstrap/dist/css/bootstrap.min.css";
const Navbar = () => {
  return (
    <div>
      <nav
        className="navbar navbar-expand-lg navbar-light 
                bg-dark bg-opacity-75 fixed-top text-light">
        <div className="container">
          <Link
            className="navbar-brand 
                        text-light font-bold"
            href="/">
            Sujal Blogs
          </Link>

          <Link
            href="/CreateBlog"
            className="nav-item nav-link 
                                               text-light">
            Create new Blog
          </Link>

          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <Link
                  href="/"
                  className="nav-item nav-link 
                                               text-light">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  href="/CreateBlog"
                  className="nav-item nav-link 
                                               text-light">
                  Create new Blog
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;

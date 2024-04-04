import React, { useState } from "react";
import "./style.css";
import { Link, useNavigate, useEffect } from "react-router-dom";

const Main = () => {
  const [logoutConfirmed, setLogoutConfirmed] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    const confirmLogout = window.confirm("Are you sure you want to log out?");
    if (confirmLogout) {
      navigate("/");
    }
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-purple">
        <Link to="/">
          <img
            src="logo.png"
            style={{ height: "4rem", width: "6rem" }}
            alt="Logo"
          ></img>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav"></div>
        <form className="d-flex" role="search">
          <p className="vec m-2" type="button" onClick={handleLogout} />
        </form>
      </nav>

      <div className="sidebar shadow-lg">
        <ul className="nav flex-column">
          <li className="nav-item">
            <Link
              to="/main"
              className="nav-link active text-dark font-weight-bold"
            >
              <i class="fa fa-home"></i> Home
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/Home"
              className="nav-link active text-dark font-weight-bold"
            >
              <i class="fa fa-reorder"></i> Category
            </Link>
          </li>
          <li className="nav-item">
            <Link to="" className="nav-link active text-dark font-weight-bold">
              <i class="fa fa-cubes"></i> Product
            </Link>
          </li>
        </ul>
      </div>

      <div className="content text-center mt-5">
        <img src="logo.png" alt="Logo"></img>
        <p>Welcome To DigitalFlake Admin</p>
      </div>
    </>
  );
};

export default Main;

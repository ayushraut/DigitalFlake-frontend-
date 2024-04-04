import React, { useEffect } from "react";

import { useNavigate, useParams } from "react-router-dom";
import { useState } from "react";

import { Link } from "react-router-dom";
import axios from "axios";
import "./style.css";

const Update = () => {
  const { id } = useParams();
  const [name, setName] = useState();
  const [description, setDescription] = useState();
  const [status, setStatus] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("http://localhost:3001/getUser/" + id)
      .then((result) => {
        console.log(result);
        setName(result.data.name);
        setDescription(result.data.description);
        setStatus(result.data.status);
      })
      .catch((err) => console.log(err));
  }, []);

  const Updated = (e) => {
    e.preventDefault();
    axios
      .put("http://localhost:3001/updateUser/" + id, {
        name,
        description,
        status,
      })
      .then((result) => {
        console.log(result);
        navigate("/Home");
      });
  };

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

      <div class="sidebar shadow-lg">
        <ul class="nav flex-column">
          <li class="nav-item">
            <Link to="/main" class="nav-link active text-dark font-weight-bold">
              <i class="fa fa-home"></i> Home
            </Link>
          </li>
          <li class="nav-item">
            <Link to="/Home" class="nav-link active text-dark font-weight-bold">
              <i class="fa fa-reorder"></i> Category
            </Link>
          </li>
          <li class="nav-item">
            <Link to="/" class="nav-link active text-dark font-weight-bold">
              <i class="fa fa-cubes"></i> Product
            </Link>
          </li>
        </ul>
      </div>

      <div class="content ">
        <div>
          <div>
            <h3>Update User</h3>
            <form onSubmit={Updated}>
              <div class="form-group">
                <label htmlFor="name">Name:</label>
                <input
                  type="text"
                  name="name"
                  class="form-control"
                  placeholder="Enter Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div class="form-group">
                <label htmlFor="email">Description</label>
                <input
                  type="text"
                  name="email"
                  class="form-control"
                  placeholder="Enter Description"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                />
              </div>
              <div class="form-group">
                <label htmlFor="email">Status</label>
                <input
                  type="text"
                  name="email"
                  class="form-control"
                  placeholder="Enter Status"
                  value={status}
                  onChange={(e) => setStatus(e.target.value)}
                />
              </div>
              <br />
              <button type="submit" class="btn btn-info">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Update;

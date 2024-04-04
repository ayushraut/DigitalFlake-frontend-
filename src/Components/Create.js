import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import axios from "axios";

const Create = () => {
  const [name, setName] = useState();
  const [description, setDescription] = useState();
  const [status, setStatus] = useState();
  const navigate = useNavigate();

  const Submit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3001/createUser", { name, description, status })
      .then((result) => {
        console.log(result);
        navigate("/Home");
      })

      .catch((err) => console.log(err));
  };

  const handleLogout = () => {
    const confirmLogout = window.confirm("Are you sure you want to log out?");
    if (confirmLogout) {
      navigate("/");
    }
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-purpule shadow-lg">
        <img src="logo.png" style={{ height: "4rem", width: "6rem" }}></img>
        <button
          class="navbar-toggler"
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
              class="nav-link active text-dark font-weight-bold "
            >
              <i class="fa fa-home"></i> Home
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/Home" class="nav-link active text-dark font-weight-bold">
              <i class="fa fa-reorder"></i> Category
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/" class="nav-link active text-dark font-weight-bold">
              <i class="fa fa-cubes"></i> Product
            </Link>
          </li>
        </ul>
      </div>

      <div className="content ">
        <div>
          <div>
            <h3>Add New User</h3>
            <form onSubmit={Submit}>
              <div className="form-group">
                <label htmlFor="name">Category Name:</label>
                <input
                  type="text"
                  name="name"
                  class="form-control"
                  placeholder="Enter Category Name"
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Description</label>
                <input
                  type="text"
                  name="email"
                  class="form-control"
                  placeholder="Enter Description"
                  onChange={(e) => setDescription(e.target.value)}
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Status</label>
                <input
                  type="text"
                  name="stat"
                  class="form-control"
                  placeholder="Enter Status (Active,Inactive)"
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

export default Create;

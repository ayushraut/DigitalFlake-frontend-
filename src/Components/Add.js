import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import axios from "axios";

const Add = () => {
  const [name, setName] = useState("");
  const [ps, setPs] = useState("");
  const [cate, setCate] = useState("");
  const [mrp, setMrp] = useState("");
  const [img, setImg] = useState("");
  const [stat, setStat] = useState("");
  const navigate = useNavigate();

  const Submit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3001/addUser", { name, ps, cate, mrp, img, stat })
      .then((result) => {
        console.log(result);
        navigate("/product");
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
            <Link
              to="/product"
              class="nav-link active text-dark font-weight-bold"
            >
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
                <label htmlFor="name">Name:</label>
                <input
                  type="text"
                  name="name"
                  class="form-control"
                  placeholder="Enter Name"
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Pack Size</label>
                <input
                  type="text"
                  name="ps"
                  class="form-control"
                  placeholder="Enter Pack Size"
                  onChange={(e) => setPs(e.target.value)}
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Category</label>
                <input
                  type="text"
                  name="cate"
                  class="form-control"
                  placeholder="Enter Category"
                  onChange={(e) => setCate(e.target.value)}
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">MRP</label>
                <input
                  type="number"
                  name="mrp"
                  class="form-control"
                  placeholder="Enter MRP"
                  onChange={(e) => setMrp(e.target.value)}
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Image</label>
                <input
                  type="text"
                  class="form-control"
                  placeholder="Upload Image"
                  onChange={(e) => setImg(e.target.value)}
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Status</label>
                <input
                  type="text"
                  name="stat"
                  class="form-control"
                  placeholder="Enter Status (Active,Inactive)"
                  onChange={(e) => setStat(e.target.value)}
                />
              </div>
              <br />

              <button type="submit" class="btn btn-info m-2">
                Save
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Add;

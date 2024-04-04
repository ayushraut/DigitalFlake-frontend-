import React, { useState } from "react";

import { Link } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const Create = () => {
  const { id } = useParams();
  const [cate, setCate] = useState();
  const [ps, setPs] = useState();
  const [name, setName] = useState();
  const [mrp, setMrp] = useState();
  const [img, setImg] = useState();
  const [stat, setStat] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("http://localhost:3001/getUser/" + id)
      .then((result) => {
        console.log(result);
        setCate(result.data.cate);
        setPs(result.data.ps);
        setName(result.data.name);
        setMrp(result.data.mrp);
        setImg(result.data.img);
        setStat(result.data.stat);
      })
      .catch((err) => console.log(err));
  }, []);

  const Edit = (e) => {
    e.preventDefault();
    axios
      .put("http://localhost:3001/editUser/" + id, {
        cate,
        ps,
        name,
        mrp,
        img,
        stat,
      })
      .then((result) => {
        console.log(result);
        navigate("/product");
      });
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
          <p className="vec m-2" type="button" />
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
            <form onSubmit={Edit}>
              <div className="form-group">
                <label htmlFor="name">Name:</label>
                <input
                  type="text"
                  name="name"
                  class="form-control"
                  placeholder="Enter Name"
                  value={cate}
                  onChange={(e) => setCate(e.target.value)}
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Pack Size</label>
                <input
                  type="text"
                  name="ps"
                  class="form-control"
                  placeholder="Enter Pack Size"
                  value={ps}
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
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">MRP</label>
                <input
                  type="text"
                  name="mrp"
                  class="form-control"
                  placeholder="Enter MRP"
                  value={mrp}
                  onChange={(e) => setMrp(e.target.value)}
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Image</label>
                <input
                  type="text"
                  id="img"
                  name="img"
                  accept="image/*"
                  class="form-control"
                  placeholder="Upload Image"
                  value={img}
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
                  value={stat}
                  onChange={(e) => setStat(e.target.value)}
                />
              </div>
              <br />

              <button type="submit" class="btn btn-info m-2">
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

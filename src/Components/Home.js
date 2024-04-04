import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [users, setUsers] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("http://localhost:3001")
      .then((result) => setUsers(result.data))
      .catch((err) => console.log(err));
  }, []);

  // Function to handle search input change
  const handleSearchInputChange = (e) => {
    setSearchQuery(e.target.value);
  };

  // Filter users based on search query
  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this user?"))
      axios
        .delete("http://localhost:3001/deleteUser/" + id)
        .then((res) => {
          console.log(res);
          window.location.reload();
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
      <nav className="navbar navbar-expand-lg navbar-light bg-purple shadow-lg">
        <img
          className="pointer"
          src="logo.png"
          style={{ height: "4rem", width: "6rem" }}
          alt="Logo"
        ></img>
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

      <div className="sidebar bg-light shadow-lg">
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
            <Link
              to="/product"
              className="nav-link active text-dark font-weight-bold"
            >
              <i class="fa fa-cubes"></i> Product
            </Link>
          </li>
        </ul>
      </div>

      <div className="content text-center mt-5">
        <h1>Category</h1>

        <input
          className="form-control me-2 m-2"
          type="search"
          placeholder="Search"
          aria-label="Search"
          value={searchQuery}
          onChange={handleSearchInputChange}
        />

        <Link to="/create" className="btn btn-success m-3">
          Add User
        </Link>
        <table className="table">
          <thead>
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>Description</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {filteredUsers.map((user, index) => {
              return (
                <tr key={user._id}>
                  <td>{index + 1}</td>
                  <td>{user.name}</td>
                  <td>{user.description}</td>
                  <td>{user.status}</td>
                  <td>
                    <Link
                      to={`/update/${user._id}`}
                      className="btn btn-success m-2"
                    >
                      Update
                    </Link>
                    <button
                      className="btn btn-danger m-2"
                      onClick={(e) => handleDelete(user._id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Home;

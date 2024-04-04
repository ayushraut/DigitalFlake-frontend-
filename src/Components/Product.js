// import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";

// const Product = () => {
//   const [users2, setUsers2] = useState([]);
//   const navigate = useNavigate();

//   useEffect(() => {
//     axios
//       .get("http://localhost:3001/users2")
//       .then((result) => setUsers2(result.data))
//       .catch((err) => console.log(err));
//   }, [users2]);

//   const handleDelete = (id) => {
//     if (window.confirm("Are you sure you want to delete this user?"))
//       axios
//         .delete("http://localhost:3001/deleteUser2/" + id)
//         .then((res) => {
//           console.log(res);
//           // window.location.reload();
//         })
//         .catch((err) => console.log(err));
//   };

//   const handleLogout = () => {
//     const confirmLogout = window.confirm("Are you sure you want to log out?");
//     if (confirmLogout) {
//       navigate("/");
//     }
//   };
//   return (
//     <>
//       <nav className="navbar navbar-expand-lg navbar-light bg-purple shadow-lg">
//         <img
//           src="logo.png"
//           style={{ height: "4rem", width: "6rem" }}
//           alt="Logo"
//         ></img>
//         <button
//           className="navbar-toggler"
//           type="button"
//           data-toggle="collapse"
//           data-target="#navbarNav"
//           aria-controls="navbarNav"
//           aria-expanded="false"
//           aria-label="Toggle navigation"
//         >
//           <span className="navbar-toggler-icon"></span>
//         </button>
//         <div className="collapse navbar-collapse" id="navbarNav"></div>
//         <form className="d-flex" role="search">
//           <p className="vec m-2" type="button" onClick={handleLogout} />
//         </form>
//       </nav>

//       <div className="sidebar bg-light shadow-lg">
//         <ul className="nav flex-column">
//           <li className="nav-item">
//             <Link
//               to="/main"
//               className="nav-link active text-dark font-weight-bold"
//             >
//               <i class="fa fa-home"></i> Home
//             </Link>
//           </li>
//           <li className="nav-item">
//             <Link
//               to="/Home"
//               className="nav-link active text-dark font-weight-bold"
//             >
//               <i class="fa fa-reorder"></i> Category
//             </Link>
//           </li>
//           <li className="nav-item">
//             <Link
//               to="/product"
//               className="nav-link active text-dark font-weight-bold"
//             >
//               <i class="fa fa-cubes"></i> Product
//             </Link>
//           </li>
//         </ul>
//       </div>

//       <div className="content text-center mt-5">
//         <div className="container">
//           <h1>Product</h1>
//           <input
//             className="form-control me-2"
//             type="search"
//             placeholder="Search"
//             aria-label="Search"
//           />
//           <Link to="/add" className="btn btn-success my-3">
//             Add User
//           </Link>
//         </div>
//         <table className="table">
//           <thead>
//             <tr>
//               <th>Id</th>
//               <th>Name</th>
//               <th>Pack Size</th>
//               <th>Category</th>
//               <th>MRP</th>
//               <th>Image</th>
//               <th>Status</th>
//               <th>Actions</th>
//             </tr>
//           </thead>
//           <tbody>
//             {users2.map((users, index) => {
//               return (
//                 <tr key={users._id}>
//                   <td>{index + 1}</td>
//                   <td>{users.cate}</td>
//                   <td>{users.ps}</td>
//                   <td>{users.name}</td>
//                   <td>{users.mrp}</td>
//                   <td> <img style={{ height:"5rem",width:"5rem" }} src={users.img}/> </td>
//                   <td>{users.stat}</td>
//                   <td>
//                     <Link
//                       to={`/edit/${users._id}`}
//                       className="btn btn-sm btn-primary"
//                     >
//                       Edit
//                     </Link>
//                     <button
//                       className="btn btn-sm btn-danger ms-2"
//                       onClick={(e) => handleDelete(users._id)}
//                     >
//                       Delete
//                     </button>
//                   </td>
//                 </tr>
//               );
//             })}
//           </tbody>
//         </table>
//       </div>
//     </>
//   );
// };

// export default Product;

import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Product = () => {
  const [users2, setUsers2] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("http://localhost:3001/users2")
      .then((result) => setUsers2(result.data))
      .catch((err) => console.log(err));
  }, []);

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this user?"))
      axios
        .delete("http://localhost:3001/deleteUser2/" + id)
        .then((res) => {
          console.log(res);
          // window.location.reload();
        })
        .catch((err) => console.log(err));
  };

  const handleLogout = () => {
    const confirmLogout = window.confirm("Are you sure you want to log out?");
    if (confirmLogout) {
      navigate("/");
    }
  };

  const filteredUsers = users2.filter((user) =>
    user.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-purple shadow-lg">
        <img
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
        <div className="container">
          <h1>Product</h1>
          <input
            className="form-control me-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <Link to="/add" className="btn btn-success my-3">
            Add User
          </Link>
        </div>
        <table className="table">
          <thead>
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>Pack Size</th>
              <th>Category</th>
              <th>MRP</th>
              <th>Image</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredUsers.map((user, index) => (
              <tr key={user._id}>
                <td>{index + 1}</td>
                <td>{user.name}</td>
                <td>{user.ps}</td>
                <td>{user.cate}</td>
                <td>{user.mrp}</td>
                <td>
                  {" "}
                  <img
                    style={{ height: "5rem", width: "5rem" }}
                    src={user.img}
                  />{" "}
                </td>
                <td>{user.stat}</td>
                <td>
                  <Link
                    to={`/edit/${user._id}`}
                    className="btn btn-sm btn-primary"
                  >
                    Edit
                  </Link>
                  <button
                    className="btn btn-sm btn-danger ms-2"
                    onClick={() => handleDelete(user._id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Product;

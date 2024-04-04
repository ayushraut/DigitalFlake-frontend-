import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import Login from "./Components/Login";
import Registration from "./Components/Registration";
import Main from "./Components/Main";
import Create from "./Components/Create";
import Update from "./Components/Update";
import Product from "./Components/Product";
import Add from "./Components/Add";
import Edit from "./Components/Edit";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/Home" element={<Home />}></Route>
        <Route path="/" element={<Login />}></Route>
        <Route path="/main" element={<Main />}></Route>
        <Route path="/registration" element={<Registration />}></Route>
        <Route path="/create" element={<Create />}></Route>
        <Route path="/product" element={<Product />}></Route>
        <Route path="/add" element={<Add />}></Route>
        <Route path="/edit/:id" element={<Edit />}></Route>
        <Route path="/update/:id" element={<Update />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

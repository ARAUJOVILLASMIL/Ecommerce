/* eslint-disable no-unused-vars */
import React from "react";
import { Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Login from "./pages/login.jsx";
import Productos from "./pages/productos.jsx";
import Protected from "./services/protected.jsx";

function App() {
  return (
    <main>
      <Routes>
        
        <Route path="/" element={<Login />} errorElement={<h1>Error!</h1>} />
        <Route path="/productos" element={<Protected />}>
          <Route index element={<Productos />} />
        </Route>
      </Routes>
      <ToastContainer
        position="top-center"
        autoClose={2500}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </main>
  );
}

export default App;

// https://fakestoreapi.com/
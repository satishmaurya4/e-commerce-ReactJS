import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from "./components/nav/Nav";
import "./App.css";
import Details from "./components/details/Details";
import Cart from "./components/cart/Cart";
import "bootstrap/dist/css/bootstrap.min.css";
import AppBody from "./components/appBody/AppBody";
import Signup from "./components/form/signup/Signup";

const App = () => {
  return (
    <BrowserRouter>
      <div className="app-body">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Nav />
                <AppBody />
              </>
            }
          />
          <Route
            path="/details"
            element={
              <>
                <Nav />
                <Details />
              </>
            }
          />
          <Route
            path="/cart"
            element={
              <>
                <Nav />
                <Cart />
              </>
            }
          />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;

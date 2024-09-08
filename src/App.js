import React from "react";

import Login from "./Login";
import SignUp from "./SignUp";
import Room from "./Room";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Room />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/signup" element={<SignUp />} />
      </Routes>
    </Router>
  );
};

export default App;

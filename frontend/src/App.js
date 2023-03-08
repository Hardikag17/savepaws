import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React, { Suspense, lazy } from "react";

import "../src/styles/App.css";
import Navbar from "./components/Navbar";
import Layout from "./pages/Layout";

const Landing = lazy(() => import("./pages/Landing"));
const Main = lazy(() => import("./pages/Main"));
const Register = lazy(() => import("./pages/Register"));
const Login = lazy(() => import("./pages/Login"));

const App = () => {
  return (
    <div>
      {/* Navbar */}
      <Navbar />
      {/* Routing */}
      <Router>
        <Layout>
          <Suspense fallback={<div>Loading...</div>}>
            <Routes>
              <Route exact path="/" element={<Landing />} />
              <Route path="/home" element={<Main />} />
              <Route path="/register" element={<Register />} />
              <Route path="/login" element={<Login />} />
            </Routes>
          </Suspense>
        </Layout>
      </Router>
    </div>
  );
};

export default App;

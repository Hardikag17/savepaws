import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React, { Suspense, lazy } from "react";

import "../src/styles/App.css";
import Navbar from "./components/Navbar";
import Layout from "./pages/Layout";

const Landing = lazy(() => import("./pages/Landing"));
const Main = lazy(() => import("./pages/Main"));
const Register = lazy(() => import("./pages/Register"));
const Login = lazy(() => import("./pages/Login"));
const PetView = lazy(() => import("./pages/PetView"));
const Profile = lazy(() => import("./pages/Profile"));
const AddPet = lazy(() => import("./pages/AddPet"));

const App = () => {
  return (
    <Layout>
      <div>
        {/* Navbar */}
        <Navbar />
        {/* Routing */}
        <Router>
          <Suspense fallback={<div>Loading...</div>}>
            <Routes>
              <Route exact path="/" element={<Landing />} />
              <Route path="/home" element={<Main />} />
              <Route path="/register" element={<Register />} />
              <Route path="/login" element={<Login />} />
              <Route path="/Profile" element={<Profile />} />
              <Route path="/addpet" element={<AddPet />} />
              <Route path="/PetView" element={<PetView />} />
            </Routes>
          </Suspense>
        </Router>
      </div>
    </Layout>
  );
};

export default App;

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React, { Suspense, lazy, useEffect } from "react";
import PrivateRoute from "./components/Private";

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
const Chat = lazy(() => import("./pages/Chat"));

const App = () => {
  return (
    <div>
      <Router>
        <Layout>
          {/* Navbar */}
          <Navbar />
          {/* Routing */}
          <Suspense fallback={<div>Loading...</div>}>
            <Routes>
              <Route exact path="/" element={<Landing />} />
              <Route path="/home" element={<Main />} />
              <Route path="/register" element={<Register />} />
              <Route path="/login" element={<Login />} />
              <Route
                path="/Profile"
                element={
                  <PrivateRoute>
                    <Profile />
                  </PrivateRoute>
                }
              />
              <Route
                path="/addpet"
                element={
                  <PrivateRoute>
                    <AddPet />
                  </PrivateRoute>
                }
              />
              <Route path="/PetView" element={<PetView />} />
              <Route path="/chat" element={<Chat />} />
            </Routes>
          </Suspense>
        </Layout>
      </Router>
    </div>
  );
};

export default App;

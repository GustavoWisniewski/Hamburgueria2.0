import React from "react";
import { Routes, Route } from "react-router-dom";
import { ProtectedRoutes } from "./components/ProtectedRoutes";
import DashboardPage from "./pages/Dashboard";
import { LoginPage } from "./pages/Login";
import RegisterPage from "./pages/Register";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route element={<ProtectedRoutes />}>
          <Route path="/dashboard" element={<DashboardPage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;

import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./container/Login/index";
import Register from "./container/Register/index";
import Dashboard from "./container/Dashboard/index";

export function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  );
}

import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./container/Login/index";
import Register from "./container/Register/index";
import Dashboard from "./container/Dashboard/index";

export function Router() {
  return (
    <BrowserRouter>
      <body className="bg-my-image p-[30px] m-0">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </body>
    </BrowserRouter>
  );
}

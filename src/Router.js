import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./container/Login/index";
import Register from "./container/Register/index";
import Dashboard from "./container/Dashboard/index";

export function Router() {
  const [isAuth, setIsAuth] = useState(false);
  useEffect(() => {
    setIsAuth(localStorage.userId ?? false);
  }, []);
  return (
    <BrowserRouter>
      <body className="bg-my-image p-[30px] m-0">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/forms" element={<Dashboard />} />

          {isAuth && <Route path="/dashboard" element={<Dashboard />} />}
          <Route path="*" element={<Login />} />
        </Routes>
      </body>
    </BrowserRouter>
  );
}

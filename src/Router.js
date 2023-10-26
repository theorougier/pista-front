import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./container/Login/index";
import Register from "./container/Register/index";
import Dashboard from "./container/Dashboard/index";
import Detail from "./container/Detail";

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

          {isAuth && (
            <>
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/detail/:id" element={<Detail />} />
            </>
          )}
          <Route path="*" element={<Login />} />
        </Routes>
      </body>
    </BrowserRouter>
  );
}

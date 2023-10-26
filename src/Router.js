import React, { createContext, useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./container/Login/index";
import Register from "./container/Register/index";
import Dashboard from "./container/Dashboard/index";
import Detail from "./container/Detail";
import Layout from "./helpers/layout";

import Form from "./container/Form/index";

export const GlobalContext = createContext({
  bgColor: null,
  setBgColor: () => {},
});



export function Router() {
  const [isAuth, setIsAuth] = useState(false);
  const [bgColor, setBgColor] = useState(null);

  useEffect(() => {
    setIsAuth(localStorage.userId ?? false);
  }, [localStorage]);

  const template = (component) => <Layout children={component} />;

  return (
    <BrowserRouter>
      <GlobalContext.Provider value={{ bgColor, setBgColor }}>
        <Routes>
          <Route path="/" element={template(<Login />)} />
          <Route path="/login" element={template(<Login />)} />
          <Route path="/register" element={<Register />} />
          {isAuth && (
            <>
              <Route path="/dashboard" element={template(<Dashboard />)} />
              <Route path="/detail/:id" element={template(<Detail />)} />
              <Route path="/forms" element={<Form />} />
            </>
          )}
          <Route path="*" element={template(<Login />)} />
        </Routes>
      </GlobalContext.Provider>
    </BrowserRouter>
  );
}

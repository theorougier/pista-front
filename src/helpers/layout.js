import React, { useContext, useEffect } from "react";
import { GlobalContext } from "../Router";
import { useLocation } from "react-router";

export default function Layout({ children }) {
  const { bgColor, setBgColor } = useContext(GlobalContext);
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === "/dashboard") {
      setBgColor(null);
    }
  }, [location]);

  return (
    <main
      style={{
        backgroundColor: `${bgColor}`,
      }}
      className={`${bgColor ? "bg-none" : "bg-my-image"} p-[30px] m-0`}
    >
      {children}
    </main>
  );
}

import React from "react";
import { useState, useEffect } from "react";

const Layout = ({ children }) => {
  const [navbarHeight, setNavbarHeight] = useState(0);

  useEffect(() => {
    setNavbarHeight(document.querySelector("nav").offsetHeight);
  }, []);

  useEffect(() => {
    window.addEventListener("resize", () => {
      setNavbarHeight(document.querySelector("nav").offsetHeight);
    });
    return () => {
      window.removeEventListener("resize", () => {
        setNavbarHeight(document.querySelector("nav").offsetHeight);
      });
    };
  }, []);

  // return <div style={{ paddingTop: `${navbarHeight}` }}>{children}</div>;
  // return <div style={{ paddingTop: "72px" }}>{children}</div>;
  return <div>{children}</div>;
};

export default Layout;

import React, { useContext } from "react";
import { Outlet } from "react-router-dom";
import Nave from "../../Components/Nave";
import { AuthContext } from "../../Context/AuthProvaider";
import { useLocation } from "react-router-dom";
import Footer from "../../Components/Footer";

const Layout = () => {
  const { navLocation } = useContext(AuthContext);

  const location = useLocation();

  return (
    <div>
      {location.pathname === "/" ||
      location.pathname === navLocation.pathname ? (
        ""
      ) : (
        <Nave></Nave>
      )}
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Layout;

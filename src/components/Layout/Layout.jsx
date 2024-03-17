import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import { headerData } from "../../data.json";
// import { useState, useEffect } from "react";
import Preloader from "../Preloader/Preloader";
import CustomCursor from "../CustomCursor/CustomCursor";
import PropTypes from "prop-types";

const Layout = ({ isLoading, socialMediaHandle }) => {
  // const [isLoading, setIsLoading] = useState(true);

  // useEffect(() => {
  //   setTimeout(() => {
  //     setIsLoading(false);
  //   }, 1500);
  // }, []);

  return (
    <>
      {isLoading ? (
        <Preloader />
      ) : (
        <>
          <CustomCursor />
          <Header data={headerData} socialMediaHandle={socialMediaHandle} />
          <Outlet />
        </>
      )}
    </>
  );
};

Layout.propTypes = {
  isLoading: PropTypes.bool,
  socialMediaHandle: PropTypes.array,
};

export default Layout;

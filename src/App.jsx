import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Home from "./pages/Home";
import "./sass/style.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import { useEffect } from "react";

import Aos from "aos";
import "aos/dist/aos.css";

import { Suspense } from "react";
import useFetchUserData from "./hooks/useFetchUserData";
const App = () => {
  useEffect(() => {
    Aos.init({ once: true });
  }, []);

  const { isLoading, dynamicData, badApiData } = useFetchUserData(
    "65b3a22c01d900e96c4219ae"
  );

  if (badApiData) {
    return <div>something went wrong......</div>;
  }

  const { socialData } = dynamicData;

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <Layout isLoading={isLoading} socialMediaHandle={socialData} />
            }
          >
            {dynamicData && (
              <Route index element={<Home dynamicData={dynamicData} />} />
            )}
          </Route>
        </Routes>
      </BrowserRouter>
    </Suspense>
  );
};

export default App;

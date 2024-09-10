import React from "react";

import Memberbar from "./Memberbar";
import Selectionbar from "./Selectionbar";
import Footer from '../footercomponent/footer/page'
const Main = () => {
  return (
    <>
      <Memberbar />
      <Selectionbar />
      <hr style={{ borderColor: "#c0b9b9" }} />
      <Footer />
    </>
  );
};

export default Main;

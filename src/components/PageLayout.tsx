import React from "react";
import { Navbar } from "../components";

const PageLayout: React.FC = (props) => {
  return (
    <div className="min-w-screen min-h-screen flex flex-col justify-start items-center bg-idem-white box-border">
      {props.children}
      <Navbar />
    </div>
  );
};

export default PageLayout;

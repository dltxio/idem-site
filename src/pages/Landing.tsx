import React from "react";
import { PageLayout, Phone, Hexagons } from "../components";

const Landing: React.FC = () => {
  return (
    <PageLayout>
      <div
        className="w-full min-h-[60vh] bg-gradient-to-tl from-orange-500 to-yellow-400 \
        flex flex-col justify-center items-center box-border"
      >
        <div className="w-4/5">
          <div className="flex flex-col">
            <h1 className="font-black text-[12rem] text-idem-white">IDEM</h1>
            <h2
              className="font-bold text-[1.4rem] text-idem-white tracking-wide relative \
              left-2 bottom-14"
            >
              THE FASTER AND EASIER WAY TO DO KYC
            </h2>
          </div>
        </div>
      </div>
      <div className="w-full min-h-[40vh] bg-idem-white bg-hero-topography z-50 box-border overflow-hidden">
        <div className="flex flex-col min-hexagon-width:flex-row justify-between items-center my-32 mx-20">
          <div className="ml-10 w-1/2">
            <h2
              className="text-idem-black \
              from-orange-500 to-yellow-400 font-black text-[6rem] leading-[6rem] mb-12"
            >
              End-to-end
              <br />
              digital identity
              <br />
              verification.
            </h2>
          </div>
          <Hexagons />
        </div>
      </div>
      <Phone />
    </PageLayout>
  );
};

export default Landing;

import React from "react";
import { PageLayout, Phone } from "../components";

const Landing: React.FC = () => {
  return (
    <PageLayout>
      <div className="w-full min-h-[60vh] bg-gradient-to-tl from-orange-500 to-yellow-400 flex flex-col justify-center items-center box-border">
        <div className="w-4/5">
          <div className="flex flex-col">
            <h1 className="font-black text-[12rem] text-idem-white">IDEM</h1>
            <h2 className="font-bold text-[1.4rem] text-idem-white tracking-wide relative left-2 bottom-14">
              THE FASTER AND EASIER WAY TO DO KYC
            </h2>
          </div>
        </div>
      </div>
      <div className="w-full min-h-[40vh] bg-[#fffaf6] z-50 shadow-top">
        <div className="flex justify-between items-center my-32 px-20">
          <div className="ml-10 w-full">
            <h2 className="text-idem-black font-black text-[6rem]">
              End-to-end
            </h2>
            <h2 className="text-idem-black font-black text-[6rem] relative bottom-6">
              digital identity
            </h2>
            <h2 className="text-idem-black font-black text-[6rem] relative bottom-12">
              verification.
            </h2>
          </div>
          {/* TODO: ADD HEXAGONS OF EXCHANGES */}
        </div>
      </div>
      <Phone />
    </PageLayout>
  );
};

export default Landing;

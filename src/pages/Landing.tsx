import React from "react";
import { PageLayout } from "../components";

const Landing: React.FC = () => {
  return (
    <PageLayout>
      <div className="w-full min-h-[60vh] bg-gradient-to-tl from-orange-500 to-yellow-400 flex flex-col justify-center items-center box-border">
        <div className="w-4/5">
          <div className="flex flex-col">
            <h1 className="font-black text-[14rem] drop-shadow-xl">IDEM</h1>
            <h2 className="font-bold text-[1.47rem] tracking-wide relative left-4 bottom-14">
              THE FASTER AND EASIER WAY TO DO KYC
            </h2>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default Landing;

import React from "react";
import PhonePhoto from "../static/phone.png";

const Phone: React.FC = () => {
  return (
    <div className="absolute top-[12vh] left-[50vw] w-auto flex max-h-[60vh] overflow-hidden">
      <div className="w-full z-20">
        <img
          className="scale-80"
          src={PhonePhoto}
          alt="iPhone with IDEM logo on it"
        />
      </div>
      <div className="bg-idem-yellow w-[68%] -ml-[84%] mt-[2%] mb-[8%] z-10 rounded-[10%]" />
    </div>
  );
};

export default Phone;
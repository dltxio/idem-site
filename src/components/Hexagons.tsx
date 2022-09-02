import React from "react";

const Hexagons: React.FC = () => {
  const hexagonStyles =
    "relative p-12 mask mask-hexagon-2 text-idem-white bg-idem-yellow text-3xl font-bold text-center flex flex-col justify-center items-center";

  return (
    <div className="w-full flex">
      <div className={`${hexagonStyles}`}>
        <span>GPIB</span>
      </div>
      <div className={`${hexagonStyles} right-[1rem] bottom-[5.5rem]`}>
        <span>
          Coin
          <br />
          Stash
        </span>
      </div>
      <div className={`${hexagonStyles} right-[2rem]`}>
        <span>
          Digital
          <br />
          Surge
        </span>
      </div>
      <div className={`${hexagonStyles} right-[4rem] bottom-[5.5rem]`}>
        <span>Cointree</span>
      </div>
      <div className={`${hexagonStyles} right-[6.2rem]`}>
        <span>
          Easy
          <br />
          Crypto
        </span>
      </div>
    </div>
  );
};

export default Hexagons;

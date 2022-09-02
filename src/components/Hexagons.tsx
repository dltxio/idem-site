import React from "react";

const Hexagons: React.FC = () => {
  const hexagonStyles =
    "relative p-12 mask mask-hexagon-2 text-idem-white bg-idem-yellow \
    text-3xl font-bold text-center flex flex-col justify-center items-center";

  const hexagonContainerStyles = "drop-shadow-hexagon";

  return (
    <div
      className="w-1/2 flex mt-24 mr-[14rem] min-hexagon-width:ml-[14rem] \
      min-hexagon-width:mt-0 min-hexagon-width:mr-0"
    >
      <div className={hexagonContainerStyles}>
        <div className={hexagonStyles}>
          <span>GPIB</span>
        </div>
      </div>
      <div className={hexagonContainerStyles}>
        <div className={`${hexagonStyles} right-[1rem] bottom-[5.5rem]`}>
          <span>
            Coin
            <br />
            Stash
          </span>
        </div>
      </div>
      <div className={hexagonContainerStyles}>
        <div className={`${hexagonStyles} right-[2rem]`}>
          <span>
            Digital
            <br />
            Surge
          </span>
        </div>
      </div>
      <div className={hexagonContainerStyles}>
        <div
          className={`${hexagonStyles} right-[5.5rem] bottom-[5.5rem] !p-16`}
        >
          <span>Cointree</span>
        </div>
      </div>
      <div className={hexagonContainerStyles}>
        <div className={`${hexagonStyles} right-[9rem]`}>
          <span>
            Easy
            <br />
            Crypto
          </span>
        </div>
      </div>
    </div>
  );
};

export default Hexagons;

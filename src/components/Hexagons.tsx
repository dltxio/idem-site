import React from "react";

const Hexagons: React.FC = () => {
  const hexagonStyles =
    "relative p-12 mask mask-hexagon-2 text-idem-white bg-idem-yellow \
    text-3xl font-bold text-center flex flex-col justify-center items-center";

  return (
    <div
      className="hidden lg:flex relative mb-32 min-hexagon-width:mb-0 top-44 \
      min-hexagon-width:top-16 left-20 min-hexagon-width:-left-8"
    >
      <div className="drop-shadow-hexagon">
        <div className={`${hexagonStyles} right-[1rem] bottom-[5.5rem]`}>
          W3C
        </div>
      </div>
      <div className="drop-shadow-hexagon">
        <div className={`${hexagonStyles} right-[4rem] !p-16`}>GreenID</div>
      </div>
      <div className="drop-shadow-hexagon">
        <div className={`${hexagonStyles} right-[9rem] bottom-[8rem] !p-20`}>
          Fireblocks
        </div>
      </div>
      <div className="drop-shadow-hexagon">
        <div className={`${hexagonStyles} right-[12rem] !p-16`}>AWS</div>
      </div>
    </div>
  );
};

export default Hexagons;

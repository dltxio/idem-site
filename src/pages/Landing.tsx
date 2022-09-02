import React from "react";
import { PageLayout, Phone, Hexagons } from "../components";

const Landing: React.FC = () => {
  const linkStyle =
    "cursor-pointer bg-gradient-to-tl from-orange-500 to-yellow-400 bg-no-repeat \
  bg-block-link bg-block-link-pos hover:bg-block-link-animate transition-all";

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
        <div className="flex flex-col min-hexagon-width:flex-row justify-between items-center p-32">
          <h2 className="text-idem-black font-black text-[6rem] leading-[6rem]">
            End-to-end
            <br />
            digital identity
            <br />
            verification
          </h2>
          <Hexagons />
        </div>
        <div
          className="w-full flex flex-row-reverse py-32 px-80 bg-idem-black justify-between \
          bg-hero-plus-idem-white-light"
        >
          <h2 className="text-idem-white font-black text-[6rem] leading-[6rem] text-right">
            Minimise the
            <br />
            hassle of KYC
            <br />
            compliance
          </h2>
          <h2 className="text-idem-white font-black text-[6rem] leading-[6rem]">
            Fully{" "}
            <a
              className={linkStyle}
              href="https://github.com/dltxio/idem-mobile"
              target="_blank"
              rel="noreferrer noopener"
            >
              open
              <br />
              source
            </a>
            <br />
            under{" "}
            <a
              className={linkStyle}
              href="https://choosealicense.com/licenses/mit/"
              target="_blank"
              rel="noreferrer noopener"
            >
              MIT
            </a>
          </h2>
        </div>
      </div>
      <Phone />
    </PageLayout>
  );
};

export default Landing;

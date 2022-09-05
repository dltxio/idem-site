import React from "react";
import { PageLayout, Phone, Hexagons, Footer } from "../components";

const Landing: React.FC = () => {
  const linkStyle =
    "cursor-pointer bg-gradient-to-tl from-orange-500 to-yellow-400 bg-no-repeat \
  bg-block-link bg-block-link-pos hover:bg-block-link-animate transition-all";

  return (
    <PageLayout>
      <div
        className="w-full pt-32 lg:pt-0 px-10 lg:px-0 min-h-[50vh] md:min-h-[30vh] lg:min-h-[60vh] bg-gradient-to-tl from-orange-500 to-yellow-400 \
        flex flex-col justify-center items-center box-border"
      >
        <div className="w-full lg:w-4/5 text-center lg:text-left">
          <div className="flex flex-col">
            <h1 className="font-black text-[6rem] lg:text-[12rem] text-idem-white">
              IDEM
            </h1>
            <h2
              className="font-bold text-[1.4rem] text-idem-white tracking-wide relative \
              left-0 lg:left-2 bottom-14 mt-10 lg:mt-0"
            >
              THE FASTER AND EASIER WAY TO DO KYC
            </h2>
          </div>
        </div>
      </div>
      <div className="w-full min-h-[40vh] bg-idem-white bg-hero-topography z-50 box-border overflow-hidden">
        <div className="flex flex-col min-hexagon-width:flex-row justify-between items-center p-12 lg:p-32">
          <h2 className="text-idem-black font-black text-[3rem] lg:text-[6rem] lg:leading-[6rem]">
            Decentralised
            <br />
            W3C identity
            <br />
            verification
          </h2>
          <Hexagons />
        </div>
        <div
          className="w-full flex flex-col lg:flex-row-reverse py-12 lg:py-32 lg:px-32 xl:px-80 bg-idem-black \
          text-center lg:text-left justify-center lg:justify-between bg-hero-plus-idem-white-light"
        >
          <h2 className="text-idem-white font-black text-[3rem] md:text-[4rem] xl:text-[6rem] xl:leading-[6rem] lg:text-right mb-10 lg:mb-0">
            Minimise the
            <br />
            hassle of KYC
            <br />
            compliance
          </h2>
          <h2 className="text-idem-white font-black text-[3rem] md:text-[4rem] xl:text-[6rem] xl:leading-[6rem]">
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
        <Footer />
      </div>
      <Phone />
    </PageLayout>
  );
};

export default Landing;

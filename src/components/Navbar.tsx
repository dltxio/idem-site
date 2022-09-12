import React, { useState } from "react";
import { Button, QrCodeModal } from "../components";

const Navbar: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const linkStyle =
    "cursor-pointer relative before:content-[''] before:absolute before:block before:w-full \
  before:h-[2px] before:bottom-[1px] before:left-0 before:bg-idem-white before:scale-0 before:transition-transform \
  hover:before:scale-[1]";

  return (
    <>
      <div className="fixed w-full bg-idem-black py-4 px-3 lg:px-6 flex justify-between items-center z-50">
        <h2 className="text-3xl font-black tracking-wide w-full text-idem-white hidden md:block">
          <span className="cursor-pointer" onClick={() => location.assign("/")}>
            IDEM
          </span>
        </h2>
        <div className="w-full flex justify-center items-center">
          <div className="flex items-center justify-between gap-x-3 lg:gap-x-14 text-base lg:text-lg text-idem-white">
            <a
              href={process.env.VITE_DEMO_URL}
              target="_blank"
              rel="noopener noreferrer"
              className={linkStyle}
            >
              DEMO
            </a>
            <a
              href={`mailto:${process.env.VITE_SUPPORT_EMAIL}?subject=IDEM Support`}
              className={linkStyle}
            >
              SUPPORT
            </a>
            <a
              href="/privacy"
              target="_blank"
              rel="noopener noreferrer"
              className={linkStyle}
            >
              PRIVACY
            </a>
          </div>
        </div>
        <div className="w-full flex justify-end items-center">
          <Button
            title="GO TO APP STORE"
            color="yellow"
            onClick={() => setIsModalOpen(true)}
            expands
          />
        </div>
      </div>

      <QrCodeModal
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
        buttonTitle="CLOSE"
        buttonColor="yellow"
      />
    </>
  );
};

export default Navbar;

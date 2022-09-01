import React, { useState } from "react";
import { Button, QrCodeModal } from "../components";

const Navbar: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const linkStyle =
    "cursor-pointer relative before:content-[''] before:absolute before:block before:w-full \
  before:h-[2px] before:bottom-[1px] before:left-0 before:bg-white before:scale-0 before:transition-transform \
  hover:before:scale-[1] text-lg";

  return (
    <>
      <div className="fixed w-full bg-black py-4 px-6 flex justify-between items-center shadow-xl z-50">
        <h2 className="text-3xl font-black tracking-wide w-full">IDEM</h2>
        <div className="w-full flex justify-center items-center">
          <div className="flex items-center justify-between gap-x-10">
            <a
              href={process.env.VITE_DEMO_URL}
              target="_blank"
              rel="noopener noreferrer"
              className={linkStyle}
            >
              DEMO
            </a>
            <a
              href={`mailto:${process.env.VITE_SUPPORT_EMAIL}`}
              className={linkStyle}
            >
              SUPPORT
            </a>
          </div>
        </div>
        <div className="w-full flex justify-end items-center">
          <Button
            title="JOIN TESTFLIGHT"
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

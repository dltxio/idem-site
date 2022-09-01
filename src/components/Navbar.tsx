import React from "react";
import { Button } from "../components";

const Navbar: React.FC = () => {
  const linkStyle =
    "cursor-pointer relative before:content-[''] before:absolute before:block before:w-full \
  before:h-[2px] before:bottom-[1px] before:left-0 before:bg-white before:scale-0 before:transition-transform \
  hover:before:scale-[1]";

  const openQrCode = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();

    alert(e.currentTarget.classList); // TODO: open modal
  };

  return (
    <div className="fixed shadow-xl w-full bg-black py-4 px-6 flex justify-between items-center">
      <h2 className="text-3xl font-bold tracking-wide w-full">IDEM</h2>
      <div className="w-full flex justify-center items-center">
        <div className="flex items-center justify-between gap-x-6">
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
          title="QR CODE"
          colors={{
            text: "black",
            background: "idem-yellow"
          }}
          onClick={openQrCode}
        />
      </div>
    </div>
  );
};

export default Navbar;

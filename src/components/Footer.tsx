import React from "react";

const Footer: React.FC = () => {
  return (
    <div className="w-full bg-idem-yellow flex flex-col lg:flex-row justify-between items-center px-6 py-2 text-idem-black font-bold">
      <span>
        Copyright DLTx Labs |{" "}
        <a
          className="underline underline-offset-2 decoration-2"
          href={process.env.VITE_PGP_URL}
          target="_blank"
          rel="noopener noreferrer"
        >
          PGP Public Key
        </a>
      </span>
      <a
        className="underline underline-offset-2 decoration-2"
        href={`https://etherscan.io/address/0xB35662F7Ac34a62E122C77fE90BAb74443e71b00`}
        target="_blank"
        rel="noopener noreferrer"
      >
        0xB35662F7Ac34a62E122C77fE90BAb74443e71b00
      </a>
    </div>
  );
};

export default Footer;

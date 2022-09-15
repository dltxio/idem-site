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
      <span>
        Checkout IDEM on:{" "}
        <a
          className="underline underline-offset-2 decoration-2"
          href={`https://etherscan.io/address/${process.env.VITE_ETH_ADDRESS}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          Etherscan
        </a>
      </span>
    </div>
  );
};

export default Footer;

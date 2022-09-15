import React from "react";

const Footer: React.FC = () => {
  return (
    <div className="w-full bg-idem-yellow flex flex-col lg:flex-row justify-center items-center px-6 py-2 text-idem-black font-bold">
      <span>
        Copyright DLTx Labs |{" "}
        <a
          className="underline underline-offset-2 decoration-2"
          href={process.env.VITE_PGP_URL}
          target="_blank"
          rel="noopener noreferrer"
        >
          PGP Public Key
        </a>{" "}
        | <a>0xB35662F7Ac34a62E122C77fE90BAb74443e71b00</a>
      </span>
    </div>
  );
};

export default Footer;

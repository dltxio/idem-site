import React from "react";

const Footer: React.FC = () => {
  return (
    <div className="w-full bg-idem-yellow flex justify-between items-center px-6 py-2 text-idem-black font-bold">
      <span>
        Copyright DLTx |{" "}
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
        Made with ❤️ by{" "}
        <a
          className="underline underline-offset-2 decoration-2"
          href="https://brettvanniekerk.eth.limo/"
          target="_blank"
          rel="noopener noreferrer"
        >
          brettvanniekerk.eth
        </a>
      </span>
    </div>
  );
};

export default Footer;

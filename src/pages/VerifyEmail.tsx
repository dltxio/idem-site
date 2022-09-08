import React, { useEffect, useMemo, useState } from "react";
import { useLocation } from "react-router-dom";
import Draggable from "react-draggable";
import api from "../apis/Api";

type Error = {
  status: number;
  message: string;
};

const VerifyEmail: React.FC = () => {
  const { search } = useLocation();
  const [isVerifying, setIsVerifying] = useState(true);
  const [result, setResult] = useState<boolean>();
  const [error, setError] = useState<Error>();
  const query = useMemo(() => new URLSearchParams(search), [search]);
  const token = query.get("token");

  useEffect(() => {
    if (!token) return;
    api
      .verifyEmail(token)
      .then((result) => {
        setResult(result);
        setIsVerifying(false);
      })
      .catch((error) => {
        setError(error);
        setIsVerifying(false);
      });
  }, [token]);

  return (
    <div className="min-w-screen min-h-screen flex flex-col justify-start items-center bg-idem-black bg-hero-plus-idem-white-light box-border">
      <div className="w-full h-screen flex flex-col justify-center items-center">
        <Draggable bounds="parent" handle=".handle">
          <div className="w-[90vw] md:w-auto rounded-2xl shadow-2xl bg-idem-white bg-hero-topography flex flex-col justify-center items-center">
            <h1
              className="px-12 py-4 text-center text-2xl lg:text-3xl font-bold text-idem-white w-full bg-gradient-to-tl \
              from-orange-500 to-yellow-400 rounded-t-2xl select-none handle xl:cursor-move"
            >
              VERIFY EMAIL
            </h1>
            <div className="px-4 lg:px-12 py-3 lg:py-8 text-center">
              {token ? (
                isVerifying ? (
                  <h3 className="text-idem-black text-lg font-bold">
                    Verifying...
                  </h3>
                ) : result ? (
                  <p className="bg-gradient-to-tl from-orange-500 to-yellow-400 text-idem-white font-bold px-3 py-2 rounded-lg text-2xl shadow-lg">
                    You have been successfully verified, welcome to IDEM
                  </p>
                ) : error ? (
                  <p className="bg-red-600 text-idem-white px-3 py-2 rounded-lg text-lg">
                    {error.message}
                  </p>
                ) : (
                  <p className="bg-red-600 text-idem-white px-3 py-2 rounded-lg text-lg">
                    Error: failed to verify token
                  </p>
                )
              ) : (
                <span className="bg-red-600 text-idem-white px-3 py-2 rounded-lg text-lg">
                  No Token provided
                </span>
              )}
            </div>
          </div>
        </Draggable>
      </div>
      <div className="absolute bottom-0 w-full text-center lg:text-right px-5 py-3 text-idem-white font-bold">
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
    </div>
  );
};

export default VerifyEmail;

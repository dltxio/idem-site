import React, { useEffect, useMemo, useState } from "react";
import { useLocation } from "react-router-dom";
import api from "../apis/Api";

type Error = {
  status: number;
  message: string;
};

const VerifyEmail: React.FC = () => {
  const { search } = useLocation();
  const [isVerifying, setIsVerifying] = useState(true);
  const [result, setResult] = useState(false);
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
        <div className="w-[90vw] md:w-auto rounded-2xl shadow-2xl bg-idem-white bg-hero-topography flex flex-col justify-center items-center z-50">
          <h1
            className="px-12 py-4 text-center text-2xl md:text-3xl font-bold text-idem-white w-full bg-gradient-to-tl \
            from-orange-500 to-yellow-400 rounded-t-2xl select-none xl:cursor-move"
          >
            VERIFY EMAIL
          </h1>
          <div className="px-4 md:px-12 py-3 md:py-8 text-center">
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
                  Failed to verify token
                </p>
              )
            ) : (
              <span className="bg-red-600 text-idem-white px-3 py-2 rounded-lg text-lg">
                No Token provided
              </span>
            )}
          </div>
        </div>
      </div>
      <div className="absolute w-full md:w-auto text-center bottom-0 md:top-0 md:left-0">
        <div
          className="m-4 bg-gradient-to-tl from-orange-500 to-yellow-400 px-3 py-2 text-idem-white text-xl font-bold rounded-lg cursor-pointer shadow-xl"
          onClick={() => location.assign("/")}
        >
          Back to IDEM
        </div>
      </div>
    </div>
  );
};

export default VerifyEmail;

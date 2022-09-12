import React from "react";
import { Modal } from "../components";
import QrCode from "react-qr-code";
import { useWindowSize } from "../hooks";

type Props = {
  isModalOpen: boolean;
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  buttonTitle: string;
  buttonColor: string;
};

const QrCodeModal: React.FC<Props> = (props) => {
  const size = useWindowSize();
  const { isModalOpen, setIsModalOpen, buttonTitle, buttonColor } = props;

  const appstore = process.env.VITE_APPSTORE_URL;
  if (!appstore) throw new Error("Error: no testflight url provided in env!");

  return (
    <Modal
      isModalOpen={isModalOpen}
      setIsModalOpen={setIsModalOpen}
      buttonTitle={buttonTitle}
      buttonColor={buttonColor}
    >
      {size.width < 1200 ? (
        <>
          <a
            className="mb-4 bg-gradient-to-tl from-orange-500 to-yellow-400 px-3 py-2 \
            text-idem-white text-xl font-bold rounded-lg cursor-pointer shadow-xl w-full \
            text-center"
            href={appstore}
            target="_blank"
            rel="noopener noreferrer"
          >
            GO TO APP STORE
          </a>
        </>
      ) : (
        <>
          <h2 className="text-idem-yellow text-lg font-bold tracking-wide mb-2">
            Scan this to go to our Testflight page:
          </h2>
          <div className="m-4">
            <QrCode
              bgColor="#fffaf6"
              fgColor="#0e0e0e"
              level="H"
              size={380}
              value={appstore}
            />
          </div>
        </>
      )}
    </Modal>
  );
};

export default QrCodeModal;

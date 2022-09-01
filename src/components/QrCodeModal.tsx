import React from "react";
import { Modal } from "../components";
import QrCode from "../static/qr-code.png";

type Props = {
  isModalOpen: boolean;
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  buttonTitle: string;
  buttonColor: string;
};

const QrCodeModal: React.FC<Props> = (props) => {
  const { isModalOpen, setIsModalOpen, buttonTitle, buttonColor } = props;

  return (
    <Modal
      isModalOpen={isModalOpen}
      setIsModalOpen={setIsModalOpen}
      buttonTitle={buttonTitle}
      buttonColor={buttonColor}
    >
      <h2 className="text-idem-yellow text-lg font-bold tracking-wide">
        Scan this to go to our Testflight page:
      </h2>
      <img src={QrCode} alt="Testflight QR Code" />
    </Modal>
  );
};

export default QrCodeModal;

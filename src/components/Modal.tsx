import React from "react";
import { Button } from "../components";

type Props = {
  isModalOpen: boolean;
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  buttonTitle: string;
  buttonColor: string;
};

const Modal: React.FC<Props> = (props) => {
  const { isModalOpen, setIsModalOpen, buttonTitle, buttonColor } = props;

  return (
    <div className={`modal ${isModalOpen ? "modal-open" : ""}`}>
      <div className="modal-box flex flex-col bg-idem-black box-border py-6 px-[1.75rem]">
        <div className="w-full flex flex-col justify-center items-center">
          {props.children}
        </div>
        <Button
          title={buttonTitle}
          color={buttonColor}
          onClick={() => setIsModalOpen(false)}
          expands={false}
        />
      </div>
    </div>
  );
};

export default Modal;

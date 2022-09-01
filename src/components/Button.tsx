import React from "react";
import classnames from "classnames";

type Props = {
  title: string;
  color: string;
  onClick: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  expands: boolean;
};

const Button: React.FC<Props> = (props) => {
  const { title, color, onClick, expands } = props;

  const buttonStyles = classnames({
    "py-2 px-3 font-bold rounded-md": true,
    "bg-idem-yellow text-idem-black": color == "yellow",
    "hover:scale-[1.15] duration-200 transition-transform": expands
  });

  return (
    <button className={buttonStyles} onClick={onClick}>
      {title}
    </button>
  );
};

export default Button;

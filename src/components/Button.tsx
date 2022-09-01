import React from "react";
import classnames from "classnames";

type Props = {
  title: string;
  color: string;
  onClick: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
};

const Button: React.FC<Props> = (props) => {
  const { title, color, onClick } = props;

  const buttonStyles = classnames({
    "py-2 px-3 font-bold rounded-md hover:scale-[1.15] duration-200 transition-transform":
      true,
    "bg-idem-yellow text-black": color == "yellow"
  });

  return (
    <button className={buttonStyles} onClick={onClick}>
      {title}
    </button>
  );
};

export default Button;

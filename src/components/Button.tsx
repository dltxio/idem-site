import React from "react";

type Props = {
  title: string;
  color: string;
  onClick: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
};

const Button: React.FC<Props> = (props) => {
  const { title, color, onClick } = props;

  let background,
    text = "";

  switch (color) {
    case "yellow":
      background = "bg-idem-yellow";
      text = "text-black";
      break;
  }

  return (
    <button
      className={`py-2 px-3 font-bold rounded-md hover:scale-[1.15] duration-200 transition-transform ${background} ${text}`}
      onClick={onClick}
    >
      {title}
    </button>
  );
};

export default Button;

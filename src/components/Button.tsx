import React from "react";

type Props = {
  title: string;
  colors: {
    text: string;
    background: string;
  };
  onClick: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
};

const Button: React.FC<Props> = (props) => {
  const { title, colors, onClick } = props;

  return (
    <button
      className={`py-2 px-3 font-bold rounded-md bg-${colors.background} text-${colors.text} hover:scale-[1.15] duration-200 transition-transform`}
      onClick={onClick}
    >
      {title}
    </button>
  );
};

export default Button;

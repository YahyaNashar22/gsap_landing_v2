import type { ReactNode } from "react";

interface IButtonProps {
  id: string;
  title: string;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  containerClass: string;
  onClick?: () => void;
}
const Button = ({
  id,
  title,
  leftIcon,
  rightIcon,
  containerClass,
  onClick,
}: IButtonProps) => {
  return (
    <button
      id={id}
      onClick={onClick}
      className={`group relative z-10 w-fit cursor-pointer overflow-hidden rounded-full bg-violet-50 px-7 py-3 text-black ${containerClass}`}
    >
      {leftIcon}
      <span className="relative incline-flex overflow-hidden font-general text-sx uppercase">
        <div>{title}</div>
      </span>
      {rightIcon}
    </button>
  );
};

export default Button;

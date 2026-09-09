import type { InputHTMLAttributes } from "react";
import s from "./AppInput.module.scss";

interface AppInputProps extends InputHTMLAttributes<HTMLInputElement> {
  placeholder: string;
  type: string;
  className?: string;
}

export const AppInput = ({
  placeholder,
  type,
  className,
  ...otherPoprs
}: AppInputProps) => {
  return (
    <input
      {...otherPoprs}
      type={type}
      placeholder={placeholder}
      className={`${s.appInput} ${className ?? ""}`}
    />
  );
};

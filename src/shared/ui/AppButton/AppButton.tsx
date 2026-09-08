import type { ButtonHTMLAttributes, ReactNode } from "react";
import s from "./AppButton.module.scss";

interface AppButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  className?: string;
}

export const AppButton = ({ children, className }: AppButtonProps) => {
  return (
    <button className={`${s.appButton} ${className ?? ""}`}>{children}</button>
  );
};

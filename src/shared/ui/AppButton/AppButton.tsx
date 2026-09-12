import type { ButtonHTMLAttributes, ReactNode } from "react";
import s from "./AppButton.module.scss";

type AppButtonVariant = "clear" | "filled";
interface AppButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: AppButtonVariant;
  className?: string;
}

export const AppButton = ({
  children,
  variant = "clear",
  className,
}: AppButtonProps) => {
  return (
    <button className={[s.appButton, className].filter(Boolean).join(" ")}>
      {children}
    </button>
  );
};

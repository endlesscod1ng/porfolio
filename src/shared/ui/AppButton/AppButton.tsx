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
  ...otherProps
}: AppButtonProps) => {
  return (
    <button
      {...otherProps}
      className={[s.appButton, s[variant], className].filter(Boolean).join(" ")}
    >
      {children}
    </button>
  );
};

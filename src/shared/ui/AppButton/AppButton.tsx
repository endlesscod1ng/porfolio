import type { ButtonHTMLAttributes, ReactNode } from "react";
import s from "./AppButton.module.scss";

type AppButtonVariant = "clear" | "filled";
interface AppButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: AppButtonVariant;
  size?: "s" | "m";
  className?: string;
}

export const AppButton = ({
  children,
  variant = "clear",
  size = "m",
  className,
  ...otherProps
}: AppButtonProps) => {
  return (
    <button
      {...otherProps}
      className={[s.appButton, s[variant], s[size], className]
        .filter(Boolean)
        .join(" ")}
    >
      {children}
    </button>
  );
};

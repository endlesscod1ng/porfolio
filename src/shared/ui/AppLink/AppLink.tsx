import { Link, type LinkProps } from "react-router";
import s from "./AppLink.module.scss";
import type { ReactNode } from "react";
type AppLinkVariant = "clear" | "filled";
interface AppLinkProps extends LinkProps {
  className?: string;
  variant?: AppLinkVariant;
  children: ReactNode;
}

export const AppLink = ({
  children,
  variant = "clear",
  className,
  ...otherProps
}: AppLinkProps) => {
  return (
    <Link
      {...otherProps}
      className={[s.appLink, s[variant], className].filter(Boolean).join(" ")}
    >
      {children}
    </Link>
  );
};

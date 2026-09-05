import { Link, type LinkProps } from "react-router";
import s from "./AppLink.module.scss";
import type { ReactNode } from "react";

interface AppLinkProps extends LinkProps {
  className?: string;
  children: ReactNode;
}

export const AppLink = ({
  children,
  className,
  ...otherProps
}: AppLinkProps) => {
  return (
    <Link
      {...otherProps}
      className={`${s.appLink} ${className ?? ""}`}
    >
      {children}
    </Link>
  );
};

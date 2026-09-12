import { NavLink, type NavLinkProps } from "react-router";
import s from "./AppNavLink.module.scss";
import type { ReactNode } from "react";

interface AppNavLinkProps extends NavLinkProps {
  className?: string;
  children: ReactNode;
}

export const AppNavLink = ({
  children,
  className,
  ...otherProps
}: AppNavLinkProps) => {
  return (
    <NavLink
      {...otherProps}
      className={({ isActive }) =>
        [s.appNavLink, isActive ? s.active : "", className]
          .filter(Boolean)
          .join(" ")
      }
    >
      {children}
    </NavLink>
  );
};

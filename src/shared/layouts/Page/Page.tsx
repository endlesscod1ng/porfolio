import type { ReactNode } from "react";
import s from "./Page.module.scss";

interface PageProps {
  children: ReactNode;
  centered?: boolean;
  className?: string;
}

export const Page = ({ children, centered = true, className }: PageProps) => {
  return (
    <div
      className={`${s.page} ${className ?? ""} ${centered ? [s.centered] : undefined}`}
    >
      {children}
    </div>
  );
};

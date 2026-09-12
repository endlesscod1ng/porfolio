import type { ReactNode } from "react";
import s from "./Container.module.scss";

interface ContainerProps {
  children: ReactNode;
  TagName?: "div" | "section";
  className?: string;
}

export const Container = ({
  children,
  TagName = "section",
  className,
}: ContainerProps) => {
  return (
    <TagName className={[s.container, className].filter(Boolean).join(" ")}>
      {children}
    </TagName>
  );
};

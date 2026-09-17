import type { ComponentType, SVGProps } from "react";
import s from "./AppIcon.module.scss";

interface AppIconProps extends SVGProps<SVGSVGElement> {
  Svg: ComponentType<SVGProps<SVGSVGElement>>;
  className?: string;
}

export const AppIcon = ({ Svg, className, ...otherProps }: AppIconProps) => {
  return (
    <Svg
      {...otherProps}
      className={[s.appIcon, className].filter(Boolean).join(" ")}
    />
  );
};

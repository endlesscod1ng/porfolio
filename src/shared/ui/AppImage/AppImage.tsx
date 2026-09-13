import type { ImgHTMLAttributes } from "react";
import s from "./AppImage.module.scss";

interface AppImageProps extends ImgHTMLAttributes<HTMLImageElement> {
  alt: string;
}

export const AppImage = ({ alt, className, ...props }: AppImageProps) => {
  return (
    <img
      {...props}
      alt={alt}
      className={[s.appImage, className].filter(Boolean).join(" ")}
    />
  );
};

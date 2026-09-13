import s from "./AppText.module.scss";

type AppTextColorType = "primary" | "secondary";
type AppTextTagName = "span" | "p";

interface AppTextProps {
  children: string;
  TagName?: AppTextTagName;
  colorType?: AppTextColorType;
  className?: string;
}

export const AppText = ({
  children,
  TagName = "p",
  colorType = "primary",
  className,
}: AppTextProps) => {
  return (
    <TagName
      className={[s.appText, s[colorType], className].filter(Boolean).join(" ")}
    >
      {children}
    </TagName>
  );
};

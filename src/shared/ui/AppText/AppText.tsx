import s from "./AppText.module.scss";

type AppTextColorType = "primary" | "secondary";
type AppTextTagName = "span" | "p";

type AppTextFontSize = "xxl" | "l" | "m" | "s";

interface AppTextProps {
  children: string;
  TagName?: AppTextTagName;
  fontSize?: AppTextFontSize;
  colorType?: AppTextColorType;
  className?: string;
}

export const AppText = ({
  children,
  TagName = "p",
  fontSize = "s",
  colorType = "primary",
  className,
}: AppTextProps) => {
  return (
    <TagName
      className={[s.appText, s[colorType], s[fontSize], className]
        .filter(Boolean)
        .join(" ")}
    >
      {children}
    </TagName>
  );
};

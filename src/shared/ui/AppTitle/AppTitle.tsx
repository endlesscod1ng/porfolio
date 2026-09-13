import s from "./AppTitle.module.scss";

type AppTitleTagName = "h1" | "h2" | "h3" | "h4" | "h5";

interface AppTitleProps {
  children: string;
  TagName?: AppTitleTagName;
  className?: string;
  accentText?: string;
}

export const AppTitle = ({
  children,
  TagName = "h3",
  className,
  accentText,
}: AppTitleProps) => {
  const renderTitle = () => {
    if (!accentText) {
      return children;
    }

    const accentIndex = children.indexOf(accentText);

    if (accentIndex === -1) {
      return children;
    }

    const beforeAccent = children.slice(0, accentIndex);
    const afterAccent = children.slice(accentIndex + accentText.length);

    return (
      <>
        {beforeAccent}
        <span className={s.accented}>{accentText}</span>
        {afterAccent}
      </>
    );
  };

  return (
    <TagName
      className={[s.appTitle, s[TagName], className].filter(Boolean).join(" ")}
    >
      {renderTitle()}
    </TagName>
  );
};

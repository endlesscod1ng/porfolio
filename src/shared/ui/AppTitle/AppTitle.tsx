import s from "./AppTitle.module.scss";

interface AppTitleProps {
  children: string;
  TagName?: "h1" | "h2" | "h3" | "h4" | "h5";
  className?: string;
}

export const AppTitle = ({
  children,
  TagName = "h3",
  className,
}: AppTitleProps) => {
  return (
    <TagName className={[s.appTitle, className].filter(Boolean).join(" ")}>
      {children}
    </TagName>
  );
};

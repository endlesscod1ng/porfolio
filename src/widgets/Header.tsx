import s from "./Header.module.scss";

interface HeaderProps {
  className?: string;
}

export const Header = ({ className }: HeaderProps) => {
  return (
    <header className={`${s.header} ${className ?? ""}`}>
      <div>Header</div>
    </header>
  );
};

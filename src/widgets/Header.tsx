import { Link } from "react-router";
import s from "./Header.module.scss";

interface HeaderProps {
  className?: string;
}

export const Header = ({ className }: HeaderProps) => {
  return (
    <header className={`${s.header} ${className ?? ""}`}>
      <div className={`${s.continer}`}>
        <Link to={"/"}>Header</Link>
        <nav className={`${s.nav}`}>
          {[
            { name: "Home", path: "/" },
            { name: "Projects", path: "/projects" },
            { name: "Skills", path: "/skills" },
          ].map((l) => {
            return (
              <Link to={l.path} key={l.name} className={`${s.link}`}>
                {l.name}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
};

import { Link } from "react-router";
import s from "./Header.module.scss";
import { AppLink } from "@/shared/ui/AppLink/AppLink";

interface HeaderProps {
  className?: string;
}

export const Header = ({ className }: HeaderProps) => {
  return (
    <header className={`${s.header} ${className ?? ""}`}>
      <div className={`${s.continer}`}>
        <AppLink to={"/"}>Header</AppLink>
        <nav className={`${s.nav}`}>
          {[
            { name: "Home", path: "/" },
            { name: "Projects", path: "/projects" },
            { name: "Contacts", path: "/contacts" },
          ].map((l) => {
            return (
              <AppLink
                to={l.path}
                key={l.name}
                className={`${s.link}`}
              >
                {l.name}
              </AppLink>
            );
          })}
        </nav>
      </div>
    </header>
  );
};

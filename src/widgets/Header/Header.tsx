import s from "./Header.module.scss";

import { routesConfig } from "@/shared/config/routesConfig";
import { Container } from "@/shared/ui/Container/Container";
import { AppNavLink } from "@/shared/ui/AppNavLink/AppNavLink";
import { AppButton } from "@/shared/ui/AppButton/AppButton";

interface HeaderProps {
  changeTheme: () => void;
  className?: string;
}

export const Header = ({ changeTheme, className }: HeaderProps) => {
  return (
    <header className={[s.header, className].filter(Boolean).join(" ")}>
      <Container
        TagName="div"
        className={`${s.container}`}
      >
        <AppButton onClick={changeTheme}>Theme</AppButton>
        <nav className={`${s.nav}`}>
          {routesConfig.map((l) => {
            return (
              <AppNavLink
                to={l.path}
                key={l.name}
                className={`${s.link}`}
              >
                {l.name}
              </AppNavLink>
            );
          })}
        </nav>
      </Container>
    </header>
  );
};

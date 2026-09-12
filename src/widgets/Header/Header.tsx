import s from "./Header.module.scss";
import { AppLink } from "@/shared/ui/AppLink/AppLink";
import { routesConfig } from "@/shared/config/routesConfig";
import { Container } from "@/shared/ui/Container/Container";
import { AppNavLink } from "@/shared/ui/AppNavLink/AppNavLink";

interface HeaderProps {
  className?: string;
}

export const Header = ({ className }: HeaderProps) => {
  return (
    <header className={[s.header, className].filter(Boolean).join(" ")}>
      <Container
        TagName="div"
        className={`${s.container}`}
      >
        <AppLink to={"/"}>Logo</AppLink>
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

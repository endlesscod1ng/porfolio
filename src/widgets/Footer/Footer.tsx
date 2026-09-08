import { Container } from "@/shared/ui/Container/Container";
import s from "./Footer.module.scss";

interface FooterProps {
  className?: string;
}

export const Footer = ({ className }: FooterProps) => {
  return (
    <footer className={`${s.footer} ${className ?? ""}`}>
      <Container>Footer</Container>
    </footer>
  );
};

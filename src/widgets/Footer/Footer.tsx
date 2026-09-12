import { Container } from "@/shared/ui/Container/Container";
import s from "./Footer.module.scss";

interface FooterProps {
  className?: string;
}

export const Footer = ({ className }: FooterProps) => {
  return (
    <footer className={[s.footer, className].filter(Boolean).join(" ")}>
      <Container TagName="div">
        {" "}
        &copy; {new Date().getFullYear()} All Rights Reserved.Ojjomedia
      </Container>
    </footer>
  );
};

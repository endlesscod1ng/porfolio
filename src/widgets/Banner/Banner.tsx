import { Container } from "@/shared/ui/Container/Container";
import s from "./Banner.module.scss";

interface BannerProps {
  className?: string;
}

export const Banner = ({ className }: BannerProps) => {
  return (
    <section className={`${s.banner} ${className ?? ""}`}>
      <Container TagName="div">Banner</Container>
    </section>
  );
};

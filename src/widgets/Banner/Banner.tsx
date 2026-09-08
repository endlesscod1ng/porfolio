import { Container } from "@/shared/ui/Container/Container";
import s from "./Banner.module.scss";
import { AppButton } from "@/shared/ui/AppButton/AppButton";

interface BannerProps {
  className?: string;
}

export const Banner = ({ className }: BannerProps) => {
  return (
    <section className={`${s.banner} ${className ?? ""}`}>
      <Container TagName="div">
        <div>
          <h2>I’m Rayan Adlrdard </h2>
          <h1>Front-end Developer </h1>
          <span>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et,
            volutpat feugiat placerat lobortis. Natoque rutrum semper sed
            suspendisse nunc lectus.
          </span>
          <AppButton>hire me</AppButton>
        </div>
        <div className={`${s.imgContainer}`}>
          <img src="#" />
        </div>
      </Container>
    </section>
  );
};

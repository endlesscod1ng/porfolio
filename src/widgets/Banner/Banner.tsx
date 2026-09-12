import { Container } from "@/shared/ui/Container/Container";
import s from "./Banner.module.scss";
import { AppButton } from "@/shared/ui/AppButton/AppButton";
import Photo from "@/shared/assets/img/banner/photo.svg";
import { AppTitle } from "@/shared/ui/AppTitle/AppTitle";

interface BannerProps {
  className?: string;
}

export const Banner = ({ className }: BannerProps) => {
  return (
    <section className={[s.banner, className].filter(Boolean).join(" ")}>
      <Container
        TagName="div"
        className={`${s.container}`}
      >
        <div className={`${s.content}`}>
          <AppTitle TagName="h2">I'm Viacheslav </AppTitle>
          <AppTitle TagName="h1">Front-end Developer </AppTitle>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et,
            volutpat feugiat placerat lobortis. Natoque rutrum semper sed
            suspendisse nunc lectus.
          </p>
          <AppButton variant="filled">hire me</AppButton>
        </div>
        <img
          className={`${s.img}`}
          src={Photo}
        />
      </Container>
    </section>
  );
};

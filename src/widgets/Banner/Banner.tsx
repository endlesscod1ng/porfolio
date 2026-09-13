import { Container } from "@/shared/ui/Container/Container";
import s from "./Banner.module.scss";

import Photo from "@/shared/assets/img/banner/photo.svg";
import { AppTitle } from "@/shared/ui/AppTitle/AppTitle";
import { AppLink } from "@/shared/ui/AppLink/AppLink";

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
          <AppTitle
            TagName="h1"
            accentText="Front-end"
          >
            {"Front-end Developer"}
          </AppTitle>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et,
            volutpat feugiat placerat lobortis. Natoque rutrum semper sed
            suspendisse nunc lectus.
          </p>
          <AppLink
            to={"/projects"}
            variant="filled"
          >
            {"See Projects"}
          </AppLink>
        </div>
        <img
          className={`${s.img}`}
          src={Photo}
        />
      </Container>
    </section>
  );
};

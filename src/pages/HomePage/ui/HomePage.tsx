import { Banner } from "@/widgets/Banner/Banner";
import s from "./HomePage.module.scss";
import { Services } from "@/widgets/Services/Services";
import { Price } from "@/widgets/Price/Price";
import { Reviews } from "@/widgets/Reviews/Reviews";
import { Projects } from "@/widgets/Projects/Projects";
import { Contacts } from "@/widgets/Contacts";
import { Page } from "@/shared/layouts/Page/Page";

interface HomePageProps {
  className?: string;
}

export const HomePage = ({ className }: HomePageProps) => {
  return (
    <Page
      centered={false}
      className={[s.homePage, className].filter(Boolean).join(" ")}
    >
      <Banner />
      <Services />
      <Price />
      <Projects />
      <Reviews />
      <Contacts />
    </Page>
  );
};

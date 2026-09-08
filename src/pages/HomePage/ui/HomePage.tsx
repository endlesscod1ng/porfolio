import { Banner } from "@/widgets/Banner/Banner";
import s from "./HomePage.module.scss";

interface HomePageProps {
  className?: string;
}

export const HomePage = ({ className }: HomePageProps) => {
  return (
    <div className={`${s.homePage} ${className ?? ""}`}>
      <Banner />
    </div>
  );
};

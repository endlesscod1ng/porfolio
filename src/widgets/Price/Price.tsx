import { Container } from "@/shared/ui/Container/Container";
import s from "./Price.module.scss";
import { AppButton } from "@/shared/ui/AppButton/AppButton";
import { AppTitle } from "@/shared/ui/AppTitle/AppTitle";

interface PriceProps {
  className?: string;
}

export const Price = ({ className }: PriceProps) => {
  return (
    <Container className={[s.price, className].filter(Boolean).join(" ")}>
      <AppTitle>Price plans</AppTitle>
      <p>
        Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
        sint. Velit officia consequat duis enim velit mollit. lorem ipsum
      </p>
      <div className={`${s.list}`}>
        {[
          {
            name: "silver",
            cost: "$0.00 /hour",
            desc: "For most businesses that want to optimize web queries",
            services: [
              "UI Design",
              "web development",
              "logo design",
              "seo optimization",
              "wordPress integration",
              "5 Websites",
              "unlimited user",
              "20 gB bandwith",
            ],
          },
          {
            name: "silver",
            cost: "$0.00 /hour",
            desc: "For most businesses that want to optimize web queries",
            services: [
              "UI Design",
              "web development",
              "logo design",
              "seo optimization",
              "wordPress integration",
              "5 Websites",
              "unlimited user",
              "20 gB bandwith",
            ],
          },
          {
            name: "silver",
            cost: "$0.00 /hour",
            desc: "For most businesses that want to optimize web queries",
            services: [
              "UI Design",
              "web development",
              "logo design",
              "seo optimization",
              "wordPress integration",
              "5 Websites",
              "unlimited user",
              "20 gB bandwith",
            ],
          },
        ].map((item) => {
          return (
            <div className={`${s.priceItem}`}>
              <h4>{item.name}</h4>
              <p>{item.cost}</p>
              <p>{item.desc}</p>
              <ul className={`${s.services}`}>
                {item.services.map((serv) => (
                  <li key={serv}>{serv}</li>
                ))}
              </ul>
              <AppButton>{"ORDER NOW"}</AppButton>
            </div>
          );
        })}
      </div>
    </Container>
  );
};

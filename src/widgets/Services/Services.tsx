import { Container } from "@/shared/ui/Container/Container";
import s from "./Services.module.scss";
import { AppTitle } from "@/shared/ui/AppTitle/AppTitle";

interface ServicesProps {
  className?: string;
}

export const Services = ({ className }: ServicesProps) => {
  return (
    <Container className={`${s.services} ${className ?? ""}`}>
      <AppTitle>my services</AppTitle>
      <p>
        Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
        sint. Velit officia consequat duis enim velit mollit. lorem ipsum
      </p>
      <div className={`${s.list}`}>
        {[
          {
            imgUrl: "#",
            alt: "service",
            title: "web development",
            desc: "blog, e-commerce",
          },
          {
            imgUrl: "#",
            alt: "service",
            title: "web development",
            desc: "blog, e-commerce",
          },
          {
            imgUrl: "#",
            alt: "service",
            title: "web development",
            desc: "blog, e-commerce",
          },
        ].map((sItem) => {
          return (
            <div className={`${s.serviceItem}`}>
              <div>
                <img
                  src={sItem.imgUrl}
                  alt={sItem.alt}
                />
                <h5>{sItem.title}</h5>
                <p>{sItem.desc}</p>
              </div>
            </div>
          );
        })}
      </div>
    </Container>
  );
};

import { Container } from "@/shared/ui/Container/Container";
import s from "./Services.module.scss";

interface ServicesProps {
  className?: string;
}

export const Services = ({ className }: ServicesProps) => {
  return (
    <Container className={`${s.services} ${className ?? ""}`}>
      <h3>my services</h3>
      <span>
        Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
        sint. Velit officia consequat duis enim velit mollit. lorem ipsum
      </span>
      <div className={`${s.serviceItem}`}>
        <div>
          <img
            src="#"
            alt="service"
          />
          <h5>web development</h5>
          <p>blog, e-commerce</p>
        </div>
      </div>
    </Container>
  );
};

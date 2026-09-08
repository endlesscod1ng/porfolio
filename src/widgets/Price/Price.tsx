import { Container } from "@/shared/ui/Container/Container";
import s from "./Price.module.scss";

interface PriceProps {
  className?: string;
}

export const Price = ({ className }: PriceProps) => {
  return (
    <Container className={`${s.price} ${className ?? ""}`}>
      <h3>Price plans</h3>
      <p>
        Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
        sint. Velit officia consequat duis enim velit mollit. lorem ipsum
      </p>
    </Container>
  );
};

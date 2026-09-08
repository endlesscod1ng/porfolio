import { Container } from "@/shared/ui/Container/Container";
import s from "./Price.module.scss";

interface PriceProps {
  className?: string;
}

export const Price = ({ className }: PriceProps) => {
  return (
    <Container className={`${s.price} ${className ?? ""}`}>
      <div>Price</div>
    </Container>
  );
};

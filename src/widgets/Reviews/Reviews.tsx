import { Container } from "@/shared/ui/Container/Container";
import s from "./Reviews.module.scss";

interface ReviewsProps {
  className?: string;
}

export const Reviews = ({ className }: ReviewsProps) => {
  return (
    <Container className={`${s.reviews} ${className ?? ""}`}>
      <div>Reviews</div>
    </Container>
  );
};

import { Container } from "@/shared/ui/Container/Container";
import s from "./Reviews.module.scss";
import { AppTitle } from "@/shared/ui/AppTitle/AppTitle";

interface ReviewsProps {
  className?: string;
}

export const Reviews = ({ className }: ReviewsProps) => {
  return (
    <Container className={[s.reviews, className].filter(Boolean).join(" ")}>
      <AppTitle>Recommendations</AppTitle>
      <p>
        Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
        sint. Velit officia consequat duis enim velit mollit. lorem ipsum
      </p>
    </Container>
  );
};

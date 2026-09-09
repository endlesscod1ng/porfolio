import { Container } from "@/shared/ui/Container/Container";
import s from "./Projects.module.scss";
import { AppButton } from "@/shared/ui/AppButton/AppButton";

interface ProjectsProps {
  className?: string;
}

export const Projects = ({ className }: ProjectsProps) => {
  return (
    <Container className={`${s.projects} ${className ?? ""}`}>
      <h3>Portfolio</h3>
      <p>
        Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
        sint. Velit officia consequat duis enim velit mollit. lorem ipsum
      </p>
      <div className={`${s.tabs}`}>
        {[
          "All categories",
          "UI Design",
          "Web Templates",
          "Logo",
          "Branding",
        ].map((p) => (
          <AppButton key={p}>{p}</AppButton>
        ))}
      </div>
      <div className={`${s.works}`}>
        <div className={`${s.work}`}></div>
        <div className={`${s.work}`}></div>
        <div className={`${s.work}`}></div>
        <div className={`${s.work}`}></div>
      </div>
    </Container>
  );
};

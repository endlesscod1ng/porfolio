import { Container } from "@/shared/ui/Container/Container";
import s from "./Projects.module.scss";

interface ProjectsProps {
  className?: string;
}

export const Projects = ({ className }: ProjectsProps) => {
  return (
    <Container className={`${s.projects} ${className ?? ""}`}>
      <div>Projects</div>
    </Container>
  );
};

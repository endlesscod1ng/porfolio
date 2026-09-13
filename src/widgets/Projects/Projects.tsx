import { Container } from "@/shared/ui/Container/Container";
import s from "./Projects.module.scss";
import { AppButton } from "@/shared/ui/AppButton/AppButton";
import { AppTitle } from "@/shared/ui/AppTitle/AppTitle";
import { AppImage } from "@/shared/ui/AppImage/AppImage";
import Project from "@/shared/assets/img/projects/project.png";
import { AppText } from "@/shared/ui/AppText/AppText";

interface ProjectsProps {
  className?: string;
}

export const Projects = ({ className }: ProjectsProps) => {
  return (
    <Container className={[s.projects, className].filter(Boolean).join(" ")}>
      <AppTitle>Portfolio</AppTitle>
      <AppTitle
        TagName="h4"
        colorType="primary"
      >
        Things I’ve built so far
      </AppTitle>
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
        <AppImage
          className={`${s.work}`}
          alt="project"
          src={Project}
        />
        <AppImage
          className={`${s.work}`}
          alt="project"
          src={Project}
        />
        <AppImage
          className={`${s.work}`}
          alt="project"
          src={Project}
        />
        <AppImage
          className={`${s.work}`}
          alt="project"
          src={Project}
        />
      </div>
    </Container>
  );
};

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
interface WorkListType {
  title: string;
  imgSrc: string;
  alt: string;
  tech: string[];
}
const workList: WorkListType[] = [
  {
    title: "Portfolio",
    imgSrc: Project,
    alt: "portfolio",
    tech: ["React", "Vue", "ReactNative", "NodeJs"],
  },
  {
    title: "Article Space",
    imgSrc: Project,
    alt: "article-space",
    tech: ["React", "Vue", "ReactNative", "NodeJs"],
  },
  {
    title: "Todolist",
    imgSrc: Project,
    alt: "todolist",
    tech: ["React", "Vue", "ReactNative", "NodeJs"],
  },
  {
    title: "Weather",
    imgSrc: Project,
    alt: "weather",
    tech: ["ReactNative"],
  },
  {
    title: "Todo",
    imgSrc: Project,
    alt: "todo",
    tech: ["Flutter"],
  },
  {
    title: "Calculator",
    imgSrc: Project,
    alt: "calculator",
    tech: ["Python"],
  },
];

export const Projects = ({ className }: ProjectsProps) => {
  return (
    <Container className={[s.projects, className].filter(Boolean).join(" ")}>
      <AppTitle>Portfolio</AppTitle>
      <AppText fontSize="l">Things I’ve built so far</AppText>
      <div className={`${s.tabs}`}>
        {[
          "All",
          "React",
          "Vue",
          "React Native",
          "NodeJs",
          "Flutter",
          "Phyton",
        ].map((p) => (
          <AppButton key={p}>{p}</AppButton>
        ))}
      </div>
      <div className={`${s.works}`}>
        {workList.map(({ title, imgSrc, alt }) => (
          <div key={title}>
            <AppImage
              className={`${s.work}`}
              alt={alt}
              src={imgSrc}
            />
          </div>
        ))}
      </div>
    </Container>
  );
};

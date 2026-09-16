import { Container } from "@/shared/ui/Container/Container";
import s from "./Projects.module.scss";
import { AppButton } from "@/shared/ui/AppButton/AppButton";
import { AppTitle } from "@/shared/ui/AppTitle/AppTitle";
import { AppImage } from "@/shared/ui/AppImage/AppImage";
import Project from "@/shared/assets/img/projects/project.png";
import { AppText } from "@/shared/ui/AppText/AppText";
import { useState } from "react";
import { AppLink } from "@/shared/ui/AppLink/AppLink";

interface ProjectsProps {
  className?: string;
}
interface WorkListType {
  title: string;
  imgSrc: string;
  alt: string;
  tech: string[];
}
type TechStackType =
  | "All"
  | "React"
  | "Vue"
  | "React Native"
  | "NodeJs"
  | "Flutter"
  | "Python";
const TechStack: TechStackType[] = [
  "All",
  "React",
  "Vue",
  "React Native",
  "NodeJs",
  "Flutter",
  "Python",
];
const workList: WorkListType[] = [
  {
    title: "Portfolio",
    imgSrc: Project,
    alt: "portfolio",
    tech: ["React", "Vue", "NodeJs"],
  },
  {
    title: "Article Space",
    imgSrc: Project,
    alt: "article-space",
    tech: ["React", "Vue", "NodeJs"],
  },
  {
    title: "Todolist",
    imgSrc: Project,
    alt: "todolist",
    tech: ["React", "Vue", "NodeJs"],
  },
  {
    title: "Weather",
    imgSrc: Project,
    alt: "weather",
    tech: ["React Native"],
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
  const [activeTab, setActiveTab] = useState<TechStackType>("All");
  return (
    <Container className={[s.projects, className].filter(Boolean).join(" ")}>
      <AppTitle>Portfolio</AppTitle>
      <AppText fontSize="l">Things I’ve built so far</AppText>

      <div className={`${s.tabs}`}>
        {TechStack.map((p) => (
          <AppButton
            key={p}
            onClick={() => {
              console.log("p", p);
              setActiveTab(p);
            }}
            className={[activeTab === p && s.activeTab]
              .filter(Boolean)
              .join(" ")}
          >
            {p}
          </AppButton>
        ))}
      </div>

      <div className={`${s.works}`}>
        {workList
          .filter((w) => activeTab === "All" || w.tech.includes(activeTab))
          .map(({ title, imgSrc, alt }) => (
            <div className={`${s.workContainer}`} key={title}>
              <AppImage
                className={`${s.work}`}
                alt={alt}
                src={imgSrc}
              />
            </div>
          ))}
      </div>
      <AppLink
        className={`${s.link}`}
        to={"projects"}
      >
        {"See more>>>"}
      </AppLink>
    </Container>
  );
};

import s from "./ProjectsPage.module.scss";

interface ProjectsPageProps {
  className?: string;
}

export const ProjectsPage = ({ className }: ProjectsPageProps) => {
  return (
    <div className={`${s.projectsPage} ${className ?? ""}`}>
      <div>ProjectsPage</div>
    </div>
  );
};

import { Page } from "@/shared/layouts/Page/Page";
import s from "./ProjectsPage.module.scss";

interface ProjectsPageProps {
  className?: string;
}

export const ProjectsPage = ({ className }: ProjectsPageProps) => {
  return (
    <Page className={`${s.projectsPage} ${className ?? ""}`}>
      <div>ProjectsPage</div>
    </Page>
  );
};

import { Page } from "@/shared/layouts/Page/Page";
import s from "./ProjectsPage.module.scss";
import { Projects } from "@/widgets/Projects/Projects";
import { Contacts } from "@/widgets/Contacts/Contacts";

interface ProjectsPageProps {
  className?: string;
}

export const ProjectsPage = ({ className }: ProjectsPageProps) => {
  return (
    <Page className={[s.projectsPage, className].filter(Boolean).join(" ")}>
      <Projects />
      <Contacts />
    </Page>
  );
};

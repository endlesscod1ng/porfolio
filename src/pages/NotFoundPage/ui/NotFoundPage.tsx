import { AppTitle } from "@/shared/ui/AppTitle/AppTitle";
import s from "./NotFoundPage.module.scss";
import { AppLink } from "@/shared/ui/AppLink/AppLink";
import { Page } from "@/shared/layouts/Page/Page";

interface NotFoundPageProps {
  className?: string;
}

export const NotFoundPage = ({ className }: NotFoundPageProps) => {
  return (
    <Page className={`${s.notFoundPage} ${className ?? ""}`}>
      <AppTitle>{"Page Not Found"}</AppTitle>
      <AppLink to={"/"}>{"Home"}</AppLink>
    </Page>
  );
};

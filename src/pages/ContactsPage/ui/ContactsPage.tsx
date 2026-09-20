import { Page } from "@/shared/layouts/Page/Page";
import s from "./ContactsPage.module.scss";
import { Contacts } from "@/widgets/Contacts/Contacts";

interface ContactsPageProps {
  className?: string;
}

export const ContactsPage = ({ className }: ContactsPageProps) => {
  return (
    <Page className={[s.contactsPage, className].filter(Boolean).join(" ")}>
      <Contacts />
    </Page>
  );
};

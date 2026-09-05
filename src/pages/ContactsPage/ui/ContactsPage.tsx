import s from "./ContactsPage.module.scss";

interface ContactsPageProps {
  className?: string;
}

export const ContactsPage = ({ className }: ContactsPageProps) => {
  return (
    <div className={`${s.contactsPage} ${className ?? ""}`}>
      <div>ContactsPage</div>
    </div>
  );
};

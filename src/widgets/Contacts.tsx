import { Container } from "@/shared/ui/Container/Container";
import s from "./Contacts.module.scss";

interface ContactsProps {
  className?: string;
}

export const Contacts = ({ className }: ContactsProps) => {
  return (
    <Container className={`${s.contacts} ${className ?? ""}`}>
      <div>Contacts</div>
    </Container>
  );
};

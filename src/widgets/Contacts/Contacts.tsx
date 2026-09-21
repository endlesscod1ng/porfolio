import { Container } from "@/shared/ui/Container/Container";
import s from "./Contacts.module.scss";
import { AppButton } from "@/shared/ui/AppButton/AppButton";
import { AppInput } from "@/shared/ui/AppInput/AppInput";
import { AppTitle } from "@/shared/ui/AppTitle/AppTitle";

interface ContactsProps {
  className?: string;
}

export const Contacts = ({ className }: ContactsProps) => {
  return (
    <Container className={[s.contacts, className].filter(Boolean).join(" ")}>
      <div className={`${s.formContainer}`}>
        <AppTitle>Leave us your info</AppTitle>
        <form
          className={`${s.form}`}
          action=""
          // onChange={(e) => e.preventDefault()}
        >
          <AppInput
            label="Your Full Name ( Required)"
            placeholder="Your Name"
            required
          />

          <AppInput
            label="Your Email (Required)"
            placeholder="Your Email "
          />

          <AppInput
            label={"Your Message"}
            placeholder="Your Message"
          />
          <AppButton
            className={`${s.btn}`}
            variant="filled"
            size="s"
          >
            send message
          </AppButton>
        </form>
      </div>

      <div className={`${s.info}`}>
        <AppTitle>Contact information</AppTitle>
        <div className={`${s.list}`}>
          <div className={`${s.card}`}>
            <img
              src="#"
              alt=""
            />
            <div>
              <span>Country:</span>
              <span>Bangladesh</span>
            </div>
            <div>
              <span>City:</span>
              <span>Dhaka</span>
            </div>
            <div>
              <span>Streat:</span>
              <span>35 vhatara, Badda</span>
            </div>
          </div>

          <div className={`${s.card}`}>
            <img
              src="#"
              alt=""
            />
            <div>
              <span>Email:</span>
              <span>youremail@gmail.com</span>
            </div>
            <div>
              <span>Skype:</span>
              <span>@yourusername</span>
            </div>
            <div>
              <span>Telegram:</span>
              <span>@yourusername</span>
            </div>
          </div>

          <div className={`${s.card}`}>
            <img
              src="#"
              alt=""
            />
            <div>
              <span>Support services:</span>
              <span>15369</span>
            </div>
            <div>
              <span>Office:</span>
              <span>@+58 (021)356 587 235</span>
            </div>
            <div>
              <span>Personal:</span>
              <span>@+58 (021)356 587 235</span>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

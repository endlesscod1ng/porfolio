import { Container } from "@/shared/ui/Container/Container";
import s from "./Contacts.module.scss";
import { AppButton } from "@/shared/ui/AppButton/AppButton";
import { AppInput } from "@/shared/ui/AppInput/AppInput";

interface ContactsProps {
  className?: string;
}

export const Contacts = ({ className }: ContactsProps) => {
  return (
    <Container className={`${s.contacts} ${className ?? ""}`}>
      <div className={`${s.formContainer}`}>
        <h3>Leave us your info</h3>
        <form
          className={`${s.form}`}
          action=""
          // onChange={(e) => e.preventDefault()}
        >
          <label htmlFor="">Your Full Name ( Required)</label>
          <AppInput
            type="text"
            placeholder="Your Full Name ( Required)"
          />

          <label htmlFor="">Your Email ( Required)</label>
          <AppInput
            type="text"
            placeholder="Your Email ( Required)"
          />

          <label htmlFor="">Subject</label>
          <AppInput
            type="text"
            placeholder="Subject"
          />

          <label htmlFor="">Your Message</label>
          <AppInput
            type="text"
            placeholder="Your Message"
          />
          <AppButton>send message</AppButton>
        </form>
      </div>

      <div className={`${s.info}`}>
        <h3>Contact information</h3>
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

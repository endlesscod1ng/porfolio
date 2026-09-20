import { AppButton } from "@/shared/ui/AppButton/AppButton";
import s from "./Socials.module.scss";
import Inst from "@/shared/assets/img/socials/inst.svg?react";
import Tg from "@/shared/assets/img/socials/tg.svg?react";
import W from "@/shared/assets/img/socials/w.svg?react";

interface SocialsProps {
  className?: string;
}

export const Socials = ({ className }: SocialsProps) => {
  return (
    <div className={[s.socials, className].filter(Boolean).join(" ")}>
      <AppButton className={`${s.btn}`}>
        <Inst />
      </AppButton>
      <AppButton className={`${s.btn} ${s.tg}`}>
        <Tg />
      </AppButton>
      <AppButton className={`${s.btn}`}>
        <W />
      </AppButton>
    </div>
  );
};

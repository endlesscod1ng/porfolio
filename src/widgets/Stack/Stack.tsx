import { AppTitle } from "@/shared/ui/AppTitle/AppTitle";
import s from "./Stack.module.scss";
import { Container } from "@/shared/ui/Container/Container";
import { AppText } from "@/shared/ui/AppText/AppText";
import CssIcon from "@/shared/assets/img/stack/css.svg?react";
import GitIcon from "@/shared/assets/img/stack/git.svg?react";
import HtmlIcon from "@/shared/assets/img/stack/html.svg?react";
import JsIcon from "@/shared/assets/img/stack/js.svg?react";
import NodejsIcon from "@/shared/assets/img/stack/nodejs.svg?react";
import ReactIcon from "@/shared/assets/img/stack/react.svg?react";
import ReduxIcon from "@/shared/assets/img/stack/redux.svg?react";
import SassIcon from "@/shared/assets/img/stack/sass.svg?react";
import TailwindIcon from "@/shared/assets/img/stack/tailwind.svg?react";
import TypescriptIcon from "@/shared/assets/img/stack/typescript.svg?react";
import VscodeIcon from "@/shared/assets/img/stack/vscode.svg?react";
import VueIcon from "@/shared/assets/img/stack/vue.svg?react";
import { AppIcon } from "@/shared/ui/AppIcon/AppIcon";

interface StackProps {
  className?: string;
}
const Icons = [
  CssIcon,
  GitIcon,
  HtmlIcon,
  JsIcon,
  NodejsIcon,
  ReactIcon,
  ReduxIcon,
  SassIcon,
  TailwindIcon,
  TypescriptIcon,
  VscodeIcon,
  VueIcon,
];
export const Stack = ({ className }: StackProps) => {
  return (
    <Container className={[s.stack, className].filter(Boolean).join(" ")}>
      <AppTitle>{"My Tech Stack"}</AppTitle>
      <AppText fontSize="l">
        {"Technologies I’ve been working with recently"}
      </AppText>
      <div className={`${s.iconList}`}>
        {Icons.map((Icon, i) => (
          <AppIcon
            Svg={Icon}
            key={i}
          />
        ))}
      </div>
    </Container>
  );
};

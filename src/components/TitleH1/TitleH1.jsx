import s from "./TitleH1.module.scss";

export default function Title({ text }) {
  return <h1 className={s.title}>{text}</h1>;
}

import s from "./Text.module.scss";

export default function Text({ textClass = "text", text }) {
  return (
    <>
      <p className={s[textClass]}>{text}</p>
    </>
  );
}

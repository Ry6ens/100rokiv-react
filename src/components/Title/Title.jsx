import { Link } from "react-router-dom";

import s from "./Title.module.scss";

export default function Title({
  img,
  title,
  textParag1,
  textParag2,
  textParag3,
  textParag4,
  btnBook = true,
  textClass = "text",
  imgClass = "img",
  containerClass = "container",
}) {
  return (
    <section className={s.sectionTitle}>
      <img className={s[imgClass]} src={img} alt={title} />
      <div className={s[containerClass]}>
        <h1 className={s.title}>{title}</h1>
        <p className={s[textClass]}>{textParag1}</p>
        <p className={s[textClass]}>{textParag2}</p>
        <p className={s[textClass]}>{textParag3}</p>
        <p className={s[textClass]}>{textParag4}</p>
        {btnBook && (
          <div className={s.btnLink}>
            <Link to="/book" className={s.btnBook}>
              Забронювати столик
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}

import { Link } from "react-router-dom";

import s from "./Title.module.scss";

export default function Title({
  img,
  title,
  textParag1,
  textParag2,
  textParag3,
  btnBook = true,
}) {
  return (
    <section className={s.sectionTitle}>
      <img
        className={s.img}
        src={img}
        alt="100 років тому вперед Перший поверх"
      />
      <div className={s.container}>
        <h1 className={s.title}>{title}</h1>
        <p className={s.text}>{textParag1}</p>
        <p className={s.text}>{textParag2}</p>
        <p className={s.text}>{textParag3}</p>
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

import { Link } from "react-router-dom";
import { useMediaQuery } from "react-responsive";

import Ground from "../../images/ground.jpeg";

import Navigation from "../../components/Navigation/Navigation";
import Gallery from "../../components/Gallery/Gallery";
import Menu from "../../components/Menu/Menu";

import s from "./GroundPage.module.scss";

export default function GroundPage() {
  const isDesktop = useMediaQuery({ minWidth: 1024 });

  return (
    <main>
      <section className={s.sectionTitle}>
        <img
          className={s.img}
          src={Ground}
          alt="100 років тому вперед Перший поверх"
        />
        <div className={s.container}>
          <h1 className={s.title}>Перший поверх</h1>
          <p className={s.text}>
            Входячи, ви потрапляєте до затишної, оздобленої натуральним деревом
            зали.
          </p>
          <p className={s.text}>
            Це найкраще місце для того, щоб насолодитися смаком України у
            великій компанії - друзів, родини або просто знайомих.
          </p>
          <p className={s.text}>
            Тут, до речі, знаходиться наш бар, де народжуються авторські
            коктейлі - унікальні напої з місцевих інгредієнтів. Уявіть, як це
            чудово - спостерігати за тим, як створюється саме ваш!
          </p>
          <div className={s.btnLink}>
            <Link to="/book" className={s.btnBook}>
              Забронювати столик
            </Link>
          </div>
        </div>
      </section>
      <Menu />
      <Gallery />
      {isDesktop && <Navigation navClass="footer-navigation_desktop" />}
    </main>
  );
}

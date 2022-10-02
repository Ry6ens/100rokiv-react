import { useMediaQuery } from "react-responsive";
import { Link } from "react-router-dom";

import Navigation from "../Navigation/Navigation";

import s from "./Home.module.scss";
import Ground from "../../images/ground.jpeg";
import Above from "../../images/above.jpeg";
import Redroom from "../../images/redroom.jpeg";

export default function Home() {
  const isDesktop = useMediaQuery({ minWidth: 1024 });

  return (
    <main>
      <section className={s.sectionTitle}>
        <h1 className={s.title}>100 років тому вперед</h1>
        <p className={s.text}>
          це принципово нова форма української кухні із власними суперфудами,
          дивовижними рецептами та переосмисленими традиціями.
        </p>
      </section>
      <section>
        <ul className={s.floorsList}>
          <li>
            <Link to="/ground">
              <img className={s.img} src={Ground} alt="Перший поверх" />
              <h2 className={s.floorsTitle}>Перший поверх</h2>
            </Link>
          </li>
          <li>
            <Link to="/above">
              <img className={s.img} src={Above} alt="Другий поверх" />
              <h2 className={s.floorsTitle}>Другий поверх</h2>
            </Link>
          </li>
          <li>
            <Link to="/redroom">
              <img className={s.img} src={Redroom} alt="Червона зала" />
              <h2 className={s.floorsTitle}>Червона зала</h2>
            </Link>
          </li>
        </ul>
      </section>
      {isDesktop && <Navigation navClass="footer-navigation_desktop" />}
    </main>
  );
}

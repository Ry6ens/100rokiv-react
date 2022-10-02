import { Link } from "react-router-dom";

import Ground from "../../images/ground.jpeg";
import MenuFoodJPG from "../../images/docs/menu-food.jpg";
import MenuFoodPDF from "../../images/docs/menu-food.pdf";
import MenuWineJPG from "../../images/docs/menu-wine.jpg";
import MenuWinePDF from "../../images/docs/menu-wine.pdf";

import s from "./GroundPage.module.scss";

export default function GroundPage() {
  return (
    <main>
      <section className={s.section}>
        <img
          class={s.img}
          src={Ground}
          alt="100 років тому вперед Перший поверх"
        />
        <h1 className={s.title}>Перший поверх</h1>
        <p className={s.text}>
          Входячи, ви потрапляєте до затишної, оздобленої натуральним деревом
          зали.
        </p>
        <p className={s.text}>
          Це найкраще місце для того, щоб насолодитися смаком України у великій
          компанії - друзів, родини або просто знайомих.
        </p>
        <p className={s.text}>
          Тут, до речі, знаходиться наш бар, де народжуються авторські коктейлі
          - унікальні напої з місцевих інгредієнтів. Уявіть, як це чудово -
          спостерігати за тим, як створюється саме ваш!
        </p>
        <div className={s.btnLink}>
          <Link to="/book" className={s.btnBook}>
            Забронювати столик
          </Link>
        </div>
      </section>
      <section className={s.sectionMenu}>
        <h1 className={s.title}>Меню</h1>
        <ul className={s.galleryMenuList}>
          <li class="gallery__item-menu">
            <a href={MenuFoodPDF} rel="noreferrer" target="_blank">
              <img
                className={s.imgMenu}
                src={MenuFoodJPG}
                alt="Меню 100 років"
              />
            </a>
          </li>
          <li class="gallery__item-menu">
            <a href={MenuWinePDF} rel="noreferrer" target="_blank">
              <img
                className={s.imgMenu}
                width="550px"
                src={MenuWineJPG}
                alt="Винна карта 100 років"
              />
            </a>
          </li>
          <li class="gallery__item-menu">
            <a href="./images/menu-bar.pdf" target="_blank">
              <img
                class="gallery__menu-img"
                width="550px"
                src="./images/menu-bar.jpg"
                alt="Барна карта 100 років"
              />
            </a>
          </li>
        </ul>
      </section>
    </main>
  );
}

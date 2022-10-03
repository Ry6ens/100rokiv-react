import s from "./Menu.module.scss";

import MenuFoodJPG from "../../images/docs/menu-food.jpg";
import MenuFoodPDF from "../../images/docs/menu-food.pdf";
import MenuWineJPG from "../../images/docs/menu-wine.jpg";
import MenuWinePDF from "../../images/docs/menu-wine.pdf";
import MenuBarJPG from "../../images/docs/menu-bar.jpg";
import MenuBarPDF from "../../images/docs/menu-bar.pdf";

export default function Menu() {
  return (
    <section className={s.sectionMenu}>
      <h2 className={s.title}>Меню</h2>
      <ul className={s.galleryMenuList}>
        <li>
          <a href={MenuFoodPDF} rel="noreferrer" target="_blank">
            <img className={s.imgMenu} src={MenuFoodJPG} alt="Меню 100 років" />
          </a>
        </li>
        <li>
          <a href={MenuWinePDF} rel="noreferrer" target="_blank">
            <img
              className={s.imgMenu}
              width="550px"
              src={MenuWineJPG}
              alt="Винна карта 100 років"
            />
          </a>
        </li>
        <li>
          <a href={MenuBarPDF} rel="noreferrer" target="_blank">
            <img
              className={s.imgMenu}
              width="550px"
              src={MenuBarJPG}
              alt="Барна карта 100 років"
            />
          </a>
        </li>
      </ul>
    </section>
  );
}

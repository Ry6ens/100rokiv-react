// import s from "./Burger.module.scss";
import "./hamburgers.scss";
import "./Burger.scss";

export default function Burger() {
  const handleClick = (e) => {
    e.currentTarget.classList.toggle("is-active");
  };

  return (
    <>
      <div
        className="hamburger hamburger--squeeze"
        type="button"
        // aria-expanded="false"
        // data-menu-button
        onClick={handleClick}
      >
        <span className="hamburger-box">
          <span className="hamburger-inner"></span>
        </span>
        <nav className="hamburger-menu_nav">
          <ul className="hamburger-menu_list">
            <li>100років</li>
            <li>Забронювати столик</li>
            <li>Меню</li>
            <li>Доставка їжі</li>
            <li>Враження в подарунок</li>
            <li>Майбутні події</li>
            <li>Засновники</li>
            <li>Наші контакти</li>
          </ul>
          <div className="hamburger-menu_mobile">
            <ul className="hamburger-menu_list">
              <li>Політика конфіденційності</li>
              <li>Публічна оферта</li>
            </ul>
            <address>
              <a
                className="s.hoverAddress"
                href="https://goo.gl/maps/Jof1XhNqpWWVxGcu6"
                rel="noreferrer"
                target="_blank"
              >
                вул. Володимирська 4, м. Київ
              </a>
            </address>
            <a href="tel:+380680686975">Тел: +38 (068) 068-69-75</a>
          </div>
        </nav>
      </div>
    </>
  );
}

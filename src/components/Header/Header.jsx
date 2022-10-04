import { Link } from "react-router-dom";
import { useMediaQuery } from "react-responsive";

import Burger from "./Burger/Burger";
import s from "./Header.module.scss";

export default function Header() {
  const isMobileTablet = useMediaQuery({ maxWidth: 1023.98 });
  const isDesktop = useMediaQuery({ minWidth: 1024 });

  return (
    <header className={s.header}>
      {isDesktop && (
        <address className={s.headerAddress}>
          <a
            className={s.hoverAddress}
            href="https://goo.gl/maps/Jof1XhNqpWWVxGcu6"
            rel="noreferrer"
            target="_blank"
          >
            вул. Володимирська 4, м. Київ
          </a>
        </address>
      )}

      {isMobileTablet && <Burger />}

      <div className={s.overlay}>
        {isDesktop && (
          <a className={s.tel} href="tel:+380680686975">
            Тел: +38 (068) 068-69-75
          </a>
        )}

        <Link to="" className={s.btnBook}>
          Бронювання
        </Link>
      </div>
    </header>
  );
}
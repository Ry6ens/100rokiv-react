import { useMediaQuery } from "react-responsive";

import s from "./Footer.module.scss";
import { ReactComponent as Facebook } from "../../images/svg/facebook.svg";
import { ReactComponent as Instagram } from "../../images/svg/instagram.svg";

export default function Footer() {
  const isTablet = useMediaQuery({ minWidth: 768 });

  return (
    <footer className={s.footer}>
      <p className={s.title}>© 100 років тому вперед</p>
      {isTablet && (
        <div className={s.social}>
          <a
            href="https://www.facebook.com/100rokivtomuvpered"
            rel="noreferrer"
            target="_blank"
          >
            <Facebook width="30" height="30" />
          </a>
          <a
            href="https://www.instagram.com/100rokivtomuvpered"
            rel="noreferrer"
            target="_blank"
          >
            <Instagram width="30" height="30" />
          </a>
        </div>
      )}
    </footer>
  );
}

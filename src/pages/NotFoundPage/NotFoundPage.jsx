import { Link, useLocation } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import $ from "jquery";

import Navigation from "../../components/Navigation/Navigation";

import s from "./NotFoundPage.module.scss";

export default function NotFoundPage() {
  const isDesktop = useMediaQuery({ minWidth: 1024 });

  const location = useLocation();
  const backLinkHref = location.state?.from ?? "/";

  var pageX = $(document).width();
  var pageY = $(document).height();
  var mouseY = 0;
  var mouseX = 0;

  $(document).mousemove(function (event) {
    //verticalAxis
    mouseY = event.pageY;
    var yAxis = ((pageY / 2 - mouseY) / pageY) * 300;

    //horizontalAxis
    mouseX = event.pageX / -pageX;
    var xAxis = -mouseX * 100 - 100;

    $("#boxGhostEyes").css({
      transform: "translate(" + xAxis + "%,-" + yAxis + "%)",
    });
  });

  return (
    <main>
      <section className={s.section}>
        {/* <div className={s.box}></div> */}
        <div className={s.boxGhost}>
          <div className={s.symbol}></div>
          <div className={s.symbol}></div>
          <div className={s.symbol}></div>
          <div className={s.symbol}></div>
          <div className={s.symbol}></div>
          <div className={s.symbol}></div>

          <div className={s.boxGhostContainer}>
            <div className={s.boxGhostEyes} id="boxGhostEyes">
              <div className={s.boxEyeLeft}></div>
              <div className={s.boxEyeRight}></div>
            </div>
            <div className={s.boxGhostBottom}>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
            </div>
          </div>
          <div className={s.boxGhostShadow}></div>
        </div>

        <div className={s.boxDescription}>
          <div className={s.boxDescriptionContainer}>
            <h2 className={s.boxDescriptionTitle}>Загубилися?</h2>
            <p className={s.boxDescriptionText}>Почніть з головної сторінки</p>
          </div>

          <Link to="/" className={s.boxButton}>
            Головна сторінка
          </Link>
        </div>
      </section>
      {isDesktop && <Navigation navClass="footer-navigation_desktop" />}
    </main>
  );
}

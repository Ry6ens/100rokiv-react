import { useMediaQuery } from "react-responsive";

import s from "./EventForm.module.scss";

import TitleH1 from "../TitleH1//TitleH1";

export default function EventForm() {
  const isMobile = useMediaQuery({ maxWidth: 767.98 });
  const isTabletDesktop = useMediaQuery({ minWidth: 768 });

  return (
    <form className={s.form}>
      <div className={s.ticketForm}>
        <div className={s.title}>
          <TitleH1 text="Чорнозем" />
          <p className={s.infoData}>10-го жовтня о 18:30</p>
        </div>

        {/* <div className={s.productAdd}>
          <label className={s.label}>
            <span className={s.textIntro}>Кількість</span>
            <input type="number" pattern="\d*" value="1" className={s.input} />
          </label>
        </div> */}
        <div className={s.priceSubmit}>
          <div className={s.overlayPrice}>
            <span className={s.textPrice}>2500</span>
            <span className={s.textPriceSymbol}>грн</span>
          </div>
          {isMobile && (
            <button className={s.btn} type="submit">
              Купити
            </button>
          )}
        </div>

        <div className={s.ticketOvalsFirst}></div>
        <div className={s.ticketOvalsSecond}></div>
      </div>

      {isTabletDesktop && (
        <button className={s.btn} type="submit">
          Купити
        </button>
      )}
    </form>
  );
}

import s from "./EventForm.module.scss";

export default function EventForm() {
  return (
    <form className={s.form}>
      <h1 className={s.title}>Чорнозем</h1>
      <p className={s.infoData}>10-го жовтня о 18:30</p>
      <div className={s.overlayPrice}>
        <span className={s.textPrice}>2500</span>
        <span className={s.textPriceSymbol}>грн</span>
      </div>
      <div className={s.productAdd}>
        <label className={s.label}>
          <span className={s.textIntro}>Кількість</span>
          <input type="number" pattern="\d*" value="1" className={s.input} />
        </label>
        <button className={s.btn} type="submit">
          Купити
        </button>
      </div>
    </form>
  );
}

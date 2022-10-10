// import { Link } from "react-router-dom";

import s from "./WhatsOnPage.module.scss";

// import ChornozemIMG from "../../images/events/chornozem.jpg";
// import ChornozemFBIMG from "../../images/events/chornozemFB.jpg";
// import chornozemSQIMG from "../../images/events/chornozemSQ.jpg";

export default function WhatsOnPage() {
  // const isMobileTablet = useMediaQuery({ maxWidth: 1023.98 });

  return (
    <section className={s.section}>
      <h1 className={s.title}>Майбутні події</h1>
      <p className={s.text}>
        Любий гостю нашого сайту, наразі ми не плануємо проводити Звану Вечерю
        чи Театр Їжі. Майбутню подію ми обов'язково анонсуємо на наших
        платформах — слідкуйте за оновленнями!
      </p>
      {/* {isMobileTablet && <img src={chornozemSQIMG} alt="" className={s.img} />}
      {isDesktop && <img src={ChornozemFBIMG} alt="cover" className={s.img} />}
      <div className={s.btnLink}>
        <Link to="/" className={s.btnBook}>
          Дізнатися більше
        </Link>
      </div> */}
    </section>
  );
}

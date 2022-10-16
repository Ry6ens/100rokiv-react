import s from "./EventPage.module.scss";
import { useMediaQuery } from "react-responsive";

import EventForm from "../../components/EventForm/EventForm";

import ChornozemFBIMG from "../../images/events/chornozemFB.jpg";
import chornozemSQIMG from "../../images/events/chornozemSQ.jpg";

export default function EventPage() {
  const isMobileTablet = useMediaQuery({ maxWidth: 1023.98 });
  const isDesktop = useMediaQuery({ minWidth: 1024 });

  const text =
    'Всі квитки на Звану Вечерю 6 жовтня — продано!\n \nЩасливі повідомити, що Євген Клопотенко проведе другу, додаткову, Вечерю "Чорнозем" — вже у понеділок, 10 жовтня.\n \nДо очікуваної зустрічі наш шеф приготує 7 страв з локальних продуктів, вирощених в родючій українській землі. Все, що росте у нашій землі, унікально смачне — в ній енергія наших людей, їхня любов, сила та чорнозем, подібного якому ніде немає.\n \nДоповнимо вечерю українським вином і коктейлем від Євгена.\n \nЧекаємо нашу теплу зустріч 10 жовтня о 18:30 год!';

  return (
    <main>
      {isMobileTablet && (
        <img src={chornozemSQIMG} alt="cover" className={s.img} />
      )}
      {isDesktop && <img src={ChornozemFBIMG} alt="cover" className={s.img} />}
      <p className={s.text}>{text}</p>
      <EventForm />
    </main>
  );
}

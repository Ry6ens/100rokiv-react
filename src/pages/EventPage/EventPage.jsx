import s from "./EventPage.module.scss";
import { useMediaQuery } from "react-responsive";

import EventForm from "../../components/EventForm/EventForm";
import TitleH1 from "../../components/TitleH1/TitleH1";
import Text from "../../components/Text/Text";

import ChornozemFBIMG from "../../images/events/chornozemFB.jpg";
import chornozemSQIMG from "../../images/events/chornozemSQ.jpg";

export default function EventPage() {
  const isMobileTablet = useMediaQuery({ maxWidth: 1023.98 });
  const isDesktop = useMediaQuery({ minWidth: 1024 });

  return (
    <main>
      <section className={s.section}>
        <img src={chornozemSQIMG} alt="cover" className={s.img} />
        <TitleH1 title="Чорнозем" />
        <Text
          textParag1="Всі квитки на Звану Вечерю 6 жовтня — продано!"
          textParag2="Щасливі повідомити, що Євген Клопотенко проведе другу, додаткову, Вечерю Чорнозем — вже у понеділок, 10 жовтня."
          textParag3="До очікуваної зустрічі наш шеф приготує 7 страв з локальних продуктів, вирощених в родючій українській землі. Все, що росте у нашій землі, унікально смачне — в ній енергія наших людей, їхня любов, сила та чорнозем, подібного якому ніде немає."
          textParag4="Доповнимо вечерю українським вином і коктейлем від Євгена."
          textParag5="Чекаємо нашу теплу зустріч 10 жовтня о 18:30 год!"
        />
      </section>

      <EventForm />
    </main>
  );
}

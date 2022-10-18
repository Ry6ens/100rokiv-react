// import { useMediaQuery } from "react-responsive";

import Section from "../../components/Section/Section";
// import Image from "../../components/Image/Image";
import EventForm from "../../components/EventForm/EventForm";
import Text from "../../components/Text/Text";

// import ChornozemFBIMG from "../../images/events/chornozemFB.jpg";
// import chornozemSQIMG from "../../images/events/chornozemSQ.jpg";

export default function EventPage() {
  // const isMobileTablet = useMediaQuery({ maxWidth: 1023.98 });
  // const isDesktop = useMediaQuery({ minWidth: 1024 });

  return (
    <>
      <Section>
        {/* {isMobileTablet && <Image src={chornozemSQIMG} alt="poster" />} */}
        {/* {isDesktop && <Image src={ChornozemFBIMG} alt="poster" />} */}
        <Text text="Всі квитки на Звану Вечерю 6 жовтня — продано!" />
        <Text text="Щасливі повідомити, що Євген Клопотенко проведе другу, додаткову, Вечерю Чорнозем — вже у понеділок, 10 жовтня." />
        <Text text="До очікуваної зустрічі наш шеф приготує 7 страв з локальних продуктів, вирощених в родючій українській землі. Все, що росте у нашій землі, унікально смачне — в ній енергія наших людей, їхня любов, сила та чорнозем, подібного якому ніде немає." />
        <Text text="Доповнимо вечерю українським вином і коктейлем від Євгена." />
        <Text text="Чекаємо нашу теплу зустріч 10 жовтня о 18:30 год!" />
      </Section>

      <Section>
        <EventForm />
      </Section>
    </>
  );
}

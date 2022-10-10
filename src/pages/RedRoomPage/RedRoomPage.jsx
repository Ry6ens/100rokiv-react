import RedRoomIMG from "../../images/redroom.jpeg";

import Title from "../../components/Title/Title";

import Gallery from "../../components/Gallery/Gallery";
import Menu from "../../components/Menu/Menu";

export default function RedRoomPage() {
  return (
    <main>
      <Title
        img={RedRoomIMG}
        title="Червона зала"
        textParag1="Магічний простір, де ми проводимо Театр їжі та зустрічаємо невеликі компанії, що прагнуть приватності."
        textParag2="Це чудове місце для невеликого, але дуже красивого весілля, дня народження або просто посиденьок компанії в теплій,
    камерній атмосфері."
      />
      <Menu />
      <Gallery />
    </main>
  );
}

import GroundIMG from "../../images/ground.jpeg";

import Title from "../../components/Title/Title";
import Gallery from "../../components/Gallery/Gallery";
import Menu from "../../components/Menu/Menu";

export default function GroundPage() {
  return (
    <main>
      <Title
        img={GroundIMG}
        title="Перший поверх"
        textParag1="Входячи, ви потрапляєте до затишної, оздобленої натуральним деревом зали."
        textParag2="Це найкраще місце для того, щоб насолодитися смаком України у великій компанії - друзів,
      родини або просто знайомих."
        textParag3="Тут, до речі, знаходиться наш бар, де народжуються авторські коктейлі - унікальні напої з
      місцевих інгредієнтів.<br> Уявіть, як це чудово - спостерігати за тим, як створюється саме ваш!"
      />
      <Menu />
      <Gallery />
    </main>
  );
}

import { useMediaQuery } from "react-responsive";

import AboveIMG from "../../images/above.jpeg";

import Title from "../../components/Title/Title";

import Navigation from "../../components/Navigation/Navigation";
import Gallery from "../../components/Gallery/Gallery";
import Menu from "../../components/Menu/Menu";

export default function AbovePage() {
  const isDesktop = useMediaQuery({ minWidth: 1024 });

  return (
    <main>
      <Title
        img={AboveIMG}
        title="Другий поверх"
        textParag1="Піднявшись сходами, ви опинитеся в просторій світлій залі з великими вікнами."
        textParag2="Це найкраще місце для того, щоб зранку повільно снідати в проміннях яскравого сонця, а ввечері - відчути Україну на
    смак, насолоджуючись атмосферою історичних вулиць Києва."
        textParag3="Декілька раз на місяць ми проводимо тут спеціальні заходи, які розширюють ваші уявлення про українську їжу. Розумієте,
    яку дивовижну енергетику мая ця зала."
      />
      <Menu />
      <Gallery />
      {isDesktop && <Navigation navClass="footer-navigation_desktop" />}
    </main>
  );
}

import { useMediaQuery } from "react-responsive";

import Title from "../../components/Title/Title";
import Navigation from "../../components/Navigation/Navigation";

import KlopotenkoIMG from "../../images/people/klopotenko.jpg";
import PopereshnukIMG from "../../images/people/popereshnuk.jpg";

import s from "./FoundersPage.module.scss";

export default function FoundersPage() {
  const isDesktop = useMediaQuery({ minWidth: 1024 });

  return (
    <section className={s.section}>
      <Title
        img={KlopotenkoIMG}
        imgClass="imgFounders"
        title="Євген Клопотенко"
        textClass="textFounders"
        textParag1="Ідея «100 років тому вперед» виникла задовго до відкриття ресторану.
Декілька років ми з командою мандрували Україною та вивчали історичні літописи та літературу в пошуках автентичних рецептів української кухні. Поринувши в цю роботу, я зрозумів, що українська кухня набагато глибша та різноманітніша, ніж ми звикли думати. Вона має шалену енергетику, величну історію та неймовірний потенціал для розвитку."
        textParag2="Один за одним ми віднайшли історичні рецептури та осучаснили їх, додавши нашого бачення."
        textParag3="Ба більше, для створення абсолютно всіх страв ми використовуємо виключно українські продукти та інгредієнти."
        textParag4="Завітайте до нашого ресторану, аби відчути усю велич української кухні та назавжди розпрощатися зі стереотипами."
        btnBook={false}
      />
      <Title
        img={PopereshnukIMG}
        imgClass="imgFounders"
        title="Інна Поперешнюк"
        textClass="textFounders"
        textParag1="100 років тому вперед — це команда сміливців, яка взяла на себе відповідальність показати гастрономічну Україну іншою і ще жодного разу не схибила у заданому векторі."
        textParag2="Ми — це кухня на основі стародавніх рецептів. Але світ такий, що й вічне змінюється: що вчора було сьогодні — стає історією завтра, тому щодня ми тримаємо баланс між прадавніми кулінарними знахідками та надсучасними вишуканими техніками."
        textParag3="Пишаюся з того, що завдяки нашому ресторану Україна та її візитівка у вигляді їжі звучить на увесь світ свіжо, модно, актуально і несе у собі збережений у рецептах національний код."
        textParag4="З любов'ю і без стереотипів."
        btnBook={false}
      />
      {isDesktop && <Navigation navClass="footer-navigation_desktop" />}
    </section>
  );
}

import { useSelector } from "react-redux";

import Title from "../../components/Title/Title";
import GiftVouchersForm from "../../components/GiftVouchersForm/GiftVouchersForm";
import Loader from "../../components/Loader/Loader";

import { getEmailLoading } from "../../redux/email/email-selectors";

// import s from "./GiftVouchersPage.module.scss";
import "./styles.scss";

function GiftVouchersPage() {
  const emailLoading = useSelector(getEmailLoading);

  return (
    <main>
      <Title
        // img={KlopotenkoIMG}
        containerClass="containerGiftVoucher"
        imgClass="none"
        title="Сертифікат"
        textClass="textFounders"
        textParag1="Ми дуже хочемо, аби ви мали нагоду подарувати новий гастрономічний досвід своїм близьким людям. З цією думкою ми зробили подарункові сертифікати на суми від 1 000 грн."
        textParag2="Щасливчик може завітати у наш ресторан протягом 6 місяців від дати придбання сертифікату. Зауважте, сертифікат не діє на замовлення страв і напоїв на доставку або купівлю квитків на наші події – Звану Вечерю чи Театр Їжі."
        textParag3="Радимо не друкувати електронний сертифікат – нам достатньо переглянути його на екрані смартфону."
        btnBook={false}
      />
      {emailLoading === true ? <Loader /> : <GiftVouchersForm />}
    </main>
  );
}

export default GiftVouchersPage;

import { useMediaQuery } from "react-responsive";
import { useForm, Controller } from "react-hook-form";
import ReactSelect from "react-select";
import PhoneInput, { isPossiblePhoneNumber } from "react-phone-number-input";
import { ErrorMessage } from "@hookform/error-message";
import { useDispatch } from "react-redux";

import Title from "../../components/Title/Title";
import Navigation from "../../components/Navigation/Navigation";
import { getGoogleSheetOperations } from "../../redux/googleAuth-operations";

import { ReactComponent as Warning } from "../../images/svg/warning.svg";

import s from "./GiftVouchersPage.module.scss";
import "./styles.css";

export default function GiftVouchersPage() {
  const dispatch = useDispatch();

  const isDesktop = useMediaQuery({ minWidth: 1024 });

  const {
    control,
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: "",
      tel: "",
      sum: "",
    },
  });

  const onSubmit = (data, e) => {
    e.preventDefault();
    console.log(data);
    dispatch(getGoogleSheetOperations(data));
    reset();
  };

  return (
    <>
      <Title
        // img={KlopotenkoIMG}
        // imgClass="imgFounders"
        title="Сертифікат"
        textClass="textFounders"
        textParag1="Ми дуже хочемо, аби ви мали нагоду подарувати новий гастрономічний досвід своїм близьким людям. З цією думкою ми зробили подарункові сертифікати на суми від 1 000 грн."
        textParag2="Щасливчик може завітати у наш ресторан протягом 6 місяців від дати придбання сертифікату. Зауважте, сертифікат не діє на замовлення страв і напоїв на доставку або купівлю квитків на наші події – Звану Вечерю чи Театр Їжі."
        textParag3="Радимо не друкувати електронний сертифікат – нам достатньо переглянути його на екрані смартфону."
        btnBook={false}
      />
      <form className={s.form} onSubmit={handleSubmit(onSubmit)}>
        <Controller
          name="sum"
          control={control}
          rules={{ required: "Обов'язкове поле" }}
          render={({ field }) => (
            <ReactSelect
              placeholder="Оберіть суму ..."
              isClearable
              {...field}
              options={[
                { value: "1000", label: "1000 грн" },
                { value: "1500", label: "1500 грн" },
                { value: "2000", label: "2000 грн" },
                { value: "2500", label: "2500 грн" },
                { value: "3000", label: "3000 грн" },
              ]}
            />
          )}
        />
        <ErrorMessage
          errors={errors}
          name="sum"
          render={({ message }) => (
            <div className={s.errorOverlay}>
              <Warning />
              <p className={s.errorMessage}>{message}</p>
            </div>
          )}
        />

        <label htmlFor="">
          <input
            className={s.input}
            {...register("name", {
              required: "Обов'язкове поле",
              pattern: {
                value: /[a-z]/gi,
                message: "Обов'язкове поле",
              },
            })}
            type="text"
            placeholder="Ім‘я та прізвище того, хто дарує"
            // pattern="[бвгґджзклмнпрстфхцчшщйаеєиіїоуюяь]"
            // title="4 to 8 lowercase letters"
          />
        </label>
        <ErrorMessage
          errors={errors}
          name="name"
          render={({ message }) => (
            <div className={s.errorOverlay}>
              <Warning />
              <p className={s.errorMessage}>{message}</p>
            </div>
          )}
        />

        <Controller
          control={control}
          name="tel"
          rules={{ required: "Обов'язкове поле" }}
          render={({ field: { onChange, value } }) => (
            <PhoneInput
              // className={s.input}
              value={value}
              placeholder="(99) 999-99-99"
              name={"query"}
              control={control}
              onChange={onChange}
              defaultCountry="UA"
              international
              error={value && isPossiblePhoneNumber(value) ? "true" : "false"}
            />
          )}
        />
        <ErrorMessage
          errors={errors}
          name="tel"
          render={({ message }) => (
            <div className={s.errorOverlay}>
              <Warning />
              <p className={s.errorMessage}>{message}</p>
            </div>
          )}
        />

        <button className={s.btn} type="submit">
          Подарувати
        </button>
      </form>
      {isDesktop && <Navigation navClass="footer-navigation_desktop" />}
    </>
  );
}

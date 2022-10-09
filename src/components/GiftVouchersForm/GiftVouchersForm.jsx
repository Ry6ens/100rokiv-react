import { useForm, Controller } from "react-hook-form";
import ReactSelect from "react-select";
import PhoneInput, { isPossiblePhoneNumber } from "react-phone-number-input";
import { ErrorMessage } from "@hookform/error-message";
import { useDispatch, useSelector } from "react-redux";
import moment from "moment";
import { useEffect } from "react";

import { getEmailOperations } from "../../redux/email/email-operations";
import { getSheetOperations } from "../../redux/google/sheet-operations";
import { getTelegramOperations } from "../../redux/telegram/telegram-operations";

import { getEmailSuccess } from "../../redux/email/email-selectors";
import { successFalse } from "../../redux/email/email-slice";

import { ReactComponent as Warning } from "../../images/svg/warning.svg";

import s from "./GiftVouchersForm.module.scss";

export default function GiftVouchersForm() {
  const dispatch = useDispatch();
  const emailSuccess = useSelector(getEmailSuccess);

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

  useEffect(() => {
    dispatch(successFalse(false));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onSubmit = (data, e) => {
    e.preventDefault();
    const date = moment(new Date()).format("DD-MM-yyyy, HH:mm");
    dispatch(getEmailOperations({ ...data, date }));
    dispatch(getSheetOperations({ ...data, date }));
    dispatch(getTelegramOperations({ ...data, date }));
    reset();
  };

  return (
    <section className={s.section}>
      {emailSuccess === true ? (
        <div className={s.successbox}>Дякуємо за замовлення</div>
      ) : (
        <form className={s.form} onSubmit={handleSubmit(onSubmit)}>
          <Controller
            name="sum"
            control={control}
            rules={{ required: "Обов'язкове поле" }}
            render={({ field: { onChange, value } }) => (
              <ReactSelect
                placeholder="Оберіть суму ..."
                isClearable
                onChange={onChange}
                value={value}
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
                  value: /[A-Za-z]|[бвгґджзклмнпрстфхцчшщйаеєиіїоуюяь]/,
                  message: "Обов'язкове поле",
                },
              })}
              type="text"
              placeholder="Ім‘я та прізвище того, хто дарує"
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
                maxLength="16"
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
      )}
    </section>
  );
}

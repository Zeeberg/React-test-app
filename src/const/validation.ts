import * as Yup from 'yup'


const validateSum = (value = "0") => {
  if (
    parseInt(value.replace(/\D+/g, "")) > 1000 ||
    parseInt(value.replace(/\D+/g, "")) < 1 ||
    parseInt(value.replace(/\D+/g, "")).toString() === "NaN"
  ) {
    return false;
  } else {
    return true;
  }
};

export const validate = Yup.object({
  phone: Yup.string()
    .matches(
      /^(\+7|7|8)?[\s-]?\(?[489][0-9]{2}\)?[\s-]?[0-9]{3}[\s-]?[0-9]{2}[\s-]?[0-9]{2}$/,
      "Введите корректный номер телефона"
    )
    .required('Обязательное поле!'),
  sum: Yup.string()
    .test("sum", 'Сумма должна быть от 1 ₽ до 1000 ₽' ,validateSum)
    .required('Обязательное поле!'),
})
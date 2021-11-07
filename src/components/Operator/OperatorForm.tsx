import { Form, Formik } from "formik";
import React from "react";
import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";
import { validate } from "../../const/validation";
import { FormImage, FormWrapper } from "../../styles/common";
import { IOperator, TypeVariant } from "../../types/types";
import { CommonButton } from "../UI/button/style";
import OperatorInput from "./OperatorInput";

interface FormValues {
  phone: string;
  sum: number;
}

const OperatorForm = ({ id, name, imageUrl }: IOperator) => {
  const initialValues: FormValues = { phone: "", sum: 1 };
  const history = useHistory();

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validate}
      onSubmit={(values, actions) => {
        const mockFetch = new Promise((resolve, reject) => {
          if (Math.random() > 0.5) {
            setTimeout(resolve, 2000);
          } else {
            setTimeout(() => {
              reject();
            }, 2000);
          }
          setTimeout(() => {
            history.push("/");
          }, 3000);
        });
        toast.promise(mockFetch, {
          pending: "Загрузка...",
          success: "Оплата прошла успешно",
          error: "Произошла ошибка",
        });
      }}
    >
      <FormWrapper>
        <Form>
          <OperatorInput
            label="Телефон"
            id="phone"
            name="phone"
            mask="+7(999)999-99-99"
          />
          <OperatorInput label="Сумма" id="sum" name="sum" mask="9999₽" />
          <CommonButton type={TypeVariant.SUBMIT}>Оплатить</CommonButton>
        </Form>

        <FormImage src={imageUrl} alt={name} />
      </FormWrapper>
    </Formik>
  );
};

export default OperatorForm;

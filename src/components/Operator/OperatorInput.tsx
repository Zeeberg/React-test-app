import { ErrorMessage, Field, FieldProps } from "formik";
import React from "react";
import { InputWrapper } from "./style";
import InputMask from "react-input-mask";

interface OperatorInputProps {
  label: string;
  id: string;
  name: string;
  placeholder?: string;
  mask?: string;
}

const OperatorInput = ({
  label,
  id,
  name,
  placeholder,
  mask = "",
}: OperatorInputProps) => {
  return (
    <InputWrapper>
      <label htmlFor={id}>{label}</label>
      <Field name={name}>
        {(props: FieldProps<string>) => {
          return (
            <InputMask
              {...props.field}
              id={id}
              placeholder={placeholder}
              mask={mask}
            />
          );
        }}
      </Field>
      <ErrorMessage name={name} />
    </InputWrapper>
  );
};

export default OperatorInput;

import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import {
  BackLinkWrapper,
  Container,
  PageContent,
  Title,
} from "../styles/common";
import { operators } from "../const/data";
import { IOperator } from "../types/types";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import OperatorForm from "../components/Operator/OperatorForm";

const PayIdPage = () => {
  const { id } = useParams<{ id: string }>();
  const [operator, setOperator] = useState<IOperator>({
    id: 0,
    name: "",
    imageUrl: "",
  });

  useEffect(() => {
    const operator = operators.filter((data) => data.id === +id)[0];

    setTimeout(() => {
      setOperator(operator);
    }, 500);
  }, [id]);

  return (
    <Container>
      <Title>{operator.name}</Title>
      <BackLinkWrapper>
        <Link to="/">Назад</Link>
      </BackLinkWrapper>
      <PageContent>
        {operator.id !== 0 ? (
          <OperatorForm
            id={operator.id}
            name={operator.name}
            imageUrl={operator.imageUrl}
          />
        ) : (
          <div>Загрузка...</div>
        )}
      </PageContent>
      <ToastContainer />
    </Container>
  );
};

export default PayIdPage;

import React from "react";
import { operators } from "../const/data";
import OperatorList from "../components/Operator/OperatorList";
import { Title, Container } from "../styles/common";

const Operators = () => {
  return (
    <Container>
      <Title>Способ оплаты</Title>
      <OperatorList operators={operators} />
    </Container>
  );
};

export default Operators;

import React from "react";
import { IOperator } from "../../types/types";
import OperatorItem from "./OperatorItem";
import { List, Wrapper } from "./style";

interface OperatorListProps {
  operators: IOperator[];
}

const OperatorList = ({ operators }: OperatorListProps) => {
  return (
    <Wrapper>
      <List>
        {operators.map((operator) => (
          <OperatorItem key={operator.id} operator={operator} />
        ))}
      </List>
    </Wrapper>
  );
};

export default OperatorList;

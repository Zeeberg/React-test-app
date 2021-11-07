import React from "react";
import { IOperator } from "../../types/types";
import { Item, Logo } from "./style";
import { useHistory } from "react-router-dom";

interface OperatorItemProps {
  operator: IOperator;
}

const OperatorItem = ({ operator }: OperatorItemProps) => {
  const history = useHistory();
  const handleClick = () => history.push(`/pay/${operator.id}`);

  return (
    <Item onClick={handleClick}>
      <Logo src={operator.imageUrl} alt={operator.name} />
    </Item>
  );
};

export default OperatorItem;

export interface IOperator {
  id: number;
  name: string;
  imageUrl: string;
}

export enum TypeVariant {
  SUBMIT = "submit",
  RESET = "reset",
  BUTTON = "button",
}
import { Minus, Plus } from "phosphor-react";
import { ButtonMinusAndPlus, InputChoiceQuantityCoffees } from "./styles";

export function AmountButtonCoffeeAdd() {
  return (
    <>
      <ButtonMinusAndPlus> <Minus size={32} weight="bold"/> </ButtonMinusAndPlus> <InputChoiceQuantityCoffees>2</InputChoiceQuantityCoffees>  <ButtonMinusAndPlus> <Plus size={32} weight="bold"/> </ButtonMinusAndPlus>
    </>
  )
}
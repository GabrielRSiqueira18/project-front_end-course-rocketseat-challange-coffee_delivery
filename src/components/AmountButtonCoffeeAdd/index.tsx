import { Minus, Plus } from "phosphor-react";
import { ButtonMinusAndPlus, InputChoiceQuantityCoffees } from "./styles";

export function AmountButtonCoffeeAdd() {
  return (
    <>
      <ButtonMinusAndPlus> <Minus size={32} weight="bold"/> </ButtonMinusAndPlus> <InputChoiceQuantityCoffees step={1} max={99} min={1} type="number" />  <ButtonMinusAndPlus> <Plus size={32} weight="bold"/> </ButtonMinusAndPlus>
    </>
  )
}
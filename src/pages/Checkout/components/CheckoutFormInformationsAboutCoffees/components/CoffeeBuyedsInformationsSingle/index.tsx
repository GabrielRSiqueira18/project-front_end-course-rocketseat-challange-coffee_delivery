import { convertValueToCorrect } from "../../../../../Home";
import { CoffeeButtonQuantityBuyed, CoffeeButtonRemoveBuyed, CoffeeBuyedsInformationsSingleContainer, CoffeeInformationsWithoutPrice, CoffeeInformationsWithoutPriceWrapper, PriceCoffee } from "./styles";
import { Minus, Plus, Trash } from "phosphor-react";

interface CoffeeBuyedsInformationsSingle {
  name: string
  img: string
  value: number
  quantityBuyed: number
}

export function CoffeeBuyedsInformationsSingle({ name, img, value, quantityBuyed }: CoffeeBuyedsInformationsSingle) {
  const correctValue = convertValueToCorrect(value)

  return(
    <CoffeeBuyedsInformationsSingleContainer>
      <CoffeeInformationsWithoutPrice>
        <img src={ img } alt="" />
        <CoffeeInformationsWithoutPriceWrapper>
          <h2>{name}</h2>
          <div>
            <CoffeeButtonQuantityBuyed> <Minus size={12} weight="bold"/> {quantityBuyed} <Plus size={12} weight="bold"/> </CoffeeButtonQuantityBuyed>
            <CoffeeButtonRemoveBuyed> <Trash size={16}/> <span>remover</span> </CoffeeButtonRemoveBuyed>
          </div>
          
        </CoffeeInformationsWithoutPriceWrapper>
        <PriceCoffee>R$ {correctValue}</PriceCoffee>
      </CoffeeInformationsWithoutPrice>
      
    </CoffeeBuyedsInformationsSingleContainer>
  )

  //<ButtonMinusAndPlus> <Minus size={32} weight="bold"/> </ButtonMinusAndPlus> <InputChoiceQuantityCoffees>2</InputChoiceQuantityCoffees>  <ButtonMinusAndPlus> <Plus size={32} weight="bold"/> </ButtonMinusAndPlus>
} 
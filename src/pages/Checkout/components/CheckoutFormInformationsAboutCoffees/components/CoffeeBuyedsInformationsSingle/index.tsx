import { CoffeeBuyedInformationsMain, CoffeeBuyedInformationsWrapper, CoffeeBuyedsInformationsSingleContainer, RemoveButton } from "./styles";
import coffeeImg from "../../../../../../assets/coffee1.svg"
import { AmountButtonCoffeeAdd } from "../../../../../../components/AmountButtonCoffeeAdd";
import { Trash } from "phosphor-react";


export function CoffeeBuyedsInformationsSingle() {
  return(
    <CoffeeBuyedsInformationsSingleContainer>
      <CoffeeBuyedInformationsWrapper>
        <img src={coffeeImg} alt="" />
        <CoffeeBuyedInformationsMain>
          <h2>Expresso Tradicional</h2>
          <div>
            <AmountButtonCoffeeAdd/>
            <RemoveButton> <Trash color="#8047F8" /> Remover</RemoveButton>
          </div>
        </CoffeeBuyedInformationsMain>
      </CoffeeBuyedInformationsWrapper>
      <h2>9,90</h2>
    </CoffeeBuyedsInformationsSingleContainer>
  )
} 
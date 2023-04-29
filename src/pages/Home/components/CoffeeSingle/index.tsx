import { AmountButtonCoffee, ButtonMinusAndPlus, ButtonToBuyCoffee, BuyAndPriceCoffeeContainer, CoffeeImgWrapper, CoffeeSingleContainer, InformationsAboutCoffeeContainer } from "./styles";
import coffee1 from "../../../../assets/coffee1.svg"
import { Minus, Plus, ShoppingCartSimple } from "phosphor-react";

export function CoffeeSingle() {
  return(
    <CoffeeSingleContainer>
      <CoffeeImgWrapper>
        <img src={coffee1} alt="" />
        <div>
          <p>tradicional</p>
          <p>gelado</p>
        </div>
      </CoffeeImgWrapper>

      <InformationsAboutCoffeeContainer>
        <h2>Expresso Tradicional</h2>
        <p>O tradicional café feito com água quente e grãos moídos</p>
      </InformationsAboutCoffeeContainer>

      <BuyAndPriceCoffeeContainer>
        <h2><span>R$</span>9,90</h2>

        <div>
          <AmountButtonCoffee> <ButtonMinusAndPlus> <Minus size={32} weight="bold"/> </ButtonMinusAndPlus> 1  <ButtonMinusAndPlus> <Plus size={32} weight="bold"/> </ButtonMinusAndPlus> </AmountButtonCoffee>
          <ButtonToBuyCoffee> <ShoppingCartSimple weight="fill" size={22}/> </ButtonToBuyCoffee>
        </div>
      </BuyAndPriceCoffeeContainer>

    </CoffeeSingleContainer>
  )
}
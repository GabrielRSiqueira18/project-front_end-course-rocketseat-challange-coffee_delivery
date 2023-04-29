import { AmountButtonCoffee, ButtonToBuyCoffee, BuyAndPriceCoffeeContainer, CoffeeImgWrapper, CoffeeSingleContainer, InformationsAboutCoffeeContainer } from "./styles";
import coffee1 from "../../../../assets/coffee1.svg"
import { ShoppingCartSimple } from "phosphor-react";
import { AmountButtonCoffeeAdd } from "../../../../components/AmountButtonCoffeeAdd";

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

        <form>
          <AmountButtonCoffee> <AmountButtonCoffeeAdd /> </AmountButtonCoffee>
          <ButtonToBuyCoffee> <ShoppingCartSimple color="#FFFFFF" weight="fill" size={22}/> </ButtonToBuyCoffee>
        </form>
      </BuyAndPriceCoffeeContainer>

    </CoffeeSingleContainer>
  )
}
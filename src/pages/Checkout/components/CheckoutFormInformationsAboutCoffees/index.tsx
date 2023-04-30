import { useContext } from "react";
import { CheckoutFormInformationsAboutCoffeesContainer, CheckoutFormInformationsAboutCoffeesWrapper, CheckoutFormInformationsContainerToPutScrollBar as CheckoutFormInformationsContainerToPutScrollBar, CoffeeButtonQuantityBuyed, CoffeeButtonRemoveBuyed, CoffeeBuyedsInformationsSingleContainer, CoffeeInformationsWithoutPrice, CoffeeInformationsWithoutPriceWrapper, PriceCoffee, TitleCheckoutInformations } from "./styles";
import { CoffeesContexts } from "../../../../contexts/CoffeesContexts";
import { Minus, Plus, Trash } from "phosphor-react";
import { convertValueToCorrect } from "../../../Home";

export function CheckoutFormInformationsAboutCoffees() {
  const { coffeesBuyeds, incrementOneCoffeeBuyed, decrementOneCoffeeBuyed, removeCoffeeInWallet } = useContext(CoffeesContexts)

   return(
    <CheckoutFormInformationsAboutCoffeesContainer>
      <TitleCheckoutInformations>Cafés selecionados</TitleCheckoutInformations>

      <CheckoutFormInformationsAboutCoffeesWrapper>
        <CheckoutFormInformationsContainerToPutScrollBar>
          { coffeesBuyeds.map(coffee => {
            const correctValue = convertValueToCorrect(coffee.value)

            return(
              <CoffeeBuyedsInformationsSingleContainer key={coffee.id}>
                <CoffeeInformationsWithoutPrice>
                  <img src={ coffee.img } alt="" />
                  <CoffeeInformationsWithoutPriceWrapper>
                    <h2>{coffee.name}</h2>
                    <div>
                      <CoffeeButtonQuantityBuyed>
                        <Minus
                          onClick={() => decrementOneCoffeeBuyed(coffee.id)}  
                          size={12}
                          weight="bold"
                        /> 
                        {coffee.quantityBuyed} 
                        <Plus
                          onClick={() => incrementOneCoffeeBuyed(coffee.id)}  
                          size={12} 
                          weight="bold"
                        /> 
                      </CoffeeButtonQuantityBuyed>
                      <CoffeeButtonRemoveBuyed onClick={() => removeCoffeeInWallet(coffee.id)}>
                          <Trash 
                            size={16}
                          /> 
                          <span>remover</span>
                        </CoffeeButtonRemoveBuyed>
                    </div>
                    
                  </CoffeeInformationsWithoutPriceWrapper>
                  <PriceCoffee>R$ {correctValue}</PriceCoffee>
                </CoffeeInformationsWithoutPrice>
      
               </CoffeeBuyedsInformationsSingleContainer>
            )
          }) }
        </CheckoutFormInformationsContainerToPutScrollBar>
        s
      </CheckoutFormInformationsAboutCoffeesWrapper>
    </CheckoutFormInformationsAboutCoffeesContainer>
  )
}
/*
  Tirar border color #000000 no CheckoutFormInformationsAboutCoffeesWrapper quando tiver selecionado o cartao!!!
  LEMBRAR
*/
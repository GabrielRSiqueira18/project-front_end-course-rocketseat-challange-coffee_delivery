import { useContext } from "react";
import { CoffeeBuyedsInformationsSingle } from "./components/CoffeeBuyedsInformationsSingle";
import { CheckoutFormInformationsAboutCoffeesContainer, CheckoutFormInformationsAboutCoffeesWrapper, CheckoutFormInformationsContainerToPutScrollBar as CheckoutFormInformationsContainerToPutScrollBar, TitleCheckoutInformations } from "./styles";
import { CoffeesContexts } from "../../../../contexts/CoffeesContexts";

export function CheckoutFormInformationsAboutCoffees() {
  const { coffeesBuyeds } = useContext(CoffeesContexts)

  return(
    <CheckoutFormInformationsAboutCoffeesContainer>
      <TitleCheckoutInformations>Cafés selecionados</TitleCheckoutInformations>

      <CheckoutFormInformationsAboutCoffeesWrapper>
        <CheckoutFormInformationsContainerToPutScrollBar>
          { coffeesBuyeds.map(coffee => {
            return(
              <CoffeeBuyedsInformationsSingle
                key={coffee.id}
                img={coffee.img}
                name={coffee.name}
                quantityBuyed={coffee.quantityBuyed}
                value={coffee.value}
              />
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
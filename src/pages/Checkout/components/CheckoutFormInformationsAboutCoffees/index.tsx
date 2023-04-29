import { CoffeeBuyedsInformationsSingle } from "./components/CoffeeBuyedsInformationsSingle";
import { CheckoutFormInformationsAboutCoffeesContainer, CheckoutFormInformationsAboutCoffeesWrapper, TitleCheckoutInformations } from "./styles";

export function CheckoutFormInformationsAboutCoffees() {
  return(
    <CheckoutFormInformationsAboutCoffeesContainer>
      <TitleCheckoutInformations>Cafés selecionados</TitleCheckoutInformations>

      <CheckoutFormInformationsAboutCoffeesWrapper>
        <CoffeeBuyedsInformationsSingle />
      </CheckoutFormInformationsAboutCoffeesWrapper>
    </CheckoutFormInformationsAboutCoffeesContainer>
  )
}
/*
  Tirar border color #000000 no CheckoutFormInformationsAboutCoffeesWrapper quando tiver selecionado o cartao!!!
  LEMBRAR
*/
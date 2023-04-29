import { CheckoutFormInformationsAboutCoffees } from "./components/CheckoutFormInformationsAboutCoffees";
import { CheckoutFormToFinishPurchase } from "./components/CheckoutFormToFinishPurchase";
import { CheckoutContainer, CheckoutWrapper } from "./styles";

export function Checkout() {
  return(
    <CheckoutContainer>
      <CheckoutWrapper>
        <CheckoutFormToFinishPurchase />
        <CheckoutFormInformationsAboutCoffees />
      </CheckoutWrapper>
    </CheckoutContainer>
  )
}
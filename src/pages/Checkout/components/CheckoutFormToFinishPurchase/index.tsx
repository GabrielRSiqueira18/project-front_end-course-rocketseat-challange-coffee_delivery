import { Bank, CreditCard, CurrencyDollar, MapPin, Money } from "phosphor-react";
import { TitleCheckoutInformations } from "../CheckoutFormInformationsAboutCoffees/styles";
import {  ButtonMethodPayment, ButtonsMethodsPaymentsToFinishPurchase, CepInputCheckout, CheckoutFormToFinishPurchaseContainer, CheckoutFormToFinishPurchaseWrapper, CityInputCheckout, FormCheckoutContainer, FormCheckoutTitleAddress, HouseComplementInputCheckout, InputCheckoutWrapper, NeighborhoodInputCheckout, NumberHouseInputCheckout, PaymentToFinishPurchase, StreetInputCheckout, UFInputCheckout } from "./styles";
import { useContext } from "react";
import { CoffeesContexts } from "../../../../contexts/CoffeesContexts";
export function CheckoutFormToFinishPurchase() {
  
  const {  buttonsPayments, handleButtonIsActive } = useContext(CoffeesContexts)
  
  return (
    <CheckoutFormToFinishPurchaseContainer>
      <TitleCheckoutInformations>Complete seu pedido</TitleCheckoutInformations>
      <CheckoutFormToFinishPurchaseWrapper>
        <FormCheckoutContainer>
          <FormCheckoutTitleAddress>
            <MapPin color={"#C47F17"} size={22}/>
            <div>
              <h4>Endereço de Entrega</h4>
              <p>Informe o endereço onde deseja receber seu pedido</p>
            </div>
          </FormCheckoutTitleAddress>
          
          <InputCheckoutWrapper> 
            <CepInputCheckout type="text" placeholder="CEP"/>
            <StreetInputCheckout type="text" placeholder="Rua" />
            <NumberHouseInputCheckout type="text" placeholder="Número" />
            <HouseComplementInputCheckout type="text" placeholder="Complemento" />
            <NeighborhoodInputCheckout type="text" placeholder="Bairro" />
            <CityInputCheckout type="text" placeholder="Rua" />
            <UFInputCheckout type="text" placeholder="Rua" />
          </InputCheckoutWrapper>
        </FormCheckoutContainer>
      </CheckoutFormToFinishPurchaseWrapper>
      <PaymentToFinishPurchase>
        <FormCheckoutTitleAddress>
            <CurrencyDollar color={"#8047F8"} size={22}/>
            <div>
              <h4>Pagamento </h4>
              <p>O pagamento é feito na entrega. Escolha a forma que deseja pagar</p>
            </div>
          </FormCheckoutTitleAddress>
          <ButtonsMethodsPaymentsToFinishPurchase>
            { buttonsPayments.map((button, index) => {
              if(index === 0) {
                return (
                  <ButtonMethodPayment
                    key={button.id}
                    onClick={() => handleButtonIsActive(index)}
                    data-value={button.type}
                    isActive={button.isActive}
                  >
                    <CreditCard color="#8047F8" size={16} />
                    { button.type }
                  </ButtonMethodPayment>
                )
              } 
              
              else if(index === 1) {
                return (
                  <ButtonMethodPayment
                    key={button.id}
                    onClick={() => handleButtonIsActive(index)}
                    data-value={button.type}
                    isActive={button.isActive}
                  >
                    <Bank color="#8047F8" size={16} />
                    { button.type }
                  </ButtonMethodPayment>
                )
              } 
              
              else if(index === 2) {
                return (
                  <ButtonMethodPayment
                    key={button.id}
                    onClick={() => handleButtonIsActive(index)}
                    data-value={button.type}
                    isActive={button.isActive}
                  >
                    <Money color="#8047F8" size={16} />
                    { button.type }
                  </ButtonMethodPayment>
                )
              }
            }) }    
          </ButtonsMethodsPaymentsToFinishPurchase>
      </PaymentToFinishPurchase>
    </CheckoutFormToFinishPurchaseContainer>

    
  )
}

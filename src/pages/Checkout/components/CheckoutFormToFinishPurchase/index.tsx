import { Bank, CreditCard, CurrencyDollar, MapPinLine, Money } from "phosphor-react";
import { AddressTitleForm, ButtonPayments, CheckoutFormContainer, CheckoutFormToFinishPurchaseWrapper, CheckoutPaymentContainer, CityInformationsInputsWrapper, ComplementInputContainer, FormContainerCardAndres, FormContainerPayments, FormWrapper, HouseNumberAndComplementInputsWrapper, InputCep, InputCity, InputHouseComplement, InputHouseNumber, InputNeighborhood, InputStreet, InputUF, TitleCheckoutForm, TitleCheckoutFormContainerWrapper } from "./styles";

export function CheckoutFormToFinishPurchase() {

  return (
    <CheckoutFormToFinishPurchaseWrapper>
      <TitleCheckoutForm>Complete seu pedido</TitleCheckoutForm>
      <CheckoutFormContainer>
        <TitleCheckoutFormContainerWrapper>
          <section>
            <MapPinLine color="#C47F17" size={22}/>
          </section>
          <FormWrapper>
            <AddressTitleForm>
              <h2>Endereço de Entrega</h2>
              <p>Informe o endereço onde deseja receber seu pedido</p>
            </AddressTitleForm>

            <FormContainerCardAndres >
              <InputCep placeholder="Cep" />
              <InputStreet placeholder="Rua" />
              <HouseNumberAndComplementInputsWrapper>
                <InputHouseNumber placeholder="Número" />
                <ComplementInputContainer>
                  <InputHouseComplement id="houseComplement" placeholder="Complemento" />
                  <label htmlFor="houseComplement">Opcional</label>
                </ComplementInputContainer>
                
              </HouseNumberAndComplementInputsWrapper>
              <CityInformationsInputsWrapper>
                <InputNeighborhood placeholder="Bairro" />
                <InputCity placeholder="Cidade" />
                <InputUF placeholder="UF" />
              </CityInformationsInputsWrapper>
            </FormContainerCardAndres>
          </FormWrapper>
        </TitleCheckoutFormContainerWrapper>
      </CheckoutFormContainer>
      <CheckoutPaymentContainer>
        <TitleCheckoutFormContainerWrapper>
            <section>
              <CurrencyDollar weight="regular" color="#8047F8" size={22}/>
            </section>
            <FormWrapper>
              <AddressTitleForm>
                <h2>Pagamento</h2>
                <p>O pagamento é feito na entrega. Escolha a forma que deseja pagar</p>
              </AddressTitleForm>

              <FormContainerPayments >
                <ButtonPayments> <CreditCard color="#8047F8" size={16} /> Cartão de crédito </ButtonPayments>
                <ButtonPayments> <Bank color="#8047F8" size={16} /> Cartão de débito </ButtonPayments>
                <ButtonPayments> <Money color="#8047F8" size={16} /> Dinheiro </ButtonPayments>
              </FormContainerPayments>
            </FormWrapper>
          </TitleCheckoutFormContainerWrapper>
      </CheckoutPaymentContainer>
    </CheckoutFormToFinishPurchaseWrapper>

    
  )
}
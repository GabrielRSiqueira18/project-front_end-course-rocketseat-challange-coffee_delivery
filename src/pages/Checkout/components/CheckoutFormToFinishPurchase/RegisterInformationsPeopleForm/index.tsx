import { InputCheckoutWrapper, CepInputCheckout, StreetInputCheckout, NumberHouseInputCheckout, HouseComplementInputCheckout, NeighborhoodInputCheckout, CityInputCheckout, UFInputCheckout } from "./styles";

export function RegisterInformationsPeopleForm() {
  return(
    <InputCheckoutWrapper> 
      <CepInputCheckout type="text" placeholder="CEP"/>
      <StreetInputCheckout type="text" placeholder="Rua" />
      <NumberHouseInputCheckout type="text" placeholder="Número" />
      <HouseComplementInputCheckout type="text" placeholder="Complemento" />
      <NeighborhoodInputCheckout type="text" placeholder="Bairro" />
      <CityInputCheckout type="text" placeholder="Rua" />
      <UFInputCheckout type="text" placeholder="Rua" />
    </InputCheckoutWrapper>
  )
}
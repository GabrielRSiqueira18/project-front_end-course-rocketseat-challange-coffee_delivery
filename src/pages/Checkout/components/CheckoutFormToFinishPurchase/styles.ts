import styled from "styled-components";

export const CheckoutFormToFinishPurchaseContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.9375rem;
  flex: 1;
  @media screen and (max-width: 1280px) {
    width: 100%;
    padding: 0 2%;
    flex: initial;
  }
`

export const CheckoutFormToFinishPurchaseWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;

  height: 26.5625rem;
  padding: 2.5rem;
  
  background-color: ${props => props.theme["base-card"]};
  
  @media screen and (max-width: 1280px) {
    flex: 1;
  }
`

export const FormCheckoutContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  height: 18.375rem ;
  
  @media screen and (max-width: 768px) {
    flex: 1;
  }
`

export const FormCheckoutTitleAddress = styled.div`
  width: 100%;
  height: 2.875rem;
  display: flex;
  gap: 0.75rem;
  font-family: 'Roboto';
  line-height: 1.3;
  

  div {
    display: flex;
    flex-direction: column;
    gap: 0.125rem;

    h4 {
      font-size: 1rem;
      color: ${props => props.theme["base-subtitle"]};
    }

    p {
      font-size: 0.875rem;
    }
  }
`

export const InputCheckoutWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 0.75rem 1rem;

  grid-template-areas: 
    "cepInput . ."
    "streetInput streetInput streetInput"
    "numberHouseInput houseComplementInput houseComplementInput"
    "neighborhoodInput cityInput ufInput";

  @media screen and (max-width:768px) {
    display: flex;
    flex-direction: column;
  }
`

export const BaseInputCheckout = styled.input`
  background-color: ${props => props.theme["base-button"]};
  padding: 0.75rem;
  border: 1px solid ${props => props.theme["base-input"]};
  height: 3rem;
  border-radius: 4px;
  width: 100%;

  font-size: 0.875rem;
  line-height: 1.3;
  font-family: "Roboto";

  &:focus {
    outline: 0;
    border-color: ${props => props.theme["yellow-dark"]};
  }

  &::placeholder {
    color: ${props => props.theme["base-label"]};
  }
`;

export const CepInputCheckout = styled(BaseInputCheckout)`
  grid-area: cepInput;
`;

export const StreetInputCheckout = styled(BaseInputCheckout)`
  grid-area: streetInput;
`;

export const NumberHouseInputCheckout = styled(BaseInputCheckout)`
  grid-area: numberHouseInput;
`;

export const HouseComplementInputCheckout = styled(BaseInputCheckout)`
  grid-area: houseComplementInput;
`;

export const NeighborhoodInputCheckout = styled(BaseInputCheckout)`
  grid-area: neighborhoodInput;
`;

export const CityInputCheckout = styled(BaseInputCheckout)`
  grid-area: cityInput;
`;

export const UFInputCheckout = styled(BaseInputCheckout)`
  grid-area: ufInput;
`;

export const PaymentToFinishPurchase = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding: 2.5rem;
  height: 13rem;

  background-color: ${props => props.theme["base-card"]};

  height: auto;
`

export const ButtonsMethodsPaymentsToFinishPurchase = styled.div`
  display: flex;
  gap: 0.875rem;
  width: 100%;
  flex-wrap: wrap;
`

interface ButtonMethodPaymentProps {
  isActive: boolean;
}

export const ButtonMethodPayment = styled.button<ButtonMethodPaymentProps>`
  padding: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.875rem;

  width: calc(33% - 0.75rem);
  height: 3.1875rem;

  background-color: ${props => props.isActive ? props.theme["purple-light"] : props.theme["base-button"]};

  font-size: 0.75rem;
  line-height: 1.3;

  border: 1px solid ${props => props.isActive ? props.theme["purple-dark"] : 'transparent'};
  border-radius: 6px;
  cursor: ${props => props.isActive ? 'default' : 'pointer'};
  
  text-transform: uppercase;

  &:hover {
    transition: 0.2s;
    background-color: ${props => props.isActive ? props.theme["purple-light"] : props.theme["base-hover"]};
  }

  @media screen and (max-width: 768px) {
    width: calc(50%);
    min-width: 10rem;
  }
`

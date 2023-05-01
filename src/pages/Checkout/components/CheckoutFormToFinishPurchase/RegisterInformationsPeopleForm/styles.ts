import styled from "styled-components";

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
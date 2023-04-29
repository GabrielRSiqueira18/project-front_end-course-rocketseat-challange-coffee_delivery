import styled from "styled-components";

const BaseCardFormContainer = styled.div`
  padding: 2.5rem;
  width: 40rem;
  border-radius: 6px;
`

export const CheckoutFormToFinishPurchaseWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.9375rem;
`

export const TitleCheckoutForm = styled.h2`
  color: ${props => props.theme["base-subtitle"]};
  font-size: 1.125rem;
  font-weight: 700;
  font-family: 'Baloo 2';
  line-height: 1.4625rem;
`

export const CheckoutFormContainer = styled(BaseCardFormContainer)`
  height: 23.25rem;
  background-color: ${props => props.theme["base-card"]};
  
`

export const TitleCheckoutFormContainerWrapper = styled.div`
  max-width: 35rem;
  width: 100%;
  height: 2.75rem;
  display: flex;
  gap: 0.5rem;
  margin-bottom: 0.75rem;
  

  section {
    height: 100%;
    position: relative;
    bottom: 4px;

    svg {
      position: relative;
      top: 4px;
    }
  }
`

export const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`

export const AddressTitleForm = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.125rem;
  font-family: 'Roboto';
  font-weight: 400;
  line-height: 1.3;
  
  h2 {
    height: 1.3125rem;
    font-size: 1rem;
    color: ${props => props.theme["base-subtitle"]};
  }
  
  p {
    height: 1.3125rem;
    font-size: 0.875rem;
    color: ${props => props.theme["base-text"]};
  }
`

export const ComplementInputContainer = styled.div`
  display: flex;

  label {
    position: absolute;
    right: 0;
    transform: translate(-11px, 12.5px);
    font-style: italic;
    font-size: 0.75rem;
    line-height: 0.975rem;
    color: ${props => props.theme["base-label"]};
    font-family: 'Roboto';
    user-select: none;
  }
`

const BaseInputForm = styled.input`
  background-color: ${props => props.theme["base-input"]};
  border: 1px solid ${props => props.theme["base-button"]};
  padding: 0.75rem;
  height: 2.625rem;
  border-radius: 4px;

  font-family: 'Roboto';
  font-weight: 400;
  font-size: 0.875rem;
  line-height: 1.3;
  color: ${props => props.theme["base-text"]};

  &:focus {
    outline: none;
    border-color: ${props => props.theme["yellow-dark"]};
  }

  &::placeholder {
    color: ${props => props.theme["base-label"]};
  }
`

export const HouseNumberAndComplementInputsWrapper = styled.div`
  display: flex;
  gap: 0.75rem;
`

export const CityInformationsInputsWrapper = styled.div`
  display: flex;
  gap: 0.75rem;
`

export const InputCep = styled(BaseInputForm)`
  width: 12.5rem;
`

export const InputStreet = styled(BaseInputForm)`
  width: 100%;
`

export const InputHouseNumber = styled(BaseInputForm)`
  width: 12.5rem;
`

export const InputHouseComplement = styled(BaseInputForm)`
  width: 21.75rem;
`

export const InputNeighborhood = styled(BaseInputForm)`
  width: 12.5rem;
`

export const InputCity = styled(BaseInputForm)`
  width: 17.25rem;
`

export const InputUF = styled(BaseInputForm)`
  width: 3.75rem;
`

export const CheckoutPaymentContainer = styled(BaseCardFormContainer)`
  width: 40rem;
  height: 12.9375rem;
  padding: 2.5rem;
  border-radius: 6px;

  background-color: ${props => props.theme["base-card"]};
`

const BaseFormContainer = styled.form`
  width: 100%;
  max-width: 35rem;
  display: flex;
`

export const FormContainerCardAndres = styled(BaseFormContainer)`
  right: 2rem;
  position: relative;
  height: 13.5rem;

  flex-direction: column;
  gap: 1rem;
`

export const FormContainerPayments = styled(BaseFormContainer)`
  position: relative;
  right: 1.75rem;
  gap: 0.75rem;
  height: 3.1875rem;
`

export const ButtonPayments = styled.button`
  background-color: ${props => props.theme["base-button"]};
  padding: 1rem;

  border-radius: 6px;

  display: flex;
  gap: 0.75rem;
  justify-content: center;
  align-items: center;

  color: ${props => props.theme["base-text"]};

  text-transform: uppercase;

  border: 0;

  cursor: pointer;

  font-size: 0.75rem;
  font-family: 'Roboto';
  line-height: 160%;
  font-weight: 400;

  width: 11.166875rem;

  &:hover {
    transition: 0.2s;
    background-color: ${props => props.theme["base-hover"]};
  }

`
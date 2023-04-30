import styled from "styled-components";

export const CheckoutFormInformationsAboutCoffeesContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.9375rem;
`

export const TitleCheckoutInformations = styled.h1`
  font-family: 'Baloo 2';
  font-weight: 700;
  font-size: 1.125rem;
  line-height: 1.3;
  color: ${props => props.theme["base-subtitle"]};
`

export const CheckoutFormInformationsAboutCoffeesWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;

  padding: 2.5rem;
  width: 28rem;
  height: 31.125rem;

  border-radius: 6px 44px;
  border: 1px solid #000000;
  background-color: ${props => props.theme["base-card"]};

  

  

`

export const CheckoutFormInformationsContainerToPutScrollBar = styled.div`
  height: 28rem;

  overflow: auto;
  overflow-x: hidden;

  &::-webkit-scrollbar {
    width: 8px; 
  }
  &::-webkit-scrollbar-thumb {
    background-color: ${props => props.theme["purple"]}; 
    border-radius: 6px; 
  }

  &::-webkit-scrollbar-thumb:hover {
    background-color: ${props => props.theme["purple-dark"]}; 
  }
`
import styled from "styled-components";

export const CheckoutFormInformationsAboutCoffeesContainer = styled.div`
  margin-right: 2rem;
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

interface CheckoutFormInformationsAboutCoffeesWrapper {
  isActiveButton: boolean;
}

export const CheckoutFormInformationsAboutCoffeesWrapper = styled.div<CheckoutFormInformationsAboutCoffeesWrapper>`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  padding: 2.5rem;
  width: 28rem;
  height: 31.125rem;

  border-radius: 6px 44px;
  border: ${props => props.isActiveButton ? "1px solid transparent" : "1px solid #000000"};
  background-color: ${props => props.theme["base-card"]};
`

export const CheckoutFormInformationsContainerToPutScrollBar = styled.div`
  height: auto;

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

export const CoffeeBuyedsInformationsSingleContainer = styled.div`
  display: flex;
  gap: 3.125rem;

  width: 23rem;
  height: 5rem;

  padding: 0.5rem 0.25rem;
  padding-bottom: 6rem;

  border-bottom: 1px solid ${props => props.theme['base-button']};

`

export const CoffeeInformationsWithoutPrice = styled.div`
  display: flex;
  gap: 1.25rem;
  justify-content: center;

  img {
    width: 4rem;
    height: 4rem;
  }
`

export const CoffeeInformationsWithoutPriceWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  h2 {
    color: ${props => props.theme["base-subtitle"]};

    font-family: 'Roboto';
    font-weight: 400;
    font-size: 1rem;
    line-height: 1.3;
  }

  div {
    display: flex;
    gap: 0.5rem;
  }
`

const BaseButtonCoffee = styled.span`
  border: 0;
  user-select: none;
  display: flex;
  height: 2rem;
  justify-content: center;
  align-items: center;

  background-color: ${props => props.theme["base-button"]};
  border-radius: 6px;
`

export const CoffeeButtonQuantityBuyed = styled(BaseButtonCoffee)`
  width: 4.5rem;
  padding: 0.5rem;
  gap: 0.5rem;

  svg {
    color: ${props => props.theme["purple"]};
    cursor: pointer;
    &:hover {
      color: ${props => props.theme["purple-dark"]};
    }
  }
`

export const CoffeeButtonRemoveBuyed = styled(BaseButtonCoffee)`
  width: 5.6875rem;
  padding: 0px 8px;
  gap: 0.25rem;
  cursor: pointer;
  
  span {
    font-family: 'Roboto';
    font-weight: 400;
    font-size: 0.75rem;
    text-transform: uppercase;
    line-height: 1.6;
    color: ${props => props.theme["base-text"]};
  }

  svg {
    color: ${props => props.theme['purple']};
  }

  &:hover {
    transition: 0.2s;
    background-color: ${props => props.theme["base-hover"]};

    span {
      color: ${props => props.theme["base-subtitle"]};
    }

    svg {
    color: ${props => props.theme['purple-dark']};
  }
  }
`

export const PriceCoffee = styled.h2`
  font-family: 'Roboto';
  font-weight: 700;
  font-size: 1rem;
  line-height: 1.3;
  color: ${props => props.theme["base-text"]};
`

export const NoCoffeesBuyedsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 0.5rem;

  p {
    font-size: 1.125rem;
    font-weight: 700;
    text-align: center;
    color: ${props => props.theme["purple-dark"]};
  }

  a {
    text-decoration: none;
    color: ${props => props.theme["yellow"]};
    font-size: 1.125rem;
    font-weight: 700;
    margin: 0 auto;
    
    &:hover{
      color: ${props => props.theme["yellow-dark"]};
    }
  }

  span {
    font-size: 1.5rem;
    color: ${props => props.theme['base-subtitle']};
  }
`

export const NoCoffeesBuyedsButton = styled.button`
  width: 100%;
  height: 5rem;
  background-color: red;
  color: white;
  font-size: 2rem;
`

export const PriceCoffeesWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  padding: 0.25rem;
  overflow-y: auto;
  overflow-x: hidden;
  
  &::-webkit-scrollbar {
  width: 8px; 
  }

  &::-webkit-scrollbar-thumb {
    background-color: ${props => props.theme["yellow"]}; 
    border-radius: 4px; 
  }

  &::-webkit-scrollbar-thumb:hover {
  background-color: ${props => props.theme["yellow-dark"]}; 
  }

`

export const PriceOfTheCoffeesAndDelivery = styled.div`
  display: flex;
  justify-content: space-between !important;
  align-items: center;


  color: ${props => props.theme["base-text"]};

  font-family: 'Roboto';
  font-weight: 400;
  line-height: 1.3;
`

export const TypePriceCoffeeInCheckoutToBuy = styled.span`
  font-size: 0.875rem;
`

export const PriceCoffeeInCheckoutToBuy = styled.span`
  font-size: 1rem;
`

export const TotalTitlePricesAllCoffees = styled.h2`
  font-family: 'Roboto';
  font-weight: 700;
  font-size: 1.25rem;
  line-height: 1.3;
  color: ${props => props.theme['base-subtitle']};
`

export const ButtonToFinalizeShoppingCoffee = styled.button`
  border: 0;
  text-transform: uppercase;
  font-family: 'Roboto';
  color: ${props => props.theme['white']};

  width: 22rem;
  height: 2.875rem;
  padding: 12px 8px;

  display: flex;
  justify-content: center;
  align-items: center;

  cursor: pointer;
  user-select: none;
  
  background-color: ${props => props.theme['yellow']};
  
  border-radius: 6px;

  &:hover {
    transition: 0.2s;
    background-color: ${props => props.theme['yellow-dark']};
  }
`
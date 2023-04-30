import styled from "styled-components";

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

const BaseButtonCoffee = styled.button`
  border: 0;

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
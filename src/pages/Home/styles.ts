import styled from "styled-components";
import backgroundHeader from "../../assets/header-bg.svg"

export const HomeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`

export const HomeContainer = styled.div`
  width: 100%;
  height: 39rem;
  
  background-image: url(${backgroundHeader});
  background-position: bottom 200px;
  background-repeat: no-repeat;
  background-size: 100%;
`

export const MainContainer = styled.div`
  width: 100%;
  max-width: 1440px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;

  padding-bottom: 10rem;
  gap: 3.375rem;

  h2 {
    font-family: 'Baloo 2';
    font-size: 2rem;
    font-family: 800;
    color: ${props => props.theme["base-subtitle"]};
    
    @media screen and (max-width: 1295px) {
      position: relative;
      left: 2%;
    }
  }
`

export const CoffeeWrapper = styled.div`
  display: flex;
  gap: 2rem;

  width: calc(100% - 2rem);
  
  flex-wrap: wrap;

  @media screen and (max-width: 1295px) {
    justify-content: center;
  }
  
`
export const CoffeeSingleContainer = styled.div`
  width: calc(20rem - 2rem);
  height: 20.375rem;
  
  border-radius: 6px 36px;

  background-color: ${props => props.theme["base-card"]};

  display: flex;
  flex-direction: column;
  align-items: center;

  

`

export const CoffeeImgWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  position: relative;
  bottom: 1.5rem;
  
  img {
    width: 8rem;
    user-select: none;
    margin: 0 auto;
  }

  div {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.25rem;

    p {
      font-family: 'Roboto', sans-serif;

      color: ${props => props.theme["yellow-dark"]};
      background-color: ${props => props.theme["yellow-light"]};

      font-size: 0.625rem;
      font-weight: 700;

      padding: 0.25rem 0.5rem;
      text-transform: uppercase;
    }
  }
`

export const InformationsAboutCoffeeContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  align-items: center;
  padding-bottom: 2.0625rem;
 
  h2 {
    font-family: 'Baloo 2';
    width: auto;
    font-size: 1.25rem !important;
    font-weight: 700;
    line-height: 1.3;

    color: ${props => props.theme["base-subtitle"]};
  }

  p {
    font-size: 0.875rem;
    font-weight: 400;
    font-family: 'Roboto';
    text-align: center;
    line-height: 1.3;
    color: ${props => props.theme["base-label"]};
    width: 15rem;
  }
`

export const BuyAndPriceCoffeeContainer = styled.div`
  display: flex;
  gap: 1.4375rem;
  align-items: center;

  h2 {
    font-family: 'Baloo 2';
    font-size: 1.5rem !important;
    font-weight: 800;
    line-height: 1.95rem;

    span {
      color: ${props => props.theme["base-text"]};
      font-weight: 400;
      font-size: 0.875rem;

      &::after {
        content: ' ';
      }
    }
  }

  div {
    display: flex;
    gap: 0.5rem;
    justify-content: center;
    align-items: center;
  }
`

export const BaseButtonToBuyCoffee = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.5rem;
  border-radius: 6px;
  border: 0;
`

export const AmountButtonCoffee = styled.div`
  background-color: ${props => props.theme["base-button"]};
  width: 4.5rem;
  display: flex;
  gap: 0.25rem;
  font-size: 1rem;
  font-weight: 400;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.5rem;
  border-radius: 6px;
  border: 0;  
`

export const ButtonToBuyCoffee = styled(BaseButtonToBuyCoffee)`
  background-color: ${props => props.theme["purple-dark"]};
  cursor: pointer;

  &:hover {
    transition: 0.2s;
    background-color: ${props => props.theme["purple"]};
  }
`


import { ButtonBuy, ButtonLocation, HeaderContainer, HeaderWrapper, NumberOfCoffeesBuyeds, ShoppingCartContainer } from "./styles"
import coffeeDeliveryLogo from "../../assets/coffee-delivery-logo.svg"
import { MapPin, ShoppingCart } from "phosphor-react"
import { NavLink } from "react-router-dom"
import { useContext } from 'react';
import { CoffeesContexts } from "../../contexts/CoffeesContexts"
import { InformationsPeopleContext } from "../../contexts/InformationsPeopleContexsts";

export function Header() {
  const { coffees, coffeesBuyeds } = useContext(CoffeesContexts)
  const { data } = useContext(InformationsPeopleContext)
  const buttonNavigateIsDisabled = coffeesBuyeds.length === 0

  let coffeesBuyedsReduce = 0
  
  coffees.forEach(coffee => {
    coffeesBuyedsReduce += Number(coffee.quantityBuyed)
    
  })

  return(
    <HeaderWrapper>
      <HeaderContainer>
        <NavLink to="/" title="Home">
          <img src={ coffeeDeliveryLogo } title="Home"/>
        </NavLink>

        <div>
          <ButtonLocation>
            <MapPin size={22} weight="fill"/> {data.city === '' && data.Uf === "" ? "" : `${data.city}, ${data.Uf.toUpperCase()}` }
          </ButtonLocation>
          <ShoppingCartContainer>
            
            <ButtonBuy disabled={buttonNavigateIsDisabled}>
              { coffeesBuyeds.length === 0 ? (
                <ShoppingCart size={22} weight="fill"/>
              ) : (
                <NavLink to={"/checkout"}>
                  <ShoppingCart size={22} weight="fill"/>
                </NavLink>
              ) }
            </ButtonBuy>
            { coffeesBuyeds.length === 0 ? (
              <span></span>
            ) : (
              <NumberOfCoffeesBuyeds>{ coffeesBuyedsReduce }</NumberOfCoffeesBuyeds>
            ) }
          </ShoppingCartContainer>
          
        </div>
      </HeaderContainer>
    </HeaderWrapper>
    
  )  
}
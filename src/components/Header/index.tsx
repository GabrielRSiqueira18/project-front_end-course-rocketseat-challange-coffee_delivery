import { ButtonBuy, ButtonLocation, HeaderContainer, HeaderWrapper } from "./styles"
import coffeeDeliveryLogo from "../../assets/coffee-delivery-logo.svg"
import { MapPin, ShoppingCart } from "phosphor-react"
import { NavLink } from "react-router-dom"
import { useContext } from 'react';
import { CoffeesContexts } from "../../contexts/CoffeesContexts"

export function Header() {
  const { coffees, coffeesBuyeds } = useContext(CoffeesContexts)

  const buttonNavigateIsDisabled = coffeesBuyeds.length === 0

  let coffeesBuyedsRuduce = 0
  
  coffees.forEach(coffee => {
    coffeesBuyedsRuduce += Number(coffee.quantityBuyed)
    
  })

  return(
    <HeaderWrapper>
      <HeaderContainer>
        <NavLink to="/" title="Home">
          <img src={ coffeeDeliveryLogo } title="Home"/>
        </NavLink>

        <div>
          <ButtonLocation>
            <MapPin size={22} weight="fill"/> Porto Alegre, RS
          </ButtonLocation>
          <ButtonBuy disabled={buttonNavigateIsDisabled}>
            { coffeesBuyeds.length === 0 ? <ShoppingCart size={22} weight="fill"/> : (
              <NavLink to="/checkout" title="Realizar e ver items comprados">
              <ShoppingCart size={22} weight="fill"/>
            </NavLink>
            ) }
            
            <span>{coffeesBuyedsRuduce}</span>
          </ButtonBuy>
        </div>
      </HeaderContainer>
    </HeaderWrapper>
    
  )  
}
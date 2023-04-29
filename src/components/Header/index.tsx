import { ButtonBuy, ButtonLocation, HeaderContainer, HeaderWrapper } from "./styles"
import coffeeDeliveryLogo from "../../assets/coffee-delivery-logo.svg"
import { MapPin, ShoppingCart } from "phosphor-react"
import { NavLink } from "react-router-dom"

export function Header() {
  
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
          <ButtonBuy>
            <NavLink to="/checkout" title="Realizar e ver items comprados">
              <ShoppingCart size={22} weight="fill"/>
            </NavLink>
            <span>3</span>
          </ButtonBuy>
        </div>
      </HeaderContainer>
    </HeaderWrapper>
    
  )  
}
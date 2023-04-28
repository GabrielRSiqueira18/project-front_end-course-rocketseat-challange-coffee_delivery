import { ButtonBuy, ButtonLocation, HeaderContainer } from "./styles"
import coffeeDeliveryLogo from "../../assets/coffee-delivery-logo.svg"
import { MapPin, ShoppingCart } from "phosphor-react"

export function Header() {
  return(
    <HeaderContainer>
      <img src={ coffeeDeliveryLogo } alt="" />

      <div>
        <ButtonLocation>
          <MapPin size={22}/> Porto Alegre, RS
        </ButtonLocation>
        <ButtonBuy>
          <ShoppingCart size={22}/>
          <span>3</span>
        </ButtonBuy>
      </div>
    </HeaderContainer>
  )  
}
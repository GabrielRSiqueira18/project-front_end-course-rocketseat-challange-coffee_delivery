import { CoffeeSingle } from "./components/CoffeeSingle";
import { HomeHeaderContainer } from "./components/HomeHeaderContainer";
import { CoffeeWrapper, HomeContainer, HomeWrapper, MainContainer } from "./styles";


export function Home() {
  return(
    <HomeWrapper>
      <HomeContainer>
        <HomeHeaderContainer />
      </HomeContainer>
      
      <MainContainer>
        <h2>Nossos cafés</h2>

        <CoffeeWrapper>
          <CoffeeSingle/>
          <CoffeeSingle/>
          <CoffeeSingle/>
          <CoffeeSingle/>
          <CoffeeSingle/>
          <CoffeeSingle/>
          <CoffeeSingle/>
          <CoffeeSingle/>
          <CoffeeSingle/>
          <CoffeeSingle/>
          <CoffeeSingle/>
          <CoffeeSingle/>
          <CoffeeSingle/>
          <CoffeeSingle/>
        </CoffeeWrapper>
      </MainContainer>
    </HomeWrapper>
    
  )
}
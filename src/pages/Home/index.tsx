import { useContext } from "react";
import { HomeHeaderContainer } from "./components/HomeHeaderContainer";
import { AmountButtonCoffee, ButtonToBuyCoffee, BuyAndPriceCoffeeContainer, CoffeeImgWrapper, CoffeeSingleContainer, CoffeeWrapper, HomeContainer, HomeWrapper, InformationsAboutCoffeeContainer, MainContainer } from "./styles";
import { CoffeesContexts } from "../../contexts/CoffeesContexts";
import { Minus, Plus, ShoppingCartSimple } from "phosphor-react";
import { ButtonMinusAndPlus, InputChoiceQuantityCoffees } from "../../components/AmountButtonCoffeeAdd/styles";


export function Home() {

  const { coffees, decrementOneCoffee, incrementOneCoffee } = useContext(CoffeesContexts)

  return(
    <HomeWrapper>
      <HomeContainer>
        <HomeHeaderContainer />
      </HomeContainer>
      
      <MainContainer>
        <h2>Nossos cafés</h2>

        <CoffeeWrapper>
          {coffees.map((coffee) => {
            const valueString = coffee.value.toString()
            const valueSplited = valueString.split('')
            valueSplited[1] = ','
            valueSplited.push('0')
            const correctValue = valueSplited.join('')

            return(
              <CoffeeSingleContainer key={coffee.id}>
                <CoffeeImgWrapper>
                  <img src={coffee.img} alt="" />
                  <div>
                    { coffee.type.map((types, index) => {
                      return <p key={index}>{types}</p>
                    }) }
                  </div>
                </CoffeeImgWrapper>
          
                <InformationsAboutCoffeeContainer>
                  <h2>{ coffee.name }</h2>
                  <p>{coffee.informationsAdditional}</p>
                </InformationsAboutCoffeeContainer>
          
                <BuyAndPriceCoffeeContainer>
                  <h2><span>R$</span>{correctValue}</h2>
          
                  <form>
                    <AmountButtonCoffee>
                       <ButtonMinusAndPlus>
                         <Minus
                            onClick={() => decrementOneCoffee(coffee.id)}
                            size={32}
                            weight="bold" 
                          />
                        </ButtonMinusAndPlus>
                        <InputChoiceQuantityCoffees>{coffee.quantityToBuy}</InputChoiceQuantityCoffees>  
                        <ButtonMinusAndPlus>
                          <Plus 
                            onClick={() => incrementOneCoffee(coffee.id)} 
                            size={32} 
                            weight="bold"
                          /> 
                        </ButtonMinusAndPlus>
                     </AmountButtonCoffee>
                    <ButtonToBuyCoffee>
                      <ShoppingCartSimple
                        color="#FFFFFF"
                        weight="fill"
                        size={22}/>
                    </ButtonToBuyCoffee>
                  </form>
                </BuyAndPriceCoffeeContainer>
          
              </CoffeeSingleContainer>
            )
          })}
        </CoffeeWrapper>
      </MainContainer>
    </HomeWrapper>
    
  )
}
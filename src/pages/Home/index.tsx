import { useContext } from "react";
import { HomeHeaderContainer } from "./components/HomeHeaderContainer";
import { AmountButtonCoffee, ButtonToBuyCoffee, BuyAndPriceCoffeeContainer, CoffeeImgWrapper, CoffeeSingleContainer, CoffeeWrapper, HomeContainer, HomeWrapper, InformationsAboutCoffeeContainer, MainContainer } from "./styles";
import { Coffees, CoffeesBuyed, CoffeesContexts } from "../../contexts/CoffeesContexts";
import { Minus, Plus, ShoppingCartSimple } from "phosphor-react";
import { ButtonMinusAndPlus, InputChoiceQuantityCoffees } from "../../components/AmountButtonCoffeeAdd/styles";
import { Footer } from "../../components/Footer";
 
export function convertValueToCorrect(value: number) {
  const valueString = value.toString()
  const valueSplited = valueString.split('')
  valueSplited[1] = ','
  valueSplited.push('0')
  const correctValue = valueSplited.join('')

  return correctValue
}

export function Home() {

  const { coffees, decrementOneCoffee, incrementOneCoffee, addCoffeesToWallet } = useContext(CoffeesContexts)

  function handleBuyCoffee(coffeeId: number, coffeesItems: Coffees[]) {
    coffeesItems.forEach(coffee => {
      if(coffee.id === coffeeId) {
        
        const id = coffee.id
        const name = coffee.name
        const img = coffee.img
        const value = coffee.value
        const quantityBuyed = Number(coffee.quantityToBuy) + coffee.quantityBuyed

        const newCoffeeBuyed: CoffeesBuyed = { 
          id,
          name,
          img,
          value,
          quantityBuyed,
        }
        
        addCoffeesToWallet(coffeeId, newCoffeeBuyed)
      }
    })
  }

  return(
    <HomeWrapper>
      <HomeContainer>
        <HomeHeaderContainer />
      </HomeContainer>
      
      <MainContainer>
        <h2>Nossos cafés</h2>

        <CoffeeWrapper>
          {coffees.map((coffee) => {
            
            const correctValue = convertValueToCorrect(coffee.value)
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
          
                  <div>
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
                        onClick={() => handleBuyCoffee(coffee.id, coffees)}
                        color="#FFFFFF"
                        weight="fill"
                        size={22}
                        type="button"
                      />
                    </ButtonToBuyCoffee>
                  </div>
                </BuyAndPriceCoffeeContainer>
          
              </CoffeeSingleContainer>
            )
          })}
        </CoffeeWrapper>
      </MainContainer>
      <Footer />
    </HomeWrapper>
    
  )
}
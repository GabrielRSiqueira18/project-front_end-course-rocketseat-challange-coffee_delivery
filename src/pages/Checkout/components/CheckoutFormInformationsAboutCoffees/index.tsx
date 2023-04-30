import { useContext } from "react";
import { ButtonToFinalizeShoppingCoffee, CheckoutFormInformationsAboutCoffeesContainer, CheckoutFormInformationsAboutCoffeesWrapper, CheckoutFormInformationsContainerToPutScrollBar as CheckoutFormInformationsContainerToPutScrollBar, CoffeeButtonQuantityBuyed, CoffeeButtonRemoveBuyed, CoffeeBuyedsInformationsSingleContainer, CoffeeInformationsWithoutPrice, CoffeeInformationsWithoutPriceWrapper, NoCoffeesBuyedsButton, NoCoffeesBuyedsContainer, PriceCoffee, PriceCoffeeInCheckoutToBuy, PriceCoffeesWrapper, PriceOfTheCoffeesAndDelivery, TitleCheckoutInformations, TotalTitlePricesAllCoffees, TypePriceCoffeeInCheckoutToBuy } from "./styles";
import { CoffeesContexts } from "../../../../contexts/CoffeesContexts";
import { Minus, Plus, Trash } from "phosphor-react";
import { convertValueToCorrect } from "../../../Home";
import { NavLink } from "react-router-dom";

export function CheckoutFormInformationsAboutCoffees() {
  const { coffeesBuyeds, incrementOneCoffeeBuyed, decrementOneCoffeeBuyed, removeCoffeeInWallet } = useContext(CoffeesContexts)

  let quantityCoffeeBuyed = 0
  const ratePerDelivery = (0.0125 * 100) 

  coffeesBuyeds.forEach(coffeesBuyeds => {
    quantityCoffeeBuyed += coffeesBuyeds.quantityBuyed * coffeesBuyeds.value
  })

  const priceCoffeeBuyedFixedTwo = quantityCoffeeBuyed.toFixed(2).replace(".", ",")

  const priceDeliveryCoffee = coffeesBuyeds.length * ratePerDelivery
  const priceDeliveryCoffeeFinal = priceDeliveryCoffee.toFixed(2).replace(".", ",")
  const totalPrice = quantityCoffeeBuyed + priceDeliveryCoffee


  const totalPriceFinal = totalPrice.toFixed(2).replace(".", ",")

  

  return(
    <CheckoutFormInformationsAboutCoffeesContainer>
      <TitleCheckoutInformations>Cafés</TitleCheckoutInformations>

      <CheckoutFormInformationsAboutCoffeesWrapper>
        <CheckoutFormInformationsContainerToPutScrollBar>
          { coffeesBuyeds.map(coffee => {
            const correctValue = convertValueToCorrect(coffee.value)
            
            return(
              <CoffeeBuyedsInformationsSingleContainer key={coffee.id}>
                <CoffeeInformationsWithoutPrice>
                  <img src={ coffee.img } alt="" />
                  <CoffeeInformationsWithoutPriceWrapper>
                    <h2>{coffee.name}</h2>
                    <div>
                      <CoffeeButtonQuantityBuyed>
                        <Minus
                          onClick={() => decrementOneCoffeeBuyed(coffee.id)}  
                          size={12}
                          weight="bold"
                        /> 
                        {coffee.quantityBuyed} 
                        <Plus
                          onClick={() => incrementOneCoffeeBuyed(coffee.id)}  
                          size={12} 
                          weight="bold"
                        /> 
                      </CoffeeButtonQuantityBuyed>
                      <CoffeeButtonRemoveBuyed onClick={() => removeCoffeeInWallet(coffee.id)}>
                          <Trash 
                            size={16}
                          /> 
                          <span>remover</span>
                        </CoffeeButtonRemoveBuyed>
                    </div>
                    
                  </CoffeeInformationsWithoutPriceWrapper>
                  <PriceCoffee>R$ {correctValue}</PriceCoffee>
                </CoffeeInformationsWithoutPrice>
      
               </CoffeeBuyedsInformationsSingleContainer>
            )
          }) }
        </CheckoutFormInformationsContainerToPutScrollBar>
        
        {coffeesBuyeds.length === 0 ? (
          <NoCoffeesBuyedsContainer>
            <span>Não há cafés Para comprar</span>
            
            <p>Para comprar mais cafés e continuar a compra  <NavLink to={"/"}>Clique aqui</NavLink> </p>
          </NoCoffeesBuyedsContainer>
        ) : (
          <PriceCoffeesWrapper>
            <PriceOfTheCoffeesAndDelivery>
              <TypePriceCoffeeInCheckoutToBuy>Total de items</TypePriceCoffeeInCheckoutToBuy>
              <PriceCoffeeInCheckoutToBuy>R$ {priceCoffeeBuyedFixedTwo}</PriceCoffeeInCheckoutToBuy>
            </PriceOfTheCoffeesAndDelivery>

            <PriceOfTheCoffeesAndDelivery>
              <TypePriceCoffeeInCheckoutToBuy>Entrega</TypePriceCoffeeInCheckoutToBuy>
              <PriceCoffeeInCheckoutToBuy>R$ {priceDeliveryCoffeeFinal}</PriceCoffeeInCheckoutToBuy>
            </PriceOfTheCoffeesAndDelivery>

            <PriceOfTheCoffeesAndDelivery>
              <TotalTitlePricesAllCoffees>Total</TotalTitlePricesAllCoffees>
              <TotalTitlePricesAllCoffees>R$ {totalPriceFinal}</TotalTitlePricesAllCoffees>
            </PriceOfTheCoffeesAndDelivery>
            <ButtonToFinalizeShoppingCoffee>confirmar pedido</ButtonToFinalizeShoppingCoffee>
          </PriceCoffeesWrapper>
        ) }
      </CheckoutFormInformationsAboutCoffeesWrapper>
    </CheckoutFormInformationsAboutCoffeesContainer>
  )
}

/*
  Tirar border color #000000 no CheckoutFormInformationsAboutCoffeesWrapper quando tiver selecionado o cartao!!!
  LEMBRAR
*/
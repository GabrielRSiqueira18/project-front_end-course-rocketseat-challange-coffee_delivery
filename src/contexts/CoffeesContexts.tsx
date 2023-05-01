import { ReactNode, createContext, useReducer, useState } from "react";
import { initialCoffees } from "./initialValuesCofees";
import { coffeesReducer } from "../reducers/coffees/reducer";
import { AddCoffeesToWalletAction, decrementCoffeesToBuyedAction, decrementOneCoffeeAction, incrementCoffeesToBuyedAction, incrementOneCoffeeAction, removeCoffeeInWalletAction } from "../reducers/coffees/actions";

interface CoffeesContextsProviderProps {
  children: ReactNode
}

interface ButtonsPayments {
  id: number
  type: string
  isActive: boolean
}

const initialButtonsPayments: ButtonsPayments[] = [
  {
    id: 1,
    type: "cartão de crédito",
    isActive: false
  },
  {
    id: 2,
    type: "cartão de débito",
    isActive: false
  },
  {
    id: 3,
    type: "dinheiro",
    isActive: false
  },
]



export interface CoffeesBuyed {
  id: number
  name: string
  img: string
  value: number
  quantityBuyed: number
}

export interface Coffees {
  id: number
  name: string
  type: string[]
  img: string
  informationsAdditional: string
  value: number
  quantityBuyed: number
  quantityToBuy: string

}

interface CoffeesContextsType {
  coffees: Coffees[]
  coffeesBuyeds: CoffeesBuyed[]
  buttonsPayments: ButtonsPayments[]
  incrementOneCoffee: (coffeeId: number) => void
  decrementOneCoffee: (coffeeId: number) => void
  addCoffeesToWallet: (coffeeId: number, newCoffeeBuyed: CoffeesBuyed) => void
  incrementOneCoffeeBuyed: (coffeeId: number) => void
  decrementOneCoffeeBuyed: (coffeeId: number) => void 
  removeCoffeeInWallet: (coffeeId: number) => void 
  handleButtonIsActive: (buttonIndex: number) => void 
}

const initialState = {
  coffees: initialCoffees,
  coffeesBuyeds: []
}

export const CoffeesContexts = createContext({} as CoffeesContextsType)

export function CoffeesContextsProvider({ children }: CoffeesContextsProviderProps) {
  
  const [ coffeesState, dispatch ] = useReducer(coffeesReducer, initialState)

  const { coffees, coffeesBuyeds } = coffeesState

  function incrementOneCoffee(coffeeId: number) {
    dispatch(incrementOneCoffeeAction(coffeeId))
    
  }

  function decrementOneCoffee(coffeeId: number) {
    dispatch(decrementOneCoffeeAction(coffeeId))
    
  }

  function incrementOneCoffeeBuyed(coffeeId: number) {
    dispatch(incrementCoffeesToBuyedAction(coffeeId))
    
  }

  function decrementOneCoffeeBuyed(coffeeId: number) {
    dispatch(decrementCoffeesToBuyedAction(coffeeId))
    
  }

  function addCoffeesToWallet(coffeeId: number, newCoffeeBuyed: CoffeesBuyed) {
    dispatch(AddCoffeesToWalletAction(coffeeId, newCoffeeBuyed))
  }

  function removeCoffeeInWallet(coffeeId: number) {
    dispatch(removeCoffeeInWalletAction(coffeeId))
  }

  function handleButtonIsActive(buttonIndex: number) {
    setButtonPayments((prevState) =>
      prevState.map((button, index) => ({
        ...button,
        isActive: index === buttonIndex ? true : false,
      }))
    );
  }

  const [ buttonsPayments, setButtonPayments ] = useState<ButtonsPayments[]>(initialButtonsPayments)

  return(
    <CoffeesContexts.Provider value={{ coffees, coffeesBuyeds, buttonsPayments,incrementOneCoffee, decrementOneCoffee, addCoffeesToWallet,incrementOneCoffeeBuyed, decrementOneCoffeeBuyed, removeCoffeeInWallet,handleButtonIsActive }}>
      { children }
    </CoffeesContexts.Provider>
  )
}
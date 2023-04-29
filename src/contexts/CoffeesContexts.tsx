import { ReactNode, createContext, useReducer } from "react";
import { initialCoffees } from "./initialValuesCofees";
import { coffeesReducer } from "../reducers/coffees/reducer";
import { AddCoffeesToWalletAction, decrementOneCoffeeAction, incrementOneCoffeeAction } from "../reducers/coffees/actions";

interface CoffeesContextsProviderProps {
  children: ReactNode
}

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
  incrementOneCoffee: (coffeeId: number) => void
  decrementOneCoffee: (coffeeId: number) => void
  addCoffeesToWallet: (coffeeId: number, newCoffeeBuyed: CoffeesBuyed) => void
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

  function addCoffeesToWallet(coffeeId: number, newCoffeeBuyed: CoffeesBuyed) {
    dispatch(AddCoffeesToWalletAction(coffeeId, newCoffeeBuyed))
  }

  return(
    <CoffeesContexts.Provider value={{ coffees, coffeesBuyeds, incrementOneCoffee, decrementOneCoffee, addCoffeesToWallet }}>
      { children }
    </CoffeesContexts.Provider>
  )
}
import { ReactNode, createContext, useReducer, useState } from "react";
import { initialCoffees } from "./initialValuesCofees";
import { coffeesReducer } from "../reducers/coffees/reducer";
import { AddCoffeesToWalletAction, decrementCoffeesToBuyedAction, decrementOneCoffeeAction, incrementCoffeesToBuyedAction, incrementOneCoffeeAction, removeCoffeeInWalletAction } from "../reducers/coffees/actions";

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
  incrementOneCoffeeBuyed: (coffeeId: number) => void
  decrementOneCoffeeBuyed: (coffeeId: number) => void 
  removeCoffeeInWallet: (coffeeId: number) => void 
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

  

  

  return(
    <CoffeesContexts.Provider value={{ coffees, coffeesBuyeds,incrementOneCoffee, decrementOneCoffee, addCoffeesToWallet,incrementOneCoffeeBuyed, decrementOneCoffeeBuyed, removeCoffeeInWallet }}>
      { children }
    </CoffeesContexts.Provider>
  )
}
import { CoffeesBuyed } from "../../contexts/CoffeesContexts"



export enum ActionTypes {
  iNCREMENT_ONE_IN_QUANTITY_COFFEE = 'ADD_ONE_IN_QUANTITY_COFFEE',
  DECREMENT_ONE_IN_QUANTITY_COFFEE = 'DECREMENT_ONE_IN_QUANTITY_COFFEE',
  ADD_COFFEE_TO_WALLET = 'ADD_COFFEE_TO_WALLET',
}

export function incrementOneCoffeeAction(coffeeId: number) {
  return {
    type: ActionTypes.iNCREMENT_ONE_IN_QUANTITY_COFFEE,

    payload: {
      coffeeId,
    }
  }
}

export function decrementOneCoffeeAction(coffeeId: number) {
  return {
    type: ActionTypes.DECREMENT_ONE_IN_QUANTITY_COFFEE,

    payload: {
      coffeeId,
    }
  }
}

export function AddCoffeesToWalletAction(coffeeId: number, newCoffeeBuyed: CoffeesBuyed) {
  
  return {
    type: ActionTypes.ADD_COFFEE_TO_WALLET,

    payload: {
      coffeeId,
      newCoffeeBuyed,
    }
  }
  
  
}
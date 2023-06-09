import { CoffeesBuyed } from "../../contexts/CoffeesContexts"



export enum ActionTypes {
  INCREMENT_ONE_IN_QUANTITY_COFFEE = 'ADD_ONE_IN_QUANTITY_COFFEE',
  DECREMENT_ONE_IN_QUANTITY_COFFEE = 'DECREMENT_ONE_IN_QUANTITY_COFFEE',
  ADD_COFFEE_TO_WALLET = 'ADD_COFFEE_TO_WALLET',
  INCREMENT_ONE_IN_COFFEE_TO_BUYED = 'INCREMENT_ONE_IN_COFFEE_TO_BUYED',
  DECREMENT_ONE_IN_COFFEE_TO_BUYED = 'DECREMENT_ONE_IN_COFFEE_TO_BUYED',
  REMOVE_COFFEE_IN_WALLET = 'REMOVE_COFFEE_IN_WALLET',
  FINALIZE_PURCHASE_COFFEES = 'FINALIZE_PURCHASE_COFFEES'
}

export function incrementOneCoffeeAction(coffeeId: number) {
  return {
    type: ActionTypes.INCREMENT_ONE_IN_QUANTITY_COFFEE,

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

export function incrementCoffeesToBuyedAction(coffeeId: number) {
  return {
    type: ActionTypes.INCREMENT_ONE_IN_COFFEE_TO_BUYED,

    payload: {
      coffeeId,
    }
  }
}

export function decrementCoffeesToBuyedAction(coffeeId: number) {
  return {
    type: ActionTypes.DECREMENT_ONE_IN_COFFEE_TO_BUYED,

    payload: {
      coffeeId,
    }
  }
}

export function removeCoffeeInWalletAction(coffeeId: number) {
  return {
    type: ActionTypes.REMOVE_COFFEE_IN_WALLET,

    payload: {
      coffeeId,
    }
  }
}

export function finalizePurchaseCoffeesAction() {
  return {
    type: ActionTypes.FINALIZE_PURCHASE_COFFEES,
  }
}
export enum ActionTypes {
  iNCREMENT_ONE_IN_QUANTITY_COFFEE = 'ADD_ONE_IN_QUANTITY_COFFEE',
  DECREMENT_ONE_IN_QUANTITY_COFFEE = 'DECREMENT_ONE_IN_QUANTITY_COFFEE',
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
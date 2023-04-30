import { produce } from "immer";
import { Coffees, CoffeesBuyed } from "../../contexts/CoffeesContexts";
import { ActionTypes } from "./actions";

export interface CoffeesState {
  coffees: Coffees[]
  coffeesBuyeds: CoffeesBuyed[]
}

export function coffeesReducer(state: CoffeesState, action: any) {
  const coffeeTargetIndex = state.coffees.findIndex(coffee => coffee.id === action.payload.coffeeId)
  
  switch(action.type) {
    case ActionTypes.iNCREMENT_ONE_IN_QUANTITY_COFFEE: {
      if(coffeeTargetIndex < 0) {
        return state
      }

      return produce(state, draft => {
        draft.coffees[coffeeTargetIndex].quantityToBuy = String(Number(draft.coffees[coffeeTargetIndex].quantityToBuy) + 1)
      }) 
    }  
    
    case ActionTypes.DECREMENT_ONE_IN_QUANTITY_COFFEE: {
      if(coffeeTargetIndex < 0) {
        return state
      }

      return produce(state, draft => {
        if(Number(draft.coffees[coffeeTargetIndex].quantityToBuy) === 0) {
          draft.coffees[coffeeTargetIndex].quantityToBuy = String(0)
        } else {
          draft.coffees[coffeeTargetIndex].quantityToBuy = String(Number(draft.coffees[coffeeTargetIndex].quantityToBuy) - 1)
        }
        
      })

    }

    case ActionTypes.ADD_COFFEE_TO_WALLET: {
      const newBuyedCoffeeExists = state.coffeesBuyeds.find(coffee => coffee.id === action.payload.coffeeId)
      
    //   if(newBuyedCoffeeExists === undefined) {
    //   return {
    //     ...state,
    //     coffees: state.coffees.map(coffee => {
    //       if(coffee.id === action.payload.coffeeId) {
    //         return {
    //         ...coffee,
    //         quantityBuyed: Number(coffee.quantityToBuy) + coffee.quantityBuyed,
    //         quantityToBuy:  String(0),
              
    //         };
    //       }
    //       return coffee
    //     }),
    //     coffeesBuyeds: [ ...state.coffeesBuyeds, action.payload.newCoffeeBuyed ]
        
    //   }
    //  } else if(newBuyedCoffeeExists !== undefined) {
    //   return {
    //     ...state,
    //     coffees: state.coffees.map(coffee => {
    //       if(coffee.id === action.payload.coffeeId) {
    //         return {
    //         ...coffee,
    //         quantityBuyed: Number(coffee.quantityToBuy) + coffee.quantityBuyed,
    //         quantityToBuy:  String(0),
              
    //         };
    //       }
    //       return coffee
    //     }),
    //     coffeesBuyeds: state.coffeesBuyeds.map(coffee => {
    //       if(coffee.id === action.payload.coffeeId) {
    //         return {
    //         ...coffee,
    //           quantityBuyed: action.payload.newCoffeeBuyed.quantityBuyed 
    //         };
    //       } 
    //       return coffee
    //     })
    //   }
    //  }
    //return state

    return produce(state, draft => {
      if(newBuyedCoffeeExists === undefined) {
        if(coffeeTargetIndex < 0) {
          return state
        }
          
        draft.coffees[coffeeTargetIndex].quantityBuyed = Number(draft.coffees[coffeeTargetIndex].quantityToBuy) + draft.coffees[coffeeTargetIndex].quantityBuyed
        draft.coffees[coffeeTargetIndex].quantityToBuy = String(0)

        draft.coffeesBuyeds.push(action.payload.newCoffeeBuyed)
      } else if(newBuyedCoffeeExists !== undefined) {
        if(coffeeTargetIndex < 0) {
          return state
        }

        draft.coffees[coffeeTargetIndex].quantityBuyed = Number(draft.coffees[coffeeTargetIndex].quantityToBuy) + draft.coffees[coffeeTargetIndex].quantityBuyed
        draft.coffees[coffeeTargetIndex].quantityToBuy = String(0)

        draft.coffeesBuyeds[coffeeTargetIndex].quantityBuyed = action.payload.newCoffeeBuyed.quantityBuyed 

      }
    })
    }
    default:
      return state
  }
  
}
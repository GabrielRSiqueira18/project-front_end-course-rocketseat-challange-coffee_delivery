import { produce } from "immer";
import { Coffees, CoffeesBuyed } from "../../contexts/CoffeesContexts";
import { ActionTypes } from "./actions";

export interface CoffeesState {
  coffees: Coffees[]
  coffeesBuyeds: CoffeesBuyed[]
}

export function coffeesReducer(state: CoffeesState, action: any) {
  
  switch(action.type) {
    case ActionTypes.INCREMENT_ONE_IN_QUANTITY_COFFEE: {
      const coffeeTargetIndex = state.coffees.findIndex(coffee => coffee.id === action.payload.coffeeId)
      if(coffeeTargetIndex < 0) {
        return state
      }

      return produce(state, draft => {
        draft.coffees[coffeeTargetIndex].quantityToBuy = String(Number(draft.coffees[coffeeTargetIndex].quantityToBuy) + 1)
      }) 
    }  
    
    case ActionTypes.DECREMENT_ONE_IN_QUANTITY_COFFEE: {
      const coffeeTargetIndex = state.coffees.findIndex(coffee => coffee.id === action.payload.coffeeId)
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
      const coffeeBuyedTargetIndex = state.coffeesBuyeds.findIndex(coffee => coffee.id === action.payload.coffeeId)
      const newBuyedCoffeeExists = state.coffeesBuyeds.find(coffee => coffee.id === action.payload.coffeeId)
      const coffeeTargetIndex = state.coffees.findIndex(coffee => coffee.id === action.payload.coffeeId)
    
      return produce(state, draft => {
        if(newBuyedCoffeeExists === undefined) {
          if(coffeeTargetIndex < 0) {
            return state
          }

          if(state.coffees[coffeeTargetIndex].quantityToBuy == String(0)) {
            draft.coffees[coffeeTargetIndex].quantityBuyed = Number(draft.coffees[coffeeTargetIndex].quantityToBuy) 
            draft.coffees[coffeeTargetIndex].quantityToBuy = String(0)
          } else {
            draft.coffees[coffeeTargetIndex].quantityBuyed = Number(draft.coffees[coffeeTargetIndex].quantityToBuy) + draft.coffees[coffeeTargetIndex].quantityBuyed
            draft.coffees[coffeeTargetIndex].quantityToBuy = String(0)
    
            draft.coffeesBuyeds.push(action.payload.newCoffeeBuyed)
          }
            
          
        } else if(newBuyedCoffeeExists !== undefined) {
          if(coffeeTargetIndex < 0) {
            return state
          }
    
          draft.coffees[coffeeTargetIndex].quantityBuyed = Number(draft.coffees[coffeeTargetIndex].quantityToBuy) + draft.coffees[coffeeTargetIndex].quantityBuyed
          draft.coffees[coffeeTargetIndex].quantityToBuy = String(0)
    
          draft.coffeesBuyeds[coffeeBuyedTargetIndex].quantityBuyed = action.payload.newCoffeeBuyed.quantityBuyed 
        }
      })
    }

    case ActionTypes.INCREMENT_ONE_IN_COFFEE_TO_BUYED: {
      const coffeeBuyedTargetIndex = state.coffeesBuyeds.findIndex(coffee => coffee.id === action.payload.coffeeId)
      const coffeeTargetIndex = state.coffees.findIndex(coffee => coffee.id === action.payload.coffeeId)
      return produce(state, draft => {
        draft.coffees[coffeeTargetIndex].quantityBuyed = state.coffees[coffeeTargetIndex].quantityBuyed + 1
        draft.coffeesBuyeds[coffeeBuyedTargetIndex].quantityBuyed = draft.coffeesBuyeds[coffeeBuyedTargetIndex].quantityBuyed += 1
      })
    }

    case ActionTypes.DECREMENT_ONE_IN_COFFEE_TO_BUYED: {
      const coffeeBuyedTargetIndex = state.coffeesBuyeds.findIndex(coffee => coffee.id === action.payload.coffeeId)
      const coffeeTargetIndex = state.coffees.findIndex(coffee => coffee.id === action.payload.coffeeId)
      return produce(state, draft => {
        if(draft.coffees[coffeeTargetIndex].quantityBuyed === 1) {
          draft.coffees[coffeeTargetIndex].quantityBuyed = 1
          
        } else {
          draft.coffees[coffeeTargetIndex].quantityBuyed = state.coffees[coffeeTargetIndex].quantityBuyed - 1
          
          if(draft.coffeesBuyeds[coffeeBuyedTargetIndex].quantityBuyed === 0) {
            draft.coffeesBuyeds[coffeeBuyedTargetIndex].quantityBuyed = 0
          } else {
            draft.coffeesBuyeds[coffeeBuyedTargetIndex].quantityBuyed -= 1
          }
        }
        
      })
    }

    case ActionTypes.REMOVE_COFFEE_IN_WALLET: {
      const coffeeBuyedTargetIndex = state.coffeesBuyeds.findIndex(coffee => coffee.id === action.payload.coffeeId)
      const coffeeTargetIndex = state.coffees.findIndex(coffee => coffee.id === action.payload.coffeeId)
      return produce(state, draft => {
        draft.coffeesBuyeds.splice(coffeeBuyedTargetIndex, 1)
        draft.coffees[coffeeTargetIndex].quantityBuyed = 0
        draft.coffees[coffeeTargetIndex].quantityToBuy = String(0)
      })
    }

    case ActionTypes.FINALIZE_PURCHASE_COFFEES: {
      return produce(state, draft => {
        draft.coffees.forEach(coffee => {
          coffee.quantityBuyed = 0
        })
        draft.coffeesBuyeds = []
      })
    }
    default:
      return state
  }
  
}
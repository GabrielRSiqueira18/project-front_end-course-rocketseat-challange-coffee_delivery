import { Coffees, CoffeesBuyed } from "../../contexts/CoffeesContexts";
import { ActionTypes } from "./actions";

export interface CoffeesState {
  coffees: Coffees[]
  coffeesBuyeds: CoffeesBuyed[]
}

export function coffeesReducer(state: CoffeesState, action: any) {
  

  switch(action.type) {
    case ActionTypes.iNCREMENT_ONE_IN_QUANTITY_COFFEE: {
      return {
        ...state,
        coffees: state.coffees.map(coffee => {
          if (coffee.id === action.payload.coffeeId) {
            return {
              ...coffee,
              quantityToBuy:  String(Number(coffee.quantityToBuy) + 1),
            };
          } 
          return coffee;
        }),
        coffeesBuyeds: [...state.coffeesBuyeds]
      }
    }  
    
    case ActionTypes.DECREMENT_ONE_IN_QUANTITY_COFFEE: {
      return {
        ...state,
        coffees: state.coffees.map(coffee => {
          if (coffee.id === action.payload.coffeeId) {
            if(Number(coffee.quantityToBuy) == 0) {
              return {
                ...coffee,
                quantityToBuy:  String(0),
              };
            } else {
              return {
                ...coffee,
                quantityToBuy:  String(Number(coffee.quantityToBuy) - 1),
              };
            }
            
          } 
          return coffee;
        }),
        coffeesBuyeds: [...state.coffeesBuyeds]
      }
    }

    case ActionTypes.ADD_COFFEE_TO_WALLET: {
      const newBuyedCoffeeExists = state.coffeesBuyeds.find(coffe => coffe.id === action.payload.coffeeId)
      
      if(newBuyedCoffeeExists === undefined) {
      return {
        ...state,
        coffees: state.coffees.map(coffee => {
          if(coffee.id === action.payload.coffeeId) {
            return {
            ...coffee,
            quantityBuyed: Number(coffee.quantityToBuy) + coffee.quantityBuyed,
            quantityToBuy:  String(0),
              
            };
          }
          return coffee
        }),
        coffeesBuyeds: [ ...state.coffeesBuyeds, action.payload.newCoffeeBuyed ]
        
      }
     } else if(newBuyedCoffeeExists !== undefined) {
      return {
        ...state,
        coffees: state.coffees.map(coffee => {
          if(coffee.id === action.payload.coffeeId) {
            return {
            ...coffee,
            quantityBuyed: Number(coffee.quantityToBuy) + coffee.quantityBuyed,
            quantityToBuy:  String(0),
              
            };
          }
          return coffee
        }),
        coffeesBuyeds: state.coffeesBuyeds.map(coffee => {
          if(coffee.id === action.payload.coffeeId) {
            return {
            ...coffee,
              quantityBuyed: action.payload.newCoffeeBuyed.quantityBuyed 
            };
          } 
          return coffee
        })
      }
     }
     return state
    }
    default:
      return state
  }
  
}
import { ReactNode, createContext, useState } from "react";

interface ButtonsActivesContextsType {
  buttonsPayments: ButtonsPayments[]
  handleButtonIsActive: (buttonIndex: number) => void 
  putAllButtonsIsActiveToFalse: () => void 

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

interface ButtonsActivesContextsProviderProps {
  children: ReactNode
}

export const ButtonsActivesContexts = createContext({} as ButtonsActivesContextsType)

export function ButtonsActivesContextsProvider({ children }: ButtonsActivesContextsProviderProps) {
  const [ buttonsPayments, setButtonPayments ] = useState<ButtonsPayments[]>(initialButtonsPayments)

  function handleButtonIsActive(buttonIndex: number) {
    setButtonPayments((prevState) =>
      prevState.map((button, index) => ({
        ...button,
        isActive: index === buttonIndex ? true : false,
      }))
    );
  }
  

  function putAllButtonsIsActiveToFalse() {
    setButtonPayments((prevState) =>
      prevState.map((button) => ({
        ...button,
        isActive: false
      }))
    );
  }

 
  return(
    <ButtonsActivesContexts.Provider value={{ buttonsPayments, handleButtonIsActive, putAllButtonsIsActiveToFalse }}>
      { children }
    </ButtonsActivesContexts.Provider>
  )
}
import { ReactNode, createContext, useState } from "react";

export interface DataTypes {
  street: string
  streetNumber: string
  neighborhood: string
  city: string
  Uf: string
  methodPayment: string
}

interface InformationsPeopleContextTypes {
  data: DataTypes
  methodPayment: string
  putPeopleDatasInDataObject: (data: DataTypes) => void
  putMethodPayment: (method: string) => void
}

interface InformationsPeopleContextProviderProps {
  children: ReactNode
}

const initialValuesData = {
  street: '',
  streetNumber: '',
  neighborhood: '',
  city: '',
  Uf: '',
  methodPayment: ''
}

export const InformationsPeopleContext = createContext({} as InformationsPeopleContextTypes)

export function InformationsPeopleContextProvider({ children }: InformationsPeopleContextProviderProps) {
 
  const [ data, setData ] = useState<DataTypes>(initialValuesData)
  const [ methodPayment, setMethodPayment] = useState('')

  

  function putPeopleDatasInDataObject(datasPeople: DataTypes) {
    setData(prevState => {

      return {
        ...prevState,
        street: datasPeople.street,
        streetNumber: datasPeople.streetNumber,
        neighborhood: datasPeople.neighborhood,
        city: datasPeople.city,
        Uf: datasPeople.Uf,
        methodPayment
      }
    })
  }

  function putMethodPayment(method: string) {
    setMethodPayment(() => {
      return method
    })
  }

  return(
    <InformationsPeopleContext.Provider value={{ data, methodPayment, putPeopleDatasInDataObject, putMethodPayment }}>
      {children}
    </InformationsPeopleContext.Provider>
  )
}
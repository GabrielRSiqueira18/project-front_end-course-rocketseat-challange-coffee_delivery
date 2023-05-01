import { CheckoutFormInformationsAboutCoffees } from "./components/CheckoutFormInformationsAboutCoffees";
import { CheckoutFormToFinishPurchase } from "./components/CheckoutFormToFinishPurchase";
import { CheckoutContainer, CheckoutWrapper } from "./styles";
import { FormProvider, useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as zod from "zod"
import { useContext } from "react";
import { ButtonsActivesContexts } from "../../contexts/ButtonsActivesContexts";
import { useNavigate } from "react-router-dom"

export function Checkout() {
  const navigate = useNavigate()
  const { buttonsPayments, putAllButtonsIsActiveToFalse } = useContext(ButtonsActivesContexts)
  
  let isActiveButton = false

  buttonsPayments.forEach(button => {
    if(button.isActive) {
      isActiveButton = true
    } 
  })

  const registrationPeopleFormValidationSchema = zod.object({
    cep: zod.string().length(8).regex(/^\d+$/),
    street: zod.string().min(5).max(50),
    numberHouse: zod.string().min(1).max(3).regex(/^\d+$/),
    houseComplement: zod.string().min(4).max(50),
    neighborhood: zod.string().min(5).max(50),
    city: zod.string().min(5).max(50),
    Uf: zod.string().length(2),
  })

  type registrationFormPeopleData = zod.infer<typeof registrationPeopleFormValidationSchema>

  const registrationPeopleForm = useForm<registrationFormPeopleData>({
    resolver: zodResolver(registrationPeopleFormValidationSchema),
    defaultValues: {
      cep: "",
      street: "",
      numberHouse: "",
      houseComplement: "",
      neighborhood: "",
      city: "",
      Uf: "",
    }
  })

  const { handleSubmit, watch, reset } = registrationPeopleForm

  function concludePurchaseCoffees(data: registrationFormPeopleData) {
    if(isActiveButton) {
      putAllButtonsIsActiveToFalse()
      //navigate("/checkout-filled")
      console.log(data)
      reset()
      
    } else {
      console.error("ERROR")
    }
  }

  return(
    <CheckoutContainer>
      <CheckoutWrapper onSubmit={handleSubmit(concludePurchaseCoffees)} >
        <FormProvider { ...registrationPeopleForm }>
          <CheckoutFormToFinishPurchase />
          <CheckoutFormInformationsAboutCoffees />
        </FormProvider>
      </CheckoutWrapper>
    </CheckoutContainer>
  )
}
import { CardInformationsAboutDatasPeople, CheckoutFilledContainer, FinalInformationsWrapper, TitleWrapper } from "./styles";
import IllustrationCheckoutFilled from "../../assets/Illustration-checkout-filled.svg"
import { useContext } from "react";
import { InformationsPeopleContext } from "../../contexts/InformationsPeopleContexsts";

export function CheckoutFilled() {
  const { data, methodPayment } = useContext(InformationsPeopleContext)
  
  return(
    <CheckoutFilledContainer>
      <pre>
        {JSON.stringify(data, null, 2)}
        {methodPayment}
      </pre>
      <TitleWrapper>
        <h2>Uhu! Pedido confirmado</h2>
        <h3>Agora é só aguardar que logo o café chegará até você</h3>
      </TitleWrapper>
      <FinalInformationsWrapper>
        <CardInformationsAboutDatasPeople>
          
        </CardInformationsAboutDatasPeople>
        <img src={ IllustrationCheckoutFilled } alt="" />
      </FinalInformationsWrapper>
    </CheckoutFilledContainer>
  )
}

/*
  NEIGHBORHOOD
  STREET
  NUMBER
  CITY
  METHOD PAYMENT
*/
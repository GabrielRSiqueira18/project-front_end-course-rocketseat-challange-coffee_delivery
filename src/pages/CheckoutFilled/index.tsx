import { CardInformationsAboutDatasPeople, CheckoutFilledContainer, FinalInformationsWrapper, InformationsFinalSingle, InformationsFinalSingleTextWrapper, PurpleCircleInIcons, TitleWrapper, YellowCircleInIcons, YellowDarkCircleInIcons } from "./styles";
import IllustrationCheckoutFilled from "../../assets/Illustration-checkout-filled.svg"
import { useContext } from "react";
import { InformationsPeopleContext } from "../../contexts/InformationsPeopleContexsts";
import { CurrencyDollar, MapPin, Timer } from "phosphor-react";

export function CheckoutFilled() {
  const { data, methodPayment } = useContext(InformationsPeopleContext)
  const methodPaymentFirstWordUppercase = methodPayment.charAt(0).toUpperCase() + methodPayment.slice(1);
  

  return(
    <CheckoutFilledContainer>

      <TitleWrapper>
        <h2>Uhu! Pedido confirmado</h2>
        <h3>Agora é só aguardar que logo o café chegará até você</h3>
      </TitleWrapper>
      <FinalInformationsWrapper>
        <CardInformationsAboutDatasPeople>
          <InformationsFinalSingle>
            <PurpleCircleInIcons>
              <MapPin color="white" weight="fill"/>
            </PurpleCircleInIcons>
            <InformationsFinalSingleTextWrapper>
              <p>Entrega em <strong>{data.street}, {data.streetNumber}</strong> </p>
              <p>{data.neighborhood} - {data.city}, {data.Uf} </p>
            </InformationsFinalSingleTextWrapper>
          </InformationsFinalSingle>
          <InformationsFinalSingle>
            <YellowCircleInIcons>
              <Timer color="white" weight="fill"/>
            </YellowCircleInIcons>
            <InformationsFinalSingleTextWrapper>
              <p>Previsão de entrega</p>
              <p> <strong>20 min - 30 min</strong> </p>
            </InformationsFinalSingleTextWrapper>
          </InformationsFinalSingle>
          <InformationsFinalSingle>
            <YellowDarkCircleInIcons>
              <CurrencyDollar color="white" weight="regular"/>
            </YellowDarkCircleInIcons>
            <InformationsFinalSingleTextWrapper>
              <p>Pagamento na entrega</p>
              <p><strong>{methodPaymentFirstWordUppercase}</strong></p>
            </InformationsFinalSingleTextWrapper>
          </InformationsFinalSingle>

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
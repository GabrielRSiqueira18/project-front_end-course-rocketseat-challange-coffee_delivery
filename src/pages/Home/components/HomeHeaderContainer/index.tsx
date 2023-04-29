import { ShoppingCart, Package, Timer, Coffee } from "phosphor-react";
import { HomeHeaderContainerComponent, ImageHeaderWrapper, TitleContainer, VantageDeliverySingle, VantageDeliverySpanCircle, VantageDeliveryWrapper } from "./styles";
import headerImage from "../../../../assets/img-header.svg"

export function HomeHeaderContainer() {
  return (
    <>
      <HomeHeaderContainerComponent>
        <TitleContainer>
          <section>
            <h1>Encontre o café perfeito para qualquer hora do dia</h1>
            <p>Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora</p>
          </section>
          <VantageDeliveryWrapper>

            <VantageDeliverySingle>
              <VantageDeliverySpanCircle variant="yellowDark"> <p><ShoppingCart size={16} weight="fill"/></p> </VantageDeliverySpanCircle>  
              Compra simples e segura
            </VantageDeliverySingle>

            <VantageDeliverySingle style={{ position: "relative", left: '5px' }}>
               <VantageDeliverySpanCircle variant="baseText"> <p><Package size={16} weight="fill"/></p> </VantageDeliverySpanCircle>
                Embalagem mantém o café intacto
              </VantageDeliverySingle>

            <VantageDeliverySingle style={{ position: "relative", left: '4px' }}>
               <VantageDeliverySpanCircle variant="yellow"> <p><Timer size={16} weight="fill"/></p> </VantageDeliverySpanCircle>
                Entrega rápida e rastreada
              </VantageDeliverySingle>

            <VantageDeliverySingle>
               <VantageDeliverySpanCircle variant="purple"> <p><Coffee size={16} weight="fill" /></p> </VantageDeliverySpanCircle>
                O café chega fresquinho até você
              </VantageDeliverySingle>
          </VantageDeliveryWrapper>
        </TitleContainer>

        <ImageHeaderWrapper>
          <img src={ headerImage } alt="" />
        </ImageHeaderWrapper>
      </HomeHeaderContainerComponent>
    </>
  )
}
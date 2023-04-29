import styled from "styled-components"

export const HomeHeaderContainerComponent = styled.div`
  font-family: 'Baloo 2', cursive;

  width: 100%;
  max-width: 1440px;
  display: flex;
  margin: 0 auto;
  padding: 9.875rem 1%;
  gap: 3.5rem;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 1280px) {
    flex-wrap: wrap;

  }
`

export const TitleContainer = styled.div`
  max-width: 36.75rem;
  width: calc(50% - 3.5rem);
  display: flex;
  flex-direction: column;
  gap: 4.125rem;
  
  @media screen and (max-width: 1280px) {
    width: 100%;
  }

  section {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    flex: 1;

    h1 {
      color: ${props => props.theme["base-title"]};
      font-size: 3rem;
      font-weight: 800;
      line-height: 1.3;
    }

    p {
      font-size: 1.25rem;
      line-height: 1.3;
      font-weight: 400;
      color: ${props => props.theme["base-subtitle"]};
    }

  }
`

export const VantageDeliveryWrapper = styled.div`
  display: grid;
  width: 36.6875rem;
  height: 5.25rem;
  position: relative;
  right: 25.25px;

  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;

  gap: 1.25rem 2.5rem;

  @media screen and (max-width: 1280px) {
    align-items: left;
    width: auto;
  }

  @media screen and (max-width: 600px) {
    right: 0;
  }
`

export const VantageDeliverySingle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.75rem;

  height: 2rem;
  width: 20rem;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.3;
  color: ${props => props.theme["base-text"]};
  font-family: 'Roboto';

  @media screen and (max-width: 768px) {
    width: auto;
  }
`

type VantageDeliverySpanCircleVariant = 'yellow' | 'yellowDark' | 'purple' | 'baseText'

interface VantageDeliverySpanCircleProps {
  variant: VantageDeliverySpanCircleVariant
}

const vantageDeliverySpanCircleVariant = {
  yellow: '#DBAC2C',
  yellowDark: '#C47F17',
  purple: '#8047F8',
  baseText: '#574F4D'
}

export const VantageDeliverySpanCircle = styled.span<VantageDeliverySpanCircleProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  
  p {
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
  }
  
  ${props => {
    return `background-color: ${vantageDeliverySpanCircleVariant[props.variant]}`
  }}
  

  
`

export const ImageHeaderWrapper = styled.div`
  flex: 1;
  height: 22.5rem;

  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 1160px) {
    display: none;
  }
 
`
import styled from "styled-components";

export const CheckoutFilledContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
  padding: 1rem;
  width: 100%;
  max-width: 1440px;
  padding-top: 10rem;
  margin: 0 auto;
`

export const TitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  
  h2 {
    font-family: 'Baloo 2';
    font-weight: 800;
    font-size: 2rem;
    line-height: 1.3;
    color: ${props => props.theme["yellow-dark"]};
  }

  h3 {
    font-family: 'Roboto';
    font-size: 1.25rem;
    line-height: 1.3;
    color: ${props => props.theme["base-subtitle"]};
  }
`

export const FinalInformationsWrapper = styled.div`
  display: flex;
  gap: 7rem;
  flex-wrap: wrap;
`

export const CardInformationsAboutDatasPeople = styled.div `
  display: flex;
  flex-direction: column;
  gap: 2rem;
  width: 32.875rem; 
  padding: 2.5rem;
  background: linear-gradient(white, white) padding-box,
              linear-gradient(to right, #DBAC2C, #8047F8) border-box;
  border-radius: 6px 36px;
  border: 1px solid transparent;
  
`

export const InformationsFinalSingle = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  height: 2.625rem;
`

export const InformationsFinalSingleTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 2.625rem;
  
  p {
    font-family: 'Roboto';
    font-size: 1rem;
    line-height: 1.3;
  }
  
`

const BaseCircleInIcons = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 2rem;
  height: 2rem;
  border-radius: 10000px;
`

export const PurpleCircleInIcons = styled(BaseCircleInIcons)`
  background-color: ${props => props.theme.purple};
`

export const YellowCircleInIcons = styled(BaseCircleInIcons)`
  background-color: ${props => props.theme.yellow};
`

export const YellowDarkCircleInIcons = styled(BaseCircleInIcons)`
  background-color: ${props => props.theme["yellow-dark"]};
`
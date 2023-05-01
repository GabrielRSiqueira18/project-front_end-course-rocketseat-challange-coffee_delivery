import styled from "styled-components";

export const CheckoutFilledContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.5rem;

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
  gap: 2.5rem;
`

export const InformationsFinalSingle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
  height: 2.625rem;
`

export const InformationsFinalSingleTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
`
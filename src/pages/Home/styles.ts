import styled from "styled-components";
import backgroundHeader from "../../assets/header-bg.svg"

export const HomeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`

export const HomeContainer = styled.div`
  width: 100%;
  height: 39rem;
  
  background-image: url(${backgroundHeader});
  background-position: bottom 200px;
  background-repeat: no-repeat;
  background-size: 100%;
`

export const MainContainer = styled.div`
  width: 100%;
  max-width: 1440px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;

  padding-bottom: 10rem;
  gap: 3.375rem;

  h2 {
    font-family: 'Baloo 2';
    font-size: 2rem;
    font-family: 800;
    color: ${props => props.theme["base-subtitle"]};
    
    @media screen and (max-width: 1295px) {
      position: relative;
      left: 2%;
    }
  }
`

export const CoffeeWrapper = styled.div`
  display: flex;
  gap: 2rem;

  width: calc(100% - 2rem);
  
  flex-wrap: wrap;

  @media screen and (max-width: 1295px) {
    justify-content: center;
  }
  
`
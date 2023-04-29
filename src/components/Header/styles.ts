import styled from "styled-components";

export const HeaderWrapper = styled.div`
  width: 100%; 
  position: fixed;
  background-color: ${props => props.theme.background};
  z-index: 999;
`

export const HeaderContainer = styled.header`
  display: flex;
  padding: 2rem 2%;
  justify-content: space-between;
  align-items: center;
  max-width: calc(1440px + 2%);
  width: 100%;
  margin: 0 auto;
  

  div {
    display: flex;
    gap: 0.75rem;
  }
`

export const BaseButtonHeader = styled.button`
  height: 2.375rem;
  border: 0;
  border-radius: 6px;
`

export const ButtonBuy = styled(BaseButtonHeader)`
  color: ${props => props.theme["yellow-dark"]};
  background-color: ${props => props.theme["yellow-light"]};
  width: 2.375rem;
  cursor: pointer;

  &:hover {
    svg {
      transition: 0.2s;
      color: ${props => props.theme['yellow']};
    }
  }

  svg {
    position: relative;
    top: 6px;
    color: ${props => props.theme['yellow-dark']};
    
    
  }

  span {
    position: relative;
    bottom: 1.85rem;
    left: 1.75rem;
    display: flex;

    justify-content: center;
    align-items: center;

    width: 1rem;
    height: 1rem;
    border-radius: 50%;
    background-color: ${props => props.theme["yellow-dark"]};
    color: ${props => props.theme.white};
  }

`

export const ButtonLocation = styled(BaseButtonHeader)`
  font-family: 'Roboto', sans-serif;
  font-size: 0.875rem;
  font-weight: 400;
  line-height: 1.1375rem;
  color: ${props => props.theme["purple-dark"]};

  height: calc(2.375rem);
  width: calc(8.9375rem);
  padding: 0.5rem;
  background-color: ${props => props.theme["purple-light"]};

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.25rem;
`
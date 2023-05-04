import styled from 'styled-components'

export const FooterContainer = styled.footer`
  display: flex;
  gap: 1rem;
  justify-content: center;
  align-items: center;
  width: 100%;
  position: relative;
  bottom: 2rem;

  a {
    font-family: Roboto;
    text-decoration: none;
    font-size: 1.25rem;
    color: ${props => props.theme['purple-dark']};

    &:hover {
      color: ${props => props.theme['purple']};
    }
  }
`
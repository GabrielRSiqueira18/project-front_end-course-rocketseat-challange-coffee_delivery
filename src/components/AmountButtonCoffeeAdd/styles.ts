import styled from "styled-components";

export const ButtonMinusAndPlus = styled.span`
  width: 0.875rem;
  height: 0.875rem;
  color: ${props => props.theme["purple"]};
  display: flex;
  justify-content: center;
  align-items: center;
  
  cursor: pointer;

  &:hover {
    transition: 0.2s;
    color: ${props => props.theme["purple-dark"]};
  }
  
`

export const InputChoiceQuantityCoffees = styled.span`
  width: 1.5rem;
  height: 1.5rem;
  background-color: transparent;
  border: 0;
  user-select: none;

  display: flex;
  justify-content: center;
  align-items: center;

  text-align: center;
`
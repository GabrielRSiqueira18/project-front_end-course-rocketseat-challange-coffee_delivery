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

export const InputChoiceQuantityCoffees = styled.input`
  width: 1.5rem;
  height: 1.5rem;
  background-color: transparent;
  border: 0;

  display: flex;
  justify-content: center;
  align-items: center;

  text-align: center;

  &:focus {
    outline: 0;
  }

  &::-webkit-outer-spin-button, &::-webkit-inner-spin-button{
    -webkit-appearance: none;
    margin: 0;
  }
`
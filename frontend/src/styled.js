import styled from "styled-components";

export const Button = styled.button`
  padding: 8px 24px;
  border-radius: 16px;
  border: 1px solid #4248c0;
  background-color: ${props => props.background ? props.background : "#4248c0"};
  color: #fff;
  cursor: pointer;
  transition: all 0.3s ease 0s;

  &:hover{
    background-color: #6d72d7;
  }
`;
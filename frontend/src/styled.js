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

export const Modal = styled.div`
  display: flex;
  overflow: hidden;
  position: fixed;
  width: 100%;
  height: calc(100% + 16px);
  left: -1px;
  top: -1px;
  background: rgb(0 0 0 / 88%);
  z-index: 2;
`;

export const Card = styled.div`
  margin: auto;
  max-width: 750px;
  min-width: 420px;
  background-color: #eee;
  border: 1px solid rgba( 36, 57, 96, 1);
  border-radius: 16px;
`;

export const Title = styled.h1`
  color: #384047;
  margin-bottom: 16px;
  font-size: 1.250rem;
  padding: 16px;
`;

export const Form = styled.form``;

export const Footer = styled.footer`
  display: flex;
  justify-content: space-between;
  padding: 16px 16px 0 16px;
`;
import styled from "styled-components";
import { Link } from "react-router-dom";
import { Button } from "biologiatotal-ui";
import Icon from "../../../components/icon";

export const Container = styled.div``;

export const Modal = styled.div``;

export const Card = styled.div`
  width: 750px;
  border-radius: 16px;
`;

export const Header = styled.header`
  justify-content: space-between;
  border: 1px solid transparent;
  padding: 16px;
  background: #3171f1;
  font-size: 1.5rem;
  font-weight: 600;
  color: #fff;
`;

export const Links = styled(Link)`
  display: flex;
  align-items: center;
  text-align: center;
  width: 32px;
  height: 32px;
  padding-top: 1px;
  border-radius: 50%;
  background-color: rgba(0, 0, 0, 0.15);
`;

export const Icons = styled(Icon)`
  margin: auto;
  fill: #fff;
`;

export const Section = styled.section`
  width: 100%;
  overflow: hidden;
  padding: 16px;
  background: #fff;
`;

export const Form = styled.form``;

export const Footer = styled.footer`
  display: flex;
  justify-content: flex-end;
  border-top: 1px solid #eee;
  width: 100%;
  overflow: hidden;
  padding: 16px;
  background: #fff;
`;

export const Buttons = styled(Button)`
  margin-left: 16px;
`;

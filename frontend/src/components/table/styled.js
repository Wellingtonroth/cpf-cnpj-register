import styled from "styled-components";

export const Container = styled.div`
  padding: 0 24px 24px 24px;
`;

export const Table = styled.table`
  width: 100%;
  border: 1px solid #c8c7c7;
  border-radius: 16px;
  background-color: #fafafa;
  box-shadow: 0 2px 3px 0 rgba(0,0,0,.1);
`;

export const Tbody = styled.tbody``;

export const Tr = styled.tr`
  width: 100%;

  &:nth-child(old) {
    background-color: transparent;
  }

  &:nth-child(even) {
    background-color: rgb(118 122 245 / 15%);
  }
`;

export const Th = styled.th`
  width: calc(100% / 4);
  font-size: 1rem;
  font-weight: 600;
  text-align: left;
  padding: 16px;
`;

export const Td = styled.td`
  font-size: ${props => props.font ? props.font : "1rem"};
  color: #555;
  padding: 16px;

  /* &:first-letter {
    text-transform: capitalize; 
  } */
`;

export const Buttons = styled.button`
  padding: 4px 8px;
  font-size: 0.75rem;
  background: transparent;
  border: 1px solid #555;
  border-radius: 16px;
`;

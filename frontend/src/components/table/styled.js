import styled from "styled-components";
import { Button } from "biologiatotal-ui";

export const Container = styled.div`
  padding: 0 16px 16px 16px;
`;

export const Table = styled.table`
  background-color: #fff;
`;

export const Tr = styled.tr`
  &:nth-child(old) {
    background-color: transparent;
  }

  &:nth-child(even) {
    background-color: rgba(201, 187, 199, 0.15);
  }
`;

export const Tbody = styled.tbody``;

export const ThHeader = styled.th`
  font-weight: 600;
  color: #555 !important;
`;

export const Td = styled.td`
  color: ${props => (props.visible ? `#555` : `#999`)};
  ${props => props.width && `width: 80px;`}
`;

export const Buttons = styled(Button)``;

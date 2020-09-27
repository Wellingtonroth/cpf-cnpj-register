import React from "react";
import { Button } from "../styled";
import styled from "styled-components";

export default function Header({ openModal, setQuerySearch, searchParams, sendSearch, setSendSearch }) {
  return (
    <Headered>
      <Filters>
        <Input
          placeholder="Digite para pesquisar"
          type="search"
          // defaultValue={searchParams.text}
          // onChange={e => setQuerySearch({ text: e.target.value })}
          onKeyPress={e => {
            if (e.key === "Enter") setSendSearch(!sendSearch);
          }}
        />
        <Button link onClick={() => setSendSearch(!sendSearch)}>
          BUSCAR
        </Button>
      </Filters>
      <div>
        <Button onClick={() => openModal(true)}>
          ADICIONAR
        </Button>
      </div>
    </Headered>
  );
}

const Headered = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 24px;
`;

const Filters = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const Input = styled.input`
  min-width: 330px;
  align-items: center;
  border-radius: 16px;
  display: inline-flex;
  font-size: 1rem;
  height: 2.25em;
  justify-content: flex-start;
  padding: 0 16px 0 16px;
  background-color: #fff;
  border: 1px solid #dbdbdb;
  color: #555;
  box-shadow: inset 0 1px 2px rgba(10, 10, 10, 0.1);
  max-width: 100%;
  margin-right: 16px;

  ::placeholder {
    font-size: 0.875rem;
    color: #999999;
  }
`;

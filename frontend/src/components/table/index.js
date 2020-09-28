import React from "react";
import Loading from "../../utils/loading";
import { Button } from "../../styled";
import * as S from "./styled";

const tableHeader = [
  { label: "Nome", field: "name" },
  { label: "CPF", field: "cpfcnpj" },
  { label: "Lista negra?", field: "blacklist" },
];

export default function Table({ loading, data = [], toogleModalUpdate, setUserUpdate, deleteUser }) {
  if (loading) {
    return <LoadingData />;
  }

  return (
    <S.Container>
      <S.Table>
        <S.Tbody>
          <S.Tr>
            {tableHeader.map((it, i) => (
              <S.Th key={i}>{it.label}</S.Th>
            ))}
          </S.Tr>
        </S.Tbody>
        {data.map(row => {
          return (
            <S.Tr key={row.id}>
              <S.Td>{row[tableHeader[0].field]}</S.Td>
              <S.Td>{row[tableHeader[1].field]}</S.Td>
              <S.Td>{row[tableHeader[2].field] === false ? "não" : "sim"}</S.Td>
              <S.Td>
                <Button
                  background="#6d72d7"
                  onClick={() => {
                    setUserUpdate(row);
                    toogleModalUpdate(true);
                  }}>
                  EDITAR
                </Button>
                <Button onClick={() => {
                  deleteUser(row);
                }}>
                  excluir
                </Button>
              </S.Td>
            </S.Tr>
          );
        })}
      </S.Table>
    </S.Container>
  );
}

const LoadingData = () => (
  <>
    <Loading width="80%" />
    <Loading width="50%" />
    <Loading width="80%" />
    <Loading width="20%" />
    <Loading width="60%" />
    <Loading width="10%" />
    <Loading width="30%" />
    <Loading width="90%" />
    <Loading width="50%" />
    <Loading width="50%" />
    <Loading width="70%" />
    <Loading width="20%" />
    <Loading width="5%" />
  </>
);

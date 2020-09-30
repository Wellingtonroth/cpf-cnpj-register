import React from "react";
import Loading from "../../utils/loading";
import { Button } from "../../styled";
import * as S from "./styled";

const tableHeader = [
  { label: "Nome", field: "name" },
  { label: "CPF", field: "cpfcnpj" },
  { label: "Lista negra?", field: "blacklist" },
];


export default function Table({ loading, data = [], toogleModalUpdate, setUserUpdate, deleteUser, query }) {
  if (loading) {
    return <LoadingData />;
  }

  let search = query.searching === undefined ? "" : query.searching;

  function filterUser(user) {
    const value = `${user.name.toLowerCase()} ${user.cpfcnpj.replaceAll('.', '').replaceAll('-', '')}`;
    return value.includes(search.toLowerCase().replaceAll('.', '').replaceAll('-', ''));
  }

  const filteredUsers = () => {
    if (search) {
      return data.filter(user => filterUser(user));
    }
    return data;
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
        
          <>
            {filteredUsers().map(row => {
              return (
                <S.Tr key={row.id}>
                    <>
                      <S.Td>{row[tableHeader[0].field]}</S.Td>
                      <S.Td>{row[tableHeader[1].field]}</S.Td>
                      <S.Td>{row[tableHeader[2].field] === false ? "Não" : "Sim"}</S.Td>
                      <S.Td style={{ display: "flex", justifyContent: "space-around"}}>
                        <Button
                          style={{ marginRight: "8px" }}
                          background="#6d72d7"
                          onClick={() => {
                            setUserUpdate(row);
                            toogleModalUpdate(true);
                          }}>
                          EDITAR
                        </Button>
                        <Button
                          background="#6d72d7"
                          onClick={() => {
                          deleteUser(row);
                        }}>
                          EXCLUIR
                        </Button>
                    </S.Td>
                  </>
              </S.Tr>
            );
          })}
        </>
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

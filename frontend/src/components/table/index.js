import React from "react";
import * as Dimmer from "../../../components/dimmer";
import * as S from "./styled";

const tableHeader = [
  { label: "Nome", field: "name" },
  { label: "E-mail", field: "email" }
];

function Table({ loading, data = [], loadingTable, toogleModalUpdate, setProffUpdate }) {
  if (loading) {
    return <Loading />;
  }

  return (
    <S.Container>
      <S.Table className="table is-striped is-hoverable is-fullwidth">
        <S.Tbody>
          <S.Tr>
            {tableHeader.map((it, i) => (
              <S.ThHeader key={i}>{it.label}</S.ThHeader>
            ))}
          </S.Tr>
        </S.Tbody>
        {loadingTable && (
          <S.Tr key="loading-levels">
            <S.Td>
              <Dimmer.Text width="100%" />
              <Dimmer.Text width="50%" />
            </S.Td>
            <S.Td>
              <Dimmer.Text width="100%" />
              <Dimmer.Text width="50%" />
            </S.Td>
            <S.Td>
              <Dimmer.Text width="100%" />
              <Dimmer.Text width="50%" />
            </S.Td>
            <S.Td>
              <Dimmer.Text width="100%" />
              <Dimmer.Text width="50%" />
            </S.Td>
            <S.Td>
              <Dimmer.Text width="100%" />
              <Dimmer.Text width="50%" />
            </S.Td>
          </S.Tr>
        )}
        {data.map(row => {
          return (
            <S.Tr key={row.id}>
              <S.Td visible={row.display}>{row[tableHeader[0].field]}</S.Td>
              <S.Td visible={row.display}>{row[tableHeader[1].field]}</S.Td>
              <S.Td width>
                <S.Buttons
                  link
                  onClick={() => {
                    setProffUpdate(row);
                    toogleModalUpdate(true);
                  }}>
                  EDITAR
                </S.Buttons>
              </S.Td>
            </S.Tr>
          );
        })}
      </S.Table>
    </S.Container>
  );
}

export default Table;

const Loading = () => (
  <>
    <Dimmer.Text width="80%" />
    <Dimmer.Text width="50%" />
    <Dimmer.Text width="50%" />
    <Dimmer.Text width="40%" />
    <Dimmer.Text width="80%" />
    <Dimmer.Text width="50%" />
    <Dimmer.Text width="50%" />
    <Dimmer.Text width="40%" />
    <Dimmer.Text width="80%" />
    <Dimmer.Text width="50%" />
    <Dimmer.Text width="50%" />
    <Dimmer.Text width="40%" />
  </>
);

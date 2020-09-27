import React, { useState, useEffect } from "react";
import api from "./services/api";
import { ModalInsert } from "./components/modalInsert";
import { ModalUpdate } from "./components/modalUpdate";
import Table from "./components/table";
import Header from "./containers/header";

function App() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [modalInsert, setModalInsert] = useState(false);
  const [modalUpdate, setModalUpdate] = useState(false);
  const [userUpdate, setUserUpdate] = useState(null);
  
  useEffect(() => {
    setLoading(true);
    try {
      api.get('users').then(response => {
        if (response.error) {
          setLoading(false);
          return response;
        }
        setLoading(false);
        setData(response.data);
        return response;
      });
    } catch (e) {
      console.log("erro")
    }
  }, []);

  const addUser = body => {
    console.log(body, "SOU O BODYYYYYYYY");
    try {
      api.post('users', body).then(response => {
        if (response.status === 422) {
          console.log("O CPF informado já existe!");
        } else if (response.error) {
          console.log("Erro ao cadastrar usuário!");
        } else {
          setData([response, ...data]);
          setModalInsert(false);
          console.log("Usuário cadastrado com sucesso!");
        }
      });
    } catch (e) {
      console.log("Erro ao inserir usuário, tente novamente!");
    }
  };


  return (
      <>
        <Header
          // setSendSearch={setSendSearch}
          // sendSearch={sendSearch}
          openModal={setModalInsert}
          // setQuerySearch={setQuerySearch}
          // searchParams={searchParams}
        />
        <Table
          loading={loading}
          data={data}
          toogleModalUpdate={setModalUpdate}
          setUserUpdate={setUserUpdate}
        />
        {modalInsert && (
          <ModalInsert 
            openModal={setModalInsert} 
            addUser={body => addUser(body)} 
          />
        )}
        {modalUpdate && (
          <ModalUpdate
            openModal={setModalUpdate}
            // updateUser={body => updateUser(body)}
            // user={userUpdate}
          />
        )}
    </>
  );
}

export default App;
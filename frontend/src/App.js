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
      console.log("Erro ao carregar usuários")
    }
  }, []);
  
  const addUser = body => {
    try {
      api.post('users', body).then(response => {
        if (response.status === 422) {
          console.log("O CPF informado já existe!");
        } else if (response.error) {
          console.log("Erro ao cadastrar usuário!");
        } else {
          setData([response, ...data]);
          setModalInsert(false);
          window.location.reload();
          console.log("Usuário cadastrado com sucesso!");
        }
      });
    } catch (e) {
      console.log("Erro ao inserir usuário, tente novamente!");
    }
  };
  
  const updateUser = body => {
    let id = body.id;

    const validateBody = {
      name: body.name,
      cpfcnpj: body.cpfcnpj,
      blacklist: body.blacklist,
    }

    try {
      api.put(`users/${id}`, validateBody).then(response => {
        if (response.error) {
          console.log("Erro ao editar usuário!");
        } else {
          setData([response, ...data.filter(it => it._id !== body.id)]);
          setModalUpdate(false);
          window.location.reload();
          console.log("Usuário editado com sucesso!");
        }
      });
    } catch (e) {
      console.log("Erro ao editar usuário, tente novamente!");
    }
  };

  const deleteUser = body => {
    try {
      api.delete(`users/${body._id}`, {...body}).then(response => {
        if (response.error) {
          console.log("Erro ao remover usuário!");
        } else {
          setData([...data.filter(it => it.id !== body._id)]);
          window.location.reload();
          console.log("Usuário removido com sucesso!");
        }
      });
    } catch (e) {
      console.log("Erro ao excluir usuário, tente novamente!");
    }
  };

  return (
      <>
        <Header 
          openModal={setModalInsert} 
        />
        <Table
          loading={loading}
          data={data}
          toogleModalUpdate={setModalUpdate}
          setUserUpdate={setUserUpdate}
          deleteUser={deleteUser}
        />

        {modalInsert && (
          <ModalInsert openModal={setModalInsert} addUser={body => addUser(body)} />
        )}

        {modalUpdate && (
          <ModalUpdate 
            openModal={setModalUpdate} 
            updateUser={body => updateUser(body)}
            deleteUser={body => deleteUser(body)}
            user={userUpdate} 
          />
        )}
    </>
  );
}

export default App;
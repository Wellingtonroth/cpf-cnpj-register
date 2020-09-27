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
  const [proffUpdate, setProffUpdate] = useState(null);
  
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
          setProffUpdate={setProffUpdate}
        />
        {modalInsert && (
          <ModalInsert 
            openModal={setModalInsert} 
            // addProff={body => addProff(body)} 
            // loading={loadingTable}
          />
        )}
        {modalUpdate && (
          <ModalUpdate
            // openModal={setModalUpdate}
            // updateProff={body => updateProff(body)}
            // loading={loadingTable}
            // proff={proffUpdate}
          />
        )}
    </>
  );
}

export default App;
import React, { useState, useEffect } from "react";
import api from "./services/api";

function App() {
  const [users, setUsers] = useState([]);
  console.log(users)

  useEffect(() => {
    api.get("users").then(response => {
      setUsers(response);
    });
  }, []);


  return (
    <div>
      <h1>dae</h1>
    </div>
  );
}

export default App;
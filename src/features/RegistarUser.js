import { useContext, useState } from "react";
import { UsersContext } from "../user-context";
import requests from "../requests";

const CriarUtilizador = () => {
    const [nome, setNome] = useState("");
    const [password, setPassword] = useState("");
    const [username, setUsername] = useState("");
    const { createUser } = requests;
  
    const handleAdicionaUtilizador = async () => {
      const novoUtilizador = { nome: nome, password: password, username: username };
     
      const result = await createUser(novoUtilizador);
      if (result) {
       
        console.log(JSON.stringify(result.token));
        sessionStorage.setItem("token",result.token);      
      }
    };
    return (
      <>
        <h2>Criar Utilizador</h2>
        <input
          placeholder={"Username"}
          value={username}
          onChange={(event) => {
            setUsername(event.target.value);
          }}
        />
        
        <input
          placeholder={"Nome"}
          value={nome}
          onChange={(event) => {
            setNome(event.target.value);
          }}
        />
        <input tpe="password"
          placeholder={"Password"}
          value={password}
          onChange={(event) => {
            setPassword(event.target.value);
          }}
        />
        
        <br>
        </br>
        <button onClick={handleAdicionaUtilizador}>Registar User</button>
      </>
    );
  };
  export default CriarUtilizador;

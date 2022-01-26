import { useContext, useState } from "react";
import { IsLoggedInContext } from "../loggedin-context";
import { useNavigate } from "react-router-dom";
import requests from "../requests";

const CriarUtilizador = () => {
    const [nome, setNome] = useState("");
    const {isLoggedIn,setIsLoggedIn}=useContext(IsLoggedInContext);
    const [password, setPassword] = useState("");
    const [username, setUsername] = useState("");
    const { createUser } = requests;
    const navigate = useNavigate();
    const handleAdicionaUtilizador = async () => {
      const novoUtilizador = { nome: nome, password: password, username: username };
     
      const result = await createUser(novoUtilizador);
      if (result) {
       
        console.log(JSON.stringify(result.token));
        sessionStorage.setItem("token",result.token);  
        setIsLoggedIn(true);  
        navigate("/");  
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

import { useContext, createContext, useState } from "react";

import requests from "../requests";
import { IsLoggedInContext } from "../loggedin-context";
//import { useContext, useState } from "react";
import { UsersContext } from "../user-context";
import { ProductsContext } from "../products-context";
import { useNavigate } from "react-router-dom";

const { loginUser } = requests;
const LoginUser = () => {
  const {isLoggedIn,setIsLoggedIn}=useContext(IsLoggedInContext);
  const { users, setUsers } = useContext(UsersContext);
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");

  const navigate = useNavigate();

  const handleLoginUser = async () => {
    const user = { password: password, username: username };

    const result = await loginUser(user);
    if (result) {
      //ListarProdutos();
      console.log(JSON.stringify(result.token));
      sessionStorage.setItem("token", result.token);
      setIsLoggedIn(true);
      navigate("/");
    }
  };
  return (
    <div
    style={{
      display: "flex",
      justifyContent: "center",
      height: "10",
    }}
  >
    
    <>
      <h2>Efetuar Login de Autenticação</h2>
      <br>
      </br>
      <input
        placeholder={"Username"}
        value={username}
        onChange={(event) => {
          setUsername(event.target.value);
        }}
      />
      <input
        type="password"
        placeholder={"Password"}
        value={password}
        onChange={(event) => {
          setPassword(event.target.value);
        }}
      />
      <br></br>
      <button onClick={handleLoginUser}>Entrar</button>
    </>
    </div>
  );
};
export default LoginUser;

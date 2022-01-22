import { useContext, useState } from "react";
import { UsersContext } from "../user-context";
import requests from "../requests";
import { ProductsContext } from "../products-context";
import { useNavigate } from "react-router-dom";


const { loginUser } = requests;
const LoginUser = () => {
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
      navigate("/");
    }
  };
  return (
    <>
      <h2>Efetuar Login de Autenticação</h2>
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
  );
};
export default LoginUser;

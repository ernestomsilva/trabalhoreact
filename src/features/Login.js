import { useContext, useState } from "react";
import { UsersContext } from "../user-context";
import requests from "../requests";
import { ProductsContext } from "../products-context";
const { loginUser } = requests;

const LoginUser = () => {
  const { users, setUsers } = useContext(UsersContext);
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");

  const handleLoginUser = async () => {
    const user = { password: password, username: username };

    const result = await loginUser(user);
    if (result) {
      //ListarProdutos();
      console.log(JSON.stringify(result.token));
      sessionStorage.setItem("token", result.token);
    }
  };
  return (
    <>
      <h2>Efetuar Login</h2>
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

      <button onClick={handleLoginUser}>Login</button>
      
    </>
  );
};
export default LoginUser;

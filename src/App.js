import { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import requests from "./requests";
import CriarUtilizador from "./features/RegistarUser";
import LoginUser from "./features/Login";
import RegistarProduto from "./features/RegistarProduto";
import ListaProdutos from "./features/ListaProdutos";
import ListarProdutos from "./features/ListarProdutos";

function App() {
  return (
    
    <div>
    <CriarUtilizador></CriarUtilizador>
    <LoginUser></LoginUser>
    <RegistarProduto></RegistarProduto>
    
    
   </div>
   

  );
}

export default App;

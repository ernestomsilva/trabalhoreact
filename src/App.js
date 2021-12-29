import { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import requests from "./requests";
import CriarUtilizador from "./features/RegistarUser";
import LoginUser from "./features/Login";
import RegistarProduto from "./features/RegistarProduto";
import ListarProdutos from "./features/ListarProdutos";

function App() {
  return (
    
    <div>
    <CriarUtilizador></CriarUtilizador>
    <LoginUser></LoginUser>
    <RegistarProduto></RegistarProduto>
    <ListarProdutos></ListarProdutos>
   </div>
   
    /*
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand>Menu</Navbar.Brand>
          <Nav className="me-auto">
            <Login></Login>
            <CriarUtilizador></CriarUtilizador>
            <LoginUser></LoginUser>
            <RegistarProduto></RegistarProduto>
            <ListarProdutos></ListarProdutos>
          </Nav>
        </Container>
      </Navbar>
          
    </>
    */
    
  );
}

export default App;

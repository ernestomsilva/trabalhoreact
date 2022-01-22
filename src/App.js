import { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Accordion } from "react-bootstrap";
import { Card } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { Routes, Route, Link, Switch, useNavigate } from "react-router-dom";
import requests from "./requests";
//Componentes

//paginas
import CriarUtilizador from "./features/RegistarUser";
import LoginUser from "./features/Login";
import RegistarProduto from "./features/RegistarProduto";
import ListarProdutos from "./features/ListarProdutos";
import AtualizarProduto from "./features/AtualizarProduto";
import CriarEncomenda from "./features/CriarEncomenda";


import { Nav } from "react-bootstrap";
import Home from "./Home";

function App() {
  const [activeKey, setActiveKey] = useState("/");
  const navigate = useNavigate();
  useEffect(() => {
    navigate("/");
  }, []);

  return (
    <>
      <Nav
        variant="tabs"
        activeKey={activeKey}
        onSelect={(selectedKey) => {
          setActiveKey(selectedKey);
        }}
      >
        <Nav.Item>
          <Nav.Link as={Link} eventKey="/" to="/">
            Loja do ErnieMan
          </Nav.Link>
        </Nav.Item>
        {!sessionStorage.getItem("token") && (
          <>
        <Nav.Item>
          <Nav.Link as={Link} eventKey="/registar" to="/registar">
            Registar Utilizadores
          </Nav.Link>
        </Nav.Item>

        <Nav.Item>
          <Nav.Link as={Link} eventKey="/login" to="/login">
            Login
          </Nav.Link>
        </Nav.Item>
        </>
        )}
       
        {sessionStorage.getItem("token") && (
          <>
            <Nav.Item>
              <Nav.Link
                as={Link}
                eventKey="/criarencomenda"
                to="/criarencomenda"
              >
                Criar Encomenda
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                as={Link}
                eventKey="/listarprodutos"
                to="/listarprodutos"
              >
                Gestão de Produtos
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              
          <Nav.Link as={Link} eventKey="/login" to="/login">
            LogOut
          </Nav.Link>
        </Nav.Item>
            
          </>
        )}
      </Nav>

      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/registar" element={<CriarUtilizador />}></Route>
        <Route path="/login" element={<LoginUser />}></Route>
        <Route path="/listarprodutos" element={<ListarProdutos />}></Route>
        <Route path="/criarencomenda" element={<CriarEncomenda />}></Route>
      </Routes>
    </>
  );
}

export default App;

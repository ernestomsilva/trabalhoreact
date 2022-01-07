import { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Routes, Route, Link, useNavigate } from "react-router-dom";
import requests from "./requests";
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
        variant="pills"
        activeKey={activeKey}
        onSelect={(selectedKey) => {
          setActiveKey(selectedKey);
        }}
      >
        <Nav.Item>
          <Nav.Link as={Link} eventKey="/" to="/">
            Home
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link as={Link} eventKey="/registar" to="/registar">
            Registar utilizadores
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link as={Link} eventKey="/login" to="/login">
            Efetuar Login
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link as={Link} eventKey="/registarproduto" to="/registarproduto">
            Registar de Produtos
          </Nav.Link>
        </Nav.Item>

        <Nav.Item>
          <Nav.Link as={Link} eventKey="/listarprodutos" to="/listarprodutos">
            Lista de Produtos
          </Nav.Link>
        </Nav.Item>
             </Nav>

      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/registar" element={<CriarUtilizador />}></Route>
        <Route path="/login" element={<LoginUser />}></Route>
        <Route path="/listarprodutos" element={<ListarProdutos />}></Route>
        <Route path="/registarproduto" element={<RegistarProduto />}></Route>
        
      </Routes>
    </>
  );
}

export default App;

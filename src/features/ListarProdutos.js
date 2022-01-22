import { useContext, useState, useEffect } from "react";
import { ProductsContext } from "../products-context";
import requests from "../requests";
import MyTable from "../Layout/MyTable";
import { Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

import AtualizarProduto from "./AtualizarProduto";
import CriarEncomenda from "./CriarEncomenda";
import RegistarProduto from "./RegistarProduto";
const ListarProdutos = () => {
  const { listProducts } = requests;
  const { eliminarProduct } = requests;
  console.log("button");

  const [categoria, setCategoria] = useState("");
  const [descricao, setDescricao] = useState("");
  const [nome, setNome] = useState("");
  const [indiceEliminar, setIndiceEliminar] = useState("");
  const [products, setProducts] = useState([]);

  const handleIndiceEliminar = async () => {
    const result = await eliminarProduct(indiceEliminar);
    if (result) {
      console.log(result);
    }
  };

  const handleListarProdutos = async () => {
    const products = await listProducts();
    setProducts(products ?? []);
    console.log(products);
  };

  return (
    <>
      <h2>Lista de Produtos</h2>
      <br></br>
      <br></br>

      <ProductsContext.Provider value={{ products, setProducts }}>
        <>
          <Button variant="primary" onClick={handleListarProdutos}>
            Listar Produtos
          </Button>
        </>
        <br></br>
        <br></br>
        {/* componente tabela */}
        <MyTable values={products}></MyTable>
        <br></br>
        <br></br>
    <RegistarProduto></RegistarProduto>
    <br></br>
        <br></br>
        {/* eliminiar produto conforme o indice selecionado */}
        <h2 style={{ color: "red" }}>Eliminar Produtos</h2>
        <input
          placeholder="Insira Indice a Eliminar"
          value={indiceEliminar}
          onChange={(event) => {
            setIndiceEliminar(event.target.value);
          }}
        />
        <br></br>
        <br></br>
        {/* botão para eliminar */}
        <Button variant="danger" onClick={handleIndiceEliminar}>
          Eliminar Produto
        </Button>
        </ProductsContext.Provider>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
      <AtualizarProduto></AtualizarProduto>
      <br></br>
        <br></br> <br></br>
        <br></br>
    </>
  );
};

const MainPage = () => {
  const [products, setProducts] = useState([]);

  return (
    <ProductsContext.Provider value={{ products, setProducts }}>
      <MyTable values={products}></MyTable>
    </ProductsContext.Provider>
  );
};
export default ListarProdutos;

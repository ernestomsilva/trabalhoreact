import { useContext, useState, useEffect } from "react";
import { ProductsContext } from "../products-context";
import requests from "../requests";
import MyTable from "../Layout/MyTable";
import { Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

import AtualizarProduto from "./AtualizarProduto";
import CriarEncomenda from "./CriarEncomenda";
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
      <ProductsContext.Provider value={{ products, setProducts }}>
        <h2>Lista de Produtos</h2>
        <>
          <Button variant="primary" onClick={handleListarProdutos}>Listar Produtos
          </Button>
        </>
        <MyTable values={products}></MyTable>
        <input
          placeholder="indice a eliminar"
          value={indiceEliminar}
          onChange={(event) => {
            setIndiceEliminar(event.target.value);
          }}
        />
        
        <Button variant="danger" onClick={handleIndiceEliminar}>Eliminar Produto</Button>
        
      </ProductsContext.Provider>

      <AtualizarProduto></AtualizarProduto>

      <CriarEncomenda></CriarEncomenda>
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

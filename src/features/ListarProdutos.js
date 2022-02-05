import { useContext, useState, useEffect } from "react";
import { ProductsContext } from "../products-context";
import requests from "../requests";
import MyTable from "../Layout/MyTable";
import { Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import EliminarProdutos from "./EliminarProdutos";
import AtualizarProduto from "./AtualizarProduto";

import RegistarProduto from "./RegistarProduto";
import Logout from "./Logout";

const ListarProdutos = () => {
  const { listProducts } = requests;
  const { eliminarProduct } = requests;
  console.log("button");

  const [nome, setNome] = useState("");
  const [indiceEliminar, setIndiceEliminar] = useState("");

  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProdutos = async () => {
      const products = await listProducts();
      setProducts(products ?? []);
    };
    fetchProdutos();
  }, [listProducts]);

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
      <ProductsContext.Provider value={{products, setProducts}}>
        <h2>Lista de Produtos</h2>
        <br></br>
        <br></br>
        <>
          <Button variant="primary" onClick={handleListarProdutos}>
            Listar Produtos
          </Button>
        </>
        <br></br>
        <br></br>
        {/* componente tabela */}
        <MyTable></MyTable>
        <br></br>
        <br></br>
        <RegistarProduto></RegistarProduto>
        <br></br>
        <br></br>
       
       
        <br></br>
        <br></br>
        <EliminarProdutos></EliminarProdutos>
        <br></br>
        <br></br>
        <AtualizarProduto></AtualizarProduto>
        <br></br>
        <br></br> <br></br>
        <br></br>
      </ProductsContext.Provider>
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

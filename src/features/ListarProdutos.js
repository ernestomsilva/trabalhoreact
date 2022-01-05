import { useContext, useState, useEffect } from "react";
import { ProductsContext } from "../products-context";
import requests from "../requests";
import MyTable from "../Layout/MyTable";
import ListaProdutos from "./ListaProdutos";

const ListarProdutos = () => {
  const { listProducts } = requests;
  console.log("button");

  const [categoria, setCategoria] = useState("");
  const [descricao, setDescricao] = useState("");
  const [nome, setNome] = useState("");
  
  const [products, setProducts] = useState([]);
  
  useEffect(() => {
    const fetchproducts = async () => {
      const products = await listProducts();
      setProducts(products ?? []);
    };
    fetchproducts();
  }, [listProducts]);

  
  return (
    <>
      <ProductsContext.Provider value={{ products, setProducts }}>
        <h2>Lista de Produtos</h2>
        <input
          placeholder={"Categoria"}
          value={categoria}
          onChange={(event) => {
            setCategoria(event.target.value);
          }}
        />
        <input
          placeholder="Descricao"
          value={descricao}
          onChange={(event) => {
            setDescricao(event.target.value);
          }}
        />
        <input
          placeholder={"Nome"}
          value={nome}
          onChange={(event) => {
            setNome(event.target.value);
          }}
        />
        <button>Listar Produtos</button>
        
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

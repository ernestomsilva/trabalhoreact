import { useContext, useState } from "react";
import { ProductsContext } from "../products-context";
import requests from "../requests";
import ListaProdutos from "./ListaProdutos";

const ListarProdutos = () => {
  const { listProducts } = requests;
  console.log("button");
  const [products, setProducts] = useState([]);
  const handleListarProdutos = async () => {
    const result = await listProducts();
    if (result) {
      //console.log(result);
      //sessionStorage.setItem("listaProdutos", result);
      setProducts(result ?? []) ;
      //console.log("contexto");
      //console.log(products);
    }
  };
  return (
    <>
      <button onClick={handleListarProdutos}>Listar Produtos</button>
     
    </>
  );
};


const MainPage = () => {
  const [products, setProducts] = useState([]);

  return (
    <ProductsContext.Provider value={{ products, setProducts }}>
      <ListarProdutos />
      
    </ProductsContext.Provider>
  );
};
export default ListarProdutos;

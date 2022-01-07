import { useContext, useState, useEffect } from "react";
import { ProductsContext } from "../products-context";
import requests from "../requests";
import MyTable from "../Layout/MyTable";

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


  
  useEffect(() => {
    const fetchproducts = async () => {
      const products = await listProducts();
      setProducts(products ?? []);
      console.log(products);
    };
    fetchproducts();
  }, [listProducts]);

  
  return (
    <>
      <ProductsContext.Provider value={{ products, setProducts }}>

        <h2>Lista de Produtos</h2>
        {/* <input
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
        /> */}

        
        <button onClick={handleIndiceEliminar}>Listar Produtos</button>

        <MyTable values={products}></MyTable>
        <input
          placeholder="indice a eliminar"
          value={indiceEliminar}
          onChange={(event) => {
          setIndiceEliminar(event.target.value);
            
          
          }}
        />

        <button onClick={handleIndiceEliminar}>Eliminar Produto</button>

       

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

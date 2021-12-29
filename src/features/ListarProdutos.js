import { useContext, useState } from "react";
import { ProductsContext } from "../products-context";
import requests from "../requests";

const ListarProdutos = () => {
  const { listProducts } = requests;
  console.log("button");
  const [products, setProducts] = useState([]);
  const handleListarProdutos = async () => {
    const result = await listProducts();
    if (result) {
      //console.log(result);
      //sessionStorage.setItem("listaProdutos", result);
      setProducts(result);
      //console.log("contexto");
      //console.log(products);
    }
  };
  return (
    <>
      <button onClick={handleListarProdutos}>Listar Produtos</button>
      <FazerTabela />
    </>
  );
};

const FazerTabela = ({}) => {
  //const [products, setProducts] = useState([]);
  const { products } = useContext(ProductsContext);
  console.log("Fazer Tabela");
  console.log(products);
  return (
    <>
      <h2>Lista de Produtos</h2>
      <table>
        <thead>
          <td>nome1</td>
          <td>nome2</td>
          <td>nome3</td>
        </thead>
        <tbody>
          {products.map((product) => {
         console.log("teste1");
            return (
              <tr>
                <td>{product.categoria}</td>
                <td>{product.nome}</td>
                <td>{product.descricao}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};
const MainPage = () => {
  const [products, setProducts] = useState([]);

  return (
    <ProductsContext.Provider value={{ products, setProducts }}>
      <ListarProdutos />
      <FazerTabela />
    </ProductsContext.Provider>
  );
};
export default ListarProdutos;

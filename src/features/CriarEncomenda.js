import { useContext, useState, useEffect } from "react";
import { ProductsContext } from "../products-context";
import requests from "../requests";
import MyTable from "../Layout/MyTable";
import { Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Logout from "./Logout";

const CriarEncomenda = () => {
  const { listProducts } = requests;

  const [produtoId, setProdutoId] = useState("");
  const [quantidade, setQuantidade] = useState("");
  const { createEncomenda } = requests;

  const [products, setProducts] = useState([]);
  const [encomenda, setEncomenda] = useState([]);

  const handleAdicionaProduto = async () => {
    console.log("Adiciona produtos")
    const linhaEncomenda = {
      produtoId: Number(produtoId),
      quantidade: Number(quantidade),
    };
    setEncomenda([...encomenda, linhaEncomenda]);
    
  };

  const handleEncomenda = async () => {
    const result = await createEncomenda({ linhas: encomenda });

    if (result) {

      setEncomenda([]);
        console.log(result);
    }
  };

  console.log("button");

  useEffect(() => {
    const fetchProdutos = async () => {
      const products = await listProducts();
      setProducts(products ?? []);
    };
    fetchProdutos();
  }, [listProducts]);

  return (
    <>
      <h2>Lista de Produtos</h2>
      <ProductsContext.Provider value={{ products, setProducts }}>
        {/* componente tabela */}
        <MyTable></MyTable>
      </ProductsContext.Provider>
      <br></br>
      <br></br>

      <h2>Criar Encomenda</h2>
      <input
        placeholder={"ProdutoId"}
        value={produtoId}
        onChange={(event) => {
          setProdutoId(event.target.value);
        }}
      />
      <input
        placeholder={"Quantidade"}
        value={quantidade}
        onChange={(event) => {
          setQuantidade(event.target.value);
        }}
      />
      <br></br>
      <br></br>
      <button onClick={handleAdicionaProduto}>Adicionar Produto</button>
      <button onClick={handleEncomenda}>Registar Encomenda</button>
      <br></br>
      <br></br>
      <table>
        <thead>
          <tr>
            <th>Indice</th>

            <th>Quantidade</th>
          </tr>
        </thead>

        <tbody>
          {encomenda.map((encomenda, index) => {
            return (
              <tr key={index}>
                <td>{encomenda.produtoId}</td>

                <td>{encomenda.quantidade}</td>
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
      <MyTable></MyTable>
    </ProductsContext.Provider>
  );
};
export default CriarEncomenda;

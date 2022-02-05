import { useContext, useState } from "react";
import requests from "../requests";
import { Button } from "react-bootstrap";
import MySelect from "../Layout/MySelect";
import { ProductsContext } from "../products-context";

const AtualizarProduto = () => {
  const { updateProdut } = requests;
  const { products, setProducts } = useContext(ProductsContext);
  const [produto, setProduto] = useState("");

  const handleChange = (event) => {
    setProduto({ ...produto, [event.target.name]: event.target.value });
    console.log(products);
  };

  const handleAtualizaProduto = async () => {
    const result = await updateProdut(produto);

    if (result) {
      console.log(result);

      const index = products.findIndex((produto) => {
        
        return produto.id === result.id;
      });
      console.log(index) ;

      let cloneProducts = [...products];

      cloneProducts[index] = { id: result, ...produto };

      setProducts(cloneProducts);

      setProduto();
    }
  };
  return (
    <>
      <h2>Atualizar Produtos</h2>

      <MySelect
        selectedValue={produto?.id ?? ""}
        onChange={(event) => {
          setProduto(products.find((p) => p.id == event.target.value));
        }}
        selectedValue={produto?.id ?? ""}
        values={products}
      />
      <input
        placeholder={"Nome"}
        value={produto?.nome ?? ""}
        name={"nome"}
        onChange={handleChange}
      />
      <input
        placeholder={"Categoria"}
        value={produto?.categoria ?? ""}
        name={"categoria"}
        onChange={handleChange}
      />
      <input
        placeholder={"Descrição"}
        value={produto?.descricao ?? ""}
        name={"descricao"}
        onChange={handleChange}
      />

      <input
        placeholder={"imageUrl"}
        value={produto?.imagemUrl ?? ""}
        name={"imagemUrl"}
        onChange={handleChange}
      />

      <input
        placeholder={"Preco"}
        value={produto?.preco ?? ""}
        name={"preco"}
        onChange={handleChange}
      />
      <br></br>
      <br></br>
      <Button variant="primary" onClick={handleAtualizaProduto}>
        Atualiza Produto
      </Button>
    </>
  );
};
export default AtualizarProduto;

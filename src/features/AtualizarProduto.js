import { useContext, useState } from "react";
import requests from "../requests";

const AtualizarProduto = () => {
  const [indice, setIndice] = useState("");
  const [categoria, setCategoria] = useState("");
  const [descricao, setDescricao] = useState("");
  const [imagemUrl, setimagemUrl] = useState("");
  const [nome, setNome] = useState("");
  const [preco, setPreco] = useState("");
  const { updateProdut } = requests;

  const handleAtualizaProduto = async () => {
    const produto = {
      indice: indice,
      categoria: categoria,
      descricao: descricao,
      imagemUrl: imagemUrl,
      nome: nome,
      preco: preco,
    };

    const result = await updateProdut(produto);
    if (result) {
      console.log(JSON.stringify(result));
    }
  };
  return (
    <>
      <h2>Atualizar Produtos</h2>
      
      <input
        placeholder={"Indice"}
        value={indice}
        onChange={(event) => {
          setIndice(event.target.value);
        }}
      />
      <input
        placeholder={"Categoria"}
        value={categoria}
        onChange={(event) => {
          setCategoria(event.target.value);
        }}
      />
      <input
        placeholder={"Descrição"}
        value={descricao}
        onChange={(event) => {
          setDescricao(event.target.value);
        }}
      />

      <input
        placeholder={"imageUrl"}
        value={imagemUrl}
        onChange={(event) => {
          setimagemUrl(event.target.value);
        }}
      />
      <input
        placeholder={"Nome"}
        value={nome}
        onChange={(event) => {
          setNome(event.target.value);
        }}
      />
      <input
        placeholder={"Preco"}
        value={preco}
        onChange={(event) => {
          setPreco(event.target.value);
        }}
      />

      <button onClick={handleAtualizaProduto}>Atualiza Produto</button>
    </>
  );
};
export default AtualizarProduto;

import { useContext, useState } from "react";
import requests from "../requests";

const RegistarProduto = () => {
    
    const [categoria, setCategoria] = useState("");
    const [descricao, setDescricao] = useState("");
    const [imagemUrl, setimagemUrl] = useState("");
    const [nome, setNome] = useState("");
    const [preco, setPreco] = useState("");
    const { createProdut } = requests;
  
    const handleAdicionaProduto = async () => {
      const produto = { categoria: categoria, descricao: descricao,
        imagemUrl: imagemUrl, nome: nome, preco: preco  };
     
      const result = await createProdut(produto);
      if (result) {
       
        console.log(JSON.stringify(result));
              
      }
    };
    return (
      <>
        <h1>Criar Novo Produto</h1>

        <input
          placeholder={"Nome"}
          value={nome}
          onChange={(event) => {
            setNome(event.target.value);
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
          placeholder={"Preco"}
          value={preco}
          onChange={(event) => {
            setPreco(event.target.value);
          }}         
          
        />
        <br>
        </br>
        <button  onClick={handleAdicionaProduto}>Registar Produto</button>
      </>
    );
  };
  export default RegistarProduto;

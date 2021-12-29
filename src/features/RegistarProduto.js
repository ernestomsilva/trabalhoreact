import { useContext, useState } from "react";
import { UsersContext } from "../user-context";
import requests from "../requests";

const RegistarProduto = () => {
    const { users, setUsers } = useContext(UsersContext);
    const [categoria, setCategoria] = useState("");
    const [descricao, setDescricao] = useState("");
    const [id, setId] = useState("");
    const [imagemUrl, setimagemUrl] = useState("");
    const [nome, setNome] = useState("");
    const [preco, setPreco] = useState("");
    const { createProdut } = requests;
  
    const handleAdicionaProduto = async () => {
      const produto = { categoria: categoria, descricao: descricao,
        id: id, imagemUrl: imagemUrl, nome: nome, preco: preco  };
     
      const result = await createProdut(produto);
      if (result) {
       
        console.log(JSON.stringify(result));
        //sessionStorage.setItem("token",JSON.stringify(result) )

      
      }
    };
    return (
      <>
        <h2>Registar Novo Produto</h2>
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
          placeholder={"Id"}
          value={id}
          onChange={(event) => {
            setId(event.target.value);
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
        
        <button onClick={handleAdicionaProduto}>Registar Produto</button>
      </>
    );
  };
  export default RegistarProduto;

import { useContext, useState } from "react";
import requests from "../requests";

const CriarEncomenda = () => {
    
    const [produtoId, setProdutoId] = useState("");
    const [quantidade, setQuantidade] = useState("");
    const { createEncomenda} = requests;
  
    const handleEncomenda = async () => {
      const encomenda = { produtoId: produtoId, quantidade: quantidade,
        };
     
      const result = await createEncomenda(encomenda);
      if (result) {
       
        console.log(JSON.stringify(result));
              
      }
    };

    return (
      <>
        <h2>Criar  Encomenda</h2>
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
             
        <button onClick={handleEncomenda}>Registar Encomenda</button>
      </>
    );
  };
  export default CriarEncomenda;

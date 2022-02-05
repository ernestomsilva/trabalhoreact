import { Table } from "react-bootstrap";
import { useState, useContext } from "react";
import { ProductsContext } from "../products-context";

const MyTable = ({ values }) => {
  console.log("context test");
  console.log(values);

  const [nome, setNome] = useState("");
  const [descricao, setDescricao] = useState("");
  const {products} = useContext(ProductsContext);

  
  console.log(nome);

  const filtrados=()=> {
   return products
    .filter( product =>{
      return product.nome.includes(nome)
    })
    .filter(product =>{
      return product.descricao.includes(descricao)
    })
    
    
    
  }

  return (
    <>
      <input
        name="filternome"
        type="search"
        value={nome}
        onChange={(event) => {
          setNome(event.target.value)}}
        className="input"
        placeholder="Pesquisa por Nome"
      />

      <input
        name="filterdescricao"
        type="search"
        value={descricao}
        onChange={(event) => {
        setDescricao(event.target.value)}}
        className="input"
        placeholder="Pesquisa por Descricao"
      />

      <Table striped bordered responsive hover variant="dark">
        <thead>
          <tr>
            <th>Indice</th>
            <th>Nome</th>
            <th>Categoria</th>
            <th>Descricao</th>
            <th>Imagem</th>
            <th>Preço</th>
           
          </tr>
        </thead>
        <tbody>
          {filtrados().map((produto, indice) => {
            return (
              <tr key={indice}>
                <td>{produto.id}</td>
                <td>{produto.nome}</td>
                <td>{produto.categoria}</td>
                <td>{produto.descricao}</td>
                <td><img src={produto.imagemUrl} style={{height: 100, width: 100}}/></td>
                <td>{produto.preco}</td>
              
              </tr>
            );
          })}
        </tbody>
      </Table>
    </>
  );
};

export default MyTable;

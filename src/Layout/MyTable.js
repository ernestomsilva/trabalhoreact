import { Table } from "react-bootstrap";
import { useState, useContext } from "react";

const MyTable = ({ values }) => {
  console.log("context test");
  console.log(values);

  const [categoria, setCategoria] = useState("");
  const [nome, setNome] = useState("");
  const [descricao, setDescricao] = useState("");
  const [foundProducts, setFoundProducts] = useState(values);

  console.log("teste do nome");
  console.log(nome);

  const filter = (e) => {
    const keyword = e.target.value;

    if (keyword) {
      const results = values.filter((value) => {
        if (e.target.name === "filterdescricao") {
          return value.descricao.toLowerCase().includes(keyword.toLowerCase());
          
        }
        else{
          return value.nome.toLowerCase().startsWith(keyword.toLowerCase());
        }
      });

      setFoundProducts(results);

    } else {
      setFoundProducts(values);
      
    }

    if(e.target.name === "filterdescricao") {

      setDescricao(keyword);
    }
    else{
      setNome(keyword);
    }

    
  };

  return (
    <>
      <input
        name="filternome"
        type="search"
        value={nome}
        onChange={filter}
        className="input"
        placeholder="Pesquisa por Nome"
      />

      <input
        name="filterdescricao"
        type="search"
        value={descricao}
        onChange={filter}
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
            <th>Eliminar</th>
          </tr>
        </thead>
        <tbody>
          {foundProducts.map((produto, indice) => {
            return (
              <tr key={indice}>
                <td>{produto.id}</td>
                <td>{produto.nome}</td>
                <td>{produto.categoria}</td>
                <td>{produto.descricao}</td>
                <td>{produto.imagemUrl}</td>
                <td>{produto.preco}</td>
                <td>
                  <input type="checkbox" onClick="get"></input>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </>
  );
};

export default MyTable;

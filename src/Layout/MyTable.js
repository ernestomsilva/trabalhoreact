import { Table } from "react-bootstrap";
import { useState, useContext } from "react";

const MyTable = ({ values }) => {
  console.log("verificar context");
  console.log(values);
  
  const [categoria, setCategoria] = useState("");
  const [nome, setNome] = useState("");
  const [foundProducts, setFoundProducts] = useState(values); 
  console.log("aqui vai oo nome");
  console.log(nome);
 
  const filter = (e) => {
    const keyword = e.target.value;

    if (keyword !== '') {
      const results = values.filter((value) => {
        return value.nome.toLowerCase().startsWith(keyword.toLowerCase());
        // Use the toLowerCase() method to make it case-insensitive
      });
      setFoundProducts(results);
    } else {
      setFoundProducts(values);
      // If the text field is empty, show all users
    }

    setNome(keyword);

  };

  return (
  
    <>
     <input
        type="search"
        value={nome}
        onChange={filter}
        className="input"
        placeholder="FilterNome"
      />
    
      <Table striped bordered responsive hover variant="dark">
        <thead>
          <tr>
            <th>Indice</th>
            <th>Categoria</th>
            <th>Nome</th>
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
                <td>{produto.categoria}</td>
                <td>{produto.nome}</td>
                <td>{produto.descricao}</td>
                <td>{produto.imagemUrl}</td>
                <td>{produto.preco}</td>
                <td><input type="checkbox" onClick="get"></input></td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </>
  );
};

export default MyTable;

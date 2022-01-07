import { Table } from "react-bootstrap";

const MyTable = ({ values }) => {
  console.log("verificar context");
  console.log(values);
  return (
    <Table striped bordered responsive hover variant="dark">
      <thead>
        <tr>
          <th>Indice</th>
          <th>Categoria</th>
          <th>Nome</th>
          <th>Descricao</th>
          <th>Imagem</th>
          <th>Preço</th>
          
        </tr>
      </thead>
      <tbody>
        {values.map((produto, indice) => {
          return (
            <tr key={indice}>
              <td>{produto.id}</td>
              <td>{produto.categoria}</td>
              <td>{produto.nome}</td>
              <td>{produto.descricao}</td>
              <td>{produto.imagemUrl}</td>
              <td>{produto.preco}</td>
            </tr>
          );
        })}
      </tbody>
    </Table>
  );
};

export default MyTable;

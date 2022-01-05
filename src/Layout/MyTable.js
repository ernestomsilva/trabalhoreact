const MyTable = ({ values }) => {
  console.log("verificar context");
  console.log(values);
  return (
    <table>
      <thead>
        <tr>
          <th>Categoria</th>
          <th>Descricao</th>
          <th>Nome</th>
        </tr>
      </thead>
      <tbody>
        {values.map((produto, id) => {
          return (
            <tr key={id}>
              <td>{produto.categoria}</td>
              <td>{produto.descricao}</td>
              <td>{produto.nome}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default MyTable;

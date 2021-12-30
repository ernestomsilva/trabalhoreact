const MyTable = ({ values }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Nome</th>
          <th>Email</th>
          <th>Utilizador</th>
        </tr>
      </thead>
      <tbody>
        {values.map((produto, index) => {
          return (
            <tr key={index}>
              <td>{produto.nome}</td>
              <td>{produto.descricao}</td>
              <td>{produto.preco}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default MyTable;

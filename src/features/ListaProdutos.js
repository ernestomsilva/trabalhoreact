import { useContext } from "react";
import { ProductsContext } from "../products-context";
import MyTable from "../Layout/MyTable";
import ListarProdutos from "./ListarProdutos";


useEffect(() => {
    const fetch = async () => {
      const users = await getProdutos();
      setUsers(users ?? []);
    };
    fetchUsers();
  }, [getUsers]);
};
const ListaProdutos = () => {
  const { produtos } = useContext(ProductsContext);

  return (
    <>
      <h2>ListaProdutos</h2>
      <MyTable values={produtos} />
    </>
  );
};
export default ListaProdutos;

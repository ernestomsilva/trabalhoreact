import { useContext } from "react";
import { ProductsContext } from "../products-context";
import MyTable from "../Layout/MyTable";


const ListarProdutos = () => {
  const { products } = useContext(ProductsContext);

  return (
    <>
      <h2>ListaUtilizadores</h2>
      <MyTable values={products} />
    </>
  );
};
export default ListarProdutos;
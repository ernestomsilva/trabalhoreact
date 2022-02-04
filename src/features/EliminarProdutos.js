import { useContext, useState } from "react";
import requests from "../requests";
import { Button } from "react-bootstrap";
import MySelect from "../Layout/MySelect";
import { ProductsContext } from "../products-context";


const EliminarProduto = () => {
  
  
  const {products, setProducts} = useContext(ProductsContext); 
  const [indiceEliminar, setIndiceEliminar]= useState("");
  const { eliminarProduct } = requests;
  const [product, setProduct]=useState();
  
  
  const handleIndiceEliminar = async () => {
    console.log(product);
    if(product){
      console.log(product);

      const result = await eliminarProduct(product.id);
      if (result) {
        console.log(result);
      }

    
    }
  };

    
  return (
    <>

      <h2>Eliminar Produtos</h2>
      <MySelect
        selectedValue={product?.id ?? "" }
        onChange={(event) => {
          setProduct(
            products.filter((p => p.id === event.target.value))
           
          );
          console.log(event.target.value)
          console.log("contexto",products)
          console.log(product);
         
    
        }}
        values={products}
      />
      <Button variant="danger" onClick={handleIndiceEliminar}>Eliminar Produto</Button>


     </>
  );
};
export default EliminarProduto;

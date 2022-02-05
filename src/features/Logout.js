import React, { useContext } from "react";
import Logout from "./Logout";
import { Button } from "react-bootstrap";
import { IsLoggedInContext } from "../loggedin-context";




function App() {
  const {isloggedin,setIsLoggedIn}= useContext(IsLoggedInContext);
  function refreshPage() {
    
    setIsLoggedIn(false);
    sessionStorage.removeItem("token");
    window.location.reload(false);
  }

  return (
      <>
    <h2>Pronto para Sair</h2>
    <p>Clique no botão abaixo</p>
    <div>
      <Button variant="primary" onClick={refreshPage}>LOGOUT</Button>
    </div>
    </>
  );
}

export default App;

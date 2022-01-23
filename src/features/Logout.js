import React from "react";
import Logout from "./Logout";
import { Button } from "react-bootstrap";




function App() {
  function refreshPage() {
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

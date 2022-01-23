import React from 'react';
import Logout from "./Logout";

function App() {
  
  function refreshPage() {
    window.location.reload(false);
  }
  
  return (
    <div>
      <button onClick={refreshPage}>Logout</button>
    </div>
  );
}

export default App;


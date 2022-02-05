const url = process.env.REACT_APP_URL;

const makeRequest = async (url, method = "GET" , body = null) => {
  const token = sessionStorage.getItem("token");
  //console.log(token);
  const options = {
    method: method,
    headers: {
      "Content-Type": "application/json",
      "Authorization": "Bearer " + token,   
    },
    body: JSON.stringify(body),
  };

  
  if (method === "GET"  ) {
    delete options.body;
  }
  try {
    const response = await fetch(url, options);
    console.log(response);
    const text = await response.text();
    if (!response.ok) {
      throw new Error("Could not fetch");
    }
    try {
      const json = JSON.parse(text);
      return json;
    } catch (err) {
      return text;
    }
  } catch (err) {
    alert(err.message);
  }
};

const requests = {
  listProducts: async () => {
    return makeRequest(`${url}produto`,"GET");
  },
  //criar utilizador
  createUser: async (user) => {
    return makeRequest(`${url}conta/registar`, "POST", user);
  },
  //criar login
  loginUser: async (user) => {
    return makeRequest(`${url}conta/login`, "POST", user);
  },
  //atualizar utilizador
  updateUser: async (id, user) => {
    return makeRequest(`${url}/${id}`, "PUT", user);
  },
  //apagar produto
  eliminarProduct: async (id) => {
    return makeRequest(`${url}produto/${id}`, "DELETE");
  },
  //criar produto
  createProdut: async (produto) => {
    console.log(makeRequest.options)
  return makeRequest(`${url}produto`, "POST", produto);
   },
 //atualizar Produtos
 updateProdut: async (produto) => {
  console.log(makeRequest.options)
  return makeRequest(`${url}produto/${produto.id}`, "PUT",produto);
 },
  //Criar Encomenda
  createEncomenda: async (encomenda) => {
    console.log(makeRequest.options)
    return makeRequest(`${url}encomenda`, "POST",encomenda);
   },
   
};

export default requests;

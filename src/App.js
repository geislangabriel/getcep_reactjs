import { useState } from 'react';
import { AiOutlineSearch } from "react-icons/ai";
import './styles.css';

import api from "./services/api";

function App() {
 
 const [input, setInput] = useState('')
 const [cep, setCEP] = useState({});


 async function handleSearch(){
  // 58832000/json/

  if(input === ''){
    alert("CEP inválido")
  }

  try{
    const response = await api.get(`${input}/json`)
    setCEP(response.data)
    setInput("");

  }catch{
    alert("Digite um CEP válido")
    setInput("")
  }
  
 }
 
  return (
    <div className="container">
      <h1 className="title">BUSCADOR CEP</h1>

      <div className="containerInput">
        <input 
        typeof="TEXT"
        placeholder="Digite seu CEP aqui..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
        />

        <button className="ButtonSearch" onClick={handleSearch}>
          <AiOutlineSearch size={25} color="#000"/>
        </button>
      </div>
      
      {Object.keys(cep).length > 0 && (
        <main className="Main">
          <h2> {cep.cep}</h2>
          
          <span> `{cep.logradouro}</span>
          <span>Complemento: {cep.complemento}</span>
          <span>{cep.bairro}</span>
          <span>{cep.localidade} - {cep.uf}</span>

        </main>
      )}  

    </div>
  );
}

export default App;

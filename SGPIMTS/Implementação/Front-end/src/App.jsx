import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [clientes, setClientes] = useState([]);

  useEffect(() => {
    const fetchClientes = async () => {
      try {
        const response = await fetch('http://localhost:5000/clientes');
        const data = await response.json();
        setClientes(data);
      } catch (error) {
        setError(error);
      }
    };
    fetchClientes();
  }, []);

  return (
    <div>
      <h1>Clientes</h1>
            <table>
              <tr>
                <th>Nome:</th>
                <th>Email:</th>
                <th>Telefone:</th>
                <th>Codigo do sistema:</th>
              </tr>
              {clientes.map(cliente => (
              <tr>
                <td>{cliente.nomeCliente}</td>
                <td>{cliente.emailCliente}</td>
                <td>{cliente.telefoneCliente}</td>
                <td>{cliente.codigoSistema}</td>
              </tr> 
              ))}
        </table>
    </div>
  );
}

export default App;

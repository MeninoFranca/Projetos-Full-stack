import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [clientes, setClientes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

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
      <ul>
        {clientes.map(cliente => (
          <li key={cliente.id}>
            <strong>Nome:</strong> {cliente.nomeCliente} <br />
            <strong>Email:</strong> {cliente.emailCliente} <br />
            <strong>Telefone:</strong> {cliente.telefoneCliente} <br />
            <strong>Código Sistema:</strong> {cliente.codigoSistema}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;

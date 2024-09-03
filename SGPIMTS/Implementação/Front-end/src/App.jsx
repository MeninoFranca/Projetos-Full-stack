import React, { useState, useEffect } from "react";
import TableSelect from "./components/TableSelect";
import DataTable from "./components/DataTable";
import "./App.css";

const App = () => {
  const [data, setData] = useState([]);
  const [selecaotable, setSelecaoTable] = useState("clientes");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`http://localhost:5000/${selecaotable}`);
        if (!response.ok){
          console.log("Erro na requisição");
        }
        const jsonData = await response.json();
        setData(jsonData);
      } catch (error) {
        console.error("Erro ao buscar dados:", error);
      }
    };
    fetchData();
  }, [selecaotable]);

  return (
    <div>
      <h1>Tabelas</h1>
      <TableSelect
        selecaotable={selecaotable}
        mudancatable={ (e) => {
          setSelecaoTable(e.target.value)
        }}
      />
      < DataTable 
        data={data}
        selecaotable={selecaotable} 
      />
    </div>
  );
};

export default App;

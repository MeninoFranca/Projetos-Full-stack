import React, { useState, useEffect } from "react";
import TableSelect from "./components/TableSelect";
import DataTable from "./components/DataTable";
import "./App.css";

const App = () => {
  const [data, setData] = useState([]);
  const [selectedTable, setSelectedTable] = useState("clientes");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`http://localhost:5000/${selectedTable}`);
        if (!response.ok) throw new Error("Erro na requisição");
        const jsonData = await response.json();
        setData(jsonData);
      } catch (error) {
        console.error("Erro ao buscar dados:", error);
      }
    };

    fetchData();
  }, [selectedTable]);

  return (
    <div>
      <h1>Tabelas</h1>
      <TableSelect
        selectedTable={selectedTable}
        onTableChange={ (e) => {
          setSelectedTable(e.target.value)
        }}
      />
      < DataTable data={data}
        selectedTable={selectedTable} 
      />
    </div>
  );
};

export default App;

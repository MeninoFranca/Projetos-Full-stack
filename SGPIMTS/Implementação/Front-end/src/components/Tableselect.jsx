import React from 'react';

const TableSelect = ({ selectedTable, onTableChange }) => {
  return (
    <select value={selectedTable} onChange={onTableChange}>
      <option value="clientes">Clientes</option>
      <option value="sistemas">Sistemas</option>
      <option value="tipo_sistema">Tipo de Sistema</option>
    </select>
  );
};

export default TableSelect;

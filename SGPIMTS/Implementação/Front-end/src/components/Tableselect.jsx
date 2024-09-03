import React from 'react';

const TableSelect = ({ selecaotable, mudancatable }) => {
  return (
    <select value={selecaotable} onChange={mudancatable}>
      <option value="clientes">Clientes</option>
      <option value="sistemas">Sistemas</option>
      <option value="tipo_sistema">Tipo de Sistema</option>
    </select>
  );
};

export default TableSelect;

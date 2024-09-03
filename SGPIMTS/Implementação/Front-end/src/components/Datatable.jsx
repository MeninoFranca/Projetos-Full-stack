import React from 'react';

const DataTable = ({ data, selecaotable }) => {
  const renderTable = () => {
    switch (selecaotable) {
      case 'clientes':
        return (
          <table>
            <thead>
              <tr>
                <th>Nome</th>
                <th>Email</th>
                <th>Telefone</th>
                <th>Código do Sistema</th>
              </tr>
            </thead>
            <tbody>
              {data.map(cliente => (
                <tr key={cliente.id}>
                  <td>{cliente.nomeCliente}</td>
                  <td>{cliente.emailCliente}</td>
                  <td>{cliente.telefoneCliente}</td>
                  <td>{cliente.codigoSistema}</td>
                </tr>
              ))}
            </tbody>
          </table>
        );
      case 'sistemas':
        return (
          <table>
            <thead>
              <tr>
                <th>Nome do Sistema</th>
                <th>Código do Tipo de Sistema</th>
              </tr>
            </thead>
            <tbody>
              {data.map(sistema => (
                <tr key={sistema.nomeSistema}>
                  <td>{sistema.nomeSistema}</td>
                  <td>{sistema.codigoTipo_Sistema}</td>
                </tr>
              ))}
            </tbody>
          </table>
        );
      case 'tipo_sistema':
        return (
          <table>
            <thead>
              <tr>
                <th>Código do Tipo de Sistema</th>
                <th>Nome do Tipo de Sistema</th>
              </tr>
            </thead>
            <tbody>
              {data.map(tipo => (
                <tr key={tipo.codigoTipo_Sistema}>
                  <td>{tipo.codigoTipo_Sistema}</td>
                  <td>{tipo.nomeTipo_Sistema}</td>
                </tr>
              ))}
            </tbody>
          </table>
        );
      default:
        return null;
    }
  };

  return <>{renderTable()}</>;
};

export default DataTable;

import React from 'react';
import './Table.css';

interface TableProps {
  data: Array<{
    descricao: string;
    finalidade: string;
    tipoDeCompra: string;
    formaDePagamento: string;
    dataDeVencimento: string;
    valor: number;
    recebido: boolean;
    status: string;
  }>;
}

const Table: React.FC<TableProps> = ({ data }) => {
  return (
    <div className="table-container">
      <table>
        <thead>
          <tr>
            <th>Descrição</th>
            <th>Finalidade</th>
            <th>Tipo de Compra</th>
            <th>Forma de Pagamento</th>
            <th>Data de Vencimento</th>
            <th>Valor</th>
            <th>Recebido</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <td>{item.descricao}</td>
              <td>{item.finalidade}</td>
              <td>{item.tipoDeCompra}</td>
              <td>{item.formaDePagamento}</td>
              <td>{item.dataDeVencimento}</td>
              <td>{item.valor}</td>
              <td>{item.recebido ? 'Sim' : 'Não'}</td>
              <td>{item.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
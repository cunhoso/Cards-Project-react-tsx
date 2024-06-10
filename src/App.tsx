import React, { useState } from 'react';
import Card from './components/Card';
import Table from './components/Table';
import AddItemModal from './components/AddItemModal';
import './App.css';

interface TableItem {
  descricao: string;
  finalidade: string;
  tipoDeCompra: string;
  formaDePagamento: string;
  dataDeVencimento: string;
  valor: number;
  recebido: boolean;
  status: string;
}

const App: React.FC = () => {
  const [tableData, setTableData] = useState<TableItem[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const addItem = (item: TableItem) => {
    setTableData([...tableData, item]);
    closeModal(); 
  };

  // Calcular os valores para os cards
  const totalValue = tableData.reduce((acc, item) => acc + item.valor, 0);
  const receivedValue = tableData.reduce((acc, item) => (item.recebido ? acc + item.valor : acc), 0);
  const toReceiveValue = totalValue - receivedValue;

  return (
    <div className="App">
      <header className="App-header">
        <h1>Projetos Cards</h1>
        <button onClick={openModal}>Cadastrar</button>
      </header>
      <div className="cards-container">
        <Card title="Valor Total" value={totalValue} color="#428bca" />
        <Card title="Valor Recebido" value={receivedValue} color="#3c763d" />
        <Card title="Valor a Receber" value={toReceiveValue} color="#a94442" />
      </div>
      <AddItemModal isOpen={isModalOpen} onClose={closeModal} onSubmit={addItem} />
      <Table data={tableData} />
    </div>
  );
};

export default App;
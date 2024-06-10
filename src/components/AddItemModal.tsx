import React, { useState } from 'react';
import './AddItemModal.css';

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

interface AddItemModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (item: TableItem) => void;
}

const AddItemModal: React.FC<AddItemModalProps> = ({ isOpen, onClose, onSubmit }) => {
  const [newItem, setNewItem] = useState<TableItem>({
    descricao: '',
    finalidade: '',
    tipoDeCompra: '',
    formaDePagamento: '',
    dataDeVencimento: '',
    valor: 0,
    recebido: false,
    status: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setNewItem({ ...newItem, [name]: value });
  };

  const handleSubmit = () => {
    onSubmit(newItem);
    setNewItem({
      descricao: '',
      finalidade: '',
      tipoDeCompra: '',
      formaDePagamento: '',
      dataDeVencimento: '',
      valor: 0,
      recebido: false,
      status: ''
    });
    onClose();
  };

  return (
    <div className="modal-container" style={{ display: isOpen ? 'block' : 'none' }}>
      <div className="modal-content">
        <h2 className="modal-title">Cadastrar Receita</h2>
        <input
          className="modal-input"
          type="text"
          name="descricao"
          placeholder="Descrição"
          value={newItem.descricao}
          onChange={handleInputChange}
        />
        <input
          className="modal-input"
          type="text"
          name="finalidade"
          placeholder="Finalidade"
          value={newItem.finalidade}
          onChange={handleInputChange}
        />
        <input
          className="modal-input"
          type="text"
          name="tipoDeCompra"
          placeholder="Tipo de Compra"
          value={newItem.tipoDeCompra}
          onChange={handleInputChange}
        />
        <input
          className="modal-input"
          type="text"
          name="formaDePagamento"
          placeholder="Forma de Pagamento"
          value={newItem.formaDePagamento}
          onChange={handleInputChange}
        />
        <input
          className="modal-input"
          type="text"
          name="dataDeVencimento"
          placeholder="Data de Vencimento"
          value={newItem.dataDeVencimento}
          onChange={handleInputChange}
        />
        <input
          className="modal-input"
          type="number"
          name="valor"
          placeholder="Valor"
          value={newItem.valor.toString()}
          onChange={handleInputChange}
        />
        <label>
          Recebido:
          <input
            type="checkbox"
            name="recebido"
            checked={newItem.recebido}
            onChange={() => setNewItem({ ...newItem, recebido: !newItem.recebido })}
          />
        </label>
        <input
          className="modal-input"
          type="text"
          name="status"
          placeholder="Status"
          value={newItem.status}
          onChange={handleInputChange}
        />
        <div className="modal-buttons">
          <button className="modal-button" onClick={handleSubmit}>Adicionar Receita</button>
          <button onClick={onClose}>Cancelar</button>
        </div>
      </div>
    </div>
  );
};

export default AddItemModal;
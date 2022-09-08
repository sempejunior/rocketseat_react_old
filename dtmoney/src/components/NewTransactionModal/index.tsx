import Modal from "react-modal";
import { Container } from "./styles";

interface NewTransaciotionModal {
  isOpen: boolean;
  onRequestClose: () => void;
}

export function NewTransactionModal({
  isOpen,
  onRequestClose,
}: NewTransaciotionModal) {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      //overlayClassName is used to clear all styles on modal
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <Container>
        <h2>Cadastrar Transação</h2>
        <input placeholder="Título" />
        <input placeholder="Valor" />
        <input placeholder="Categoria" />
        <button type="submit">Cadastrar</button>
      </Container>
    </Modal>
  );
}

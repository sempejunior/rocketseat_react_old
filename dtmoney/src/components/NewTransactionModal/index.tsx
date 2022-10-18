import Modal from "react-modal";
import { Container, RadioBox, TransactionTypeContainer } from "./styles";
import incomeImg from "../../assets/income.svg";
import outcomeImg from "../../assets/outcome.svg";
import closeImg from "../../assets/close.svg";
import { useState } from "react";

interface NewTransaciotionModal {
  isOpen: boolean;
  onRequestClose: () => void;
}

export function NewTransactionModal({isOpen,  onRequestClose,}: NewTransaciotionModal) {

const [type, setType] = useState('deposit');


  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      //overlayClassName is used to clear all styles on modal
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <button
        type="button"
        onClick={onRequestClose}
        className="react-modal-close"
      >
        <img src={closeImg} alt="Fechar Modal" />
      </button>

      <Container>
        <h2>Cadastrar Transação</h2>
        <input placeholder="Título" />
        <input placeholder="Valor" />

        <TransactionTypeContainer>

          <RadioBox
            type="button"
            onClick={()=> {setType('deposit')}}
            isActive= {type==='deposit'}
          >
            <img src = {incomeImg} alt="Entrada"/>
            <span>Entrada</span>
          </RadioBox>

          <RadioBox
            type="button"
            onClick={()=> {setType('withDraw')}}
            isActive= {type==='withDraw'}
          >
            <img src = {outcomeImg} alt="Saida"/>
            <span>Saída</span>
          </RadioBox>
        </TransactionTypeContainer>


        <input placeholder="Categoria" />
        <button type="submit">Cadastrar</button>
      </Container>
    </Modal>
  );
}
